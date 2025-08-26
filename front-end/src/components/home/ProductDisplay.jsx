import React from "react";
import { Link } from "react-router-dom";

const ProductDisplay = ({ product }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Product Image Container */}
      <div className="relative mb-6">
        {/* Background Circle - Slightly tilted to the right */}
        <div className="w-64 h-64 md:w-80 md:h-80 bg-[#e4e2fe] rounded-full flex items-center justify-center shadow-lg transform rotate-3">
          {/* Product Image - Clickable */}
          <Link to={`/product/${product.id}`} className="flex items-center justify-center w-56 h-56 overflow-hidden transition-transform duration-300 bg-white rounded-full shadow-inner md:w-72 md:h-72 hover:scale-105">
            <img 
              src={product.image} 
              alt={product.name}
              className="object-cover object-center w-full h-full"
            />
          </Link>
        </div>
      </div>

      {/* Product Name Banner */}
      <div className="bg-[#f7f7f7] px-6 py-3 rounded-xl border border-gray-200 shadow-sm">
        <Link to={`/product/${product.id}`} className="block hover:bg-[#e9e7ff] transition-colors duration-200 rounded-lg px-2 py-1">
          <h3 className="text-sm font-medium leading-tight text-center text-blue-600 md:text-base hover:text-[#4837f3]">
            {product.name}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default ProductDisplay;
