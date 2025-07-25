'use client';

import { useState } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogTitle,AlertDialogHeader } from "@/components/ui/alert-dialog";
import { X, Phone, Sparkles, Star } from "lucide-react";

export default function PopUp() {
   const [open, setOpen] = useState(true);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      
      <AlertDialogContent className="bg-gradient-to-br from-white via-blue-50 to-white border-0 shadow-2xl w-[90vw] max-w-[320px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[580px] p-0 overflow-hidden rounded-2xl md:rounded-3xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto">
        
        <AlertDialogHeader>
          <AlertDialogTitle className="sr-only">
              props sat
          </AlertDialogTitle>
        </AlertDialogHeader>

        <AlertDialogTitle className="sr-only">
              props sat
          </AlertDialogTitle>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-20 h-20 md:w-32 md:h-32 bg-blue-100 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 md:-bottom-16 md:-left-16 w-28 h-28 md:w-40 md:h-40 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 bg-gradient-radial from-blue-50 to-transparent opacity-40"></div>
        </div>
        
        {/* Close button */}
        <button 
          onClick={() => setOpen(false)} 
          className="absolute top-3 right-3 md:top-4 md:right-4 z-20 w-7 h-7 md:w-8 md:h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-500 hover:text-blue-700 hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl group"
        >
          <X className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:rotate-90 transition-transform duration-200" />
        </button>

        <div className="relative z-10 p-3 sm:p-4 md:p-6 lg:p-8">
          {/* Header with floating elements */}
          <div className="text-center mb-3 sm:mb-4 md:mb-6 relative">
            <div className="absolute -top-1 md:-top-2 left-1/2 transform -translate-x-1/2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400 animate-bounce" />
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2">
              ✨ Transform Your Smile
            </div>
            <div className="text-gray-600 text-xs md:text-sm font-medium">
              Professional Teeth Aligners
            </div>
          </div>

          {/* Main content card */}
          <div className="bg-white/70 backdrop-blur-md rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl border border-blue-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-tr from-blue-50 to-transparent rounded-tr-full"></div>
            
            <div className="relative z-10">
              {/* Brand name */}
              <div className="text-center mb-2 sm:mb-3 md:mb-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent mb-1">
                  SOUJI ALIGNERS
                </h1>
                <div className="flex justify-center items-center gap-1 mb-2 md:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-blue-400 text-blue-400" />
                  ))}
                </div>
              </div>

              {/* Call to action */}
              <div className="text-center mb-3 sm:mb-4 md:mb-5">
                <p className="text-gray-700 text-xs md:text-sm mb-1 font-medium">
                  Get Your Perfect Smile Today!
                </p>
                <p className="text-gray-600 text-xs">
                  Free consultation • Custom treatment plans • Fast results
                </p>
              </div>

              {/* Phone number section */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 text-white relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-2 right-3 md:right-4 w-6 h-6 md:w-8 md:h-8 border-2 border-white rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 md:bottom-3 left-4 md:left-6 w-5 h-5 md:w-6 md:h-6 border border-white rounded-full animate-pulse delay-500"></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="bg-white/20 p-1.5 md:p-2 rounded-full">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-white animate-pulse" />
                    </div>
                    <span className="text-xs md:text-sm font-semibold">Call Us Now</span>
                  </div>
                  
                  <a 
                    href="tel:9391884433" 
                    className="block text-lg sm:text-xl md:text-2xl font-bold tracking-wider hover:scale-105 transition-transform duration-200 mb-2"
                  >
                    📞 +91 9391884433
                  </a>
                  
                  <div className="text-xs opacity-90 font-medium">
                    Available 24/7 • Free Consultation
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-2 sm:mt-3 md:mt-4 grid grid-cols-3 gap-1 md:gap-2 text-center">
                <div className="p-1 sm:p-1.5 md:p-2">
                  <div className="text-sm sm:text-base md:text-lg">🦷</div>
                  <div className="text-xs text-gray-600 font-medium">Invisible</div>
                </div>
                <div className="p-1 sm:p-1.5 md:p-2">
                  <div className="text-sm sm:text-base md:text-lg">⚡</div>
                  <div className="text-xs text-gray-600 font-medium">Fast Results</div>
                </div>
                <div className="p-1 sm:p-1.5 md:p-2">
                  <div className="text-sm sm:text-base md:text-lg">💰</div>
                  <div className="text-xs text-gray-600 font-medium">Affordable</div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-2 sm:mt-3 md:mt-4 text-center">
                <div className="text-xs text-gray-500 mb-2">Limited Time Offer</div>
                <div className="bg-blue-50 text-blue-700 px-2 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold border border-blue-200">
                  🎉 Get Your First Treatment Plan
                </div>
              </div>
            </div>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}