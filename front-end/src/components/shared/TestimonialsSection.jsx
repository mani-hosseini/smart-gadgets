import React from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    name: "ویدا محمدی",
    date: "۲۳ آبان ۱۴۰۱",
    img: "/about/customer-pic1.jpg",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از چاپ صنعت چاپ، و استفاده از طراحان گرافیک خبره می‌باشد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است.",
    rating: 4.5,
  },
  {
    name: "علی کرمی",
    date: "۲۳ آبان ۱۴۰۱",
    img: "/about/customer-pic2.jpg",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از چاپ صنعت چاپ، و استفاده از طراحان گرافیک خبره می‌باشد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است.",
    rating: 4,
  },
  {
    name: "محمد رسولی",
    date: "۲۳ آبان ۱۴۰۱",
    img: "/about/customer-pic3.jpg",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از چاپ صنعت چاپ، و استفاده از طراحان گرافیک خبره می‌باشد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است.",
    rating: 4,
  },
  {
    name: "سارا احمدی",
    date: "۲۴ آبان ۱۴۰۱",
    img: "/about/customer-pic1.jpg",
    text: "تجربه خرید عالی و پشتیبانی سریع. حتماً پیشنهاد می‌کنم!",
    rating: 5,
  },
  {
    name: "رضا مرادی",
    date: "۲۵ آبان ۱۴۰۱",
    img: "/about/customer-pic2.jpg",
    text: "ارسال به موقع و کیفیت محصولات خیلی خوب بود.",
    rating: 4.5,
  },
  {
    name: "مینا شریفی",
    date: "۲۶ آبان ۱۴۰۱",
    img: "/about/customer-pic3.jpg",
    text: "از خرید از این فروشگاه راضی بودم. ممنون از تیم خوبتون!",
    rating: 5,
  },
  {
    name: "حسین عباسی",
    date: "۲۷ آبان ۱۴۰۱",
    img: "/about/customer-pic1.jpg",
    text: "پشتیبانی عالی و پاسخگویی سریع. محصولات با کیفیت.",
    rating: 4,
  },
  {
    name: "زهرا موسوی",
    date: "۲۸ آبان ۱۴۰۱",
    img: "/about/customer-pic2.jpg",
    text: "همه چیز عالی بود. دوباره خرید می‌کنم.",
    rating: 5,
  },
  {
    name: "مجید رضایی",
    date: "۲۹ آبان ۱۴۰۱",
    img: "/about/customer-pic3.jpg",
    text: "ارسال سریع و بسته‌بندی مناسب. ممنون!",
    rating: 4.5,
  },
];

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < full; i++) {
    stars.push(
      <Star
        key={i}
        size={18}
        className="text-orange-500 inline-block fill-orange-500"
        fill="currentColor"
      />
    );
  }
  if (half) {
    stars.push(
      <Star
        key="half"
        size={18}
        className="text-orange-500 inline-block"
        style={{ clipPath: "inset(0 50% 0 0)" }}
        fill="currentColor"
      />
    );
  }
  while (stars.length < 5) {
    stars.push(
      <Star
        key={stars.length}
        size={18}
        className="text-gray-300 inline-block"
      />
    );
  }
  return stars;
}

const TestimonialsSection = () => (
  <div className="w-full flex flex-col items-center my-10">
    <Swiper
      spaceBetween={24}
      slidesPerView={3}
      loop={true}
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        900: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      }}
      style={{ width: '100%', padding: '0 0.5rem' }}
    >
      {testimonials.map((t, idx) => (
        <SwiperSlide key={idx}>
          <div
            className="bg-[#fafafa] rounded-2xl p-4 flex-1 min-w-[260px] max-w-md flex flex-col items-start text-right border border-gray-100 transition-transform duration-300 hover:-translate-y-2 h-44"
          >
            <div className="flex items-center justify-between w-full mb-2">
              <div className="flex items-center gap-x-3">
                <div className="flex flex-col justify-center items-end flex-1">
                  <span className="font-bold text-gray-600 text-base">
                    {t.name}
                  </span>
                  <span className="text-gray-400 text-xs mt-1">{t.date}</span>
                </div>
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white  ml-2"
                />
              </div>
              <div className="flex items-center mb-3">
                {renderStars(t.rating)}
              </div>
            </div>
            <p className="text-gray-400 text-[13px] leading-7">{t.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default TestimonialsSection;
