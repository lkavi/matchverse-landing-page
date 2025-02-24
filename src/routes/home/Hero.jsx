import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  // Custom CSS for the very slow pulse animation
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes customSlowPulse {
        0%, 100% { opacity: 0.8; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.05); }
      }
      .custom-slow-pulse {
        animation: customSlowPulse 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwmYHxQBqd6_GbUgRhQD-vQE4Ml0vOS1qUwRynW-ML5g4uSq_sRkOCdKdBLhD2j/exec';
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    const formData = new FormData();
    formData.append('email', email);
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      setMessage("Email submitted successfully!");
      setEmail("");
    } catch (error) {
      console.error('Error details:', error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  
  // Function to handle scroll to next section
  const scrollToNextSection = () => {
    // Get the height of the current component
    const heroHeight = window.innerHeight;
    
    // Scroll to that position with smooth behavior
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="text-white relative min-h-screen">
      {/* Main content */}
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center relative z-10">
        <div className="space-y-2 mb-6">
          <p className="text-[#b2ff5f] font-bold p-2">GAMING MADE EASY</p>
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold">
            Book your game now
          </h1>
        </div>
        
        <div className="flex flex-col items-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4">
            Fast, Flexible, Easy Way for your{' '}
            <ReactTyped
              className="text-center inline text-[#b2ff5fdc]"
              strings={['Games!', 'Opponents!', 'Courts!']}
              typeSpeed={60}
              backSpeed={50}
              loop
            />
          </p>
          
          <div className="mt-2 mb-6">
            <p className="md:text-3xl sm:text-2xl text-xl text-white font-semibold">
              Be the first to experience MatchVerse
            </p>
          </div>
          
          <form className="w-full max-w-md mx-auto mt-4" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-3 px-4 w-[300px] font-light rounded-full outline-none border-[0.5px] border-white/30 focus:placeholder-transparent text-center bg-white bg-opacity-20 text-black text-lg mb-4 transition-all duration-300 hover:bg-white/30 hover:border-[#b2ff5f] focus:border-[#b2ff5f] focus:bg-white/30 focus:shadow-md focus:shadow-[#b2ff5f]/20"
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`py-3 bg-[#b2ff5fdc] w-[200px] rounded-full active:bg-[#8ecc4ddc] active:scale-[98%] text-black text-lg transition-all duration-300 hover:bg-[#a1ee49] hover:shadow-md hover:shadow-[#b2ff5f]/40 hover:scale-[102%] ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Join Waitlist'}
              </button>
            </div>
          </form>
          
          {message && (
            <p className={`text-lg mt-4 ${
              message.includes('success') ? 'text-green-400' : 'text-red-400'
            }`}>
              {message}
            </p>
          )}
        </div>
      </div>
      
      {/* Gradient overlay for fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-black z-0" />
      
      {/* Scroll indicator - Now clickable with slower animation */}
      <div 
        className="absolute bottom-8 w-full flex justify-center z-20"
        onClick={scrollToNextSection}
      >
        <div className="cursor-pointer group">
          <ChevronDown className="w-8 h-8 text-white opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:text-[#b2ff5f] group-hover:scale-110 custom-slow-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;