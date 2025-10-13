// src/components/UserAnalytics.tsx
import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { Users, UserCheck, Calendar, TrendingUp, Sparkles } from "lucide-react";
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

  // Fetch users
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

  // Toggle active
  const toggleActive = async (userId: string, currentStatus: boolean) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, { isActive: !currentStatus });
      setUsers((prev) =>
        prev.map((u) =>
          u.id === userId ? { ...u, isActive: !currentStatus } : u
        )
      );
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  // Stats
  const stats = [
    {
      title: "Total Users",
      value: users.length,
      icon: Users,
      color: "from-indigo-500/30 to-purple-600/30",
      glow: "shadow-[0_0_25px_rgba(129,140,248,0.4)]",
    },
    {
      title: "Active Users",
      value: users.filter((u) => u.isActive).length,
      icon: UserCheck,
      color: "from-green-400/30 to-emerald-600/30",
      glow: "shadow-[0_0_25px_rgba(52,211,153,0.4)]",
    },
    {
      title: "Trial Users",
      value: users.filter((u) => u.subscriptionStatus === "trial").length,
      icon: Calendar,
      color: "from-yellow-400/30 to-amber-500/30",
      glow: "shadow-[0_0_25px_rgba(251,191,36,0.4)]",
    },
    {
      title: "Referral Earnings",
      value: `$${users.reduce((sum, u) => sum + (u.referralEarnings || 0), 0)}`,
      icon: TrendingUp,
      color: "from-pink-400/30 to-rose-600/30",
      glow: "shadow-[0_0_25px_rgba(244,114,182,0.4)]",
    },
  ];

 if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-white text-lg tracking-wide">
        <Sparkles className="mr-2 w-5 h-5 text-purple-400 animate-spin" />
        Loading Anaylatics...
      </div>
    );

  return (
    <div className="min-h-screen text-white p-10 space-y-12">
      {/* Header */}
      

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className={`relative p-6 rounded-3xl border border-white/10 bg-gradient-to-br ${stat.color} 
                backdrop-blur-2xl ${stat.glow} hover:scale-[1.04] hover:shadow-2xl transition-all duration-500`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-10 rounded-3xl pointer-events-none"></div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-3xl font-semibold drop-shadow-md">{stat.value}</p>
                <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-sm">
                  <Icon className="h-6 w-6 text-white/90" />
                </div>
              </div>
              <p className="text-sm text-white/70 tracking-wider uppercase font-medium">
                {stat.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* Chart */}
      <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl p-8 shadow-xl hover:shadow-indigo-700/30 transition-all duration-500">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
          📈 User Growth
        </h2>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart
            data={users.map((_, idx) => ({
              month: `M${idx + 1}`,
              users: idx + 1,
            }))}
          >
            <CartesianGrid strokeDasharray="4 4" stroke="#ffffff22" />
            <XAxis dataKey="month" stroke="#aaaaaa" />
            <YAxis stroke="#aaaaaa" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(20,20,40,0.95)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                backdropFilter: "blur(10px)",
              }}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#8B5CF6"
              strokeWidth={3}
              dot={{ r: 5, fill: "#A78BFA" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

{/* User Cards Section */}
<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
  {users.map((user) => (
    <div
      key={user.id}
      className="relative group rounded-3xl p-6 bg-white/5 border border-white/10 
                 backdrop-blur-2xl shadow-lg shadow-purple-500/20 
                 transition-all duration-500 hover:scale-[1.03] hover:shadow-purple-700/10 overflow-hidden"
    >
      {/* Gradient Glow Border */}
      <div className="absolute -inset-[1px] opacity-0 group-hover:opacity-100 
                      transition-opacity duration-700 rounded-3xl 
                      bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-lg pointer-events-none" />

      {/* Animated Top Glow Line */}
      <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />

      {/* User Info */}
      <div className="relative flex items-center gap-4 mb-5">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 
                        flex items-center justify-center text-xl font-semibold text-white 
                        shadow-md ring-2 ring-white/20 group-hover:ring-purple-400/40 transition-all duration-500">
          {user.firstName?.[0] || "U"}
        </div>
        {/* User Details */}
        <div>
          <p className="text-lg font-semibold tracking-wide text-white">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-sm text-white/60">{user.email}</p>
        </div>
      </div>

      {/* User Info Details */}
      <div className="relative flex flex-col space-y-3 text-sm text-white/80">
        <div className="flex justify-between items-center">
          <span className="text-white/60">Status</span>
          <span
            className={`px-3 py-0.5 rounded-full text-xs font-semibold transition-all ${
              user.isActive
                ? "bg-emerald-500/20 text-emerald-300"
                : "bg-rose-500/20 text-rose-300"
            }`}
          >
            {user.isActive ? "Active" : "Inactive"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-white/60">Plan</span>
          <span className="text-white font-medium">
            {user.planType || "—"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-white/60">Subscription</span>
          <span className="capitalize text-indigo-300 font-medium">
            {user.subscriptionStatus || "unknown"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-white/60">Spotify</span>
          <span className="text-white/90 font-medium">
            {user.spotifyDisplayName || "—"}
          </span>
        </div>
      </div>

      {/* Action Button */}
      <div className="relative mt-7">
        <button
          onClick={() => toggleActive(user.id, user.isActive)}
          className={`relative w-full py-2.5 rounded-xl font-medium text-sm shadow-lg overflow-hidden transition-all duration-500 
            ${
              user.isActive
                ? "bg-gradient-to-r from-rose-500 to-red-600 hover:brightness-110 text-white shadow-red-500/30"
                : "bg-gradient-to-r from-emerald-500 to-green-600 hover:brightness-110 text-white shadow-green-500/30"
            }`}
        >
          <span className="relative z-10">
            {user.isActive ? "Deactivate" : "Activate"}
          </span>

          {/* Glow Animation */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-md transition-opacity duration-700" />
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default UserAnalytics;
