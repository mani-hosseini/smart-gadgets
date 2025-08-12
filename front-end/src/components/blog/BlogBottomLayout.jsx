import React from "react";
import BlogArticlesList from "./BlogArticlesList";
import BlogBottomSidebar from "./BlogBottomSidebar";
import Heading from "../ui/heading";

const BlogBottomLayout = () => {
  return (
    <div className="container mx-auto md:py-16 py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
       <div className="lg:col-span-7 order-1">
          <Heading title="جدیدترین مقالات" />
        </div>
        <div className="lg:col-span-3 order-3 lg:order-2">
          <Heading title="پربحث‌ترین‌ها" />
        </div>
        <div className="lg:col-span-7 order-2">
          <BlogArticlesList />
        </div>
        <div className="lg:col-span-3 order-4">
          <BlogBottomSidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogBottomLayout;
