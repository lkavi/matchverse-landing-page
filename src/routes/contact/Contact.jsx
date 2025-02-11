import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { FocusCards } from '../../components/ui/Focus-cards'
import Kaviseshan from '../../assets/Kaviseshan.png'
import Yehali from '../../assets/Yehali.jpeg'
import Gowtham from '../../assets/Gowtham.jpeg'
import Dhuwarakesh from '../../assets/Dhuwarakesh.jpeg'
import Sihala from '../../assets/Sihala.png'

const Contact = () => {

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
    <div className="text-white bg-gray-950">
        
      <div className='backdrop-blur-sm'>

        <div className='relative bg-black bg-opacity-30 z-10'>
          <Navbar />
        </div>

        <div className='p-8'>
          <div className='block mx-auto'>
              <p className='text-white text-center md:text-4xl sm:text-3xl text-2xl font-normal'>Meet Our Team</p>
          </div>
          <div className='mt-12'>
            <FocusCards cards={cards} />
          </div>
        </div>
      
        
      </div>

    </div>
  )
}

export default Contact
