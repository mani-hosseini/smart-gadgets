import React from "react";
import Heading from "../ui/heading";
import CategoryCard from "./CategoryCard";
import { categories } from "./categoriesData";

const ProductCategoriesSection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Categories Grid - 4 columns with title as first item */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Title Card as first item */}
          <div className="flex items-center justify-center">
            <Heading title="دسته بندی محصولات" />
          </div>
          
          {/* Category Cards - Show only first 3 in mobile */}
          {categories.slice(0, 3).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
          
          {/* Show remaining cards on larger screens */}
          {categories.slice(3).map((category) => (
            <div key={category.id} className="hidden sm:block">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
