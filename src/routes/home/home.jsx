
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../routes/home/Hero';
import Features from "../../routes/home/Features";
import ComingSoon from "../../routes/home/Comingsoon";
import { DevelopmentTimeLine } from '../../routes/home/Developmenttimeline';
import React from 'react';

const home = () => {
  return (
    <div>
      <div className="bg-[url(./assets/HeroBG.jpg)] bg-cover bg-center bg-fixed">
        {/* Add relative positioning and high z-index to navbar container */}
        <div className="relative z-50">
          <Navbar />
        </div>
        <div className="bg-black bg-opacity-70">
          <Hero />
        </div>
      </div>
      <div className="bg-black">
        <Features />
      </div>
      <div>
        <DevelopmentTimeLine />
      </div>
      <div className="">
        <ComingSoon />
      </div>
    </div>
  )
}

export default home
