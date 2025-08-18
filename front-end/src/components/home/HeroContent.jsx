import React from "react";
import { Link } from "react-router-dom";

const HeroContent = () => (
  <div className="space-y-6">
    {/* Main Heading */}
    <div className="space-y-2">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 leading-tight">
        مجموعه ای متنوع
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#4837f3] leading-tight">
        از جدیدترین گجت های هوشمند
      </h2>
    </div>

    {/* Description */}
    <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی است.
    </p>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 pt-4">
      <Link
        to="/shop"
        className="bg-[#4837f3] text-white px-6 py-2.5 rounded-[50px] font-medium text-sm hover:bg-white hover:text-[#4837f3] transition-all duration-300 text-center shadow-sm hover:shadow-md border border-[#4837f3]"
      >
        مشاهده فروشگاه
      </Link>
      <Link
        to="/about"
        className="border border-[#4837f3] text-[#4837f3] px-6 py-2.5 rounded-[50px] font-medium text-sm hover:bg-[#4837f3] hover:text-white transition-all duration-300 text-center shadow-sm hover:shadow-md"
      >
        درباره ی ما
      </Link>
    </div>
  </div>
);

export default HeroContent;
