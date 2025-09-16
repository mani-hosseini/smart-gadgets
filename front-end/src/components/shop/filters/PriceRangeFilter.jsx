import React from 'react';
import { usePriceRange } from '../../../hooks/usePriceRange';

export default function PriceRangeFilter() {
  const { 
    priceRange, 
    updatePrice, 
    formatPrice, 
    parsePrice
  } = usePriceRange();

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-blue-400 rounded-full"></div>
        <h3 className="text-lg font-bold text-gray-700">قیمت</h3>
      </div>

      {/* Price Display */}
      <div className="flex items-center gap-3 mt-4">
          <div className="flex-1">
            <label className="block mb-1 text-sm text-gray-600">از</label>
            <input
              type="text"
              value={formatPrice(priceRange[0])}
              onChange={(e) => {
                const value = parsePrice(e.target.value);
                if (value < priceRange[1]) {
                  updatePrice(0, value);
                }
              }}
              className="w-full px-3 py-2 text-sm text-center border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="340,000"
            />
          </div>
          <div className="flex items-end">
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm text-gray-600">تا</label>
            <input
              type="text"
              value={formatPrice(priceRange[1])}
              onChange={(e) => {
                const value = parsePrice(e.target.value);
                if (value > priceRange[0]) {
                  updatePrice(1, value);
                }
              }}
              className="w-full px-3 py-2 text-sm text-center border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="19,000,000"
            />
          </div>
        </div>
    </div>
  );
}
