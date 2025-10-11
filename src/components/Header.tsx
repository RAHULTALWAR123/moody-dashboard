import React from 'react';
import { 
  Bell, 
  Search, 
  Settings, 
  User,
  Moon,
  Sun
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab }) => {
  const [darkMode, setDarkMode] = React.useState(false);

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard':
        return 'Dashboard Overview';
      case 'users':
        return 'User Analytics';
      case 'mood':
        return 'Mood Analysis';
      case 'ai':
        return 'AI Performance';
      case 'referrals':
        return 'Referrals';
      default:
        return 'Dashboard';
    }
  };

  return (
    <header className="bg-white px-4 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-medium text-gray-900 dark:text-white">
              {getPageTitle()}
            </h1>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-2">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              ) : (
                <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              )}
            </button>

            {/* User profile */}
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
                <User className="h-3 w-3 text-white dark:text-gray-900" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm text-gray-900 dark:text-white">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
