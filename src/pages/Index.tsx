
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my world through different sections. Learn more about me and discover my photography work!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-blue-500/20 transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl text-blue-400">My Status</CardTitle>
                <div className="text-3xl group-hover:scale-110 transition-transform">🧠</div>
              </div>
              <CardDescription className="text-gray-400">
                Discover my personality, interests, and take interactive quizzes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/self">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-green-500/20 transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl text-green-400">Photography</CardTitle>
                <div className="text-3xl group-hover:scale-110 transition-transform">📸</div>
              </div>
              <CardDescription className="text-gray-400">
                Explore my photography work, gear, and visual stories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/photography">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  View Gallery
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
