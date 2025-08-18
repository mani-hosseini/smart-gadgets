import React from "react";
import HeroSection from "../components/home/HeroSection";
import ProductCategoriesSection from "../components/home/ProductCategoriesSection";
import SpecialOffersSection from "../components/home/SpecialOffersSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ProductCategoriesSection />
      <SpecialOffersSection />
    </div>
  );
}
