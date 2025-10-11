import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Brain, 
  BarChart3, 
  Menu,
  Music,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

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
    { id: 'music', label: 'Music Control', icon: Music },
  ];

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
        "fixed left-0 top-0 h-full z-50 transition-all duration-300 ease-in-out",
        "bg-[#0E0E24] border-r border-[#1E1E3A]",
        isOpen ? "w-60" : "w-16"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-[#1E1E3A]">
          {isOpen && (
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm shadow-lg shadow-purple-500/30" />
              <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Moody Admin
              </span>
            </div>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded hover:bg-[#1E1E3A] transition-colors"
          >
            {isOpen ? <X className="h-5 w-5 text-gray-300" /> : <Menu className="h-5 w-5 text-gray-300" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-purple-500/40"
                    : "text-gray-400 hover:text-white hover:bg-[#1E1E3A]"
                )}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {isOpen && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        {isOpen && (
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2 text-center shadow-md shadow-purple-500/30">
              <p className="text-xs font-semibold text-white">Admin Panel</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
