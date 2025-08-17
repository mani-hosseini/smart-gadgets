import React, { useState } from "react";

export default function OrderSummary({ items, getTotalPrice, formatPrice }) {
  const [showDiscountInput, setShowDiscountInput] = useState(false);

  const toggleDiscountInput = () => {
    setShowDiscountInput(!showDiscountInput);
  };

  return (
    <div className="lg:col-span-2">
      <div className="sticky top-8">
        {/* Product Details */}
        <div className="bg-[#f6f5ff] rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-bold text-[#4f37f3] text-right mb-4 sm:mb-6">
            سفارش شما
          </h3>
          <div className="text-xs sm:text-sm">
            <span className="text-gray-600 block mb-2">محصول:</span>
            {items.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-2 sm:p-3 mb-2 sm:mb-3">
                <h4 className="font-medium text-gray-900 text-xs sm:text-sm mb-1 sm:mb-2">
                  {item.product.name}
                </h4>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>
                    گارانتی:{" "}
                    {item.selectedWarranty === "36"
                      ? "36 ماهه"
                      : item.selectedWarranty === "18"
                      ? "18 ماهه"
                      : "12 ماهه"}
                  </p>
                  <p>رایانه همراه: {item.quantity}</p>
                  <p>
                    رنگ:{" "}
                    {item.selectedColor === "black"
                      ? "مشکی"
                      : item.selectedColor === "white"
                      ? "سفید"
                      : item.selectedColor === "red"
                      ? "قرمز"
                      : "آبی"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="bg-[#f6f5ff] rounded-2xl p-4 sm:p-6 space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-xs sm:text-sm">جمع جزء:</span>
              <span className="font-medium text-gray-900 text-xs sm:text-sm">
                {formatPrice(getTotalPrice())}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-xs sm:text-sm">مجموع:</span>
              <span className="font-bold text-gray-900 text-sm sm:text-lg">
                {formatPrice(getTotalPrice())}
              </span>
            </div>
          </div>
        </div>

        {/* Discount Code */}
        <div className="bg-[#f6f5ff] rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
          <p 
            className="text-xs sm:text-sm text-gray-700 text-center cursor-pointer hover:text-[#3b82f6] transition-colors mb-3 sm:mb-4"
            onClick={toggleDiscountInput}
          >
            کد تخفیف دارید؟ برای نوشتن کد اینجا کلیک کنید
          </p>
          
          {showDiscountInput && (
            <div className="space-y-3">
              <input
                type="text"
                placeholder="کد تخفیف خود را وارد کنید"
                className="w-full h-10 sm:h-12 bg-white border border-gray-200 rounded-lg px-3 sm:px-4 text-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-xs sm:text-sm"
              />
              <button className="w-full bg-[#3b82f6] text-white py-2 sm:py-3 px-4 rounded-lg font-medium text-xs sm:text-sm hover:bg-[#2563eb] transition-colors">
                اعمال کد تخفیف
              </button>
            </div>
          )}
        </div>

        <div className="bg-[#f6f5ff] rounded-2xl p-4 sm:p-6">
          {/* Payment Method */}
          <div className="bg-[#e4e2fe] rounded-2xl px-3 py-3 sm:py-4 mb-3 sm:mb-4">
            <p className="text-xs text-gray-700 text-center">
              با عرض پوزش، به نظر می‌رسد هیچ روش پرداختی موجود نیست. اگر به کمک
              نیاز دارید یا می‌خواهید ترتیبات دیگری را انجام دهید، لطفا با ما
              تماس بگیرید.
            </p>
          </div>

          {/* Privacy Policy */}
          <div className="text-center">
            <p className="text-xs text-gray-600 leading-relaxed">
              اطلاعات شخصی شما برای پردازش سفارش شما، پشتیبانی از تجربه شما در
              سراسر این وب سایت و برای اهدافی که در سیاست حفظ حریم خصوصی ذکر شده
              است استفاده می‌شود.
            </p>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4 sm:mt-6"></div>
          <button className="bg-[#3b82f6] text-white px-8 sm:px-12 py-2 sm:py-2 rounded-xl cursor-pointer hover:bg-[#2563eb] transition-colors w-full text-sm sm:text-base font-medium">
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>
  );
}
