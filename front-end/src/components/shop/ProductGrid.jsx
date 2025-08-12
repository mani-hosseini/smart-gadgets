import React, { useState, useMemo } from 'react';
import ProductHeader from './ProductHeader';
import ProductCard from './ProductCard';

const sortOptions = [
  { value: "price-low", label: "از ارزان به گران" },
  { value: "price-high", label: "از گران به ارزان" },
  { value: "newest", label: "از جدید به قدیم" },
  { value: "oldest", label: "از قدیم به جدید" },
];

export default function ProductGrid({ products }) {
  const [sortBy, setSortBy] = useState('price-low');

  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
    console.log('مرتب‌سازی تغییر کرد به:', sortValue);
  };

  // Sort products based on selected option
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price; // ارزان به گران
        case 'price-high':
          return b.price - a.price; // گران به ارزان
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt); // جدید به قدیم
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt); // قدیم به جدید
        default:
          return 0;
      }
    });
  }, [products, sortBy]);

  return (
    <div className="space-y-6">
      {/* Product Header with Blue Bar */}
      <ProductHeader onSortChange={handleSortChange} />
      
      {/* Products Grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.slice(0, 9).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">محصولی یافت نشد</h3>
          <p className="text-gray-600">لطفاً فیلترهای خود را تغییر دهید یا دوباره جستجو کنید.</p>
        </div>
      )}
    </div>
  );
}
