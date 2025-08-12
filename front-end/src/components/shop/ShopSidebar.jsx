import React from "react";
import { useFilters } from "../../context/FilterContext";
import SearchFilter from "./filters/SearchFilter";
import PriceRangeFilter from "./filters/PriceRangeFilter";
import CategoryFilter from "./filters/CategoryFilter";
import BrandFilter from "./filters/BrandFilter";

export default function ShopSidebar() {
  const { applyFilters } = useFilters();

  return (
    <div className="bg-[#f6f5ff] p-5 space-y-6 rounded-2xl">
      {/* Search Filter */}
      <SearchFilter />
      
      {/* Price Range Filter */}
      <PriceRangeFilter />
      
      {/* Category Filter */}
      <CategoryFilter />
      
      {/* Brand Filter */}
      <BrandFilter />

      {/* Apply Filters Button */}
      <button
        onClick={applyFilters}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        اعمال فیلترها
      </button>
    </div>
  );
}
