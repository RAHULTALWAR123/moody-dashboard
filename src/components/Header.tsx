import React from 'react';
import { 
  // Bell, 
  // Settings, 
  User,
  // Moon,
  // Sun
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
}

const Header: React.FC<HeaderProps> = ({ activeTab }) => {
  // const [darkMode, setDarkMode] = React.useState(false);
  // const {removeUser} = useUserStore();

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard Overview';
      case 'users': return 'User Analytics';
      case 'mood': return 'Mood Analysis';
      case 'referrals': return 'Referral System';
      default: return 'Dashboard';
    }
  };

  return (
    <header className="w-full bg-gradient-to-r from-[#0B0B1F]/80 via-[#1C1C3C]/70 to-[#2A2A4D]/80 backdrop-blur-xl border-b border-white/10 z-30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left - Page Title */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300 bg-clip-text text-transparent">
            {getPageTitle()}
          </h1>
          <p className="text-sm text-white/70 mt-1">
            Overview & insights of {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </p>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
         

          {/* Notifications */}
          {/* <button className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-shadow shadow-sm hover:shadow-purple-500/30">
            <Bell className="w-5 h-5" />
          </button> */}

          {/* Settings */}
          {/* <button className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-shadow shadow-sm hover:shadow-indigo-500/30">
            <Settings className="w-5 h-5" />
          </button> */}

          {/* Dark Mode Toggle */}
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all shadow-sm hover:shadow-pink-500/30"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button> */}

          {/* User Profile */}
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-2xl transition-all shadow-sm hover:shadow-purple-500/20">
            <div className="px-5 py-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center gap-3 text-white font-bold shadow-lg">
              <User className="w-4 h-4 font-bold" />
              Welcome, Admin
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
