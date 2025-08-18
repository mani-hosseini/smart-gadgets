import React, { useState, useEffect } from "react";
import ProductCard from "../shop/ProductCard";
import { products } from "../shop/productsData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const SpecialOffersSection = () => {
  // انتخاب 6 محصول با تخفیف
  const featuredProducts = products.filter(product => product.discount).slice(0, 6);

  // تایمر واقعی
  const [timeLeft, setTimeLeft] = useState({
    days: 603,
    hours: 12,
    minutes: 40,
    seconds: 27
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-gray-50 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Special Offer Card - 1 column (first from right) */}
          <div className="lg:col-span-1 lg:order-1">
            <div className="bg-[#4837f3] rounded-2xl p-6 text-white h-full flex flex-col justify-between items-center text-center">
              {/* Top Content */}
              <div className="pt-4 w-full">
                {/* Icon - exactly like Heading component */}
                <div className="grid grid-cols-2 grid-rows-2 w-6 h-6 mb-4 mx-auto gap-0">
                  <div className="w-3 h-3 rounded bg-white opacity-80" />
                  <div className="w-3 h-3 rounded bg-white" />
                  <div className="w-3 h-3 rounded bg-white" />
                  <div className="w-3 h-3 rounded bg-white opacity-80" />
                </div>

                {/* Title */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    پیشنهادات
                  </h3>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    شگفت‌انگیز
                  </h3>
                </div>
                <div className="w-12 h-1 bg-white rounded-full mb-6 mx-auto"></div>

                {/* Countdown Timer - 4 circles in a row */}
                <div className="flex justify-between mb-6">
                  <div className="bg-white rounded-full w-12 h-12 flex flex-col items-center justify-center">
                    <div className="text-sm font-bold text-[#4837f3]">{timeLeft.days}</div>
                    <div className="text-xs text-[#4837f3] opacity-80">روز</div>
                  </div>
                  <div className="bg-white rounded-full w-12 h-12 flex flex-col items-center justify-center">
                    <div className="text-sm font-bold text-[#4837f3]">{timeLeft.hours}</div>
                    <div className="text-xs text-[#4837f3] opacity-80">ساعت</div>
                  </div>
                  <div className="bg-white rounded-full w-12 h-12 flex flex-col items-center justify-center">
                    <div className="text-sm font-bold text-[#4837f3]">{timeLeft.minutes}</div>
                    <div className="text-xs text-[#4837f3] opacity-80">دقیقه</div>
                  </div>
                  <div className="bg-white rounded-full w-12 h-12 flex flex-col items-center justify-center">
                    <div className="text-sm font-bold text-[#4837f3]">{timeLeft.seconds}</div>
                    <div className="text-xs text-[#4837f3] opacity-80">ثانیه</div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button className="w-1/2 mx-auto bg-transparent border-2 border-white text-white py-2 rounded-full font-medium hover:bg-white hover:text-[#4837f3] transition-all duration-200 text-sm cursor-pointer">
                مشاهده همه
              </button>
            </div>
          </div>

          {/* Product Cards - 3 columns with Swiper */}
          <div className="lg:col-span-3 lg:order-2">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full h-full"
              dir="rtl"
            >
              {featuredProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="h-full">
                    <ProductCard product={product} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
