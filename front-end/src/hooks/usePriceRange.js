import { useState, useCallback } from 'react';

export const usePriceRange = (minPrice = 340000, maxPrice = 19000000) => {
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const updatePrice = useCallback((index, value) => {
    setPriceRange(prev => {
      const newRange = [...prev];
      
      // Validation
      if (index === 0) { // Min price
        if (value >= newRange[1]) return prev; // Min can't be >= Max
        if (value < minPrice) value = minPrice;
        if (value > maxPrice) value = maxPrice;
      } else { // Max price
        if (value <= newRange[0]) return prev; // Max can't be <= Min
        if (value < minPrice) value = minPrice;
        if (value > maxPrice) value = maxPrice;
      }
      
      newRange[index] = value;
      return newRange;
    });
  }, [minPrice, maxPrice]);

  const resetPrice = useCallback(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  const formatPrice = useCallback((price) => {
    return price.toLocaleString('fa-IR');
  }, []);

  const parsePrice = useCallback((priceString) => {
    return parseInt(priceString.replace(/,/g, '')) || 0;
  }, []);

  return {
    priceRange,
    updatePrice,
    resetPrice,
    formatPrice,
    parsePrice,
    minPrice,
    maxPrice,
  };
};
