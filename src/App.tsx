import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import UserAnalytics from './components/UserAnalytics';
import MoodAnalysis from './components/MoodAnalysis';
import AIPerformance from './components/AIPerformance';
import Referral from './components/Referral';
import { cn } from './lib/utils';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UserAnalytics />;
      case 'mood':
        return <MoodAnalysis />;
      case 'ai':
        return <AIPerformance />;
      case 'referrals':
        return <Referral />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      <div className={cn(
        "transition-all duration-300 ease-in-out",
        sidebarOpen ? "ml-56" : "ml-16"
      )}>
        <Header 
          activeTab={activeTab}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="p-4">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
