import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";
import { FocusCards } from '../../components/ui/Focus-cards'
import { Cover } from "../../components/ui/cover";
import Kaviseshan from '../../assets/Kaviseshan.png'
import Yehali from '../../assets/Yehali.jpeg'
import Gowtham from '../../assets/Gowtham.jpeg'
import Dhuwarakesh from '../../assets/Dhuwarakesh.jpeg'
import Sihala from '../../assets/Sihala.png'

const About = () => {
  const cards = [
    { title: "Kaviseshan Lavakumar", src: Kaviseshan, role: "Co-Founder" },
    { title: "Yehali Kossinna", src: Yehali, role: "Co-Founder" },
    { title: "Gowtham Raveeindran", src: Gowtham, role: "Co-Founder" },
    { title: "Sihala Weragama", src: Sihala, role: "Co-Founder" },
    { title: "Dhuwarakesh Wijayakumar", src: Dhuwarakesh, role: "Co-Founder" },
    { title: "Humayra Shajahan", src: "https://assets.aceternity.com/the-first-rule.png", role: "Co-Founder" },
  ];

  return (
    <BackgroundGradientAnimation>
      <div className="text-white overflow-hidden min-h-screen relative">
        <div className="absolute inset-0 bg-black opacity-100 pointer-events-none z-0"></div>
        
        <div className="relative z-10">
          {/* Navbar Section */}
          <div className="relative z-20 bg-opacity-20">
            <Navbar />
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto pt-20 px-6 md:px-8 lg:px-10 text-lg">
              
              {/* About Us Heading - Fixed alignment */}
              <div className="text-center mb-16">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 mb-2">
                    About Us
                  </h1>
                  <div className="mt-1">
                    <Cover className="text-xl md:text-2xl">Crafting the future of sports connections</Cover>
                  </div>
                </div>
              </div>

              {/* About Us Content */}
              <div className="space-y-12 text-neutral-100 max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl leading-relaxed">
                  We are a group of six university students from the Informatics Institute of Technology (IIT) who share a passion for innovation and problem-solving.
                </p>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
                  <p className="text-lg md:text-xl leading-relaxed">
                    Our project, <span className="text-green-400 font-semibold">MatchVerse</span>, was created to address a growing need for better connectivity and collaboration in sports matchmaking. We recognized that existing platforms often lack efficiency, personalization, and accessibility, making it difficult for individuals to find the right opportunities or connect meaningfully.
                  </p>
                </div>

                <p className="text-lg md:text-xl leading-relaxed">
                  <span className="text-green-400 font-semibold">MatchVerse</span> aims to bridge this gap by providing a seamless, intelligent, and user-friendly solution that simplifies the process.
                </p>

                <div className="text-center py-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">
                    Connecting Players, Powering Matches
                  </h2>
                  <p className="text-lg md:text-xl text-justify leading-relaxed max-w-3xl mx-auto">
                    At <span className="text-green-400 font-semibold">MatchVerse</span>, we believe that finding the perfect game should be easy, fun, and hassle-free. Whether you're looking for a football pitch, a tennis court, or players who match your skill level, <span className="text-green-400 font-semibold">MatchVerse</span> is your go-to platform for bringing sports lovers together.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-6 text-center">
                    Our Mission
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed">
                    We aim to revolutionize the way athletes and casual players connect by providing a seamless way to find venues, match with players, and track progress—all in one place. Sports should be accessible, competitive, and exciting, and <span className="text-green-400 font-semibold">MatchVerse</span> makes that happen.
                  </p>
                </div>
              </div>

              {/* Meet Our Team Section */}
              <div className="text-center mt-24 mb-16">
                <h2 className="text-4xl md:text-5xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">
                  Meet Our Team
                </h2>
              </div>
            </div>

            {/* Focus Cards */}
            <div className="mt-8 mb-0 relative z-10 px-6 md:px-8 lg:px-10 pb-20">
              <FocusCards cards={cards} />
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  )
}

export default About