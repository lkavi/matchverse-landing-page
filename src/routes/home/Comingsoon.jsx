"use client";
import React from 'react';
import { Smartphone } from 'lucide-react';
import BadmintonCourt from '../../assets/BadmintonCourt.jpeg'

const ComingSoonPage = () => {
  return (
    <div className="w-full min-h-screen bg-black bg-[radial-gradient(rgba(178,255,95,0.2)_1px,transparent_1.5px)] [background-size:16px_16px] relative p-8 overflow-hidden">
      {/* Background images */}
      <div className="absolute -top-1/4 -right-1/4 w-96 h-96 opacity-20">
        <img
          src="/api/placeholder/600/600"
          alt="Basketball court"
          className="w-full h-full object-cover rounded-full blur-sm"
        />
      </div>
      <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 opacity-20">
        <img
          src="/api/placeholder/600/600"
          alt="Tennis court"
          className="w-full h-full object-cover rounded-full blur-sm"
        />
      </div>
      
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10 max-w-6xl mx-auto py-8">
        {/* Main Content */}
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <div className="pb-2">
              <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-transparent leading-normal">
                Coming Soon to Your Device
              </h1>
            </div>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Get ready for a revolutionary gaming experience. Be the first to know when we launch.
            </p>
          </div>
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            {/* App Store Button */}
            <a href="#" className="w-52 group">
              <div className="rounded-xl border border-neutral-700 hover:border-neutral-500 transition-colors duration-200 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <img
                    src="/api/placeholder/208/100"
                    alt="Court background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg p-3 relative z-10">
                  <div className="flex items-center gap-3">
                    <img
                      src="/api/placeholder/40/40"
                      alt="Apple logo"
                      className="w-8 h-8"
                    />
                    <div className="text-left">
                      <div className="text-sm text-neutral-200">Download on the</div>
                      <div className="text-white font-semibold">App Store</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            {/* Play Store Button */}
            <a href="#" className="w-52 group">
              <div className="rounded-xl border border-neutral-700 hover:border-neutral-500 transition-colors duration-200 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <img
                    src="/api/placeholder/208/100"
                    alt="Court background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg p-3 relative z-10">
                  <div className="flex items-center gap-3">
                    <img
                      src="/api/placeholder/40/40"
                      alt="Google Play logo"
                      className="w-8 h-8"
                    />
                    <div className="text-left">
                      <div className="text-sm text-neutral-200">Get it on</div>
                      <div className="text-white font-semibold">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* Feature Preview */}
          <div className="rounded-2xl border border-neutral-700 max-w-2xl mx-auto hover:border-neutral-500 transition-colors duration-200 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40">
              <img
                src={BadmintonCourt}
                alt="Badminton court"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-8 relative z-10">
              <div className="flex justify-center mb-8">
                <Smartphone className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Experience Gaming Like Never Before
              </h3>
              <p className="text-neutral-300">
                Our app brings you seamless matchmaking, real-time game tracking, and an incredible social gaming experience. Stay tuned for the revolution in mobile gaming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;