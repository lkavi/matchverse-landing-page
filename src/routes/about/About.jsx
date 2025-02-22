import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";
import { FocusCards } from '../../components/ui/Focus-cards'
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
    <div className="text-white bg-gradient-to-b from-[#1E1E1E] to-[#0A0A0A] overflow-hidden">
      <div className="bg-black bg-opacity-80 backdrop-blur-sm">
        
        {/* Navbar Section */}
        <div className="bg-black bg-opacity-20">
          <Navbar />
        </div>

        {/* Main Content */}
        <BackgroundGradientAnimation>
          <div className="pt-10 px-20 text-lg relative z-10 bg-black bg-opacity-50 pb-8">
            
            {/* About Us Heading */}
            <div className="block mx-auto">
              <p className="text-white text-center md:text-3xl sm:text-2xl text-xl font-bold mb-6">
                About Us
              </p>
            </div>

            {/* About Us Content */}
            <div className="mb-6">
              <p>
                We are a group of six university students from the Informatics Institute of Technology (IIT) who share a passion for innovation and problem-solving.
              </p>
            </div>

            <div className="mb-6">
              <p>
                Our project, <span className="font-semibold">MatchVerse</span>, was created to address a growing need for better connectivity and collaboration in 
                [insert relevant field, e.g., networking, career building, talent matchmaking].
              </p>
            </div>

            <div className="mb-6">
              <p>
                We recognized that existing platforms often lack efficiency, personalization, and accessibility, making it difficult for individuals to find the right opportunities or connect meaningfully. 
                <span className="font-semibold"> MatchVerse</span> aims to bridge this gap by providing a seamless, intelligent, and user-friendly solution that simplifies the process.
              </p>
            </div>

            <div className="mb-6">
              <p>
                With a commitment to excellence and user-centric design, we strive to revolutionize the way people discover, connect, and engage. 
                Join us in shaping the future with <span className="font-semibold">MatchVerse</span>!
              </p>
            </div>

            <div className="mb-6 text-center font-semibold">
              <p>Connecting Players, Powering Matches</p>
            </div>

            <div className="mb-6">
              <p>
                At <span className="font-semibold">MatchVerse</span>, we believe that finding the perfect game should be easy, fun, and hassle-free. 
                Whether you're looking for a football pitch, a tennis court, or players who match your skill level, 
                <span className="font-semibold"> MatchVerse</span> is your go-to platform for bringing sports lovers together.
              </p>
            </div>

            <div className="mb-6 text-center font-semibold">
              <p>Our Mission</p>
            </div>

            <div className="mb-6">
              <p>
                We aim to revolutionize the way athletes and casual players connect by providing a seamless way to find venues, 
                match with players, and track progress—all in one place. Sports should be accessible, competitive, and exciting, 
                and <span className="font-semibold">MatchVerse</span> makes that happen.
              </p>
            </div>

            {/* Meet Our Team Section (Moved Inside the Content Container) */}
            <div className="block mx-auto">
              <p className="text-white p-8 text-center md:text-3xl sm:text-2xl text-xl font-bold">
                Meet Our Team
              </p>
            </div>

            <div className="mt-8 mb-0 relative z-10">
              <FocusCards cards={cards} />
            </div>

          </div>
        </BackgroundGradientAnimation>
      </div>
    </div>
  )
}

export default About
