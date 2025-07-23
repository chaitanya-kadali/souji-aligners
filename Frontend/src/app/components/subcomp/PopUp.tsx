'use client';

import { useState } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogTitle,AlertDialogHeader } from "@/components/ui/alert-dialog";
import { X, Phone, Sparkles, Star } from "lucide-react";

export default function PopUp() {
   const [open, setOpen] = useState(true);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      
      <AlertDialogContent className="bg-gradient-to-br from-white via-red-50 to-white border-0 shadow-2xl max-w-lg p-0 overflow-hidden rounded-3xl">
        
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
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-100 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-red-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-red-50 to-transparent opacity-40"></div>
        </div>
        
        {/* Close button */}
        <button 
          onClick={() => setOpen(false)} 
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-red-500 hover:text-red-700 hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl group"
        >
          <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
        </button>

        <div className="relative z-10 p-8">
          {/* Header with floating elements */}
          <div className="text-center mb-6 relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <Sparkles className="w-6 h-6 text-red-400 animate-bounce" />
            </div>
            <div className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent text-2xl font-bold mb-2">
              ✨ Transform Your Smile
            </div>
            <div className="text-gray-600 text-sm font-medium">
              Professional Teeth Aligners
            </div>
          </div>

          {/* Main content card */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-red-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-100 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-red-50 to-transparent rounded-tr-full"></div>
            
            <div className="relative z-10">
              {/* Brand name */}
              <div className="text-center mb-4">
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent mb-1">
                  SOUJI ALIGNERS
                </h1>
                <div className="flex justify-center items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-400 text-red-400" />
                  ))}
             
                </div>
              </div>

              {/* Call to action */}
              <div className="text-center mb-5">
                <p className="text-gray-700 text-sm mb-1 font-medium">
                  Get Your Perfect Smile Today!
                </p>
                <p className="text-gray-600 text-xs">
                  Free consultation • Custom treatment plans • Fast results
                </p>
              </div>

              {/* Phone number section */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-5 text-white relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-2 right-4 w-8 h-8 border-2 border-white rounded-full animate-ping"></div>
                  <div className="absolute bottom-3 left-6 w-6 h-6 border border-white rounded-full animate-pulse delay-500"></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="bg-white/20 p-2 rounded-full">
                      <Phone className="w-5 h-5 text-white animate-pulse" />
                    </div>
                    <span className="text-sm font-semibold">Call Us Now</span>
                  </div>
                  
                  <a 
                    href="tel:9391884433" 
                    className="block text-2xl font-bold tracking-wider hover:scale-105 transition-transform duration-200 mb-2"
                  >
                    📞 +91 9391884433
                  </a>
                  
                  <div className="text-xs opacity-90 font-medium">
                    Available 24/7 • Free Consultation
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="p-2">
                  <div className="text-lg">🦷</div>
                  <div className="text-xs text-gray-600 font-medium">Invisible</div>
                </div>
                <div className="p-2">
                  <div className="text-lg">⚡</div>
                  <div className="text-xs text-gray-600 font-medium">Fast Results</div>
                </div>
                <div className="p-2">
                  <div className="text-lg">💰</div>
                  <div className="text-xs text-gray-600 font-medium">Affordable</div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-4 text-center">
                <div className="text-xs text-gray-500 mb-2">Limited Time Offer</div>
                <div className="bg-red-50 text-red-700 px-4 py-2 rounded-xl text-sm font-semibold border border-red-200">
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