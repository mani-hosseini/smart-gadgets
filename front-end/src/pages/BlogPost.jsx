import React from "react";
import {useParams, Link} from "react-router-dom";
import {Calendar, MessageCircle, ChevronRight, ChevronLeft} from "lucide-react";
import postsData from "../components/blog/postsData";
import BreadcrumbBox from "../components/ui/BreadcrumbBox";
import MainContainer from "../components/ui/MainContainer";
import BlogPostContent from "../components/blog/BlogPostContent";
import CommentsSectionUI from "../components/blog/CommentsSectionUI";

export default function BlogPost() {
    const {slug} = useParams();
    const posts = postsData;
    const postIndex = posts.findIndex((p) => p.slug === slug);
    const post = posts[postIndex];
    const prev = posts[postIndex - 1];
    const next = posts[postIndex + 1];

    if (!post) return <div className="text-center py-20">مقاله پیدا نشد.</div>;

    return (
        <MainContainer>
            <div className="py-8 px-2 sm:px-0">
                <div className="w-full mb-8">
                    <BreadcrumbBox
                        pageName={<span><Link to="/blog" className="text-blue-700 font-bold">وبلاگ</Link> / {post.title}</span>}/>
                </div>

                <div
                    className="bg-[#f7f7f7] rounded-3xl p-6 flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-8">
                    <div className="md:w-1/2 w-full flex flex-col justify-center">
                        <h1 className="text-sm md:text-xl text-gray-800 font-bold text-right mb-4">{post.title}</h1>
                        <p className="text-gray-400 md:text-sm text-xs text-right mb-4">{post.content || "اپل ۱۰ سال قبل از آیفون ۵ رونمایی کرد که برخلاف نسل‌های قبلی، فاقد کانکتور ۳٫۵ میلی‌متری بود و با پورت لایتنینگ راهی بازار شد. به لطف استفاده از این پورت، کاربران بدون توجه به جهت درست کابل می‌توانستند آن را درون پورت گوشی قرار دهند..."}</p>
                        <div className="flex items-center gap-4 text-gray-400 text-sm mt-auto">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4  text-blue-700"/>
                                <span className={'md:font-bold text-xs '}>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <MessageCircle className="w-4 h-4 text-blue-700"/>
                                <span
                                    className={'md:font-bold text-xs '}>{post.comments === 0 ? "بدون دیدگاه" : `${post.comments} دیدگاه`}</span>
                            </div>
                        </div>
                        <div className="flex justify-between bg-white rounded-xl mt-8 md:h-24 h-12">
                            {prev ? (
                                <Link to={prev.link}
                                      className="flex items-center gap-1 px-4 text-gray-700 hover:text-blue-600 transition-colors">
                                    <div>
                                        <ChevronRight className="w-6 h-6 text-blue-700"/>
                                    </div>
                                    <div>
                                        <span className={'block'}>قبلی</span>
                                        <span className="hidden sm:inline text-xs text-gray-400"> {prev.title}</span>
                                    </div>
                                </Link>
                            ) : <div className="flex items-center px-4 text-gray-400">
                                <span>قبلی</span>
                            </div>}
                            {next ? (
                                <Link to={next.link}
                                      className="flex items-center gap-1 px-4 text-gray-700 hover:text-blue-600 transition-colors">
                                    <div>
                                        <span className={'block'}>بعدی</span>
                                        <span className="hidden sm:inline text-xs text-gray-400"> {next.title}</span>
                                    </div>
                                    <div>
                                        <ChevronLeft className="w-6 h-6 text-blue-700"/>
                                    </div>
                                </Link>
                            ) : <div className="flex items-center px-4 text-gray-400">
                                <span>بعدی</span>
                            </div>}
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full flex-shrink-0">
                        <img src={post.imgSrc} alt={post.title} className="rounded-2xl w-full object-cover"/>
                    </div>
                </div>

                <BlogPostContent post={post} prev={prev} next={next}/>
                
                {/* Comments Section - بخش سوم */}
                <div className="mt-12">
                    <CommentsSectionUI />
                </div>
            </div>
        </MainContainer>
    );
} 