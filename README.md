# Moodify Admin Dashboard

A comprehensive admin dashboard for Moodify, an AI-driven music recommendation mobile application that creates personalized Spotify playlists based on users' emotional states.

## 🚀 Features

### 📊 Dashboard Overview
- Real-time analytics and key performance indicators
- User growth trends and playlist statistics
- Mood distribution analysis
- AI performance metrics

### 👥 User Analytics
- **User Registration & Authentication Metrics**
  - Total registered users with growth trends
  - Daily, weekly, and monthly active users
  - User retention rates
  - Authentication method distribution (Spotify OAuth vs Email)
  - User demographics and geographic distribution

### 🧠 Mood Analysis
- **Mood Input Analytics**
  - Most common mood inputs (Happy, Sad, Energetic, Relaxed, etc.)
  - Mood intensity distribution (1-10 scale)
  - Context tag usage (Workout, Study, Party, Chill)
  - Text-based mood input vs pre-defined selection ratio
  - Custom mood descriptions analysis

### 🤖 AI Performance
- **AI Performance Metrics**
  - Gemini API response times and success rates
  - Model accuracy and confidence trends
  - Error rate analysis and breakdown
  - System health monitoring
  - Real-time alerts and notifications

## 🛠️ Technical Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Hooks

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd moody-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Design Features

- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Optimized for desktop and tablet viewing
- **Modern UI**: Clean, professional interface with smooth animations
- **Interactive Charts**: Real-time data visualization with tooltips
- **Sidebar Navigation**: Collapsible sidebar for better space utilization

## 📱 Dashboard Sections

### 1. Dashboard Overview
- Key metrics and statistics
- User growth and playlist trends
- Mood distribution charts
- AI performance overview
- Quick action buttons

### 2. User Analytics
- User registration trends
- Retention rate analysis
- Geographic distribution
- Device and authentication method breakdown
- Demographics summary

### 3. Mood Analysis
- Mood trends throughout the day
- Intensity distribution analysis
- Context tag usage patterns
- Input method distribution
- Common mood descriptions

### 4. AI Performance
- Response time monitoring
- Accuracy and confidence trends
- API usage and error analysis
- Model performance comparison
- System health and alerts

## 🔧 Customization

The dashboard is built with modularity in mind. You can easily:

- Add new chart types using Recharts
- Customize the color scheme in `tailwind.config.js`
- Add new dashboard sections by creating components
- Integrate with real APIs by replacing mock data
- Extend the sidebar navigation

## 📊 Data Integration

Currently, the dashboard uses mock data for demonstration. To integrate with real data:

1. Replace mock data in each component with API calls
2. Add data fetching logic using React hooks
3. Implement error handling and loading states
4. Add real-time updates using WebSocket or polling

## 🚀 Future Enhancements

- Real-time data updates
- Export functionality for reports
- Advanced filtering and search
- User management features
- A/B testing analytics
- Machine learning insights
- Custom date range selection
- Email notifications and alerts

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support or questions, please contact the development team or create an issue in the repository.

---

**Moodify Admin Dashboard** - Empowering music recommendation through data-driven insights.