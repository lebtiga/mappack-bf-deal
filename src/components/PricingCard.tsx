import React from 'react';
import { Check, Copy } from 'lucide-react';

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  couponCode?: string;
  purchaseLink: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  price,
  originalPrice,
  features,
  isPopular = false,
  ctaText,
  couponCode,
  purchaseLink,
}) => {
  const handleCopyCode = () => {
    if (couponCode) {
      navigator.clipboard.writeText(couponCode);
    }
  };

  return (
    <div
      className={`relative rounded-2xl p-8 card-shine ${
        isPopular
          ? 'bg-gradient-to-b from-gray-900 to-black border-2 border-yellow-400'
          : 'bg-gray-900 border border-gray-800'
      } backdrop-blur-sm`}
    >
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
        <span className="text-lg line-through ml-3 text-gray-500">
          {originalPrice}
        </span>
      </div>
      {couponCode && (
        <div className="mb-6">
          <div
            className="flex items-center justify-between p-3 bg-yellow-400/10 rounded-lg cursor-pointer hover:bg-yellow-400/20 transition-all"
            onClick={handleCopyCode}
          >
            <span className="font-mono text-yellow-400">{couponCode}</span>
            <Copy className="w-4 h-4 text-yellow-400" />
          </div>
          <p className="text-xs text-center mt-2 text-gray-400">
            Click to copy coupon code
          </p>
        </div>
      )}
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
      <a
        href={purchaseLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full py-4 rounded-xl font-semibold text-center transition-all transform hover:scale-105 ${
          isPopular
            ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600'
            : 'bg-gray-800 text-white hover:bg-gray-700'
        }`}
      >
        {ctaText}
      </a>
    </div>
  );
};

export default PricingCard;