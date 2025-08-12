import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const categories = [
  {
    id: 1,
    name: 'آداب و رسوم',
    count: 3,
    image: '/blog/article-pic8.jpg'
  },
  {
    id: 2,
    name: 'اقتصادی',
    count: 3,
    image: '/blog/article-pic9.jpg'
  },
  {
    id: 3,
    name: 'فرهنگی',
    count: 4,
    image: '/blog/Best-Wear-Os-Watches-0.jpg'
  },
  {
    id: 4,
    name: 'گردشگری',
    count: 3,
    image: '/blog/article-pic101.jpg'
  },
  {
    id: 5,
    name: 'هنری',
    count: 4,
    image: '/blog/blog-pic6.jpg'
  }
];

const CategoryCard = ({ category }) => (
  <div className="relative h-32 rounded-lg overflow-hidden cursor-pointer group">
    <img
      src={category.image}
      alt={category.name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    <div className="absolute top-2 left-2">
      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
        {category.count}
      </div>
    </div>
    <div className="absolute bottom-2 left-2 right-2">
      <h3 className="text-white font-bold text-sm drop-shadow-lg">{category.name}</h3>
    </div>
  </div>
);

const CategoryCardMobile = ({ category }) => (
  <div className="relative h-24 rounded-lg overflow-hidden cursor-pointer group">
    <img
      src={category.image}
      alt={category.name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
    <div className="absolute top-1 left-1">
      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
        {category.count}
      </div>
    </div>
    <div className="absolute bottom-1 left-1 right-1">
      <h3 className="text-white font-bold text-xs drop-shadow-lg">{category.name}</h3>
    </div>
  </div>
);

 

export default function CategorySection() {
  return (
    <div className="container mx-auto pt-6 px-4">
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="grid grid-cols-5 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Mobile View with Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={12}
          slidesPerView={2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          className="category-swiper"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryCardMobile category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
