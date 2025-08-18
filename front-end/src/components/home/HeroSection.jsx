import React from "react";
import DecorativeTriangles from './DecorativeTriangles';
import DiscountBadge from './DiscountBadge';
import ProductSlider from './ProductSlider';
import HeroContent from './HeroContent';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <DecorativeTriangles />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Right side - 40% */}
          <div className="w-full lg:w-2/5 order-2 lg:order-1 relative">
            <DiscountBadge />
            <ProductSlider />
          </div>

          {/* Left side - 60% */}
          <div className="w-full lg:w-3/5 text-right order-1 lg:order-2">
            <HeroContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 