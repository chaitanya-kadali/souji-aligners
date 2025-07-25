import { FC } from "react";

const WhatsAligners: FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-blue-50/30 py-24 px-6 md:px-24 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-bounce delay-500"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 relative inline-block group cursor-pointer">
            <span className="relative z-10 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-blue-800 group-hover:to-blue-600 transition-all duration-700">
              What are Clear Aligners and How Do They Work?
            </span>
            <span className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 opacity-30 -rotate-1 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500 rounded-full shadow-lg"></span>
            <span className="absolute bottom-0 left-2 w-full h-2 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 opacity-20 rotate-1 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500 rounded-full"></span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8 rounded-full shadow-sm"></div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Clear aligners are transparent, custom-made trays that gently shift your teeth into proper alignment over time. 
            They offer a <span className="font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">convenient</span> and <span className="font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">comfortable</span> alternative to traditional metal braces, 
            suitable for individuals aged 10 to 50.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border-t-4 border-blue-500 transition-all duration-700 hover:shadow-3xl hover:shadow-blue-500/25 hover:scale-110 hover:border-blue-600 hover:-translate-y-4 group relative overflow-hidden cursor-pointer">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-400/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>
            
            {/* Floating particles effect */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse delay-300"></div>
            <div className="absolute top-1/2 right-8 w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce delay-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-3xl group-hover:shadow-blue-600/40 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 border border-blue-500/20">
                <span className="text-3xl text-white group-hover:scale-110 transition-transform duration-300">🦷</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                Discreet & Comfortable
              </h3>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                These invisible aligners are crafted precisely using a 3D digital scan of your teeth, ensuring a perfect and snug fit.
              </p>
              <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 rounded-full"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border-t-4 border-blue-500 transition-all duration-700 hover:shadow-3xl hover:shadow-blue-500/25 hover:scale-110 hover:border-blue-600 hover:-translate-y-4 group relative overflow-hidden cursor-pointer delay-100">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-400/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>
            
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-100"></div>
            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse delay-400"></div>
            <div className="absolute top-1/2 right-8 w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce delay-600"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-3xl group-hover:shadow-blue-600/40 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 border border-blue-500/20">
                <span className="text-3xl text-white group-hover:scale-110 transition-transform duration-300">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                Step-by-Step Progress
              </h3>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                You&apos;ll receive a series of aligner sets tailored to your personalized treatment plan. Each set works gradually to reposition your teeth closer to the ideal alignment.
              </p>
              <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 rounded-full"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border-t-4 border-blue-500 transition-all duration-700 hover:shadow-3xl hover:shadow-blue-500/25 hover:scale-110 hover:border-blue-600 hover:-translate-y-4 group relative overflow-hidden cursor-pointer delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-400/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>
            
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-200"></div>
            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse delay-500"></div>
            <div className="absolute top-1/2 right-8 w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce delay-700"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-3xl group-hover:shadow-blue-600/40 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 border border-blue-500/20">
                <span className="text-3xl text-white group-hover:scale-110 transition-transform duration-300">⏱️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                Personalized Timeline
              </h3>
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                The length of treatment varies from person to person. On average, the journey to your dream smile takes between 6 months to 2 years.
              </p>
              <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <button className="relative px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl hover:shadow-blue-600/40 hover:scale-110 hover:-translate-y-2 transition-all duration-500 transform group overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            <span className="relative z-10 group-hover:text-blue-100 transition-colors duration-300">
              Start Your Smile Journey ✨
            </span>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatsAligners;