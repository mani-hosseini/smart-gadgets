import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import Heading from "../ui/heading";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const posts = [
  {
    imgSrc: "/about/blog-pic1.jpg",
    title: "بهترین هدفون های هوشمند ۲۰۲۴ برای کاربری‌های مختلف",
    description:
      "اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی، فاقد کانکتور...",
    date: "۱۴۰۳/۰۹/۰۹",
    link: "/blog/post-1",
  },
  {
    imgSrc: "/about/blog-pic2.jpg",
    title: "هدفون هوشمند چیست | هرآنچه باید در رابطه با آن بدانید",
    description:
      "اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی، فاقد کانکتور...",
    date: "۱۴۰۳/۰۹/۰۹",
    link: "/blog/post-2",
  },
  {
    imgSrc: "/about/blog-pic6.jpg",
    title: "راهنمای خرید انواع مچ بند هوشمند",
    description:
      "اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی، فاقد کانکتور...",
    date: "۱۴۰۳/۰۹/۰۹",
    link: "/blog/post-3",
  },
  {
    imgSrc: "/about/blog-pic1.jpg",
    title: "بررسی تخصصی جدیدترین ساعت‌های هوشمند",
    description:
      "اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی، فاقد کانکتور...",
    date: "۱۴۰۳/۰۹/۰۸",
    link: "/blog/post-4",
  },
  {
    imgSrc: "/about/blog-pic2.jpg",
    title: "چگونه بهترین گجت پوشیدنی را انتخاب کنیم؟",
    description:
      "اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی، فاقد کانکتور...",
    date: "۱۴۰۳/۰۹/۰۷",
    link: "/blog/post-5",
  },
  {
    imgSrc: "/about/blog-pic6.jpg",
    title: "نکات و ترفندهای استفاده از مچ‌بندهای سلامتی",
    description:
      "اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی، فاقد کانکتور...",
    date: "۱۴۰۳/۰۹/۰۶",
    link: "/blog/post-6",
  },
];

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

export default function BlogSection() {
  return (
    <div className="bg-gray-100/60 rounded-3xl py-10 px-4 sm:px-11">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Heading title="آخرین مقالات ما" />
          <Link
            to="/blog"
            className="text-gray-600 bg-white hover:bg-gray-200/90 border-2 border-gray-200/90 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-xl text-sm px-5 py-2.5 text-center hidden md:inline-flex items-center"
          >
            مشاهده همه
          </Link>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <BlogCard
                imgSrc={post.imgSrc}
                title={post.title}
                description={post.description}
                date={post.date}
                link={post.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
} 