import React from "react";
import ContactColumn from "../contact/ContactColumn";
import ColorStripesBg from "../contact/ColorStripesBg";

const HeroDoubleColumnSection = ({
  right,
  left,
  imageSrc,
  imageAlt = "تصویر",
  imageClassName = "w-40 sm:w-56 md:w-64 h-auto object-contain relative z-10",
  centerClassName = "flex justify-center items-center w-full max-w-xs sm:max-w-sm md:max-w-sm relative mb-6 md:mb-0",
  containerClassName = "w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 py-2 sm:py-6 md:py-8 mt-0",
}) => (
  <div className={containerClassName}>
    <ContactColumn {...right} />
    <div className={centerClassName}>
      <ColorStripesBg />
      <img src={imageSrc} alt={imageAlt} className={imageClassName} />
    </div>
    <ContactColumn {...left} />
  </div>
);

export default HeroDoubleColumnSection; 