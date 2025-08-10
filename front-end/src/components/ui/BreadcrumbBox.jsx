import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";

const BreadcrumbBox = ({ pageName }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full max-w-[500px] bg-[#e4e2fe] rounded-lg p-3 sm:p-4 flex items-center justify-center gap-2 sm:gap-4 m-4 sm:m-8 h-16 sm:h-14">
        <ChevronRight size={16} className="text-blue-700 sm:w-5 sm:h-5" />
        <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center text-center">
          <Link to="/" className="text-blue-700 font-bold text-xs sm:text-sm">خانه</Link>
          <span className="text-blue-700 text-xs sm:text-sm">/</span>
          <span className="text-blue-700 font-bold text-xs sm:text-sm break-words">{pageName}</span>
        </div>
        <ChevronLeft size={16} className="text-blue-700 sm:w-5 sm:h-5" />
      </div>
    </div>
  );
};

export default BreadcrumbBox; 