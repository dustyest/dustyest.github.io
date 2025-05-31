
import React from 'react';
import { useGame } from '../contexts/GameContext';
import Navigation from '../components/Navigation';
import { Card, CardContent } from '@/components/ui/card';

const SelfPage = () => {
  const { markPageVisited } = useGame();

  React.useEffect(() => {
    markPageVisited('self');
  }, [markPageVisited]);

  const currentTime = new Date().toLocaleString();

  const activities = [
    {
      icon: "🎬",
      title: "Watching",
      content: "Building cool web apps with React"
    },
    {
      icon: "🎮",
      title: "Playing",
      content: "Experimenting with new JavaScript frameworks"
    },
    {
      icon: "📱",
      title: "On",
      content: "GitHub, Discord, and learning platforms"
    },
    {
      icon: "💤",
      title: "Status",
      content: "Online and coding"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="max-w-md mx-auto px-4 py-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            {/* Profile Section */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                YN
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">@yourname</h2>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-green-400 text-sm">Online</span>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="border-b border-gray-700 pb-3 last:border-b-0">
                  <h3 className="text-white font-medium mb-1 flex items-center space-x-2">
                    <span>{activity.icon}</span>
                    <span>{activity.title}</span>
                  </h3>
                  <p className="text-gray-400 text-sm">{activity.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-gray-500 text-sm mt-4">
          Last updated: {currentTime}
        </p>
      </div>
    </div>
  );
};

export default SelfPage;
