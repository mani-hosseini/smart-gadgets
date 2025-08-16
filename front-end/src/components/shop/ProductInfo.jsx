import React from "react";
import { COLORS, WARRANTIES } from "../../constants/productConstants";

export default function ProductInfo({
  product,
  selectedColor,
  setSelectedColor,
  selectedWarranty,
  setSelectedWarranty,
  quantity,
  setQuantity,
  finalPrice,
}) {
  React.useEffect(() => {
    if (!selectedWarranty) {
      setSelectedWarranty("18");
    }
  }, [selectedWarranty, setSelectedWarranty]);

  return (
    <div className="h-full flex flex-col gap-4 sm:gap-6">
      <div>
        <h1 className="text-lg sm:text-xl font-bold text-gray-900 text-right leading-tight mb-2 sm:mb-3">
          {product.name}
        </h1>
        <div className="h-px bg-gray-100 mb-2 sm:mb-3"></div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-right mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "text-orange-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600">{product.rating}/5</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-sm text-gray-600">بدون دیدگاه</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <span className="text-sm text-gray-600">امکان تحویل حضوری</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 text-right">
          رنگ
        </h3>
        <div className="flex gap-2 sm:gap-3">
          {COLORS.map((color) => (
            <button
              key={color.value}
              onClick={() => setSelectedColor(color.value)}
              className={`w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] rounded-full border-2 transition-all ${
                selectedColor === color.value
                  ? "border-[#3b82f6] scale-110"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-3">
          <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-0">گارانتی:</h3>
          <span className="text-xs sm:text-sm text-gray-600">
            {WARRANTIES.find((w) => w.id === selectedWarranty)?.text}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {WARRANTIES.map((warranty) => (
            <button
              key={warranty.id}
              onClick={() => setSelectedWarranty(warranty.id)}
              className={`h-[35px] sm:h-[40px] p-1 rounded-lg border-2 text-right transition-all ${
                selectedWarranty === warranty.id
                  ? "bg-[#3b82f6] text-white border-[#3b82f6]"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300"
              }`}
            >
              <span className="text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                {warranty.text}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-2 bg-white p-2 sm:p-3 rounded-lg">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          className="w-14 sm:w-16 h-9 sm:h-10 bg-[#f6f5ff] rounded-lg text-center text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-xs sm:text-sm"
        />
        <button className="flex-1 bg-[#3b82f6] text-white py-2 px-3 sm:px-4 rounded-xl font-bold text-sm sm:text-base hover:bg-[#2563eb] transition-colors">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
