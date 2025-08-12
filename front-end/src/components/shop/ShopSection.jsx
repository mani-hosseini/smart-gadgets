import React from "react";
import ShopSidebar from "./ShopSidebar";
import ProductGrid from "./ProductGrid";
import Heading from "../ui/heading";
import { products } from "./productsData";
import { FilterProvider } from "../../context/FilterContext";

export default function ShopSection() {
  return (
    <FilterProvider>
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Main Content - 75/25 Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar - 25% */}
            <div className="lg:col-span-3 order-1">
              <ShopSidebar />
            </div>
            {/* Products Section - 75% */}
            <div className="lg:col-span-9 order-2">
              <ProductGrid products={products} />
            </div>
          </div>
        </div>
      </div>
    </FilterProvider>
  );
}
