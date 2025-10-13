import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Brain, 
  BarChart3, 
  Menu,
  X,
  LogOut
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useUserStore } from '../stores/useUserStore';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  setActiveTab, 
  isOpen, 
  setIsOpen 
}) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'User Analytics', icon: Users },
    { id: 'mood', label: 'Mood Analysis', icon: Brain },
    { id: 'referrals', label: 'Referral System', icon: BarChart3 },
  ];

  const {removeUser} = useUserStore();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 h-full z-50 transition-all duration-300 ease-in-out flex flex-col justify-between",
        "bg-[#0B0B1F]/90 border-r border-white/10 backdrop-blur-xl",
        isOpen ? "sm:w-64 w-96" : "w-20"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          {isOpen && (
            <div className="flex items-center space-x-3">
              <div className="h-7 w-7 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/30" />
              <span className="text-lg font-bold bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300 bg-clip-text text-transparent">
                Moody Admin
              </span>
            </div>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="h-5 w-5 text-white/80" /> : <Menu className="h-5 w-5 text-white/80" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative",
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-[0_4px_20px_rgba(139,92,246,0.3)]"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                )}
              >
                <Icon className={cn("h-5 w-5 flex-shrink-0", isActive ? "text-white" : "text-white/70")} />
                {isOpen && <span className="font-medium text-sm">{item.label}</span>}

                {/* Active glow accent */}
                {isActive && (
                  <span className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        {isOpen && (
          <div className="p-4">
            <div onClick={() => removeUser()} className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl py-2 flex justify-center items-center gap-5 shadow-lg shadow-purple-500/30">
              <LogOut/>
              <p className="text-xs font-semibold text-white uppercase">Logout</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
