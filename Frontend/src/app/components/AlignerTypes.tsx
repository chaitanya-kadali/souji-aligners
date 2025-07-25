"use client";
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import HeadingBlue from './subcomp/HeadingBlue';

interface DentalCondition {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const dentalConditions: DentalCondition[] = [
  {
    id: 'teeth-gap',
    title: 'Teeth gap',
    description: 'A teeth alignment issue where there are spaces between the teeth. Invisible braces can effectively be used for closing the gaps.',
    imageUrl: '/tooth-gap.png' // Replace with your tooth gap image
  },
  {
    id: 'forwardly-placed',
    title: 'Forwardly placed',
    description: 'Where the upper teeth stick out far beyond the lower teeth. This requires ensuring jaw movement using clear aligners.',
    imageUrl: '/forwardly-placed.png' // Replace with your forwardly placed teeth image
  },
  {
    id: 'open-bite',
    title: 'Open bite',
    description: "The upper and lower teeth don't touch the front or back of the mouth when the jaw is shut. This can easily be addressed by using clear aligners.",
    imageUrl: '/open-bite.png' // Replace with your open bite image
  }, 
  {
    id: 'crooked-teeth',
    title: 'Crooked-teeth',
    description: 'rooked teeth refer to teeth that are misaligned, overlapping, or twisted They can impact both the appearance of your smile and your oral health',
    imageUrl: '/crooked-teeth.png' // Replace with your cross-bite image
  },
  {
    id: 'cross-bite',
    title: 'Cross-bite',
    description: 'The top and bottom teeth do not fall in the correct position on closing of jaws. A misalignment issue that can be effectively treated with invisible braces.',
    imageUrl: '/cross-bite.png' // Replace with your cross-bite image
  }
];

const AlignerTypes: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % dentalConditions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + dentalConditions.length) % dentalConditions.length);
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 p-5 py-2">
      <div className="max-w-[88%] mx-auto mt-20">
        {/* Header */}
        <div className="text-center mb-12">
          
          <HeadingBlue title='Dental Conditions Treatment'/>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how invisible braces and clear aligners can effectively treat various dental alignment issues
          </p>
        </div>

        {/* Desktop Carousel with 3 cards visible */}
        <div className="hidden lg:block relative mb-8">
          {/* Cards Grid */}
          <div className="grid grid-cols-3 gap-6 relative z-0">
            {dentalConditions.slice(currentIndex, currentIndex + 3).map((condition) => (
              <div
                key={condition.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden group ${
                  hoveredCard === condition.id ? 'ring-2 ring-blue-400 ring-opacity-60' : ''
                }`}
                onMouseEnter={() => setHoveredCard(condition.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Image Section */}
                <div className="relative p-6 pb-4">
                  <div className="relative w-full h-32 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <Image
                      fill
                      src={condition.imageUrl}
                      alt={condition.title}
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-6xl">🦷</div>`;
                        }
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-200">
                      {condition.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                      {condition.description}
                    </p>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons Cross Over Cards */}
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0}
            className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 z-10 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>

          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev + 3 < dentalConditions.length ? prev + 1 : prev
              )
            }
            disabled={currentIndex + 3 >= dentalConditions.length}
            className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-10 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>



        {/* Mobile Carousel View */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {dentalConditions.map((condition) => (
                <div key={condition.id} className="w-full flex-shrink-0">
                  <div className="bg-white p-6 m-2 rounded-xl">
                    <div className="relative w-full h-40 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl mb-5 flex items-center justify-center overflow-hidden">
                      <Image
                        fill
                        src={condition.imageUrl} 
                        alt={condition.title}
                        className="w-full h-full object-cover rounded-xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-8xl">🦷</div>`;
                          }
                        }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{condition.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{condition.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 rotate-180" />
            </button>
            
            <div className="flex space-x-2">
              {dentalConditions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default AlignerTypes;