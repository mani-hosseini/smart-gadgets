import React, { useState } from 'react';
import StarRating from '../../ui/StarRating';
import FormField from '../../ui/FormField';

const ReviewsSection = React.memo(() => {
  const [rating, setRating] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {/* نمایش نظرات */}
      <div className="bg-white rounded-2xl p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4 text-center">
          نقد و بررسی ها
        </h3>
        <div className="text-center text-gray-500">
          <p className="text-sm sm:text-base">هنوز نظری ثبت نشده است.</p>
        </div>
      </div>

      {/* فرم نظرات */}
      <div className="bg-white rounded-2xl p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3 text-right">
          اولین نفری باشید که نظر می‌دهید
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 text-right">
          "گوشی هوشمند آیفون 15 Pro Max"
        </p>
        <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 text-right">
          آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی با علامت * مشخص شده‌اند.
        </p>

        <form className="space-y-4">
          {/* امتیاز */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
              امتیاز شما *
            </label>
            <StarRating rating={rating} onRatingChange={setRating} />
          </div>

          {/* نظر */}
          <FormField
            label="دیدگاه شما"
            placeholder="نظر خود را بنویسید..."
            required
            multiline
          />

          {/* نام */}
          <FormField
            label="نام"
            placeholder="نام خود را وارد کنید"
            required
          />

          {/* ایمیل */}
          <FormField
            label="ایمیل"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            required
          />

          {/* چک باکس */}
          <div className="flex items-center gap-2 justify-end">
            <input
              type="checkbox"
              id="saveInfo"
              className="w-4 h-4 text-[#3b82f6] bg-gray-100 border-gray-300 rounded focus:ring-[#3b82f6]"
            />
            <label htmlFor="saveInfo" className="text-sm text-gray-600">
              نام، ایمیل و وب‌سایت من را در این مرورگر برای دفعه بعدی که نظر می‌دهم ذخیره کن.
            </label>
          </div>

          {/* دکمه ارسال */}
          <button
            type="submit"
            className="w-full bg-[#3b82f6] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#2563eb] transition-colors"
          >
            ثبت
          </button>
        </form>
      </div>
    </div>
  );
});

ReviewsSection.displayName = 'ReviewsSection';

export default ReviewsSection;
