import React from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import CategoryImage from "./CategoryImage";

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${category.slug}`}
      className="block relative bg-[#f6f5ff] rounded-2xl p-4 cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:bg-[#e8e6ff]"
    >
      <div className="absolute top-2 right-2 w-12 h-12 bg-purple-200 rounded-full opacity-30 transform rotate-45"></div>

      <div className="relative z-10 flex items-center gap-4">
        <div className="ml-auto flex-shrink-0">
          <CategoryImage category={category} />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-700 font-medium text-sm">
            مشاهده انواع
          </span>
          <span className="text-gray-700 font-medium text-sm">
            {category.name}
          </span>
        </div>
        <div className="w-8 h-8 bg-[#b9b2fb] rounded-lg flex items-center justify-center transition-colors duration-300 flex-shrink-0">
          <ChevronLeft className="w-4 h-4 text-[#4837f3]" />
        </div>  
      </div>
    </Link>
  );
};

export default CategoryCard;
