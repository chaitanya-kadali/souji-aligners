"use client";

import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, Star, Sparkles, ExternalLink } from 'lucide-react';

const GoogleMapsComponent: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Clinic details - replace with actual clinic information
  const clinicDetails = {
    name: "D CARE DENTAL & SOUJI ALIGNERS",
    address: "123 Dental Street, Hyderabad, Telangana 500001",
    phone: "9391884433",
    coordinates: {
      lat: 17.3850, // Replace with actual latitude
      lng: 78.4867  // Replace with actual longitude
    },
    rating: 4.9,
    reviews: 150,
    hours: "Mon-Sat: 9:00 AM - 8:00 PM"
  };

  const handleMapClick = () => {
    // Open Google Maps with directions to the clinic
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${clinicDetails.coordinates.lat},${clinicDetails.coordinates.lng}&travelmode=driving`;
    window.open(googleMapsUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${clinicDetails.phone}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-red-100 p-6 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/30 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-200/20 rounded-full animate-float-delayed blur-sm"></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-red-150/25 rounded-full animate-bounce-slow blur-sm"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-red-200/30 rounded-full animate-pulse blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <MapPin className="w-8 h-8 text-red-400 animate-pulse" />
          </div>
          <h1 className="text-5xl font-black text-gray-800 mb-6 bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent leading-tight">
            Find Us Here
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Visit our state-of-the-art dental clinic for premium care and advanced aligner treatments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Clinic Information */}
          <div className="space-y-8">
            {/* Clinic Name Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-red-100/60 group hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-red-100/30 to-red-200/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-red-300/40 rounded-full animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg border-2 border-red-400/50">
                    <Sparkles className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                      {clinicDetails.name}
                    </h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-red-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm">
                        {clinicDetails.rating} ({clinicDetails.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Address Card */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border-2 border-red-100/60 group hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 via-transparent to-red-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {clinicDetails.address}
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border-2 border-red-100/60 group hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
                   onClick={handlePhoneClick}>
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 via-transparent to-red-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Phone</h3>
                  <p className="text-red-600 font-bold text-lg">
                    +91 {clinicDetails.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border-2 border-red-100/60 group hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 via-transparent to-red-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Opening Hours</h3>
                    <p className="text-gray-600">{clinicDetails.hours}</p>
                    <p className="text-sm text-red-600 font-medium">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <button
              onClick={handleMapClick}
              className="relative group w-full overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center space-x-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-8 py-4 rounded-2xl shadow-2xl border border-red-400/50">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <Navigation className="w-6 h-6 animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">Get Directions</div>
                  <div className="text-sm opacity-90">Open in Google Maps</div>
                </div>
                <ExternalLink className="w-5 h-5 opacity-75" />
              </div>
              <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12 group-hover:translate-x-[350%] transition-transform duration-1000"></div>
            </button>
          </div>

          {/* Right Side - Interactive Map */}
          <div className="relative">
            <div 
              className="relative group cursor-pointer"
              onClick={handleMapClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Map Container with Enhanced Styling */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border-2 border-red-100/60 group-hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-transparent to-red-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Map Iframe */}
                <div className="relative h-96 w-full">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6936604938887!2d${clinicDetails.coordinates.lng}!3d${clinicDetails.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjAiTiA3OMKwMjknMTIuMSJF!5e0!3m2!1sen!2sin!4v1635780000000!5m2!1sen!2sin`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-3xl transition-all duration-500 group-hover:brightness-110"
                  ></iframe>
                  
                  {/* Map Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                </div>

                {/* Floating Action Indicator */}
                <div className={`absolute top-6 right-6 bg-gradient-to-br from-red-500 to-red-600 text-white p-4 rounded-2xl shadow-2xl border-2 border-red-400/50 transition-all duration-500 ${isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-90'}`}>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-bold text-sm">Click for Directions</span>
                  </div>
                </div>

                {/* Location Pin Animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className={`w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white transition-all duration-500 ${isHovered ? 'scale-125 animate-bounce' : 'scale-100'}`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                    <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-lg border border-red-100">
                      <span className="text-red-600 font-bold text-xs">We're Here!</span>
                    </div>
                  </div>
                </div>

                {/* Ripple Effect */}
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="w-24 h-24 border-4 border-red-400/50 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 w-32 h-32 border-2 border-red-300/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>

              {/* Enhanced Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-400/20 via-red-500/10 to-red-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>

            {/* Map Info Badge */}
            <div className="absolute -bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border-2 border-red-100/60">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-800">Premium Dental Care</h4>
                  <p className="text-sm text-gray-600">Advanced Aligner Technology</p>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-medium text-red-600">Hyderabad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
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
    </div>
  );
};

export default GoogleMapsComponent;