import React from "react";

export default function WelcomeBox() {
  let username = "کاربر";
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username) username = user.username;
  } catch {}
  return (
    <div className="flex flex-col justify-between min-w-[180px] min-h-[180px] sm:min-w-[120px] sm:min-h-[120px] text-right">
      <div>
        <div className="font-normal text-indigo-700 mb-2 text-lg sm:text-base">سلام {username}</div>
        <div className="text-gray-600 text-sm sm:text-xs leading-relaxed">
          جهت دسترسی آسان به لینک های پیشخوان می‌توانید از منوی روبرو اقدام فرمایید.
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <img src="/dashnoard/test.svg" alt="آواتار کاربر" className="w-20 h-20 sm:w-14 sm:h-14 md:w-32 md:h-32" />
      </div>
    </div>
  );
}
