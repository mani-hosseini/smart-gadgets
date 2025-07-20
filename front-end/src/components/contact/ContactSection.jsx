import React from "react";
import ContactColumn from "./ContactColumn";
import ColorStripesBg from "./ColorStripesBg";

const text =
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی است.";

const ContactSection = () => (
  <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 py-2 sm:py-6 md:py-8 mt-0">
    <ContactColumn
      heading="با ما تماس بگیرید..."
      text={text}
      buttonText="مشاهده فروشگاه"
      buttonTo="/shop"
      textClassName="text-xs sm:text-sm md:text-base"
    />
    <div className="flex justify-center items-center w-full max-w-xs sm:max-w-sm md:max-w-sm relative mb-6 md:mb-0">
      <ColorStripesBg />
      <img
        src="/contact/mobile-pic.png"
        alt="تماس با ما"
        className="w-40 sm:w-56 md:w-64 h-auto object-contain relative z-10"
      />
    </div>
    <ContactColumn
      heading="با ما همراه باشید..."
      text={text}
      buttonText="درباره ما"
      buttonTo="/about"
      textClassName="text-xs sm:text-sm md:text-base"
    />
  </div>
);

export default ContactSection;
