import React from "react";

const NewsletterSubscription = () => {
  return (
    <div>
      <h3 className="text-base sm:text-lg font-bold text-gray-800 text-right mb-3 sm:mb-4">عضویت در خبرنامه</h3>
      <div className="relative">
        <input
          type="email"
          placeholder="آدرس ایمیل"
          className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-20 sm:pr-24 border border-gray-300 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm bg-white"
        />
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-l-md hover:bg-blue-700 transition-colors font-bold text-xs sm:text-sm whitespace-nowrap h-full">
          ارسال
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscription; 