import React, { useState } from 'react';
import { Play, Flame, Users, AlertTriangle } from 'lucide-react';
import VideoModal from './VideoModal';

const VideoButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="group flex items-center gap-3 bg-gray-900/80 hover:bg-gray-900 backdrop-blur-sm px-6 py-3 rounded-xl border border-yellow-400/20 mt-8 transition-all transform hover:scale-105"
      >
        <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-all">
          <Play className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        </div>
        <span className="text-lg font-medium text-yellow-400">Watch Demo Video</span>
      </button>
      
      <div className="mt-6 text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full animate-pulse">
          <AlertTriangle className="w-5 h-5" />
          <span className="font-bold">CRITICAL ALERT: Only 43 Spots Left!</span>
          <AlertTriangle className="w-5 h-5" />
        </div>
        
        <div className="flex flex-col items-center bg-yellow-400/5 rounded-xl p-4 border border-yellow-400/10">
          <div className="flex items-center justify-center gap-2 text-yellow-400">
            <Users className="w-5 h-5" />
            <span className="font-semibold">7 smart business owners already secured their spot</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Flame className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400">Spots are being claimed every hour!</span>
            <Flame className="w-4 h-4 text-red-400" />
          </div>
        </div>
        
        <p className="text-red-400 font-bold text-sm px-4 py-2 bg-red-500/10 rounded-full inline-block">
          ⚡️ Don't risk missing out - Claim your 50% discount now!
        </p>
      </div>

      <VideoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId="ouCKvrm0CTg"
      />
    </div>
  );
};

export default VideoButton;