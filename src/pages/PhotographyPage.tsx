
import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import Navigation from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PhotographyPage = () => {
  const { markPageVisited } = useGame();
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  React.useEffect(() => {
    markPageVisited('photography');
  }, [markPageVisited]);

  const photos = [
    {
      id: 1,
      title: "Mountain Sunrise",
      description: "Captured during a dawn hike in the Rocky Mountains. The golden hour light created this magical moment.",
      settings: "f/8, 1/125s, ISO 100",
      lens: "24-70mm f/2.8"
    },
    {
      id: 2,
      title: "Urban Architecture",
      description: "Modern geometric patterns found in downtown cityscapes. I love finding abstract beauty in concrete.",
      settings: "f/11, 1/250s, ISO 200",
      lens: "16-35mm f/4"
    },
    {
      id: 3,
      title: "Portrait Session",
      description: "Natural light portrait showcasing authentic emotion and connection.",
      settings: "f/2.8, 1/60s, ISO 400",
      lens: "85mm f/1.4"
    },
    {
      id: 4,
      title: "Night Sky",
      description: "Star trail photography from a remote desert location. 4-hour exposure composite.",
      settings: "f/2.8, 30s x120, ISO 3200",
      lens: "14mm f/2.8"
    },
    {
      id: 5,
      title: "Street Photography",
      description: "Candid moment capturing the energy of city life during rush hour.",
      settings: "f/5.6, 1/125s, ISO 800",
      lens: "35mm f/1.4"
    },
    {
      id: 6,
      title: "Nature Macro",
      description: "Close-up details of morning dew on flower petals reveal intricate patterns.",
      settings: "f/8, 1/60s, ISO 200",
      lens: "100mm f/2.8 Macro"
    },
    {
      id: 7,
      title: "Travel Documentary",
      description: "Cultural photography from a recent trip, showcasing local traditions and daily life.",
      settings: "f/4, 1/250s, ISO 400",
      lens: "24-105mm f/4"
    },
    {
      id: 8,
      title: "Landscape Vista",
      description: "Wide panoramic view of coastal cliffs during golden hour. Multiple exposure blend.",
      settings: "f/16, 1/4s, ISO 100",
      lens: "16-35mm f/4"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Photography Gallery</h1>
          <p className="text-gray-300">Explore my collection of captured moments and visual stories.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {photos.map((photo, index) => (
            <Card 
              key={photo.id}
              className="bg-gray-800 border-gray-700 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
              onClick={() => setSelectedPhoto(index)}
            >
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg flex items-center justify-center text-gray-300 mb-2">
                  📸 {photo.title}
                </div>
                <CardTitle className="text-green-400">{photo.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 mb-2">{photo.description}</p>
                <div className="text-xs text-gray-400">
                  <div>📷 {photo.settings}</div>
                  <div>🔍 {photo.lens}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedPhoto !== null && (
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-white">
                <span className="text-2xl">🔍</span>
                <span>Photo Details: {photos[selectedPhoto].title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                  {photos[selectedPhoto].title}
                </div>
                <p className="text-gray-300">{photos[selectedPhoto].description}</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div>
                    <strong className="text-green-400">Camera Settings:</strong> {photos[selectedPhoto].settings}
                  </div>
                  <div>
                    <strong className="text-green-400">Lens Used:</strong> {photos[selectedPhoto].lens}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PhotographyPage;
