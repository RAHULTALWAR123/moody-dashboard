import React from "react";
import {
  Users,
  UserPlus,
  Share2,
  Clock,
  Music,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

const Dashboard: React.FC = () => {
  const referralData = [
    { week: "W1", referrals: 120 },
    { week: "W2", referrals: 180 },
    { week: "W3", referrals: 260 },
    { week: "W4", referrals: 320 },
  ];

  const moodTrends = [
    { day: "Mon", Happy: 40, Sad: 20, Energetic: 30, Relaxed: 10 },
    { day: "Tue", Happy: 35, Sad: 25, Energetic: 20, Relaxed: 20 },
    { day: "Wed", Happy: 50, Sad: 15, Energetic: 25, Relaxed: 10 },
    { day: "Thu", Happy: 45, Sad: 20, Energetic: 25, Relaxed: 10 },
    { day: "Fri", Happy: 55, Sad: 10, Energetic: 25, Relaxed: 10 },
    { day: "Sat", Happy: 60, Sad: 15, Energetic: 15, Relaxed: 10 },
    { day: "Sun", Happy: 50, Sad: 20, Energetic: 20, Relaxed: 10 },
  ];

  const stats = [
    { title: "Total Users", value: "5,247", icon: Users, gradient: "from-blue-500 to-purple-600" },
    { title: "New Signups", value: "134", icon: UserPlus, gradient: "from-green-400 to-emerald-600" },
    { title: "Active Referrals", value: "892", icon: Share2, gradient: "from-pink-500 to-rose-600" },
    { title: "Avg Listening", value: "42m", icon: Clock, gradient: "from-orange-400 to-yellow-500" },
  ];

  const recentActivity = [
    { user: "Alex", action: "created a playlist", time: "2m ago" },
    { user: "Priya", action: "joined via referral", time: "5m ago" },
    { user: "Sam", action: "listened 3h of music", time: "15m ago" },
    { user: "Megha", action: "added 10 songs", time: "30m ago" },
  ];

  const topSongs = [
    { title: "Blinding Lights", artist: "The Weeknd", plays: "12.4k" },
    { title: "Shape of You", artist: "Ed Sheeran", plays: "9.7k" },
    { title: "Calm Down", artist: "Rema", plays: "8.3k" },
    { title: "Stay", artist: "Justin Bieber", plays: "7.9k" },
  ];

  return (
    <div className="space-y-6">
      {/* Top Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className={`rounded-lg p-4 flex items-center justify-between text-white bg-gradient-to-r ${stat.gradient}`}>
              <div>
                <p className="text-xs opacity-80">{stat.title}</p>
                <p className="text-xl font-bold">{stat.value}</p>
              </div>
              <Icon className="h-6 w-6 opacity-90" />
            </div>
          );
        })}
      </div>

      {/* Middle Row: Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Referral Growth */}
        <div className="bg-[#0E0E24] rounded-xl p-5 shadow-md border border-[#1E1E3A]">
          <h3 className="text-white text-sm font-semibold mb-3">Referral Growth</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={referralData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a45" />
              <XAxis dataKey="week" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line type="monotone" dataKey="referrals" stroke="#a855f7" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Mood Trends */}
        <div className="bg-[#0E0E24] rounded-xl p-5 shadow-md border border-[#1E1E3A]">
          <h3 className="text-white text-sm font-semibold mb-3">Mood Trends</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={moodTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a45" />
              <XAxis dataKey="day" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar dataKey="Happy" stackId="a" fill="#10B981" />
              <Bar dataKey="Sad" stackId="a" fill="#3B82F6" />
              <Bar dataKey="Energetic" stackId="a" fill="#F59E0B" />
              <Bar dataKey="Relaxed" stackId="a" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-[#0E0E24] rounded-xl p-5 shadow-md border border-[#1E1E3A]">
          <h3 className="text-white text-sm font-semibold mb-4">Recent User Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex justify-between items-center text-gray-300 text-sm bg-[#1A1A34] px-3 py-2 rounded-md hover:bg-[#232347] transition">
                <span><span className="text-white font-medium">{item.user}</span> {item.action}</span>
                <span className="text-xs opacity-70">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Songs */}
        <div className="bg-[#0E0E24] rounded-xl p-5 shadow-md border border-[#1E1E3A]">
          <h3 className="text-white text-sm font-semibold mb-4">Top Songs</h3>
          <div className="space-y-3">
            {topSongs.map((song, i) => (
              <div key={i} className="flex justify-between items-center text-gray-300 text-sm bg-[#1A1A34] px-3 py-2 rounded-md hover:bg-[#232347] transition">
                <div>
                  <p className="text-white font-medium">{song.title}</p>
                  <p className="text-xs opacity-70">{song.artist}</p>
                </div>
                <span className="text-xs text-purple-400">{song.plays} plays</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
