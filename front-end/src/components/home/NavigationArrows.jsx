import React from "react";

const NavigationArrows = () => {
  return (
    <>
      {/* Previous Button - Positioned exactly next to product image */}
      <button className="swiper-button-prev absolute -left-8 md:-left-16 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-full flex items-center justify-center hover:bg-white hover:border-[#8377f7] hover:shadow-xl transition-all duration-300 shadow-md">
        <svg 
          className="w-5 h-5 text-gray-500 hover:text-[#8377f7] transition-colors duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
      </button>

      {/* Next Button - Positioned exactly next to product image */}
      <button className="swiper-button-next absolute -right-8 md:-right-16 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm border border-gray-100 rounded-full flex items-center justify-center hover:bg-white hover:border-[#8377f7] hover:shadow-xl transition-all duration-300 shadow-md">
        <svg 
          className="w-5 h-5 text-gray-500 hover:text-[#8377f7] transition-colors duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </button>
    </>
  );
};

export default NavigationArrows;
