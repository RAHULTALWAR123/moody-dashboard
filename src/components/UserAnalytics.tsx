// src/components/UserAnalytics.tsx
import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Users, UserCheck, Calendar, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserAnalytics = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      const usersCol = collection(db, "users");
      const userSnapshot = await getDocs(usersCol);
      const userList = userSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  // Toggle user active status
  const toggleActive = async (userId: string, currentStatus: boolean) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, { isActive: !currentStatus });

      // Update local state instantly
      setUsers((prev) =>
        prev.map((user) =>
          user.id === userId ? { ...user, isActive: !currentStatus } : user
        )
      );
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  // Stats cards
  const stats = [
    {
      title: "Total Users",
      value: users.length,
      icon: Users,
      color: "from-indigo-400 to-indigo-600",
    },
    {
      title: "Active Users",
      value: users.filter((u) => u.isActive).length,
      icon: UserCheck,
      color: "from-green-400 to-green-600",
    },
    {
      title: "Trial Users",
      value: users.filter((u) => u.subscriptionStatus === "trial").length,
      icon: Calendar,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Referral Earnings",
      value: `$${users.reduce((sum, u) => sum + (u.referralEarnings || 0), 0)}`,
      icon: TrendingUp,
      color: "from-pink-400 to-pink-600",
    },
  ];

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400 text-lg">Loading Users...</p>
      </div>
    );

  return (
    <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8">User Analytics</h1>

      {/* Horizontal Scroll Stats */}
      <div className="flex space-x-6 overflow-x-auto pb-4 mb-12">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className={`flex-shrink-0 w-64 p-6 rounded-3xl bg-gradient-to-br ${stat.color} shadow-lg transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-3xl font-bold">{stat.value}</p>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm opacity-90">{stat.title}</p>
            </div>
          );
        })}
      </div>

      {/* User Growth Chart */}
      <div className="mb-12 p-6 rounded-3xl bg-white/10 backdrop-blur-lg shadow-xl">
        <h2 className="text-lg font-semibold mb-4">User Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={users.map((u, idx) => ({ month: `M${idx + 1}`, users: idx + 1 }))}
          >
            <CartesianGrid strokeDasharray="4 4" stroke="#ffffff33" />
            <XAxis dataKey="month" stroke="#ffffffaa" />
            <YAxis stroke="#ffffffaa" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255,255,255,0.9)",
                borderRadius: "12px",
                border: "none",
                color: "#000",
              }}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ r: 5, fill: "#6366F1" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* User List */}
      <div className="grid lg:grid-cols-2 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-5 bg-white/10 backdrop-blur-md rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            {/* Left: Avatar + Name */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-lg text-white shadow">
                {user.firstName[0]}
              </div>
              <div>
                <p className="font-semibold text-lg">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-sm opacity-80">{user.email}</p>
              </div>
            </div>

            {/* Right: Status, Plan, Spotify, Toggle Button */}
            <div className="text-right space-y-2 flex flex-col items-end">
              <p
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  user.isActive
                    ? "bg-green-500/30 text-green-200"
                    : "bg-red-500/30 text-red-200"
                }`}
              >
                {user.isActive ? "Active" : "Inactive"}
              </p>
              <p className="text-sm opacity-80">
                {user.planType} ({user.subscriptionStatus})
              </p>
              <p className="text-sm opacity-80">
                Spotify: {user.spotifyDisplayName}
              </p>

              <button
                onClick={() => toggleActive(user.id, user.isActive)}
                className={`mt-2 px-4 py-1 rounded-xl text-sm font-medium transition-colors duration-200 ${
                  user.isActive
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              >
                {user.isActive ? "Deactivate" : "Activate"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAnalytics;
