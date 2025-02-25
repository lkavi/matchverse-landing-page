import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-black bg-opacity-90 text-white py-8">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo Section */}
          <div className="flex flex-col justify-start items-center md:items-start">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#49d154] to-[#b2ff5f] bg-clip-text text-transparent font-Montserrat mb-4">
              MatchVerse
            </h1>
            <p className="text-gray-300 text-center md:text-left">
              Connecting people through shared interests and passions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col justify-start items-center md:items-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col items-center md:items-center">
              <li className="mb-2"><Link to="/" className="text-gray-300 hover:text-[#b2ff5f] transition duration-300">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="text-gray-300 hover:text-[#b2ff5f] transition duration-300">About</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-gray-300 hover:text-[#b2ff5f] transition duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="flex flex-col justify-start items-center md:items-end">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-[#b2ff5f] transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#b2ff5f] transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#b2ff5f] transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#b2ff5f] transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#b2ff5f] transition duration-300">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} MatchVerse. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Designed and Developed by CS-44
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;