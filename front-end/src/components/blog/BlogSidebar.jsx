import React from "react";
import LatestArticles from "./LatestArticles";
import NewsletterSubscription from "./NewsletterSubscription";
import ShareArticle from "./ShareArticle";

const BlogSidebar = () => {
    return (
        <div className="space-y-4 sm:space-y-6 bg-[#f7f7f7] rounded-xl p-4 sm:p-6">
            <LatestArticles />
            <NewsletterSubscription />
            <ShareArticle />
        </div>
    );
};

export default BlogSidebar; 