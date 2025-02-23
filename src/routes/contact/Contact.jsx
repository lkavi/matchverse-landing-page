import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Instagram, Mail, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="text-white bg-gray-950 min-h-screen">
      <div className="backdrop-blur-sm">
        <div className="relative bg-black bg-opacity-30 z-10">
          <Navbar />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Social Links */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
            
            <div className="space-y-4">
              <a href="https://instagram.com" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
                <span>Follow us on Instagram</span>
              </a>
              
              <a href="mailto:contact@example.com" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Mail size={20} />
                <span>contact@example.com</span>
              </a>
              
              <a href="https://linkedin.com" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
                <span>Connect on LinkedIn</span>
              </a>
              
              <a href="tel:+1234567890" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                <Phone size={20} />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800 rounded-md focus:ring-2 focus:ring-blue-400 outline-none resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;