import React from "react";
import Logo from "../header/Logo";
import SocialIcons from "./SocialIcons";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Topsection() {
  return (
    <div className="w-[96%] sm:w-[90%] mx-auto flex flex-col md:flex-row md:gap-x-4 justify-between items-start gap-4 sm:gap-6 md:gap-0">
      <div className="flex-1 flex flex-col gap-y-2 sm:gap-y-4 min-w-0">
        <Logo />
        <p className="text-gray-500 text-[11px] sm:text-xs md:text-sm mt-1 sm:mt-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
          از طراحان گرافیک است.چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم و ضروری است.
        </p>
        <SocialIcons />
      </div>
      <div className="flex-1 flex flex-col md:flex-row gap-2 sm:gap-4 items-start justify-between mt-2 sm:mt-4 md:mt-0">
        <div className="flex flex-col gap-4 sm:gap-6 items-start w-full md:w-auto">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white text-gray-400 text-lg sm:text-xl transition-colors duration-200 hover:bg-red-100 hover:text-red-400 cursor-pointer">
              <Phone size={18} className="sm:size-5" />
            </span>
            <span className="text-xs sm:text-sm text-gray-600 font-bold">پشتیبانی: 021-1234567</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white text-gray-400 text-lg sm:text-xl transition-colors duration-200 hover:bg-red-100 hover:text-red-400 cursor-pointer">
              <MapPin size={18} className="sm:size-5" />
            </span>
            <span className="text-xs sm:text-sm text-gray-600">تهران، میدان ونک خیابان برزیل روبروی دانشگاه فنی حرفه ای تهران پلاک ۱۲۳</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white text-gray-400 text-lg sm:text-xl transition-colors duration-200 hover:bg-red-100 hover:text-red-400 cursor-pointer">
              <Mail size={18} className="sm:size-5" />
            </span>
            <div className="flex flex-col text-xs sm:text-sm text-gray-600 gap-0.5">
              <span>info@example.com</span>
              <span>support@example.com</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col gap-1 sm:gap-2 items-center w-full justify-center md:w-auto md:items-center md:justify-start mt-4 md:mt-0">
          <img src="/footer/license.png" alt="license" className="w-12 sm:w-15 h-auto" />
          <img src="/footer/license.png" alt="license" className="w-12 sm:w-15 h-auto" />
          <img src="/footer/license.png" alt="license" className="w-12 sm:w-15 h-auto" />
        </div>
      </div>
    </div>
  );
}
