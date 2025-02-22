import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import axios from "axios";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwmYHxQBqd6_GbUgRhQD-vQE4Ml0vQD5vOS1qUwRynW-ML5g4uSq_sRkOCdKdBLhD2j/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    // Format the data as URL parameters
    const formData = new FormData();
    formData.append('email', email);

    try {
      // Use fetch instead of axios for this specific case
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // This is important for Google Apps Script
      });

      // Since we're using no-cors, we can't actually read the response
      // So we'll assume success if we get here
      setMessage("Email submitted successfully!");
      setEmail("");
      
    } catch (error) {
      console.error('Error details:', error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-white bg-[url(./assets/HeroBG.jpg)] bg-cover bg-center">
      <div className='bg-black bg-opacity-70'>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#b2ff5f] font-bold p-2">GAMING MADE EASY</p>
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold">
          Book your game now
        </h1>
        <div>
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
          <p className="md:text-3xl sm:text-2xl text-xl text-slate-400 font-semibold">
            Be the first to experience MatchVerse
          </p>
          <form className="my-6 flex flex-col items-center" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-3 px-4 w-[300px] font-light rounded-full outline-none border-[0.5px] focus:placeholder-transparent text-center bg-white bg-opacity-20 text-black text-lg mb-4"
              required
              disabled={isLoading}
            />
            <button
              type="submit"
              className={`py-3 bg-[#b2ff5fdc] w-[200px] rounded-full active:bg-[#8ecc4ddc] active:scale-[98%] text-black text-lg  ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Join Waitlist'}
            </button>
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
      </div>
    </div>
  );
};

export default Hero;