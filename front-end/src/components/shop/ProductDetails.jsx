import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductImageGallery from "./ProductImageGallery";
import ProductInfo from "./ProductInfo";
import ProductFeatures from "./ProductFeatures";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";
import BreadcrumbBox from "../ui/BreadcrumbBox";
import MainContainer from "../ui/MainContainer";
import { useProductDetails } from "../../hooks/useProductDetails";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    product,
    selectedColor,
    setSelectedColor,
    selectedWarranty,
    setSelectedWarranty,
    quantity,
    setQuantity,
    finalPrice,
    productImages,
  } = useProductDetails(id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#fefefe] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            محصول یافت نشد
          </h2>
          <button
            onClick={() => navigate("/shop")}
            className="bg-[#3b82f6] text-white px-6 py-3 rounded-lg hover:bg-[#2563eb] transition-colors"
          >
            بازگشت به فروشگاه
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fefefe] py-8">
      <MainContainer>
        <BreadcrumbBox pageName={`${product.category} / ${product.name}`} />

        <div className="w-full h-auto min-h-[400px] lg:h-[483px] bg-[#f7f7f7] rounded-2xl p-4 sm:p-6 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 h-full">
            <div className="order-1 lg:order-2">
              <ProductImageGallery product={product} images={productImages} />
            </div>
            <div className="order-2 lg:order-1">
              <ProductInfo
                product={product}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                selectedWarranty={selectedWarranty}
                setSelectedWarranty={setSelectedWarranty}
                quantity={quantity}
                setQuantity={setQuantity}
                finalPrice={finalPrice}
              />
            </div>
            <div className="order-3 lg:order-3">
              <ProductFeatures product={product} />
            </div>
          </div>
        </div>
        <ProductTabs />
        <div className="mt-16">
          <RelatedProducts 
            currentProductId={product.id} 
            category={product.category} 
          />
        </div>
      </MainContainer>
    </div>
  );
}
