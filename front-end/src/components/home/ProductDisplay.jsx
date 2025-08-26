import React from "react";

const ProductDisplay = ({ product }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Product Image Container */}
      <div className="relative mb-6">
        {/* Background Circle - Slightly tilted to the right */}
        <div className="w-64 h-64 md:w-80 md:h-80 bg-[#e4e2fe] rounded-full flex items-center justify-center shadow-lg transform rotate-3">
          {/* Product Image */}
          <div className="flex items-center justify-center overflow-hidden bg-white rounded-full shadow-inner w-56 h-56 md:w-72 md:h-72">
            <img 
              src={product.image} 
              alt={product.name}
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Product Name Banner */}
      <div className="bg-[#f7f7f7] px-6 py-3 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-sm font-medium leading-tight text-center text-blue-600 md:text-base">
          {product.name}
        </h3>
      </div>
    </div>
  );
};

export default ProductDisplay;
