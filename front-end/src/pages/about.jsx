import React from "react";
import BreadcrumbBox from "../components/ui/BreadcrumbBox";
import Heading from "../components/ui/heading";
import HeroDoubleColumnSection from "../components/shared/HeroDoubleColumnSection";
import MainContainer from "../components/ui/MainContainer";
import FeatureList from "../components/shared/FeatureList";
import NewsletterSection from "../components/shared/NewsletterSection";
import TestimonialsSection from "../components/shared/TestimonialsSection";
import { ContactInfoTextBox, ContactInfoIconsBox } from "../components/contact/ContactInfoBox";
import { Mail, Phone } from "lucide-react";
import HeadingButton from "../components/shared/HeadingButton";
import FAQSection from '../components/shared/FAQSection'
import BlogSection from "../components/blog/BlogSection";

export default function About() {
  const text =
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی است.";
  return (
    <>
    <MainContainer>
      <BreadcrumbBox pageName="درباره ما" />
      <HeroDoubleColumnSection
        right={{
          heading: "با فروشگاه ما همراه باشید...",
          text,
          buttonText: "تماس با ما",
          buttonTo: "/contact",
        }}
        left={{
          heading: "درباره ما بیشتر بدانید...",
          text,
          buttonText: "مشاهده فروشگاه",
          buttonTo: "/shop",
        }}
        imageSrc="/about/about-1-min.png"
        imageAlt="هدفون"
        imageClassName="w-40 sm:w-56 md:w-64 h-auto object-contain relative z-10"
      />
      <FeatureList />
      <NewsletterSection />
      <TestimonialsSection />
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 my-18">
        <ContactInfoTextBox
          title="اطلاعات تماس با ما"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
          className="flex flex-col items-start w-full md:w-1/2 order-1 md:order-2"
        />
        <ContactInfoIconsBox 
          infoItems={[
            { icon: <Mail className="w-5 h-5" />, label: "ایمیل", value: "info@yoursite.ir" },
            { icon: <Phone className="w-5 h-5" />, label: "تلفن پشتیبانی", value: "021-1234567#" },
          ]}
          showSocials={false}
          className="bg-[#4636f3] rounded-2xl sm:rounded-l-full sm:rounded-br-full flex flex-row flex-wrap items-center justify-center gap-6 px-6 py-6 min-w-[260px] max-w-3xl w-full md:w-1/2 order-2 md:order-1"
        />
      </div>
      <HeadingButton/>
      <FAQSection />
      <div className="my-12">
      <BlogSection />
      </div>
      </MainContainer>
    </>
  );
}
