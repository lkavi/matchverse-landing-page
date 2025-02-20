import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { FocusCards } from '../../components/ui/Focus-cards'
import Kaviseshan from '../../assets/Kaviseshan.png'
import Yehali from '../../assets/Yehali.jpeg'
import Gowtham from '../../assets/Gowtham.jpeg'
import Dhuwarakesh from '../../assets/Dhuwarakesh.jpeg'
import Sihala from '../../assets/Sihala.png'

const About = () => {

  const cards = [
    {
      title: "Kaviseshan Lavakumar",
      src: Kaviseshan,
      role: "Team Lead"
    },
    {
      title: "Yehali Kossinna",
      src: Yehali,
      role: "Frontend Developer"
    },
    {
      title: "Gowtham Raveeindran",
      src: Gowtham,
      role: "Backend Developer"
    },
    {
      title: "Sihala Weragama",
      src: Sihala,
      role: "Backend Developer"
    },
    {
      title: "Dhuwarakesh Wijayakumar",
      src: Dhuwarakesh,
      role: "Frontend Developer"
    },
    {
      title: "Humayra Shajahan",
      src: "https://assets.aceternity.com/the-first-rule.png",
      role: "Backend Developer"
    },
  ];

  return (
    <div className="text-white bg-[url(./assets/AboutBG.jpg)] bg-cover bg-center">
        
      <div className='bg-black bg-opacity-80 h-dvh backdrop-blur-sm overflow-x-hidden'>
        <div className='bg-black bg-opacity-30'>
          <Navbar />
        </div>
        <div className='pt-12 mt-2 px-20 text-lg'>
          <div className='block mx-auto'>
            <p className='text-white text-center md:text-3xl sm:text-2xl text-xl font-bold mb-6'>About Us</p>
          </div>
        <div className='mb-6'>
          <p>
            We are a group of six university students from the Informatics Institute of Technology (IIT) who share a passion for innovation and problem-solving.
          </p>
        </div>

        <div className='mb-6'>
          <p>
            Our project, <strong>MatchVerse</strong>, was created to address a growing need for better connectivity and collaboration in [insert relevant field, e.g., networking, career building, talent matchmaking].
          </p>
        </div>

        <div className='mb-6'>
          <p>
            We recognized that existing platforms often lack efficiency, personalization, and accessibility, making it difficult for individuals to find the right opportunities or connect meaningfully. <strong>MatchVerse</strong> aims to bridge this gap by providing a seamless, intelligent, and user-friendly solution that simplifies the process.
          </p>
        </div>

        <div className='mb-6'>
          <p>
            With a commitment to excellence and user-centric design, we strive to revolutionize the way people discover, connect, and engage. Join us in shaping the future with <strong>MatchVerse</strong>!
          </p>
        </div>

        <div className='mb-6 text-center font-semibold'>
          <p>Connecting Players, Powering Matches</p>
        </div>

        <div className='mb-6'>
          <p>
            At <strong>MatchVerse</strong>, we believe that finding the perfect game should be easy, fun, and hassle-free. Whether you're looking for a football pitch, a tennis court, or players who match your skill level, <strong>MatchVerse</strong> is your go-to platform for bringing sports lovers together.
          </p>
        </div>

        <div className='mb-6 text-center font-semibold'>
          <p>Our Mission</p>
        </div>

        <div className='mb-6'>
          <p>
            We aim to revolutionize the way athletes and casual players connect by providing a seamless way to find venues, match with players, and track progress—all in one place. Sports should be accessible, competitive, and exciting, and <strong>MatchVerse</strong> makes that happen.
          </p>
        </div>


        </div>

          <div className='block mx-auto'>
              <p className='text-white p-8 text-center md:text-3xl sm:text-2xl text-xl font-bold'>Meet Our Team</p>
          </div>

          <div className='mt-12 mb-6'>
            <FocusCards cards={cards} />
          </div>

      </div>
    </div>
  )
}

export default About
