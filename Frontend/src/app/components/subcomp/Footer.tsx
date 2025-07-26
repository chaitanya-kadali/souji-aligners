"use client";
function Footer() {
  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div className="shadow-inner shadow-gray-300 w-full">
        <div className="bg-white min-h-[200px] mt-10 px-4 sm:px-8 md:px-12 lg:px-20 max-w-[80rem] mx-auto"> 

          <p className="logo-font tracking-wide text-2xl sm:text-3xl md:text-4xl pt-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent"> 
            Souji Aligners 
          </p>

          <div className="flex flex-col sm:flex-row pt-3 sm:pt-5 justify-between mt-3 sm:mt-5 gap-4 sm:gap-0 min-h-[80px] sm:h-20"> 
            
            {/* Privacy Policy & Terms - Stack on mobile */}
            <div className="flex flex-col sm:flex-row justify-center sm:items-center gap-2 sm:gap-x-4 order-2 sm:order-1">
              <p className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full text-xs sm:text-sm cursor-pointer text-center sm:text-left" 
                 onClick={() => handleClick('https://www.youtube.com')}> 
                Privacy Policy 
              </p>
              <p className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full text-xs sm:text-sm cursor-pointer text-center sm:text-left" 
                 onClick={() => handleClick('https://www.youtube.com')}> 
                Terms & Conditions
              </p>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-row justify-center sm:justify-end items-center gap-x-2 sm:gap-x-4 order-1 sm:order-2"> 
              <p className="text-lg sm:text-xl px-1 sm:px-2 font-semibold"> Connect </p> 
              
              {/* Arrow */}
              <div className="relative w-8 h-8 sm:w-10 sm:h-10"> 
                <div className="w-full h-full flex items-center justify-center text-2xl sm:text-3xl rotate-180">
                  ➤
                </div>
              </div>
              
              {/* Social Icons */}
              <div className="flex justify-center items-center gap-x-2 sm:gap-x-3">
                {/* Instagram */}
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 cursor-pointer bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center" 
                     onClick={() => handleClick('https://www.instagram.com/dcaredental')}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>

                {/* Facebook */}
                <div className="w-8 h-8 sm:w-[30px] sm:h-[30px] cursor-pointer bg-blue-600 rounded-lg flex items-center justify-center" 
                     onClick={() => handleClick('https://www.facebook.com')}> 
                  <svg className="w-5 h-5 sm:w-[18px] sm:h-[18px] text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-600 pb-4 text-xs sm:text-sm text-center sm:text-left">
            © Copyright 2025. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  )   
}

export default Footer;