import React from 'react'
import BreadcrumbBox from "../components/ui/BreadcrumbBox";
import BlogSection from "../components/blog/BlogSection";
import BlogBottomSection from "../components/blog/BlogBottomSection";
import MainContainer from '../components/ui/MainContainer';

export default function Blog() {
  return (
    <MainContainer>
      <BreadcrumbBox pageName="وبلاگ" />
      <BlogSection />
      <BlogBottomSection />
    </MainContainer>
  )
}
