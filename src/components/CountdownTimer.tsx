import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const endDate = new Date('2024-11-29T23:59:59');
    const difference = endDate.getTime() - now.getTime();

    if (difference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-6 bg-gray-900/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-yellow-400/20">
      <Clock className="w-8 h-8 text-yellow-400" />
      <div className="flex gap-6">
        <div className="text-center">
          <span className="text-4xl font-bold text-yellow-400">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Days</p>
        </div>
        <span className="text-2xl text-yellow-400">:</span>
        <div className="text-center">
          <span className="text-4xl font-bold text-yellow-400">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Hours</p>
        </div>
        <span className="text-2xl text-yellow-400">:</span>
        <div className="text-center">
          <span className="text-4xl font-bold text-yellow-400">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Minutes</p>
        </div>
        <span className="text-2xl text-yellow-400">:</span>
        <div className="text-center">
          <span className="text-4xl font-bold text-yellow-400">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;