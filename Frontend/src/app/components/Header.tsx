"use client";

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle} from 'lucide-react';
import Image from 'next/image';
import HomeMain from './HomeMain';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleWhatsAppClick = (number: string) => {
    window.open(`https://wa.me/${number.replace(/\s/g, '')}`, '_blank');
  };

  const handlePhoneClick = (number: string) => {
    window.location.href = `tel:${number.replace(/\s/g, '')}`;
  };

  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-pink-50 animate-gradient-shift">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-pink-100/20"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-200/20 rounded-2xl rotate-45 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-blue-300/20 rounded-full animate-bounce-slow"></div>
        
        {/* Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1000 1000">
          <path
            d="M0,300 Q250,100 500,300 T1000,300"
            stroke="#3B82F6"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,500 Q300,200 600,500 T1200,500"
            stroke="rgba(219,39,119,0.3)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-blue-100' 
          : 'bg-white/10 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Unique Logo Section with Tooth */}
            <div className="flex items-center space-x-4 group">
              {/* Animated Logo Container */}
              <div className="relative w-12 h-12 bg-gradient-to-br rounded-xl flex items-center justify-center shadow-lg p-1">
                <Image
                fill
                    src="/logo.png" // Replace with the correct path
                    alt="D Care Dental Logo"
                    className="object-contain w-full h-full transition-transform duration-300 hover:scale-110"
                />
                </div>

            
              {/* Brand Text with Animation */}
              <div className="relative">
                <h1 className="font-extrabold  text-2xl  bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                  D CARE DENTAL & SOUJI ALIGNERS
                </h1>
              </div>
            </div>

            {/* Unique Contact Buttons with 3D Effect */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleWhatsAppClick('9391884433')}
                className="relative group/btn overflow-hidden"
              >
                      {/* Button Background */}
                      <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-blue-300">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-sm">WhatsApp</div>
                          {/* <div className="text-xs opacity-90">Instant Chat</div> */}
                        </div>
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300 -z-10"></div>
                      {/* Shine Animation */}
                      <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 group-hover/btn:translate-x-[300%] transition-transform duration-700"></div>
              </button>
              
              <button
                onClick={() => handlePhoneClick('9391884433')}
                className="relative group/btn overflow-hidden"
              >
                {/* Button Background */}
                <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-blue-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm">Call Now</div>
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300 -z-10"></div>
                {/* Shine Animation */}
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 group-hover/btn:translate-x-[300%] transition-transform duration-700"></div>
              </button>
            </div>
          </div>
          
          {/* Decorative Line */}
          <div className="mt-4 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-60"></div>
        </div>
      </nav>

    <HomeMain />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-30px) rotate(45deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-gradient-shift {
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header; 