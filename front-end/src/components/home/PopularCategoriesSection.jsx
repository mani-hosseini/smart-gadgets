import React from "react";
import HeadingButton from "../shared/HeadingButton";
import CategoryCard from "./CategoryCard";
import { categories } from "./categoriesData";

const PopularCategoriesSection = () => {
  // انتخاب 4 دسته‌بندی محبوب
  const popularCategories = categories.slice(0, 4);

  return (
    <section className="py-8 bg-white md:py-12 lg:py-24">
      <div className="container px-4 mx-auto">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {popularCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategoriesSection;
