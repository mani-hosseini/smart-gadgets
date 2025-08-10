import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MessageCircle, ChevronRight, ChevronLeft } from "lucide-react";
import BlogSidebar from "./BlogSidebar";

const BlogPostContent = ({ post, prev, next }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 lg:gap-8">
      <div className="lg:col-span-3 order-1 lg:order-2">
        <div className="lg:sticky lg:top-8">
          <BlogSidebar />
        </div>
      </div>
      <div className="lg:col-span-7 order-2 lg:order-1">
        <div className="space-y-6 bg-[#f7f7f7] rounded-xl p-4 sm:p-6 lg:p-8">
          {/* Article Header */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 text-right mb-3 lg:mb-4">{post.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-500 text-xs sm:text-sm mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-blue-700"/>
                <span className="font-medium">{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-700"/>
                <span className="font-medium">{post.comments === 0 ? "بدون دیدگاه" : `${post.comments} دیدگاه`}</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-right">
            <p className="text-gray-500 leading-6 sm:leading-7 mb-4 sm:mb-6 text-sm sm:text-base">
              {post.content || "اپل در رویداد سالانه خود در سپتامبر ۲۰۲۳، سری جدید آیفون‌های خود را معرفی کرد. این سری شامل چهار مدل مختلف است: آیفون ۱۵، آیفون ۱۵ پلاس، آیفون ۱۵ پرو و آیفون ۱۵ پرو مکس. هر کدام از این مدل‌ها بهبودهای قابل توجهی نسبت به نسل قبلی خود دارند."}
            </p>

            <p className="text-gray-500 leading-6 sm:leading-7 mb-4 sm:mb-6 text-sm sm:text-base">
              آیفون ۱۵ و آیفون ۱۵ پلاس با طراحی جدید و بهبودهای نرم‌افزاری، تجربه کاربری بهتری را ارائه می‌دهند. این مدل‌ها مانند آیفون ۱۴، در ایران ثبت نمی‌شوند و کاربران باید از روش‌های جایگزین برای استفاده از آنها استفاده کنند.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 mt-6 sm:mt-8">طراحی آیفون ۱۵ و ۱۵ پلاس</h2>

            <p className="text-gray-500 leading-6 sm:leading-7 mb-4 sm:mb-6 text-sm sm:text-base">
              آیفون ۱۵ و آیفون ۱۵ پلاس از نظر طراحی شباهت‌های زیادی دارند، اما تفاوت‌های مهمی نیز بین آنها وجود دارد. آیفون ۱۵ دارای نمایشگر ۶.۱ اینچی است، در حالی که آیفون ۱۵ پلاس از نمایشگر ۶.۷ اینچی بهره‌مند است.
            </p>

            <p className="text-gray-500 leading-6 sm:leading-7 mb-4 sm:mb-6 text-sm sm:text-base">
              هر دو مدل دارای حاشیه‌های نازک‌تر و داینامیک آیلند هستند که تجربه کاربری بهتری را فراهم می‌کند. همچنین ظرفیت باتری در هر دو مدل بهبود یافته است.
            </p>

            {/* iPhone Images */}
            <div className="my-6 sm:my-8">
              <img
                src={post.imgSrc}
                alt={post.title}
                className="w-full rounded-xl shadow-lg"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x400/f0f0f0/666666?text=تصویر+مقاله";
                }}
              />
            </div>

            <p className="text-gray-500 leading-6 sm:leading-7 mb-4 sm:mb-6 text-sm sm:text-base">
              در تصویر بالا می‌توانید تفاوت‌های ظاهری بین آیفون ۱۵ و آیفون ۱۵ پلاس را مشاهده کنید. هر دو مدل دارای رابط کاربری iOS 17 هستند و از ویژگی‌های جدید مانند Dynamic Island بهره‌مند هستند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostContent; 