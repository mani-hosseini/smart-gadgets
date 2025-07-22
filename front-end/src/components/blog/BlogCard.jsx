import React from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({ imgSrc, title, description, date, link }) {
  return (
    <div className="bg-white p-4 gap-4 rounded-2xl overflow-hidden flex flex-col md:flex-row-reverse items-stretch transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <div className="w-full md:w-36 flex-shrink-0">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 md:h-full rounded-2xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-2 flex-grow text-right">
        <h3 className="text-base text-gray-800 mt-2 md:mt-0 mb-2 morabba">
          {title}
        </h3>
        <p className="text-gray-600 text-xs">{description}</p>
        <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
          <Link
            to={link}
            className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-indigo-200"
          >
            مطالعه
          </Link>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-5 h-5 text-indigo-500" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 