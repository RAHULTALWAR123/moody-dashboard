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
    {
      title: "Total Users",
      value: "5,247",
      icon: Users,
      gradient: "from-blue-500/50 via-indigo-500/40 to-purple-500/40",
      glow: "shadow-blue-500/30",
    },
    {
      title: "New Signups",
      value: "134",
      icon: UserPlus,
      gradient: "from-green-400/50 via-emerald-500/40 to-lime-500/40",
      glow: "shadow-green-500/30",
    },
    {
      title: "Active Referrals",
      value: "892",
      icon: Share2,
      gradient: "from-pink-500/50 via-rose-500/40 to-fuchsia-500/40",
      glow: "shadow-pink-500/30",
    },
    {
      title: "Avg Listening",
      value: "42m",
      icon: Clock,
      gradient: "from-orange-400/50 via-amber-500/40 to-yellow-500/40",
      glow: "shadow-orange-500/30",
    },
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
    <div className="relative min-h-screen overflow-hidden  text-white">
      {/* Background Glow / Aurora */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.12),transparent_70%)]" /> */}

      <div className="relative z-10 p-8 space-y-12">
        {/* Page Title */}
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`relative p-6 rounded-3xl bg-gradient-to-br ${stat.gradient} 
                backdrop-blur-2xl border border-white/10 ${stat.glow} hover:scale-[1.03] 
                transition-all duration-500 shadow-[0_8px_40px_rgba(0,0,0,0.25)]`}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <p className="text-sm uppercase tracking-wide text-white/70 font-medium">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {/* Referral Growth */}
          <div className="bg-white/5 rounded-3xl border border-white/10 backdrop-blur-2xl p-6 shadow-[0_4px_40px_rgba(99,102,241,0.15)]">
            <h3 className="flex items-center gap-2 mb-4 font-semibold text-lg text-purple-300">
              <Share2 className="w-5 h-5" /> Referral Growth
            </h3>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={referralData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" />
                <XAxis dataKey="week" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="referrals"
                  stroke="#C084FC"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#C084FC" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Mood Trends */}
          <div className="bg-white/5 rounded-3xl border border-white/10 backdrop-blur-2xl p-6 shadow-[0_4px_40px_rgba(236,72,153,0.15)]">
            <h3 className="flex items-center gap-2 mb-4 font-semibold text-lg text-pink-300">
              <Music className="w-5 h-5" /> Mood Trends
            </h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={moodTrends}>
                <CartesianGrid strokeDasharray="2 2" stroke="#ffffff15" />
                <XAxis dataKey="day" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                  }}
                />
                <Bar dataKey="Happy" stackId="a" fill="#10B981" />
                <Bar dataKey="Sad" stackId="a" fill="#3B82F6" />
                <Bar dataKey="Energetic" stackId="a" fill="#F59E0B" />
                <Bar dataKey="Relaxed" stackId="a" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity & Top Songs */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {/* Recent Activity */}
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-2xl shadow-[0_4px_40px_rgba(147,51,234,0.15)]">
            <h3 className="text-lg font-semibold text-indigo-300 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center px-4 py-3 rounded-2xl bg-white/10 border border-white/5 hover:bg-white/15 transition-all duration-300"
                >
                  <span className="text-sm">
                    <span className="font-semibold text-white">{item.user}</span>{" "}
                    <span className="text-white/70">{item.action}</span>
                  </span>
                  <span className="text-xs text-white/50">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Songs */}
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-2xl shadow-[0_4px_40px_rgba(236,72,153,0.15)]">
            <h3 className="text-lg font-semibold text-pink-300 mb-4">Top Songs</h3>
            <div className="space-y-3">
              {topSongs.map((song, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center px-4 py-3 rounded-2xl bg-white/10 border border-white/5 hover:bg-white/15 transition-all duration-300"
                >
                  <div>
                    <p className="font-semibold">{song.title}</p>
                    <p className="text-xs text-white/60">{song.artist}</p>
                  </div>
                  <span className="text-xs text-pink-400 font-medium">{song.plays} plays</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
