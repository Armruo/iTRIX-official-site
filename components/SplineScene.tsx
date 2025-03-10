'use client';

import { useState } from 'react';

export default function SplineScene() {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-[600px]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-xl text-gray-600">Loading...</div>
        </div>
      )}
      <iframe 
        src='https://my.spline.design/blockchain-23d5f4bde33a79b32616a55c752446b4/'
        frameBorder='0'
        width='100%'
        height='100%'
        onLoad={handleIframeLoad}
        className="absolute inset-0"
      />
    </div>
  );
}
