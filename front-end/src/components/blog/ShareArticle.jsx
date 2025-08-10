import React from "react";
import { Mail, Facebook, Twitter, MessageCircle } from "lucide-react";

const ShareArticle = () => {
  const socialButtons = [
    { icon: Mail, color: "bg-red-500 hover:bg-red-600", label: "ایمیل" },
    { icon: Facebook, color: "bg-blue-600 hover:bg-blue-700", label: "فیس‌بوک" },
    { icon: Twitter, color: "bg-sky-500 hover:bg-sky-600", label: "توییتر" },
    { icon: MessageCircle, color: "bg-green-500 hover:bg-green-600", label: "واتس‌اپ" }
  ];

  return (
    <div>
      <h3 className="text-base sm:text-lg font-bold text-gray-800 text-right mb-3 sm:mb-4">اشتراک گذاری مطلب</h3>
      <div className="flex justify-start gap-1 sm:gap-2">
        {socialButtons.map((social, index) => (
          <button
            key={index}
            className={`w-6 h-6 sm:w-8 sm:h-8 ${social.color} rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md`}
            title={social.label}
          >
            <social.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShareArticle; 