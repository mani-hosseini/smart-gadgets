import React from "react";
import { Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({ imgSrc, title, date, comments, link, size = "small" }) {
  const isLarge = size === "large";
  return (
    <Link
      to={link}
      className={`relative block rounded-2xl overflow-hidden group w-full h-full transition-all duration-300 ${
        isLarge ? "min-h-[380px] md:min-h-[380px] md:h-[380px]" : "min-h-[180px] md:min-h-[180px] md:h-[180px]"
      }`}
    >
      <img
        src={imgSrc}
        alt={title}
        className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${isLarge ? "min-h-[380px] md:min-h-[380px] md:h-[380px]" : "min-h-[180px] md:min-h-[180px] md:h-[180px]"}`}
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
      <div className={`absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end z-10 ${isLarge ? "gap-2" : "gap-1"}`}>
        <div className="flex items-center justify-between text-[11px] text-gray-100 mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-white/80" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4 text-white/80" />
            <span>{comments === 0 ? "بدون دیدگاه" : `${comments} دیدگاه`}</span>
          </div>
        </div>
        <h3 className={`text-white leading-snug drop-shadow mb-1 line-clamp-2 font-normal text-center ${isLarge ? "text-base md:text-lg" : "text-xs md:text-sm"}`}>{title}</h3>
      </div>
    </Link>
  );
} 