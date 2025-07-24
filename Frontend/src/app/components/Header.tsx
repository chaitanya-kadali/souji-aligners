"use client";

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Star, MapPin, Clock, Award } from 'lucide-react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock images for the photo grid - replace with actual images
  const heroImages = [
    '/pat1.jpg', // Replace with actual patient images
   '/pat2.jpg',
  '/pat3.jpg' 
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Image rotation for dynamic effect
    const imageRotation = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageRotation);
    };
  }, [heroImages.length]);

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
                <h1 className="font-extrabold  text-2xl  bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
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
                      <div className="flex items-center space-x-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-green-300">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-sm">WhatsApp</div>
                          {/* <div className="text-xs opacity-90">Instant Chat</div> */}
                        </div>
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl blur-lg opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300 -z-10"></div>
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

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 mt-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Hero Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-blue-100">
              <Award className="w-5 h-5 text-blue-500" />
              <span className="text-gray-800 font-semibold text-lg">
                World&apos;s First Aligners with 3D Mapping
              </span>
            </div>

            {/* Souji Aligners Logo/Brand */}
            <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-xl flex items-center justify-center shadow-lg border-2 border-pink-100">
                {/* Placeholder for Souji Aligners logo */}
                <span className="text-gray-800 font-bold text-2xl">SA</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  SOUJI ALIGNERS
                </h2>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-blue-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-700">World-Class Technology</span>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {[
                'Faster than braces',
                'More Comfortable',
                'Invisible',
                'Exclusively an Orthodontist Aligner'
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/30 backdrop-blur-md rounded-xl p-4 transform hover:scale-105 transition-all duration-200 border border-white/40 hover:bg-white/40"
                >
                  <h3 className="text-gray-800 font-bold text-lg leading-tight">
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-50/90 to-pink-50/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/40">
              <h3 className="text-gray-900 text-2xl font-bold mb-4">
                BOOK YOUR APPOINTMENT
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => handleWhatsAppClick('9391884433')}
                  className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-bold">9391 88 44 33</div>
                    <div className="text-sm opacity-90">WhatsApp</div>
                  </div>
                </button>
                
                <button
                  onClick={() => handlePhoneClick('9391884433')}
                  className="flex items-center justify-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-bold">9391884433</div>
                    <div className="text-sm opacity-90">Call Now</div>
                  </div>
                </button>
              </div>
              
              {/* Additional Info */}
              <div className="flex items-center justify-center mt-6 space-x-6 text-gray-700">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Telangana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            {/* Main Feature Image */}
            <div className="relative mb-6">
              <div className="relative w-full h-64 bg-white/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/40">
                <Image
                fill
                  src="/3d_pic.jpg"
                  alt="Patient with aligner"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-600 text-6xl bg-gradient-to-br from-pink-100/50 to-blue-100/50">😁</div>`;
                    }
                  }}
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-400 to-pink-400 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce-slow border border-white/20">
                3D Mapping
              </div>
            </div>

            {/* Image Grid */}
            <div className="relative grid grid-cols-3 gap-3">
              {heroImages.slice(0, 6).map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/30 transform transition-all duration-500 ${
                    index === currentImageIndex 
                      ? 'scale-110 ring-2 ring-blue-300/60 z-10' 
                      : 'hover:scale-105'
                  }`}
                >
                  <Image 
                  fill
                    src={image}
                    alt={`Treatment ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-600 text-2xl bg-gradient-to-br from-pink-100/50 to-blue-100/50">🦷</div>`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>

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