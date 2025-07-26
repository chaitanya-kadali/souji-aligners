"use client";

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Star, MapPin, Clock, Award, ArrowRight, Zap, Shield, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';

const HomeMain: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock images for the photo grid - replace with actual images
  const heroImages = [
    '/pat1.jpg', // Replace with actual patient images
   '/pat2.jpg',
  '/3d_pic.jpg' 
  ];

  useEffect(() => {

    // Image rotation for dynamic effect
    const imageRotation = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => {
      clearInterval(imageRotation);
    };
  }, [heroImages.length]);

  const handleWhatsAppClick = (number: string) => {
    window.open(`https://wa.me/${number.replace(/\s/g, '')}`, '_blank');
  };

  const handlePhoneClick = (number: string) => {
    window.location.href = `tel:${number.replace(/\s/g, '')}`;
  };


  const scrollToInfoSection = () => {
    const infoSection = document.getElementById('3d-mapping-info');
    if (infoSection) {
      infoSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
     {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 mt-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Hero Badge */}
            <button
              onClick={scrollToInfoSection}
              className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer"
            >
              <Award className="w-5 h-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
              <span className="text-gray-800 font-semibold text-lg group-hover:text-gray-900">
                World&apos;s First Aligners with 3D Mapping
              </span>
              <ArrowRight className="w-4 h-4 text-blue-500 group-hover:text-blue-600 transition-all duration-300 group-hover:translate-x-1" />
            </button>

            {/* Souji Aligners Logo/Brand */}
            <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur-lg opacity-75"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-blue-300/60">
                    <span className="text-white font-black text-2xl tracking-wider">SA</span>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 text-white animate-pulse" />
                    </div>
                  </div>
                </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  SOUJI ALIGNERS
                </h2>
                <div className="flex flex-col sm:flex-row items-center sm:space-x-2 space-y-1 sm:space-y-0 text-center sm:text-left">
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
           <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          {[
            { text: 'Faster than braces', icon: Zap },
            { text: 'More Comfortable', icon: Heart },
            { text: 'Invisible', icon: Sparkles },
            { text: 'Exclusively an Orthodontist Aligner', icon: Shield }
          ].map((benefit, index) => (
            <div
              key={index}
              className="relative bg-white/40 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 transform hover:scale-105 sm:hover:scale-110 transition-all duration-300 border-2 border-blue-100/60 hover:border-blue-200/80 shadow-xl hover:shadow-2xl group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-bl-full"></div>
              
              <div className="relative flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-gray-800 font-bold text-base sm:text-lg leading-tight flex-1">
                  {benefit.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-50/90 to-pink-50/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/40">
              <h3 className="text-gray-900 text-2xl font-bold mb-4">
                BOOK YOUR APPOINTMENT
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => handleWhatsAppClick('9391884433')}
                  className="flex items-center justify-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
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
                  src="/pat3.jpg"
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
              <div className="absolute -top-7 -right-4 bg-gradient-to-r from-blue-400 to-pink-400 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-bounce-slow border border-white/20 z-10">
                3D Mapping
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  )
};


export default HomeMain;