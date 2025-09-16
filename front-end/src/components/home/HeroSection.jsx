import React from "react";
import DecorativeTriangles from './DecorativeTriangles';
import DiscountBadge from './DiscountBadge';
import ProductSlider from './ProductSlider';
import HeroContent from './HeroContent';

const HeroSection = () => {
  return (
    <div className="relative w-full h-auto overflow-hidden bg-white">
      <DecorativeTriangles />
      
      <div className="container relative z-10 px-4 py-8 mx-auto lg:py-12">
         <div className="flex flex-col items-center justify-between gap-1 lg:flex-row sm:gap-2 md:gap-4 lg:gap-12">
          {/* Right side - 40% */}
          <div className="relative order-1 w-full lg:w-2/5 lg:order-1">
            <DiscountBadge />
            <ProductSlider />
          </div>

          {/* Left side - 60% */}
          <div className="order-2 w-full text-right lg:w-3/5 lg:order-2">
            <HeroContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 