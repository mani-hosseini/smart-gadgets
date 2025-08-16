import React from 'react';
import ArticleListCard from './ArticleListCard';
import postsData from './postsData';

const BlogArticlesList = () => {
  const articles = postsData.map((p, index) => ({
    id: index + 1,
    title: p.title,
    image: p.imgSrc,
    link: p.link,
    category: p.category,
    excerpt: p.excerpt,
  }));

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
        {articles.map((article) => (
          <ArticleListCard key={article.id} article={article} />
        ))}
      </div>
      
    </div>
  );
};

export default BlogArticlesList;

