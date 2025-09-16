import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import HeadingButton from "../shared/HeadingButton";
import ProductDisplay from "./ProductDisplay";
import FeatureList from "./FeatureList";
import NavigationArrows from "./NavigationArrows";
import { products } from "../shop/productsData";

const NewestProductsSection = () => {
  // انتخاب 3 محصول جدید از داده‌های واقعی سایت
  const newestProducts = products
    .filter(product => product.isNew)
    .slice(0, 3);

  // اگر محصول جدیدی نباشد، 3 محصول آخر را انتخاب کن
  const displayProducts = newestProducts.length >= 3 
    ? newestProducts 
    : products.slice(-3);

  return (
    <section className="py-8 bg-white md:py-12 lg:py-16">
      <div className="container px-4 mx-auto">
        {/* Header Section - Static */}
        <div className="mb-6 md:mb-8 lg:mb-12">
          <HeadingButton 
            title="جدیدترین محصولات"
            buttonText="مشاهده همه"
            buttonLink="/shop"
          />
        </div>

        {/* Slider Section */}
        <div className="relative">
          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={false}
            loop={true}
            className="w-full swiper-newest"
            dir="rtl"
            allowTouchMove={true}
            grabCursor={true}
          >
            {displayProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
                  {/* Left Feature List */}
                  <div className="order-2 w-full lg:col-span-1 lg:order-1">
                    <FeatureList 
                      features={[
                        `برند: ${product.brand}`,
                        `دسته‌بندی: ${product.category}`,
                        `امتیاز: ${product.rating}/5`,
                        `تعداد نظرات: ${product.reviews}`
                      ]}
                      position="left"
                    />
                  </div>

                  {/* Center Product Display */}
                  <div className="relative order-1 w-full lg:col-span-1 lg:order-2">
                    <ProductDisplay 
                      product={product}
                    />
                    {/* Navigation Arrows positioned next to the product image */}
                    <NavigationArrows swiperId="newest" />
                  </div>

                  {/* Right Feature List */}
                  <div className="order-3 w-full lg:col-span-1 lg:order-3">
                    <FeatureList 
                      features={[
                        `قیمت: ${product.price.toLocaleString()} تومان`,
                        product.originalPrice ? `قیمت اصلی: ${product.originalPrice.toLocaleString()} تومان` : '',
                        product.discount ? `تخفیف: ${product.discount}%` : '',
                        `فروش: ${product.sales} عدد`
                      ].filter(Boolean)}
                      position="right"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewestProductsSection;
