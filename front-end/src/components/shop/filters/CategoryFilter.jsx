import React from 'react';
import { useFilters } from '../../../context/FilterContext';

const categories = [
  'تلفن هوشمند',
  'جارو هوشمند', 
  'حلقه هوشمند',
  'دسته های بازی',
  'ساعت های هوشمند',
  'عینک هوشمند'
];

export default function CategoryFilter() {
  const { selectedCategories, updateCategory } = useFilters();

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-blue-400 rounded-full"></div>
        <h3 className="font-bold text-lg text-gray-700">دسته بندی ها</h3>
      </div>
      
      <div className="space-y-3">
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div
              className="w-5 h-5 border-2 border-gray-300 rounded group-hover:border-blue-500 transition-colors duration-200 cursor-pointer"
              onClick={() => updateCategory(category)}
            >
              {selectedCategories.includes(category) && (
                <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200">
              {category}
            </span>
          </label>
        ))}
        
        {/* Show All Categories Link */}
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
          نمایش همه دسته بندی ها +
        </button>
      </div>
    </div>
  );
}
