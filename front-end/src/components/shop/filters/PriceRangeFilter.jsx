import React from 'react';
import { usePriceRange } from '../../../hooks/usePriceRange';

export default function PriceRangeFilter() {
  const { 
    priceRange, 
    updatePrice, 
    formatPrice, 
    parsePrice, 
    minPrice, 
    maxPrice 
  } = usePriceRange();

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-blue-400 rounded-full"></div>
        <h3 className="font-bold text-lg text-gray-700">قیمت</h3>
      </div>

      {/* Custom Range Slider */}
      <div className="py-4">
        <div className="relative">
          {/* Track */}
          <div className="w-full h-2 bg-gray-200 rounded-full">
            {/* Active Range */}
            <div
              className="h-2 bg-blue-500 rounded-full absolute top-0"
              style={{
                left: `${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%`,
                width: `${((priceRange[1] - priceRange[0]) / (maxPrice - minPrice)) * 100}%`
              }}
            ></div>
          </div>

          {/* Left Range Input (Min) */}
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={priceRange[0]}
            onChange={(e) => {
              const newMin = parseInt(e.target.value);
              if (newMin < priceRange[1]) {
                updatePrice(0, newMin);
              }
            }}
            className="absolute top-0 w-full h-2 opacity-0 cursor-pointer z-10"
          />

          {/* Right Range Input (Max) */}
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={priceRange[1]}
            onChange={(e) => {
              const newMax = parseInt(e.target.value);
              if (newMax > priceRange[0]) {
                updatePrice(1, newMax);
              }
            }}
            className="absolute top-0 w-full h-2 opacity-0 cursor-pointer z-10"
          />

          {/* Custom Handles */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-lg cursor-pointer z-20"
            style={{ left: `${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%` }}
          ></div>
          <div
            className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-lg cursor-pointer z-20"
            style={{ left: `${((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%` }}
          ></div>
        </div>

        {/* Price Display */}
        <div className="flex items-center gap-3 mt-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">از</label>
            <input
              type="text"
              value={formatPrice(priceRange[0])}
              onChange={(e) => {
                const value = parsePrice(e.target.value);
                if (value < priceRange[1]) {
                  updatePrice(0, value);
                }
              }}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-center text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="340,000"
            />
          </div>
          <div className="flex items-end">
            <span className="text-gray-500 text-sm mb-2">تا</span>
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">تا</label>
            <input
              type="text"
              value={formatPrice(priceRange[1])}
              onChange={(e) => {
                const value = parsePrice(e.target.value);
                if (value > priceRange[0]) {
                  updatePrice(1, value);
                }
              }}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-center text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="19,000,000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
