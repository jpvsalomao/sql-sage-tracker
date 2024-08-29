import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const tracks = useSelector(state => state.tracks.list);
  const userProgress = useSelector(state => state.user.progress);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">SQL Learning Tracks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map(track => (
          <Link key={track.id} to={`/track/${track.id}`} className="block">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{track.name}</h2>
              <p className="text-gray-600 mb-4">{track.description}</p>
              <div className="bg-gray-200 h-2 rounded-full">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{width: `${(userProgress[track.id] || 0) * 100}%`}}
                ></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;