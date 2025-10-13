import React, { useState } from "react";
import { User, Lock } from "lucide-react";
import { useUserStore } from "../stores/useUserStore"; // ✅ import store

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {setUser} = useUserStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Mock credentials
    const validEmail = "Admin@123";
    const validPassword = "121@Admin";

    if (email === validEmail && password === validPassword) {
      setUser({ email }); // ✅ Save user in Zustand
      setError("");
      console.log("✅ Login successful");
      alert("Welcome back, Admin!");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B0B1F] via-[#1C1C3C] to-[#2A2A4D] text-white">
      <div className="relative w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg shadow-purple-500/20">
        {/* Soft Glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-xl pointer-events-none"></div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300 bg-clip-text text-transparent relative z-10">
          Welcome Back
        </h2>
        <p className="text-center text-white/70 mb-8 relative z-10">
          Sign in to your account
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/20 transition-all duration-300"
            />
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20 transition-all duration-300"
            />
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
          </div>

          {/* Error message */}
          {error && (
            <p className="text-sm text-red-400 text-center">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 hover:brightness-110 transition-all duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
