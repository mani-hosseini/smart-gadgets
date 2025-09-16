import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import DiagonalStripes from './DiagonalStripes';
import NavigationArrows from './NavigationArrows';

const ProductSlider = () => {
  const slides = [
    { id: 1, src: "/home/slider-pic1.png", alt: "ساعت هوشمند 1" },
    { id: 2, src: "/home/slider-pic2.png", alt: "ساعت هوشمند 2" },
    { id: 3, src: "/home/slider-pic3.png", alt: "ساعت هوشمند 3" }
  ];

  return (
    <div className="relative">
      <DiagonalStripes />
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-96 swiper-main"
        dir="rtl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex items-center justify-center h-full">
              <img 
                src={slide.src} 
                alt={slide.alt}
                className="object-contain w-48 h-48 transform sm:w-64 sm:h-64 md:w-80 md:h-80 -rotate-12"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationArrows />
    </div>
  );
};

export default ProductSlider;
