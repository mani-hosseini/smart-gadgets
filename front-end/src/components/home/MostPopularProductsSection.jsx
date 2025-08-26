import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import HeadingButton from "../shared/HeadingButton";
import WhiteProductCard from "../shop/WhiteProductCard";
import { products } from "../shop/productsData";

const MostPopularProductsSection = () => {
  // انتخاب محصولات محبوب از محصولات موجود - بر اساس sales و rating
  const popularProducts = products
    .sort((a, b) => (b.sales || 0) - (a.sales || 0))
    .slice(0, 8); // تعداد بیشتری برای اسلایدر

  return (
    <section className="lg:p-8 p-4 rounded-2xl bg-[#f7f7f7]">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <HeadingButton 
            title="محبوب ترین محصولات"
            buttonText="مشاهده همه"
            buttonLink="/shop"
          />
        </div>

        {/* Products Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full"
            dir="rtl"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {popularProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <WhiteProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MostPopularProductsSection;
