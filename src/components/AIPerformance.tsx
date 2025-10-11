import React from 'react';
import { 
  Brain, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  Activity,
  Zap,
  BarChart3,
  Cpu,
  Database
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area, ScatterChart, Scatter } from 'recharts';

const AIPerformance: React.FC = () => {
  // Mock data for demonstration
  const responseTimeData = [
    { time: '00:00', avgResponse: 120, p95Response: 180, p99Response: 250 },
    { time: '04:00', avgResponse: 95, p95Response: 140, p99Response: 200 },
    { time: '08:00', avgResponse: 110, p95Response: 160, p99Response: 220 },
    { time: '12:00', avgResponse: 140, p95Response: 200, p99Response: 280 },
    { time: '16:00', avgResponse: 125, p95Response: 180, p99Response: 240 },
    { time: '20:00', avgResponse: 130, p95Response: 190, p99Response: 260 },
  ];

  const accuracyData = [
    { date: '2024-01-01', accuracy: 89.2, confidence: 85.5 },
    { date: '2024-01-02', accuracy: 91.1, confidence: 87.2 },
    { date: '2024-01-03', accuracy: 90.8, confidence: 86.8 },
    { date: '2024-01-04', accuracy: 92.3, confidence: 88.1 },
    { date: '2024-01-05', accuracy: 91.7, confidence: 87.9 },
    { date: '2024-01-06', accuracy: 93.1, confidence: 89.3 },
  ];

  const apiUsageData = [
    { hour: '00:00', requests: 45, errors: 2 },
    { hour: '04:00', requests: 32, errors: 1 },
    { hour: '08:00', requests: 78, errors: 3 },
    { hour: '12:00', requests: 156, errors: 8 },
    { hour: '16:00', requests: 134, errors: 5 },
    { hour: '20:00', requests: 98, errors: 4 },
  ];

  const modelPerformanceData = [
    { model: 'Gemini Pro', accuracy: 94.2, latency: 120, cost: 0.002 },
    { model: 'Gemini Ultra', accuracy: 96.8, latency: 180, cost: 0.005 },
    { model: 'GPT-4', accuracy: 93.5, latency: 200, cost: 0.008 },
    { model: 'Claude-3', accuracy: 92.1, latency: 150, cost: 0.006 },
  ];

  const errorRateData = [
    { category: 'API Timeout', count: 12, percentage: 35.3 },
    { category: 'Invalid Input', count: 8, percentage: 23.5 },
    { category: 'Rate Limit', count: 6, percentage: 17.6 },
    { category: 'Model Error', count: 4, percentage: 11.8 },
    { category: 'Network Error', count: 4, percentage: 11.8 },
  ];

  const stats = [
    {
      title: 'Average Response Time',
      value: '125ms',
      change: '-8.2%',
      changeType: 'positive',
      icon: Clock,
      color: 'bg-blue-500'
    },
    {
      title: 'Success Rate',
      value: '98.7%',
      change: '+1.2%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'bg-green-500'
    },
    {
      title: 'AI Accuracy',
      value: '94.2%',
      change: '+2.1%',
      changeType: 'positive',
      icon: Brain,
      color: 'bg-purple-500'
    },
    {
      title: 'Daily Requests',
      value: '2,847',
      change: '+15.3%',
      changeType: 'positive',
      icon: Activity,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className={`text-sm ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} from last week
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Response Time Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Response Time Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={responseTimeData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="avgResponse" stroke="#3B82F6" strokeWidth={2} name="Average" />
              <Line type="monotone" dataKey="p95Response" stroke="#10B981" strokeWidth={2} name="P95" />
              <Line type="monotone" dataKey="p99Response" stroke="#F59E0B" strokeWidth={2} name="P99" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Accuracy & Confidence */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Accuracy & Confidence Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="accuracy" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} name="Accuracy %" />
              <Area type="monotone" dataKey="confidence" stackId="2" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} name="Confidence %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* API Usage & Error Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API Usage */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            API Usage & Errors
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={apiUsageData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="hour" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="requests" fill="#3B82F6" name="Requests" />
              <Bar yAxisId="right" dataKey="errors" fill="#EF4444" name="Errors" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Error Rate Breakdown */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Error Rate Breakdown
          </h3>
          <div className="space-y-4">
            {errorRateData.map((error, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {error.category}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    {error.count}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {error.percentage}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Model Performance Comparison */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          AI Model Performance Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Accuracy
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Latency (ms)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Cost per Request
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {modelPerformanceData.map((model, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {model.model}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {model.accuracy}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {model.latency}ms
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    ${model.cost}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      model.model === 'Gemini Pro' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}>
                      {model.model === 'Gemini Pro' ? 'Active' : 'Available'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* System Health & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Health */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            System Health
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Cpu className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  CPU Usage
                </span>
              </div>
              <span className="text-sm font-bold text-green-600 dark:text-green-400">
                45%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Database className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Memory Usage
                </span>
              </div>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                62%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  API Rate Limit
                </span>
              </div>
              <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">
                78%
              </span>
            </div>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Alerts
          </h3>
          <div className="space-y-3">
            {[
              { type: 'warning', message: 'High response time detected', time: '2 min ago' },
              { type: 'info', message: 'Model accuracy improved by 2.1%', time: '1 hour ago' },
              { type: 'success', message: 'System optimization completed', time: '3 hours ago' },
              { type: 'error', message: 'API rate limit approaching', time: '5 hours ago' },
            ].map((alert, index) => (
              <div key={index} className={`flex items-start space-x-3 p-3 rounded-lg ${
                alert.type === 'error' ? 'bg-red-50 dark:bg-red-900/20' :
                alert.type === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/20' :
                alert.type === 'success' ? 'bg-green-50 dark:bg-green-900/20' :
                'bg-blue-50 dark:bg-blue-900/20'
              }`}>
                <AlertCircle className={`h-4 w-4 mt-0.5 ${
                  alert.type === 'error' ? 'text-red-500' :
                  alert.type === 'warning' ? 'text-yellow-500' :
                  alert.type === 'success' ? 'text-green-500' :
                  'text-blue-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {alert.message}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {alert.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPerformance;
