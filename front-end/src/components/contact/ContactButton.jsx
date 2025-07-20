import React from "react";
import { Link } from "react-router-dom";

const ContactButton = ({ children, to, ...props }) => {
  const className = "bg-[#4837f3] text-white rounded-full px-4 sm:px-6 py-1.5 sm:py-2 mt-4 font-bold transition-colors duration-200 border-2 border-[#4837f3] hover:bg-white hover:text-[#4837f3] hover:border-[#4837f3] inline-block text-center text-xs sm:text-sm";
  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default ContactButton; 