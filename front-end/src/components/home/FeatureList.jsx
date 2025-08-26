import React from "react";

const FeatureList = ({ features, position }) => {
  return (
    <div className={`flex flex-col gap-4 ${position === 'left' ? 'items-start' : 'items-end'}`}>
      {features.map((feature, index) => (
        <div 
          key={index} 
          className={`flex items-center gap-3 ${
            position === 'left' ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          {/* Checkmark Icon */}
          <div className="w-6 h-6 bg-[#b6affa] rounded-lg flex items-center justify-center border border-[#8377f7] flex-shrink-0">
            <svg 
              className="w-4 h-4 text-[#8377f7]" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
          
          {/* Feature Text */}
          <span className="text-gray-700 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
