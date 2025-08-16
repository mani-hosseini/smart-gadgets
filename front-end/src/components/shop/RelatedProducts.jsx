import React, { useMemo } from 'react';
import ProductCard from './ProductCard';
import Heading from '../ui/heading';
import { products } from './productsData';

const RelatedProducts = React.memo(({ currentProductId, category }) => {
  // Get related products based on category, excluding current product
  const relatedProducts = useMemo(() => {
    return products
      .filter(product => 
        product.id !== currentProductId && 
        product.category === category
      )
      .slice(0, 4); // Show max 4 related products
  }, [currentProductId, category]);

  if (relatedProducts.length === 0) {
    return (
      <section className="py-8 bg-[#f6f5ff] rounded-2xl mt-8">
        <div className="px-6">
          <div className="flex items-center justify-between mb-6">
            <Heading title="محصولات مرتبط" />
            <button className="px-4 py-2 bg-gray-100 border border-[#a78bfa] text-gray-900 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              مشاهده همه
            </button>
          </div>
          <div className="text-center py-8 text-gray-500">
            <p>محصول مرتبطی یافت نشد</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-[#f7f7f7] rounded-2xl mt-8">
      <div className="px-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          {/* Title with Icon */}
          <Heading title="محصولات مرتبط" />

          {/* View All Button */}
          <button className="px-4 py-2 bg-gray-100 border border-[#a78bfa] text-gray-900 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            مشاهده همه
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
});

RelatedProducts.displayName = 'RelatedProducts';

export default RelatedProducts;
