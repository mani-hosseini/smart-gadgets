import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";

const BreadcrumbBox = ({ pageName }) => {
  return (
    <div className="w-full max-w-[500px] mx-auto bg-[#e4e2fe] rounded-lg p-4 flex items-center justify-center gap-4 m-8">
      <ChevronRight size={20} className="text-blue-700" />
      <div className="flex items-center gap-2">
        <Link to="/" className="text-blue-700 font-bold">خانه</Link>
        <span className="text-blue-700">/</span>
        <span className="text-blue-700 font-bold">{pageName}</span>
      </div>
      <ChevronLeft size={20} className="text-blue-700" />
    </div>
  );
};

export default BreadcrumbBox; 