"use client";

import instagram from "@/../public/instagram.png";
import arrow from "@/../public/arrow2.png";
import Image from "next/image";

function Footer() {
  const handleClick = (url: string) => {
  window.open(url, '_blank');
};

  return(
    <>
    <div className="shadow-inner shadow-gray-300 w-full">
    <div className="bg-white h-50 mt-10 px-20 max-w-[80rem] mx-auto "> 

      <p className="logo-font tracking-wide text-4xl h-15 bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent"> Souji Aligners </p>

    <div className="flex flex-row pt-5 justify-between mt-5 h-20"> 
        
        <div className="mt-2 flex flex-row justify-center items-center gap-x-4 mb-18">
               <p className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full text-s  cursor-pointer" onClick={() => handleClick('https://www.youtube.com')}> Privacy Policy </p>
              <p className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full text-s  cursor-pointer" onClick={() => handleClick('https://www.youtube.com')}> Terms & Conditions</p>
        </div>

        <div className="relative flex flex-row w-160 h-10 justify-end items-center gap-x-4"> 
             <p className="text-xl px-2 font-semibold"> Connect </p> 
              <div className="relative w-10 h-10"> 
                <Image fill 
                src={arrow} alt="a" className="object-contain rotate-270"
                onError={(e) => {
                        // Fallback to a colored div if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-6xl">🦷</div>`;
                        }
                        }}
                />
            </div>
            
            <div className="relative flex justify-center items-center gap-x-3 ">
              <div className="relative w-10 h-10 cursor-pointer" onClick={() => handleClick('https://www.instagram.com')}>
                <Image fill 
                src={instagram} alt="insta" className="object-contain" 
                 onError={(e) => {
                      // Fallback to a colored div if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-6xl">🦷</div>`;
                      }
                    }}
                />
              </div>

              <div className="w-[30px] cursor-pointer" onClick={() => handleClick('https://www.facebook.com')}> 
                  <svg className="w-[100%] h-[100%]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                  </svg>
              </div>

          </div>

        </div>

  </div>

  <div className="text-gray-600 pb-2">
    © Copyright 2025. All Rights Reserved.
  </div>

  </div>
   </div>
    </>
  )   
}

export default Footer;