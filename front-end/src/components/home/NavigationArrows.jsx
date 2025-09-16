import React from "react";

const NavigationArrows = ({ swiperId = "main" }) => {
  return (
    <>
      <button 
        className={`absolute z-20 flex items-center justify-center w-8 h-8 transition-all duration-500 transform -translate-y-1/2 border-2 rounded-full shadow-lg cursor-pointer sm:w-10 sm:h-10 md:w-12 md:h-12 border-blue-200/60 custom-prev-btn-${swiperId} left-1 sm:left-2 md:left-4 top-1/2 bg-gradient-to-br from-white via-blue-50 to-purple-50 backdrop-blur-md hover:from-blue-100 hover:to-purple-100 hover:border-blue-400/80 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:-translate-x-1`}
        onClick={() => {
          const swiper = document.querySelector(`.swiper-${swiperId}`)?.swiper;
          if (swiper) swiper.slidePrev();
        }}
      >
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#2563eb"
          strokeWidth="2.5"
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="transition-transform duration-300 sm:w-5 sm:h-5 md:w-5 md:h-5 hover:scale-110"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        className={`absolute z-20 flex items-center justify-center w-8 h-8 transition-all duration-500 transform -translate-y-1/2 border-2 rounded-full shadow-lg cursor-pointer sm:w-10 sm:h-10 md:w-12 md:h-12 border-blue-200/60 custom-next-btn-${swiperId} right-1 sm:right-2 md:right-4 top-1/2 bg-gradient-to-br from-white via-blue-50 to-purple-50 backdrop-blur-md hover:from-blue-100 hover:to-purple-100 hover:border-blue-400/80 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:translate-x-1`}
        onClick={() => {
          const swiper = document.querySelector(`.swiper-${swiperId}`)?.swiper;
          if (swiper) swiper.slideNext();
        }}
      >
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#2563eb"
          strokeWidth="2.5"
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="transition-transform duration-300 sm:w-5 sm:h-5 md:w-5 md:h-5 hover:scale-110"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
};

export default NavigationArrows;
