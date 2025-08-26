import React from "react";
import { Link } from "react-router-dom";
import { Home, ShoppingBag } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[80vh] overflow-hidden bg-white px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#4837f3] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#4837f3] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#4837f3] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-lg mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#4837f3] leading-none tracking-tight">
            404
          </h1>
        </div>

        {/* Main Message */}
        <div className="mb-8 md:mb-12">
          <h2 className="mb-3 text-xl font-bold text-gray-900 md:mb-4 md:text-2xl lg:text-3xl">
            صفحه مورد نظر یافت نشد
          </h2>
          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
            صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-3 mb-8 md:gap-4 md:mb-12 sm:flex-row">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 md:gap-3 bg-[#4837f3] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold hover:bg-[#3a2fd9] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Home size={18} className="transition-transform duration-300 md:w-5 md:h-5 group-hover:scale-110" />
            <span className="text-sm md:text-base">بازگشت به خانه</span>
          </Link>
          
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 md:gap-3 bg-white text-[#4837f3] px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold border-2 border-[#4837f3] hover:bg-[#4837f3] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <ShoppingBag size={18} className="transition-transform duration-300 md:w-5 md:h-5 group-hover:scale-110" />
            <span className="text-sm md:text-base">مشاهده فروشگاه</span>
          </Link>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-3 h-3 bg-[#4837f3] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 left-16 w-2 h-2 bg-[#4837f3] rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-16 w-4 h-4 bg-[#4837f3] rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default NotFound;
