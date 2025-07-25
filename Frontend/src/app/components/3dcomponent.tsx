"use client";

import React from 'react';
import { Phone, MessageCircle, Zap, Shield, Heart } from 'lucide-react';
import Image from 'next/image';

const ThreeDMappingInfo: React.FC = () => {
  const handleWhatsAppClick = (number: string) => {
    window.open(`https://wa.me/${number.replace(/\s/g, '')}`, '_blank');
  };

  const handlePhoneClick = (number: string) => {
    window.location.href = `tel:${number.replace(/\s/g, '')}`;
  };

  return (
    <section id="3d-mapping-info" className="relative min-h-screen overflow-hidden">
      {/* Matching Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-pink-50 animate-gradient-shift">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-pink-100/20"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-10 w-24 h-24 bg-pink-200/20 rounded-full animate-float"></div>
        <div className="absolute top-60 left-20 w-28 h-28 bg-blue-200/20 rounded-2xl rotate-12 animate-float-delayed"></div>
        <div className="absolute bottom-32 right-32 w-20 h-20 bg-pink-300/20 rounded-full animate-bounce-slow"></div>
        
        {/* Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1000 1000">
          <path
            d="M0,200 Q400,50 800,200 T1600,200"
            stroke="#EC4899"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,600 Q350,350 700,600 T1400,600"
            stroke="rgba(59,130,246,0.4)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1.5s' }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-blue-100">
              <Zap className="w-5 h-5 text-blue-500" />
              <span className="text-gray-800 font-semibold text-lg">
                Revolutionary 3D Technology
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                World&apos;s First{' '}
                <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  3D Mapping
                </span>{' '}
                Aligners
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Experience the future of orthodontic treatment with our revolutionary 3D mapping technology that creates the perfect fit for your unique smile.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {[
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: 'Precision 3D Scanning',
                  description: 'Advanced digital scanning creates an exact 3D model of your teeth for perfect alignment planning.'
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Predictable Results',
                  description: 'See your treatment outcome before you start with our advanced 3D visualization technology.'
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: 'Comfortable Experience',
                  description: 'Custom-fitted aligners ensure maximum comfort throughout your treatment journey.'
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-white/40 hover:bg-white/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-pink-400 rounded-xl flex items-center justify-center text-white shadow-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-50/90 to-pink-50/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/40">
              <h3 className="text-gray-900 text-2xl font-bold mb-4">
                Experience 3D Mapping Technology
              </h3>
              <p className="text-gray-700 mb-6">
                Book your consultation today and discover how our revolutionary 3D mapping technology can transform your smile.
              </p>



            </div>
          </div>

          {/* Right Content - 3D Technology Image */}
          <div className="relative">
            {/* Main 3D Technology Image */}
            <div className="relative">
              <div className="relative w-full h-96 bg-white/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/40 group">
                <Image
                  fill
                  src="/3d_pic.jpg"
                  alt="3D Mapping Technology"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-600 text-8xl bg-gradient-to-br from-blue-100/50 to-pink-100/50">🗺️</div>`;
                    }
                  }}
                />
                
                {/* Overlay with Technology Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              

              </div>

              {/* Floating Technology Badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-xl animate-bounce-slow border border-white/20 z-10">
                100% Accurate
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold shadow-xl animate-float border border-white/20 z-10">
                Digital Precision
              </div>
            </div>

            {/* Technology Features Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { title: '3D Scanning', value: '99.9%', subtitle: 'Accuracy' },
                { title: 'Treatment Time', value: '12-18', subtitle: 'Months' },
                { title: 'Comfort Level', value: '5/5', subtitle: 'Stars' },
                { title: 'Success Rate', value: '100%', subtitle: 'Satisfied' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/40 backdrop-blur-md rounded-xl p-4 border border-white/40 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/50"
                >
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-800">
                    {stat.title}
                  </div>
                  <div className="text-xs text-gray-600">
                    {stat.subtitle}
                  </div>
                </div>
              ))}
            </div>
                          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDMappingInfo;


            {/* Decorative Elements */}
            {/* <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r */}