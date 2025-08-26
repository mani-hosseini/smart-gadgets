import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import HeadingButton from "../shared/HeadingButton";
import ProductDisplay from "./ProductDisplay";
import FeatureList from "./FeatureList";
import NavigationArrows from "./NavigationArrows";


const NewestProductsSection = () => {
  // داده‌های محصولات جدید
  const newestProducts = [
    {
      id: 1,
      name: "هدفون بی سیم سامسونگ مدل 2 Galaxy Buds",
      image: "/shop/product-pic1.jpg",
      leftFeatures: [
        "هدفون بی سیم",
        "محصولی از شرکت سامسونگ",
        "کیفیت فوق العاده",
        "بهره مندی از تکنولوژی منحصر به فرد و به روز"
      ],
      rightFeatures: [
        "دارای طراحی زیبا",
        "امکان اتصال همزمان به چند دستگاه",
        "در رنگ بندی های متنوع و زیاد",
        "هدفون بی سیمی که مدت ها منتظرش بودید"
      ]
    },
    {
      id: 2,
      name: "ساعت هوشمند اپل واچ سری 9",
      image: "/shop/product-pic2.jpg",
      leftFeatures: [
        "نمایشگر همیشه روشن",
        "تشخیص سقوط و تصادف",
        "پایش سلامت پیشرفته",
        "شارژ سریع و بی‌سیم"
      ],
      rightFeatures: [
        "طراحی زیبا و مدرن",
        "سازگاری کامل با iOS",
        "آب‌بندی IP6X",
        "باتری با عمر طولانی"
      ]
    },
    {
      id: 3,
      name: "گوشی هوشمند سامسونگ گلکسی S24",
      image: "/shop/product-pic3.jpg",
      leftFeatures: [
        "پردازنده قدرتمند اسنپدراگون",
        "دوربین 200 مگاپیکسلی",
        "نمایشگر 6.8 اینچی",
        "شارژ 45 واتی"
      ],
      rightFeatures: [
        "طراحی مدرن و زیبا",
        "نمایشگر Dynamic AMOLED",
        "سازگاری با 5G",
        "سیستم عامل One UI 6"
      ]
    }
  ];

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
            className="w-full"
            dir="rtl"
            allowTouchMove={true}
            grabCursor={true}
          >
            {newestProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
                  {/* Left Feature List */}
                  <div className="order-2 w-full lg:col-span-1 lg:order-1">
                    <FeatureList 
                      features={product.leftFeatures}
                      position="left"
                    />
                  </div>

                  {/* Center Product Display */}
                  <div className="relative order-1 w-full lg:col-span-1 lg:order-2">
                    <ProductDisplay 
                      product={product}
                    />
                    {/* Navigation Arrows positioned next to the product image */}
                    <NavigationArrows />
                  </div>

                  {/* Right Feature List */}
                  <div className="order-3 w-full lg:col-span-1 lg:order-3">
                    <FeatureList 
                      features={product.rightFeatures}
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
