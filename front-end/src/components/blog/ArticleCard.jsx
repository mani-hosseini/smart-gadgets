import React from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  const { imgSrc, title, excerpt, date, link } = article;

  return (
    <div className="flex flex-col gap-4 p-4 bg-white md:flex-row rounded-xl">
      {/* Article Image - Top on mobile, Left on desktop */}
      <div className="w-full h-auto md:w-28">
        <img 
          src={imgSrc} 
          alt={title} 
          className="object-cover w-full h-full rounded-xl" 
        />
      </div>
      
      {/* Article Content Card - Below image on mobile, Right side on desktop */}
      <div className="flex flex-col flex-1 transition-all duration-300">
        {/* Title */}
        <h3 className="mb-2 text-sm font-semibold leading-tight text-right text-gray-900 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="mb-3 text-xs leading-relaxed text-right text-gray-600 line-clamp-2">
          {excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          {/* Date and Icon */}
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-[#4837f3]" />
            <span className="text-xs text-gray-500">{date}</span>
            {/* Number Icon */}
            <div className="w-5 h-5 bg-[#4837f3] rounded-md flex items-center justify-center">
              <span className="text-xs font-medium text-white">8</span>
            </div>
          </div>

          {/* Read Button */}
          <Link
            to={link}
            className="bg-[#e9e7ff] text-[#4837f3] py-1.5 px-3 rounded-lg text-xs font-medium hover:bg-[#d8d4ff] transition-colors duration-200"
          >
            مطالعه
          </Link>
        </div>
      </div>
    </div>
  );
}
