import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { FocusCards } from '../../components/ui/Focus-cards'
import Kaviseshan from '../../assets/Kaviseshan.jpeg'
import Yehali from '../../assets/Yehali.jpeg'

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
      role: "Emotional Support"
    },
    {
      title: "Gowtham Raveeindran",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "A"
    },
    {
      title: "Sihala Weragama",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "A"
    },
    {
      title: "Dhuwarakesh Wijayakumar",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "A"
    },
    {
      title: "Humayra Shajahan",
      src: "https://assets.aceternity.com/the-first-rule.png",
      role: "A"
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
