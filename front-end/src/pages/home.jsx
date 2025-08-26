import React from "react";
import HeroSection from "../components/home/HeroSection";
import ProductCategoriesSection from "../components/home/ProductCategoriesSection";
import SpecialOffersSection from "../components/home/SpecialOffersSection";
import NewestProductsSection from "../components/home/NewestProductsSection";
import MostPopularProductsSection from "../components/home/MostPopularProductsSection";
import PopularCategoriesSection from "../components/home/PopularCategoriesSection";
import BestSellingProductsSection from "../components/home/BestSellingProductsSection";
import LatestArticlesSection from "../components/home/LatestArticlesSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ProductCategoriesSection />
      <SpecialOffersSection />
      <NewestProductsSection />
      <MostPopularProductsSection />
      <PopularCategoriesSection />
      <BestSellingProductsSection />
      <LatestArticlesSection />
    </div>
  );
}
