import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';

export default function ArticleListCard({ article }) {
  return (
    <div className="bg-[#fafafa] rounded-xl p-3 sm:p-4 group">
      <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4">
        <div className="w-full h-36 sm:w-36 sm:h-24 md:w-40 md:h-28 flex-shrink-0 overflow-hidden rounded-lg sm:rounded-xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-col mt-2 sm:mt-0">
          <Link to={article.link} className="block">
            <h3 className="text-[13px] sm:text-sm font-bold text-gray-800 text-right mb-1 leading-6 hover:text-blue-600 transition-colors line-clamp-2">
              {article.title}
            </h3>
            {article.excerpt && (
              <p className="text-[11px] sm:text-xs text-gray-600 text-right leading-6 line-clamp-2">
                {article.excerpt}
              </p>
            )}
          </Link>
          <div className="mt-2 flex items-center justify-between">
            <Badge label={article.category} color="blue" />
            <Link
              to={article.link}
              className="text-blue-600 hover:text-blue-700 transition-colors text-[11px] sm:text-xs font-bold"
            >
              <span className="relative inline-flex items-center gap-1">
                <span>ادامه مطلب</span>
                <span>←</span>
                <span className="absolute -bottom-0.5 right-0 left-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


