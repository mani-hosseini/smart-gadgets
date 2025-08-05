import React from "react";
import BlogCard from "./BlogCard";
import posts from "./postsData";

export default function BlogSection() {
  return (
    <div className="container mx-auto py-10 px-2 sm:px-0">
      <div className="grid grid-cols-2 md:grid-cols-8 gap-6 items-stretch">
        <div className="md:col-span-2 col-span-2  md:block hidden">
          <BlogCard {...posts[0]} size="large" link={posts[0].link} />
        </div>
        <div className="md:col-span-4 col-span-2 grid grid-cols-2 gap-6">
          <BlogCard {...posts[1]} size="small" link={posts[1].link} />
          <BlogCard {...posts[2]} size="small" link={posts[2].link} />
          <BlogCard {...posts[3]} size="small" link={posts[3].link} />
          <BlogCard {...posts[4]} size="small" link={posts[4].link} />
        </div>
        <div className="md:col-span-2 col-span-2  md:block hidden">
          <BlogCard {...posts[5]} size="large" link={posts[5].link} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 md:hidden mt-6">
        {posts.map((post, idx) => (
          <BlogCard key={idx} {...post} link={post.link} />
        ))}
      </div>
    </div>
  );
} 