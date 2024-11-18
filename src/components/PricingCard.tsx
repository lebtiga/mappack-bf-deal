import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  originalPrice: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  subtitle: string;
}

export default function PricingCard({
  title,
  price,
  originalPrice,
  features,
  isPopular,
  ctaText,
  subtitle,
}: PricingCardProps) {
  return (
    <div className={`relative rounded-2xl p-8 card-shine ${
      isPopular ? 'bg-gradient-to-b from-gray-900 to-black border-2 border-yellow-400' : 'bg-gray-900 border border-gray-800'
    } backdrop-blur-sm`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-400 text-black px-6 py-1 rounded-full text-sm font-semibold">
            Best Value
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm mb-6 text-gray-400">{subtitle}</p>
      <div className="mb-8">
        <span className="text-5xl font-bold text-yellow-400">{price}</span>
        <span className="text-lg line-through ml-3 text-gray-500">{originalPrice}</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400/10">
              <Check className="w-4 h-4 text-yellow-400" />
            </div>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-4 rounded-xl font-semibold transition-all transform hover:scale-105 ${
          isPopular
            ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600'
            : 'bg-gray-800 text-white hover:bg-gray-700'
        }`}
      >
        {ctaText}
      </button>
    </div>
  );
}