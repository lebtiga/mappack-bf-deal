import React, { useState } from 'react';
import { Play, Flame, Users } from 'lucide-react';
import VideoModal from './VideoModal';

const VideoButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setIsModalOpen(true)}
        className="group flex items-center gap-3 bg-gray-900/80 hover:bg-gray-900 backdrop-blur-sm px-6 py-3 rounded-xl border border-yellow-400/20 mt-8 transition-all"
      >
        <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-all">
          <Play className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        </div>
        <span className="text-lg font-medium text-yellow-400">Watch Demo Video</span>
      </button>
      
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full animate-pulse">
          <Flame className="w-5 h-5" />
          <span className="font-semibold">URGENT: Only 43 Spots Remaining!</span>
          <Flame className="w-5 h-5" />
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 text-yellow-400/90">
          <Users className="w-4 h-4" />
          <span className="text-sm font-medium">7 people claimed this offer</span>
        </div>
        <p className="text-red-400/90 mt-2 text-sm font-semibold">
          ⚡️ Spots are filling up fast - Secure your discount before it's gone!
        </p>
      </div>

      <VideoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        vi