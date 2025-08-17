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
import { useCart } from "../../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showToast, setShowToast] = React.useState(false);
  const [isBouncing, setIsBouncing] = React.useState(false);
  const { addToCart } = useCart();

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

  const handleAddToCart = () => {
    if (selectedColor && selectedWarranty) {
      addToCart(product, selectedColor, selectedWarranty, quantity, finalPrice);
      setShowToast(true);
      setIsBouncing(true);
      
      // Stop bounce animation after 3 seconds
      setTimeout(() => {
        setIsBouncing(false);
      }, 2000);
      
      // Smooth scroll to toast notification
      setTimeout(() => {
        const toastElement = document.querySelector('[data-toast="cart-notification"]');
        if (toastElement) {
          toastElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          });
        }
      }, 100);
      
      // Here you would typically add the product to cart
      console.log("Product added to cart:", {
        product: product.name,
        color: selectedColor,
        warranty: selectedWarranty,
        quantity: quantity,
        price: finalPrice
      });
    }
  };

  const handleViewCart = () => {
    // Navigate to cart page
    navigate("/cart");
    setShowToast(false);
  };

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
        {/* Custom Toast Notification */}
        {showToast && (
          <div 
            data-toast="cart-notification"
            className={`w-full bg-[#fafbf5] rounded-lg mb-4 sm:mb-6 ${isBouncing ? 'animate-bounce' : ''}`}
          >
            <div className="px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#95ac3c] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#30351d] font-medium text-right text-sm sm:text-base lg:text-lg leading-relaxed">
                    {product.name} به سبد خرید شما اضافه شد
                  </span>
                </div>
                <button
                  onClick={handleViewCart}
                  className="bg-[#95ac3c] border border-[#95ac3c] cursor-pointer text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-4 lg:py-2 rounded-lg hover:text-[#95ac3c] hover:bg-white hover:border hover:border-[#95ac3c] transition-all duration-300 font-medium text-xs sm:text-sm lg:text-sm whitespace-nowrap flex-shrink-0"
                >
                  مشاهده سبد خرید
                </button>
              </div>
            </div>
          </div>
        )}

        <BreadcrumbBox pageName={`${product.category} / ${product.name}`} />

        <div className="w-full h-auto min-h-[400px] lg:h-[515px] bg-[#f7f7f7] rounded-2xl p-4 sm:p-6 mt-8">
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
                handleAddToCart={handleAddToCart}
                handleViewCart={handleViewCart}
                showToast={showToast}
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
