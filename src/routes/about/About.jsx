import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

const About = () => {


  return (
    <div className="text-white bg-[url(./assets/AboutBG.jpg)] bg-cover bg-center">
        
      <div className='bg-black bg-opacity-80 h-dvh backdrop-blur-sm overflow-x-hidden'>
        <div className='bg-black bg-opacity-30'>
          <Navbar />
        </div>
        <div className='bg-black py-12 h-[70%] my-2 mx-12 bg-opacity-30 rounded-md'>
          <div className='block mx-auto'>
            <p className='text-white text-center md:text-5xl sm:text-4xl text-3xl font-bold'>About Us</p>
          </div>
          <div className='mt-12 bg-transparent overflow-x-clip opacity-100 block mx-auto text-white md:text-3xl text-justify sm:text-xl text-lg font-light'>
            <p>
We are a group of six university students from the Informatics Institute of Technology (IIT) who share a passion for innovation and problem-solving. Our project, MatchVerse, was created to address a growing need for better connectivity and collaboration in [insert relevant field, e.g., networking, career building, talent matchmaking].
<br /><br />
We recognized that existing platforms often lack efficiency, personalization, and accessibility, making it difficult for individuals to find the right opportunities or connect meaningfully. MatchVerse aims to bridge this gap by providing a seamless, intelligent, and user-friendly solution that simplifies the process.
<br /><br />
With a commitment to excellence and user-centric design, we strive to revolutionize the way people discover, connect, and engage. Join us in shaping the future with MatchVerse!</p>
          </div>
          </div>
      </div>
    </div>
  )
}

export default About
