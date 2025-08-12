import React from "react";
import { Link } from "react-router-dom";
import postsData from "./postsData";

const LatestArticles = () => {
  const latestPosts = postsData.slice(0, 4);

  return (
    <div className="space-y-6 sm:space-y-4">
      <div className="space-y-6 sm:sace-y-4">
        {latestPosts.map((post, index) => (
          <Link key={index} to={post.link} className="block rounded-lg p-2 -m-2 transition-colors">
            <div className="flex gap-2  sm:gap-3 items-start">
              <img
                src={post.imgSrc}
                alt={post.title}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-xs sm:text-sm font-medium text-gray-800 text-right mb-1 line-clamp-2 leading-tight hover:text-blue-600">
                  {post.title}
                </h4>
                <div className="flex items-center my-4 md:my-2 justify-between text-xs text-gray-500">
                  <span>۰ دیدگاه</span>
                  <span className="text-blue-600 flex items-center gap-2">
                    <span className="text-xs">ادامه مطلب</span>
                    <span className="text-xs">←</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestArticles; 