import React, { useState } from "react";
import MainContainer from "../ui/MainContainer";
import Heading from "../ui/heading";
import ContactButton from "../contact/ContactButton";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <MainContainer className="my-18">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        <div className="flex flex-col items-start  text-right gap-2 max-w-xl">
          <Heading title="عضویت در خبرنامه ما" />
          <p className="text-gray-600 text-xs sm:text-sm leading-7 text-justify mt-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
        </div>
        <div className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
          <form
            onSubmit={handleSubmit}
            className="flex flex-row items-center bg-[#4837f3] rounded-2xl sm:rounded-l-full sm:rounded-br-full p-2 md:p-6 gap-2 md:gap-4 w-[320px] min-w-[280px] max-w-full mx-auto md:w-full md:min-w-[320px] md:max-w-2xl"
            style={{ direction: 'rtl' }}
          >
            <ContactButton
              type="submit"
              className="!bg-[#e4e2fe] !text-[#4837f3] !rounded-full !px-6 !py-2 !font-bold !text-base !border-none !hover:bg-white !hover:text-[#4837f3] !transition-all !duration-200 min-w-[80px] flex-shrink-0 order-2 md:order-1"
            >
              ارسال
            </ContactButton>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="آدرس پست الکترونیک خود را وارد کنید..."
              className="flex-1 max-w-[180px] md:max-w-full rounded-full bg-white px-3 py-2 text-sm md:text-base text-right outline-none placeholder:text-gray-400 placeholder:text-center border-none focus:ring-2 focus:ring-blue-200 transition-all order-1 md:order-2"
              dir="rtl"
            />
          </form>
        </div>
      </div>
    </MainContainer>
  );
};

export default NewsletterSection;
