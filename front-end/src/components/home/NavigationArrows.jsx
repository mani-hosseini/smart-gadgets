import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NavigationArrows = () => (
  <div className="absolute bottom-3 right-3 flex gap-1.5 z-10">
    <button className="w-9 h-9  rounded-full border border-[#4837f3] flex items-center justify-center hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md" style={{position: 'static'}}>
      <ChevronLeft className="w-5 h-5 text-[#4837f3]" />
    </button>
    <button className="w-9 h-9 bg-white rounded-full border border-[#4837f3] flex items-center justify-center hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md" style={{position: 'static'}}>
      <ChevronRight className="w-5 h-5  text-[#4837f3]" />
    </button>
  </div>
);

export default NavigationArrows;
