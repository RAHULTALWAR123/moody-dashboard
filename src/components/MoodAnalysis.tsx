// src/components/MoodAnalysis.tsx
import React from "react";
import { Brain, Heart, Tag, MessageSquare } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const MoodAnalysis: React.FC = () => {
  // Mock data
  const moodTrendsData = [
    { time: "00:00", happy: 15, sad: 25, energetic: 10, relaxed: 50 },
    { time: "04:00", happy: 10, sad: 30, energetic: 5, relaxed: 55 },
    { time: "08:00", happy: 35, sad: 15, energetic: 30, relaxed: 20 },
    { time: "12:00", happy: 40, sad: 10, energetic: 35, relaxed: 15 },
    { time: "16:00", happy: 30, sad: 20, energetic: 25, relaxed: 25 },
    { time: "20:00", happy: 25, sad: 25, energetic: 20, relaxed: 30 },
  ];

  const moodIntensityData = [
    { intensity: "1-2", count: 120 },
    { intensity: "3-4", count: 380 },
    { intensity: "5-6", count: 650 },
    { intensity: "7-8", count: 720 },
    { intensity: "9-10", count: 430 },
  ];

  const contextTagData = [
    { tag: "Workout", usage: 450, color: "#10B981" },
    { tag: "Study", usage: 380, color: "#3B82F6" },
    { tag: "Party", usage: 320, color: "#F59E0B" },
    { tag: "Chill", usage: 680, color: "#8B5CF6" },
    { tag: "Work", usage: 420, color: "#EF4444" },
    { tag: "Travel", usage: 280, color: "#06B6D4" },
  ];

  const moodRadarData = [
    { mood: "Happy", value: 75, fullMark: 100 },
    { mood: "Sad", value: 45, fullMark: 100 },
    { mood: "Energetic", value: 65, fullMark: 100 },
    { mood: "Relaxed", value: 80, fullMark: 100 },
    { mood: "Angry", value: 25, fullMark: 100 },
    { mood: "Anxious", value: 35, fullMark: 100 },
  ];

const stats = [
  {
    title: "Total Mood Inputs",
    value: "42,156",
    icon: Brain,
    color: "from-indigo-400/40 to-indigo-600/60",
    glow: "shadow-[0_0_25px_rgba(139,92,246,0.4)]", // matches indigo/purple gradient
  },
  {
    title: "Avg. Mood Intensity",
    value: "6.8/10",
    icon: Heart,
    color: "from-rose-400/40 to-rose-600/60",
    glow: "shadow-[0_0_25px_rgba(244,114,182,0.4)]", // rose/pinkish glow
  },
  {
    title: "Context Tags Used",
    value: "2,530",
    icon: Tag,
    color: "from-green-400/40 to-emerald-600/60",
    glow: "shadow-[0_0_25px_rgba(16,185,129,0.4)]", // green/emerald glow
  },
  {
    title: "Text Descriptions",
    value: "8,420",
    icon: MessageSquare,
    color: "from-blue-400/40 to-sky-600/60",
    glow: "shadow-[0_0_25px_rgba(59,130,246,0.4)]", // blue/sky glow
  },
];


  return (
    <div className="min-h-screen p-8  text-white space-y-10">
      {/* Title */}
      

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

      {/* Charts Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mood Trends Line Chart */}
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 shadow-xl hover:shadow-indigo-700/20 transition">
          <h2 className="text-lg font-semibold mb-4">📈 Mood Trends</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={moodTrendsData}>
              <CartesianGrid stroke="#ffffff20" strokeDasharray="3 3" />
              <XAxis dataKey="time" stroke="#aaaaaa" />
              <YAxis stroke="#aaaaaa" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30,30,50,0.95)",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                }}
              />
              <Line type="monotone" dataKey="happy" stroke="#8B5CF6" strokeWidth={3} dot={{ r: 5, fill: "#A78BFA" }} />
              <Line type="monotone" dataKey="sad" stroke="#3B82F6" strokeWidth={3} dot={{ r: 5, fill: "#60A5FA" }} />
              <Line type="monotone" dataKey="energetic" stroke="#F59E0B" strokeWidth={3} dot={{ r: 5, fill: "#FBBF24" }} />
              <Line type="monotone" dataKey="relaxed" stroke="#10B981" strokeWidth={3} dot={{ r: 5, fill: "#34D399" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Mood Intensity Bar Chart */}
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 shadow-xl hover:shadow-indigo-700/20 transition">
          <h2 className="text-lg font-semibold mb-4">💥 Mood Intensity Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={moodIntensityData}>
              <CartesianGrid stroke="#ffffff20" strokeDasharray="3 3" />
              <XAxis dataKey="intensity" stroke="#aaaaaa" />
              <YAxis stroke="#aaaaaa" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30,30,50,0.95)",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                }}
              />
              <Bar dataKey="count" fill="#8B5CF6" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie & Radar Charts */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Context Tags Pie */}
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 shadow-xl hover:shadow-indigo-700/20 transition">
          <h2 className="text-lg font-semibold mb-4">🏷️ Context Tag Usage</h2>
          <ResponsiveContainer width="100%" height={250}>
            <RechartsPieChart>
              <Pie data={contextTagData} dataKey="usage" nameKey="tag" innerRadius={50} outerRadius={80} paddingAngle={3}>
                {contextTagData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30,30,50,0.95)",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                }}
              />
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>

        {/* Mood Radar */}
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 shadow-xl hover:shadow-indigo-700/20 transition">
          <h2 className="text-lg font-semibold mb-4">🧠 Mood Radar</h2>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={moodRadarData}>
              <PolarGrid stroke="#ffffff20" />
              <PolarAngleAxis dataKey="mood" stroke="#aaaaaa" />
              <PolarRadiusAxis stroke="#aaaaaa" />
              <Radar name="Moods" dataKey="value" stroke="#8B5CF6" fill="#A78BFA" fillOpacity={0.6} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30,30,50,0.95)",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MoodAnalysis;
