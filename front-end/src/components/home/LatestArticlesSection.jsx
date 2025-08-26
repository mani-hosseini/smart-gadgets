import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingButton from "../shared/HeadingButton";
import ArticleCard from "../blog/ArticleCard";
import posts from "../blog/postsData";

// Import Swiper styles
import "swiper/css";

const LatestArticlesSection = () => {
  // انتخاب 3 مقاله آخر
  const latestArticles = posts.slice(0, 3);

  return (
    <section className="lg:p-8 p-4 rounded-2xl bg-[#f7f7f7] mb-16 overflow-hidden">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <HeadingButton 
            title="آخرین مقالات ما"
            buttonText="مشاهده همه"
            buttonLink="/blog"
          />
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden grid-cols-2 gap-6 md:grid lg:grid-cols-3">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>

      {/* Mobile Swiper - Full width, outside container */}
      <div className="block -mx-4 md:hidden lg:-mx-8">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          className="latest-articles-swiper"
        >
          {latestArticles.map((article) => (
            <SwiperSlide key={article.slug}>
              <div className="px-4 lg:px-8">
                <ArticleCard article={article} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestArticlesSection;
