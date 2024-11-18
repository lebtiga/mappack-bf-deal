import React from 'react';
import { Play, Flame } from 'lucide-react';

export default function VideoButton() {
  return (
    <div className="flex flex-col items-center">
      <button className="group flex items-center gap-3 bg-gray-900/80 hover:bg-gray-900 backdrop-blur-sm px-6 py-3 rounded-xl border border-yellow-400/20 mt-8 transition-all">
        <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-all">
          <Play className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        </div>
        <span className="text-lg font-medium text-yellow-400">Watch Demo Video</span>
      </button>
      
      <div className="mt-6 text-center animate-pulse">
        <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full">
          <Flame className="w-5 h-5" />
          <span className="font-semibold">Limited Time Offer: Only 50 Spots Available!</span>
          <Flame className="w-5 h-5" />
        </div>
        <p className="text-gray-400 mt-2 text-sm">
          Join now before all spots are filled - don't miss out on this exclusive opportunity!
        </p>
      </div>
    </div>
  );
}