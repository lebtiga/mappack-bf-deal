import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="feature-card p-8 rounded-2xl card-shine">
      <div className="text-yellow-400 mb-6">
        <Icon className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ToolCard;