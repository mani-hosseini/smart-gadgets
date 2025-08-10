import React from "react";

const CommentFormUI = () => {
  return (
         <div className="rounded-xl ">
       <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-right">
         دیدگاهتان را بنویسید
       </h3>

       <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 text-right">
         نشانی ایمیل شما منتشر نخواهد شد. بخش‌های مورد نیاز علامت‌گذاری شده‌اند *
       </p>

             <div className="space-y-3 sm:space-y-4">
         <div className="text-right">
           <label
             htmlFor="comment"
             className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
           >
             دیدگاه *
           </label>
                      <textarea
              id="comment"
              rows={3}
              className="w-full px-2 sm:px-3 py-2 bg-white rounded-lg resize-none text-right focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              placeholder="دیدگاه خود را بنویسید..."
            />
         </div>

                 <div className="text-right">
           <label
             htmlFor="name"
             className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
           >
             نام *
           </label>
                      <input
              type="text"
              id="name"
              className="w-full px-2 sm:px-3 py-2 bg-white rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              placeholder="نام شما"
            />
         </div>

                 <div className="text-right">
           <label
             htmlFor="email"
             className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
           >
             ایمیل *
           </label>
                      <input
              type="email"
              id="email"
              className="w-full px-2 sm:px-3 py-2 bg-white rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              placeholder="ایمیل شما"
            />
         </div>

                 <div className="text-right">
           <label
             htmlFor="website"
             className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
           >
             وب‌سایت
           </label>
                      <input
              type="url"
              id="website"
              className="w-full px-2 sm:px-3 py-2 bg-white rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              placeholder="آدرس وب‌سایت شما (اختیاری)"
            />
         </div>

                 <div className="flex items-start gap-2 sm:gap-3 text-right">
           <input
             type="checkbox"
             id="saveInfo"
             className="mt-1 h-3 w-3 sm:h-4 sm:w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
           />
           <label
             htmlFor="saveInfo"
             className="text-xs sm:text-sm text-gray-600 leading-relaxed"
           >
             ذخیره نام، ایمیل و وب‌سایت من در مرورگر برای زمانی که دوباره دیدگاهی
             می‌نویسم.
           </label>
         </div>

                                   <div className="text-right pt-3 sm:pt-4">
            <button
              type="button"
              className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium py-2 px-6 sm:px-8 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
            >
              فرستادن دیدگاه
            </button>
          </div>
      </div>
    </div>
  );
};

export default CommentFormUI;
