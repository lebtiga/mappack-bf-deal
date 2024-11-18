import React, { useState, useEffect } from 'react';

const phrases = [
  "Created by",
  "Hacked by",
  "AI Created by",
  "Engineered by",
  "Coded by",
  "Developed by",
  "Architected by",
  "Designed by",
  "Optimized by",
  "Powered by"
];

const MatrixText: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setIsGlitching(false);
      }, 100);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-center py-8">
      <a
        href="https://x.com/RobRizk2020"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 group"
      >
        <span
          className={`text-[#00ff00] font-mono text-lg transition-all duration-300
            ${isGlitching ? 'matrix-glitch' : 'matrix-glow'}`}
        >
          {phrases[currentPhrase]}
        </span>
        <span
          className={`font-bold text-lg transition-all duration-300 group-hover:text-[#00ff00]
            ${isGlitching ? 'matrix-glitch' : 'matrix-glow'}`}
        >
          Rabih Rizk
        </span>
      </a>
    </div>
  );
};

export default MatrixText;