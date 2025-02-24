import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Instagram, Mail, Linkedin, Phone, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setShowSuccessMessage(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setShowSuccessMessage(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="relative z-10">
        <Navbar />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-4 text-white">Get in Touch</h1>
        <p className="text-center text-emerald-400 text-lg mb-16 max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you. Drop us a message, and we'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl transform transition-all hover:shadow-green-900/20 hover:border-green-500/30">
            <h2 className="text-2xl font-semibold mb-8 text-white flex items-center">
              <MessageSquare className="mr-3 text-emerald-400" />
              Send us a Message
            </h2>
            
            {showSuccessMessage ? (
              <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-6 text-center animate-fade-in">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Message Sent!</h3>
                <p className="text-emerald-300">Thanks for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-emerald-300 flex items-center">
                    <User size={16} className="mr-2" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none border border-white/10 text-white transition-all hover:border-white/30 placeholder-white/30"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-emerald-300 flex items-center">
                    <Mail size={16} className="mr-2" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none border border-white/10 text-white transition-all hover:border-white/30 placeholder-white/30"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-emerald-300 flex items-center">
                    <MessageSquare size={16} className="mr-2" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-black/40 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none resize-none border border-white/10 text-white transition-all hover:border-white/30 placeholder-white/30"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:translate-y-1 flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Social Links */}
          <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl transform transition-all hover:shadow-green-900/20 hover:border-green-500/30">
            <h2 className="text-2xl font-semibold mb-8 text-white">Connect With Us</h2>
            
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-lg font-medium text-emerald-300 mb-6">Follow Our Socials</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://instagram.com" 
                    className="flex items-center gap-3 text-white p-4 rounded-lg bg-black/30 hover:bg-emerald-900/30 transition-all hover:translate-x-1 border border-white/5 hover:border-emerald-500/30"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                      <Instagram size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="block text-sm text-white/70">Follow us on</span>
                      <span className="font-medium">Instagram</span>
                    </div>
                  </a>
                  
                  <a 
                    href="https://linkedin.com" 
                    className="flex items-center gap-3 text-white p-4 rounded-lg bg-black/30 hover:bg-emerald-900/30 transition-all hover:translate-x-1 border border-white/5 hover:border-emerald-500/30"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Linkedin size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="block text-sm text-white/70">Connect on</span>
                      <span className="font-medium">LinkedIn</span>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="group">
                <h3 className="text-lg font-medium text-emerald-300 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:contact@example.com" 
                    className="flex items-center gap-4 text-white p-4 rounded-lg bg-black/30 hover:bg-emerald-900/30 transition-all hover:translate-x-1 border border-white/5 hover:border-emerald-500/30"
                  >
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="block text-sm text-white/70">Email us at</span>
                      <span className="font-medium">mail@matchverse.net</span>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+94766719595" 
                    className="flex items-center gap-4 text-white p-4 rounded-lg bg-black/30 hover:bg-emerald-900/30 transition-all hover:translate-x-1 border border-white/5 hover:border-emerald-500/30"
                  >
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="block text-sm text-white/70">Call us at</span>
                      <span className="font-medium">+94 76 671 9595</span>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="group pt-6">
                <div className="p-6 bg-emerald-900/20 rounded-lg border border-emerald-500/20">
                  <h3 className="text-lg font-medium text-white mb-2">Office Hours</h3>
                  <p className="text-emerald-200 mb-4">We're available to help you Monday through Friday</p>
                  <div className="grid grid-cols-2 gap-2 text-white/80">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map or additional info section */}
        <div className="mt-16 backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-white text-center">Our Mission</h2>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            At Matchverse, we're dedicated to creating the perfect environment for gamers to connect, compete, and grow.
            Our platform is designed to make booking venues and finding matches as seamless as possible,
            so you can focus on what matters most - your game.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;