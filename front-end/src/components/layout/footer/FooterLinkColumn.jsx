import React from "react";

export default function FooterLinkColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-gray-800">{title}</h4>
      <ul className="flex flex-col gap-2 sm:gap-3">
        {links.map((link, i) => (
          <li key={i} className="flex items-center gap-1 sm:gap-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-500 inline-block"></span>
            <a href={link.href} className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-blue-600 transition">{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
} 