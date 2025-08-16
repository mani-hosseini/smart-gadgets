import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const {
    name,
    price,
    originalPrice,
    image,
    discount
  } = product;

  // Calculate discount percentage if not provided
  const discountPercentage = discount || (originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0);

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      className="bg-[#f7f7f7] rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      onClick={handleProductClick}
    >
      {/* Product Image */}
      <div className="relative mb-3">
        <div className="w-full h-48 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                           {image ? (
                   <img
                     src={image}
                     alt={name}
                     className="w-full h-full object-contain"
                   />
                 ) : (
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          )}
        </div>

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 right-2 bg-[#ff4c00] text-white px-2 py-1 rounded-full text-xs font-bold">
            -{discountPercentage}%
          </div>
        )}
      </div>

      {/* Product Title */}
      <h3 className="text-gray-900 font-medium text-sm mb-3 text-right leading-tight">
        {name}
      </h3>

      {/* Price and Buy Button Row */}
      <div className="flex items-center justify-between">
        {/* Price - Right Side */}
        <div className="text-left">
          {originalPrice && originalPrice > price ? (
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs line-through">
                {originalPrice.toLocaleString()} <span className="text-gray-400">تومان</span>
              </span>
              <span className="text-gray-900 font-bold text-sm">
                {price.toLocaleString()} <span className="text-gray-400">تومان</span>
              </span>
            </div>
          ) : (
            <span className="text-gray-900 font-bold text-sm">
              {price.toLocaleString()} <span className="text-gray-400">تومان</span>
            </span>
          )}
        </div>

        {/* Buy Button - Left Side */}
        <button className="bg-[#4837f3] text-white py-2 px-3 rounded-l-full rounded-r-2xl font-medium text-xs hover:bg-[#ff4c00] transition-colors duration-200">
          خرید محصول
        </button>
      </div>
    </div>
  );
}
