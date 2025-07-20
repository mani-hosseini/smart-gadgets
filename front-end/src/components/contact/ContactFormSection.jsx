import React from "react";

const ContactFormSection = () => (
  <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 sm:gap-16 md:gap-20 my-12 sm:my-20 md:my-28 mt-0">
    <div className="w-full md:w-1/3 flex justify-center items-center mb-12 md:mb-0">
      <img src="/contact/smart-watch2.png" alt="ساعت هوشمند" className="max-w-[90px] sm:max-w-[120px] md:max-w-xs w-full h-auto" />
    </div>
    <div className="bg-gray-100 rounded-2xl p-6 w-full md:w-2/3 flex flex-col justify-center">
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-right mb-6">انتقادات و پیشنهادات خود را با ما در میان بگذارید:</h3>
      <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="نام" className="rounded-full bg-white px-4 py-2 text-xs sm:text-sm md:text-base text-right outline-none placeholder:text-[10px] sm:placeholder:text-xs md:placeholder:text-base" />
        <input type="text" placeholder="نام خانوادگی" className="rounded-full bg-white px-4 py-3 text-xs sm:text-sm md:text-base text-right outline-none placeholder:text-[10px] sm:placeholder:text-xs md:placeholder:text-base" />
        <input type="email" placeholder="ایمیل" className="rounded-full bg-white px-4 py-3 text-xs sm:text-sm md:text-base text-right outline-none placeholder:text-[10px] sm:placeholder:text-xs md:placeholder:text-base" />
        <input type="text" placeholder="شماره تماس" className="rounded-full bg-white px-4 py-3 text-xs sm:text-sm md:text-base text-right outline-none placeholder:text-[10px] sm:placeholder:text-xs md:placeholder:text-base" />
        <input type="text" placeholder="موضوع پیام" className="rounded-full bg-white px-4 py-3 text-xs sm:text-sm md:text-base text-right outline-none md:col-span-2 placeholder:text-[10px] sm:placeholder:text-xs md:placeholder:text-base" />
        <textarea placeholder="متن پیام" rows={4} className="rounded-2xl bg-white px-4 py-2 text-xs sm:text-sm md:text-base text-right outline-none md:col-span-2 resize-none placeholder:text-[10px] sm:placeholder:text-xs md:placeholder:text-base" />
      </form>
      <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
        <button type="submit" className="bg-[#4636f3] text-white rounded-full px-8 py-2 text-xs sm:text-sm md:text-base font-bold transition-colors duration-200 hover:bg-red-500 cursor-po w-40">ارسال</button>
        <p className="text-gray-400 text-xs sm:text-sm text-right">انتقادات و پیشنهادات خود را با ما در میان بگذارید.</p>
      </div>
    </div>
  </div>
);

export default ContactFormSection; 