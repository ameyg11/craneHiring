import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-neutral-900 text-white text-center px-6">
      <AlertTriangle className="w-24 h-24 text-yellow-500 mb-6" />
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl text-gray-400 mb-8">Page Not Found</p>
      <Link 
        to="/" 
        className="flex items-center gap-2 bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
      >
        <Home className="w-5 h-5" /> Return Home
      </Link>
    </div>
  );
};

export default NotFound;