
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gray-900 shadow-sm border-b border-gray-700 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-white hover:text-blue-400 transition-colors">
            Portfolio
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link
              to="/self"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive('/self')
                  ? 'bg-blue-900 text-blue-300'
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              My Status
            </Link>
            
            <Link
              to="/photography"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive('/photography')
                  ? 'bg-green-900 text-green-300'
                  : 'text-gray-300 hover:text-green-400'
              }`}
            >
              Photography
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
