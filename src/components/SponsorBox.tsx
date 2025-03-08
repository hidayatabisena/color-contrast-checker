import React, { useState } from 'react';
import { X } from 'lucide-react';

export function SponsorBox() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 w-44 bg-white rounded-lg shadow-xl overflow-hidden">
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-1 right-1 p-1 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Close sponsor box"
      >
        <X size={18} className="text-gray-600" />
      </button>
      
      <div className="p-2">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">
          Supported by
        </h3>
        
        <img 
          src="https://res.cloudinary.com/moyadev/image/upload/v1736476235/poster-maia_zmxjr0.jpg"
          alt="Maia Sponsor"
          className="w-full h-auto rounded-md mb-2"
        />
        
        <p className="text-sm text-gray-700">
          Create your own Custom ChatGPT with{' '}
          <a 
            href="https://maia.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rose-950 hover:text-rose-800 font-medium"
          >
            Maia
          </a>
        </p>
      </div>
    </div>
  );
}