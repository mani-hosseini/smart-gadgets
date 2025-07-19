import React from "react";
import {
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react";

const icons = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Send, label: "Telegram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4">
      {icons.map(({ icon: Icon, label, href }, i) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white text-blue-500 text-lg sm:text-xl transition-colors duration-200 hover:bg-red-100 hover:text-red-400 cursor-pointer "
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon size={18} className="sm:size-5" />
        </a>
      ))}
    </div>
  );
} 