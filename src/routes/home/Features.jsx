"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Users, MapPin, Clock, Trophy, Shield } from 'lucide-react';
import { Cover } from "../../components/ui/cover";

// Import background images
import matchmakingBg from '../../assets/1.jpeg';
import bookingBg from '../../assets/2.jpeg';
import securityBg from '../../assets/3.jpeg';
import trackingBg from '../../assets/4.jpeg';
import locationBg from '../../assets/5.jpeg';
import schedulingBg from '../../assets/6.jpeg';

const FeatureGrid = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  
  // Features data
  const features = [
    {
      title: "Quick Matchmaking",
      description: "Find your perfect match within minutes. Our smart system pairs you with players of similar skill levels.",
      icon: Users,
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
      bgImage: matchmakingBg
    },
    {
      title: "Seamless Booking",
      description: "Book courts and venues instantly with our real-time availability system. No more back-and-forth.",
      icon: Calendar,
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/9]",
      bgImage: bookingBg
    },
    {
      title: "Secure Gaming",
      description: "Enjoy safe and fair gameplay with our verified player profiles and advanced algorithms.",
      icon: Shield,
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/9/2/13]",
      bgImage: securityBg
    },
    {
      title: "Real-time Tracking",
      description: "Track your game statistics and progress in real-time with our advanced analytics.",
      icon: Trophy,
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:2/1/3/5]",
      bgImage: trackingBg
    },
    {
      title: "Location Services",
      description: "Find nearby venues and players with our intelligent location-based matching system.",
      icon: MapPin,
      area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/5/3/9]",
      bgImage: locationBg
    },
    {
      title: "Smart Scheduling",
      description: "Manage your gaming schedule efficiently with our intelligent booking system.",
      icon: Clock,
      area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/9/3/13]",
      bgImage: schedulingBg
    }
  ];

  // Effect to handle the appearing animation
  useEffect(() => {
    const handleScroll = () => {
      // Simple scroll position check
      const scrollPosition = window.scrollY + window.innerHeight;
      const gridElement = document.getElementById('feature-grid');
      
      if (gridElement) {
        const gridPosition = gridElement.offsetTop;
        
        // Start revealing cards when user scrolls near the grid
        if (scrollPosition > gridPosition - 100) {
          // Gradually reveal cards
          const newVisibleCards = [];
          features.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }, index * 200); // 200ms delay between each card
          });
        }
      }
    };

    // Register scroll event
    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case elements are already in view
    setTimeout(handleScroll, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="feature-grid" className="w-full bg-black bg-[radial-gradient(rgba(178,255,95,0.2)_1px,transparent_1.5px)] [background-size:16px_16px] relative p-8">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-200 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">
            Book game venues
            <br />
            <Cover className="text-xl">within a few minutes</Cover>
          </h1>
        </div>
        
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:grid-rows-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <li 
                key={index} 
                className={`min-h-[14rem] list-none ${feature.area}`}
              >
                <div 
                  className={`bg-neutral-900/50 backdrop-blur-sm rounded-xl p-8 relative z-10 h-full overflow-hidden transition-all duration-1000 ease-out group hover:bg-neutral-800/50 hover:shadow-lg hover:shadow-emerald-900/20 hover:translate-y-1 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${feature.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="flex justify-center mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:text-emerald-400">
                    <Icon className="w-16 h-16 text-white group-hover:text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-300 group-hover:text-emerald-300">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-300 transition-colors duration-300 group-hover:text-white">
                    {feature.description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FeatureGrid;