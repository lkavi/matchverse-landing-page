import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

const About = () => {


  return (
    <div className="text-white bg-[url(./assets/AboutBG.jpg)] bg-cover bg-center">
        
      <div className='bg-black bg-opacity-80 h-dvh backdrop-blur-sm overflow-x-hidden'>
        <div className='bg-black bg-opacity-30'>
          <Navbar />
        </div>
        <div className='bg-black py-12 h-[70%] my-12 mx-12 bg-opacity-30 rounded-md'>
          <div className='block mx-auto'>
            <p className='text-white text-center md:text-5xl sm:text-4xl text-3xl font-bold'>Meet Our Team</p>
          </div>
          <div className='mt-12 bg-transparent overflow-x-clip opacity-100 block mx-auto'>
          
          </div>
          </div>
      </div>
    </div>
  )
}

export default About
