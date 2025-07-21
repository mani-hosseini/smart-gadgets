import React from "react";
import BreadcrumbBox from "../components/ui/BreadcrumbBox";
import Heading from "../components/ui/heading";
import ContactButton from "../components/contact/ContactButton";
import ColorStripesBg from "../components/contact/ColorStripesBg";

export default function About() {
  return (
    <>
      <BreadcrumbBox pageName="درباره ما" />
      <section className="w-full max-w-7xl mx-auto px-2 sm:px-6 py-10 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 relative">
          {/* Right Side */}
          <div className="flex-1 flex flex-col items-end text-right max-w-md">
            <Heading title="درباره ما بیشتر بدانید..." />
            <p className="mt-6 text-gray-500 leading-8 text-base sm:text-lg">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی است.
            </p>
            <ContactButton to="/shop">مشاهده فروشگاه</ContactButton>
          </div>
          {/* Center Image with Stripes */}
          <div className="relative flex-1 flex items-center justify-center min-w-[260px] min-h-[260px] max-w-xs mx-4">
            <ColorStripesBg />
            <img
              src="/about/about-1-min.png"
              alt="هدفون"
              className="relative z-10 w-[220px] sm:w-[320px] drop-shadow-xl"
              draggable={false}
            />
          </div>
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-start text-left max-w-md">
            <Heading title="با فروشگاه ما همراه باشید..." />
            <p className="mt-6 text-gray-500 leading-8 text-base sm:text-lg">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی است.
            </p>
            <ContactButton to="/contact">تماس با ما</ContactButton>
          </div>
        </div>
      </section>
    </>
  );
}
