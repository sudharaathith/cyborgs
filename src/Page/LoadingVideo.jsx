import React from 'react';
import Cyborgs from '../assets/Cyborgs.gif';

function LoadingVideo() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50 overflow-hidden">
      <img
        src={Cyborgs}
        alt="Loading GIF"
        
        style={{ animationDuration: '6s' }} 
      />
    </div>
  );
}

export default LoadingVideo;
