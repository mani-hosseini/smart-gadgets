import { useState, useCallback } from 'react';

export const useFilterState = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([340000, 19000000]);
  const [searchQuery, setSearchQuery] = useState('');

  const updateCategory = useCallback((category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  }, []);

  const updateBrand = useCallback((brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  }, []);

  const updatePriceRange = useCallback((index, value) => {
    setPriceRange(prev => {
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    });
  }, []);

  const updateSearchQuery = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const resetFilters = useCallback(() => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([340000, 19000000]);
    setSearchQuery('');
  }, []);

  const applyFilters = useCallback(() => {
    console.log('فیلترها اعمال شدند:', {
      priceRange,
      selectedCategories,
      selectedBrands,
      searchQuery,
    });
  }, [priceRange, selectedCategories, selectedBrands, searchQuery]);

  return {
    // State
    selectedCategories,
    selectedBrands,
    priceRange,
    searchQuery,
    
    // Actions
    updateCategory,
    updateBrand,
    updatePriceRange,
    updateSearchQuery,
    resetFilters,
    applyFilters,
  };
};
