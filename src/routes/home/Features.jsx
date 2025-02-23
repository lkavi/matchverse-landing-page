"use client";

import React from 'react';
import { Calendar, Users, MapPin, Clock, Trophy, Shield } from 'lucide-react';
import { GlowingEffect } from "../../components/ui/glowing-effect";
import { Cover } from "../../components/ui/cover";

const GridItem = ({ area, icon: Icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {Icon && <Icon className="h-4 w-4 text-white" />}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-neutral-300">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const FeatureGrid = () => {
  const features = [
    {
      title: "Quick Matchmaking",
      description: "Find your perfect match within minutes. Our smart system pairs you with players of similar skill levels.",
      icon: Users,
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
    },
    {
      title: "Seamless Booking",
      description: "Book courts and venues instantly with our real-time availability system. No more back-and-forth.",
      icon: Calendar,
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/9]"
    },
    {
      title: "Secure Gaming",
      description: "Enjoy safe and fair gameplay with our verified player profiles and advanced algorithms.",
      icon: Shield,
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/9/2/13]"
    },
    {
      title: "Real-time Tracking",
      description: "Track your game statistics and progress in real-time with our advanced analytics.",
      icon: Trophy,
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:2/1/3/5]"
    },
    {
      title: "Location Services",
      description: "Find nearby venues and players with our intelligent location-based matching system.",
      icon: MapPin,
      area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/5/3/9]"
    },
    {
      title: "Smart Scheduling",
      description: "Manage your gaming schedule efficiently with our intelligent booking system.",
      icon: Clock,
      area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/9/3/13]"
    }
  ];

  return (
    <div className="w-full bg-black bg-[radial-gradient(rgba(178,255,95,0.2)_1px,transparent_1.5px)] [background-size:16px_16px] relative p-8">
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
          {features.map((feature, index) => (
            <GridItem
              key={index}
              area={feature.area}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureGrid;