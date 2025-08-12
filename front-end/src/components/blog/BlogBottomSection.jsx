import React from 'react';
import BlogBottomLayout from './BlogBottomLayout';
import CategorySection from './CategorySection';
import Heading from '../ui/heading';

export default function BlogBottomSection() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 mb-8 md:mb-12">
        <div className="mb-6 md:mb-8">
          <Heading title="دسته‌بندی‌های مقالات" />
        </div>
        <CategorySection />
      </div>

      <div className="md:mt-10">
        <BlogBottomLayout />
      </div>
    </div>
  );
}
