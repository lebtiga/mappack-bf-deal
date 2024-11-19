import React from 'react';
import { ScrollText, CircleDot, Rocket, Mail, Search, Magnet, ArrowRight, Zap, Calendar } from 'lucide-react';
import PricingCard from './components/PricingCard';
import CountdownTimer from './components/CountdownTimer';
import VideoButton from './components/VideoButton';
import ToolCard from './components/ToolCard';
import MatrixText from './components/MatrixText';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-yellow-400 rounded-full blur-[128px] opacity-20"></div>
          
          {/* Logo */}
          <div className="text-center mb-16">
            <a href="https://mappacktoolbox.com/" target="_blank" rel="noopener noreferrer" 
               className="inline-block transition-transform hover:scale-105">
              <img 
                src="https://mappacktoolbox.com/_next/image?url=%2Ffooterwhitelogo.png&w=256&q=75" 
                alt="MapPack Toolbox" 
                className="h-16 w-auto mx-auto"
              />
            </a>
          </div>

          <div className="text-center relative">
            <div className="inline-block mb-4">
              <span className="bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium tracking-wider">
                BLACK FRIDAY EXCLUSIVE
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 glow">
                SAVE UP TO 50%
              </span>
              <br />
              <span className="text-2xl md:text-4xl mt-4 block text-gray-400">
                New Customers: 50% Off First 3 Months
                <br />
                Annual Plans: Up to 35% Off
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Transform your local SEO presence with MapPack Toolbox's biggest sale of the year
            </p>
            <CountdownTimer />
            <VideoButton />
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="absolute inset-0 bg-yellow-400/5 blur-3xl rounded-full"></div>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">MapPack Tools Suite</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <ToolCard
            icon={ScrollText}
            title="Auto Schema"
          />
          <ToolCard
            icon={CircleDot}
            title="GeoCircleKML"
          />
          <ToolCard
            icon={Rocket}
            title="EntityRank AI"
          />
          <ToolCard
            icon={Mail}
            title="EmailSnatch"
          />
          <ToolCard
            icon={Search}
            title="LocalOnpage Analyzer"
          />
          <ToolCard
            icon={Magnet}
            title="MapMagnet"
          />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
            Limited Time Offer
          </span>
          <h2 className="text-4xl font-bold mb-4">Exclusive Black Friday Deals</h2>
          <p className="text-xl text-gray-400">Choose your perfect plan and save big</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard
            title="New Customer Monthly"
            subtitle="Perfect for businesses just starting"
            price="$64.50/mo"
            originalPrice="$129/mo"
            features={[
              "50% off first 3 months",
              "All premium features included",
              "Full tool suite access",
              "24/7 priority support",
              "Unlimited usage"
            ]}
            ctaText="Claim 50% Off Now"
            couponCode="BLACK50"
            purchaseLink="https://buy.stripe.com/28obKxevA5pF5i0bIO"
          />
          
          <PricingCard
            title="Annual Plan"
            subtitle="Best value for growing businesses"
            price="$750/year"
            originalPrice="$1000/year"
            features={[
              "25% off annual subscription",
              "All premium features included",
              "Full tool suite access",
              "Priority support",
              "Save $250 instantly"
            ]}
            isPopular={true}
            ctaText="Get Maximum Savings"
            couponCode="BLACK25"
            purchaseLink="https://buy.stripe.com/3csg0N5Z42dt9ygaEQ"
          />
          
          <PricingCard
            title="Existing Customer"
            subtitle="Loyalty rewards for our clients"
            price="$650/year"
            originalPrice="$1000/year"
            features={[
              "35% off annual renewals",
              "Free month for referrals",
              "All premium features",
              "Priority support",
              "Referral rewards program"
            ]}
            ctaText="Upgrade & Save"
            couponCode="THANKYOU35"
            purchaseLink="https://buy.stripe.com/3csg0N5Z42dt9ygaEQ"
          />
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative overflow-hidden py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-6 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            Don't Miss Out!
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Dominating Local Search Today
          </h2>
          <p className="text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
            Join thousands of successful businesses already crushing their local SEO game
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-12 py-5 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 inline-flex items-center gap-3">
              Start Your Black Friday Trial <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="https://calendar.app.google/oPWAz6YekB1sjHB26" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900 text-yellow-400 border border-yellow-400/20 px-12 py-5 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 inline-flex items-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Walkthrough
            </a>
          </div>
        </div>
      </div>

      {/* Matrix Footer */}
      <footer className="border-t border-gray-800">
        <MatrixText />
      </footer>
    </div>
  );
}

export default App;