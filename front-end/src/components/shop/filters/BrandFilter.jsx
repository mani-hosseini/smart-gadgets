import React from 'react';
import { useFilters } from '../../../context/FilterContext';

const brands = ['اپل', 'سامسونگ', 'سونی', 'شیائومی'];

export default function BrandFilter() {
  const { selectedBrands, updateBrand } = useFilters();

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-blue-400 rounded-full"></div>
        <h3 className="font-bold text-lg text-gray-700">برندها</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => updateBrand(brand)}
            className={`px-2 py-1 rounded-full border transition-all duration-200 text-xs font-medium ${
              selectedBrands.includes(brand)
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-600 border-blue-200 hover:border-blue-400 hover:text-blue-600'
            }`}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
}
