import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import MainContainer from "../components/ui/MainContainer";
import BreadcrumbBox from "../components/ui/BreadcrumbBox";
import { COLORS, WARRANTIES } from "../constants/productConstants";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCart();
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
  };

  const getColorName = (colorValue) => {
    const color = COLORS.find((c) => c.value === colorValue);
    return color ? color.name : colorValue;
  };

  const getWarrantyText = (warrantyId) => {
    const warranty = WARRANTIES.find((w) => w.id === warrantyId);
    return warranty ? warranty.text : warrantyId;
  };

  if (items.length === 0) {
    return (
      <div className="bg-[#fefefe] py-8">
        <MainContainer>
          <div>
            <div className="mt-8 text-center">
              <div className="bg-[#e4e2fe] rounded-2xl p-3 sm:p-4 border-purple-100">
                <h2 className="text-gray-600 text-sm sm:text-base font-medium">
                  سبد خرید شما در حال حاضر خالی است
                </h2>
              </div>
              <button
                onClick={() => navigate("/shop")}
                className="bg-[#3b82f6] mt-4 text-white px-6 sm:px-8 py-2 rounded-xl cursor-pointer hover:bg-[#2563eb] transition-colors text-sm sm:text-base font-medium"
              >
                بازگشت به فروشگاه
              </button>
            </div>
          </div>
        </MainContainer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fefefe] py-8">
      <MainContainer>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div>
              <div>
                <div className="overflow-x-auto bg-[#f6f5ff] p-3 sm:p-4 rounded-2xl">
                  {/* Desktop Table View */}
                  <div className="hidden sm:block">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="text-right py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">
                            محصول
                          </th>
                          <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">
                            قیمت
                          </th>
                          <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">
                            تعداد
                          </th>
                          <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm">
                            جمع جزء
                          </th>
                          <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-700 text-xs sm:text-sm"></th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {items.map((item, index) => (
                          <tr key={index} className="border-b border-gray-50">
                            <td className="py-3 sm:py-4 px-2 sm:px-4">
                              <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M7 4V2a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                                    />
                                  </svg>
                                </div>
                                <div className="text-right">
                                  <h3 className="font-medium text-blue-800 text-xs sm:text-sm">
                                    {item.product.name}
                                  </h3>
                                  <p className="text-gray-500 text-xs mt-1">
                                    گارانتی:{" "}
                                    {getWarrantyText(item.selectedWarranty)}، رنگ:{" "}
                                    {getColorName(item.selectedColor)}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 sm:py-4 px-2 sm:px-4 text-center">
                              <span className="font-medium text-gray-600 text-xs sm:text-sm">
                                {formatPrice(item.finalPrice)}
                              </span>
                            </td>
                            <td className="py-3 sm:py-4 px-2 sm:px-4 text-center">
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                  updateQuantity(index, parseInt(e.target.value))
                                }
                                className="w-14 sm:w-16 h-8 sm:h-10 bg-gray-50 border border-gray-200 rounded-lg text-center text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-xs sm:text-sm"
                              />
                            </td>
                            <td className="py-3 sm:py-4 px-2 sm:px-4 text-center">
                              <span className="font-bold text-gray-600 text-xs sm:text-sm">
                                {formatPrice(item.finalPrice * item.quantity)}
                              </span>
                            </td>
                            <td className="py-3 sm:py-4 px-2 sm:px-4 text-center">
                              <button
                                onClick={() => removeFromCart(index)}
                                className="w-7 h-7 sm:w-8 sm:h-8 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center"
                              >
                                <svg
                                  className="w-3 h-3 sm:w-4 sm:h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Card View */}
                  <div className="sm:hidden space-y-4">
                    {items.map((item, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-gray-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 4V2a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-blue-800 text-sm">
                              {item.product.name}
                            </h3>
                            <p className="text-gray-500 text-xs mt-1">
                              گارانتی: {getWarrantyText(item.selectedWarranty)}، رنگ: {getColorName(item.selectedColor)}
                            </p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="text-center">
                            <span className="text-gray-600 block text-xs mb-1">قیمت:</span>
                            <span className="font-medium text-gray-900">{formatPrice(item.finalPrice)}</span>
                          </div>
                          <div className="text-center">
                            <span className="text-gray-600 block text-xs mb-1">تعداد:</span>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                              className="w-16 h-8 bg-gray-50 border border-gray-200 rounded-lg text-center text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-xs"
                            />
                          </div>
                          <div className="text-center">
                            <span className="text-gray-600 block text-xs mb-1">جمع جزء:</span>
                            <span className="font-bold text-gray-900">{formatPrice(item.finalPrice * item.quantity)}</span>
                          </div>
                          <div className="text-center">
                            <span className="text-gray-600 block text-xs mb-1">عملیات:</span>
                            <button
                              onClick={() => removeFromCart(index)}
                              className="w-8 h-8 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center mx-auto"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 bg-[#f6f5ff] p-3 sm:p-4 rounded-2xl">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="کد تخفیف"
                        className="w-full h-10 sm:h-12 bg-white border border-white rounded-lg px-3 sm:px-4 text-right text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent text-xs sm:text-sm"
                      />
                    </div>
                    <button className="bg-[#3b82f6] hover:bg-[#ff4c00] text-white px-4 sm:px-6 py-2 rounded-full hover:bg-[#2563eb] transition-colors cursor-pointer whitespace-nowrap text-xs sm:text-sm font-medium">
                      اعمال کد تخفیف
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-[#f6f5ff] rounded-2xl p-4 sm:p-6 sticky top-8">
              <h3 className="text-base sm:text-lg font-bold text-gray-600 text-right mb-4 sm:mb-6">
                جمع کل سبد خرید
              </h3>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-xs sm:text-sm">جمع جزء:</span>
                  <span className="font-medium text-gray-900 text-xs sm:text-sm">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-xs sm:text-sm">تخفیف:</span>
                  <span className="font-medium text-gray-600 text-xs sm:text-sm">0 تومان</span>
                </div>
                <div className="border-t border-gray-100 pt-3 sm:pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-base sm:text-lg font-bold text-gray-600">
                      مجموع:
                    </span>
                    <span className="font-bold text-[#3b82f6] text-base sm:text-lg">
                      {formatPrice(getTotalPrice())}
                    </span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => navigate("/checkout")}
                className="w-full bg-[#3b82f6] text-white py-2  rounded-xl cursor-pointer hover:bg-[#ff4c00]transition-colors mb-3 sm:mb-4 font-medium"
              >
                ادامه جهت تسویه حساب
              </button>

              <button
                onClick={clearCart}
                className="w-full bg-gray-100 text-gray-700 py-2 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors font-medium text-xs sm:text-sm"
              >
                پاک کردن سبد خرید
              </button>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
