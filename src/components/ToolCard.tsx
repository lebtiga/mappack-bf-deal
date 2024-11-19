import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon: Icon, title }) => {
  return (
    <div className="feature-card p-8 rounded-2xl card-shine flex flex-col items-center justify-center">
      <div className="text-yellow-400 mb-4">
        <Icon className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-bold text-center">{title}</h3>
    </div>
  );
};

export default ToolCard;