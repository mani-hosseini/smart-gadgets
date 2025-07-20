import React from "react";
import { Mail, Phone, Clock } from "lucide-react";
import Heading from "../ui/heading";
import SocialIcons from "../layout/footer/SocialIcons";

const iconClass = "w-8 h-8 bg-white text-[#4636f3] rounded-full p-2 flex items-center justify-center";

const ContactInfoBox = () => (
  <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-16 md:gap-20 my-12 sm:my-20 md:my-28 mt-8">
    <div className="flex flex-col items-start w-full md:w-1/3">
      <Heading title="اطلاعات تماس با ما" />
      <p className="text-gray-600 text-xs sm:text-sm leading-7 text-justify mt-4">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی است.
      </p>
    </div>
    <div className="bg-[#4636f3] rounded-2xl sm:rounded-l-full sm:rounded-br-full sm:rounded-tr-3xl flex flex-col justify-center items-center w-full md:w-2/3 min-h-[100px] p-4 sm:p-8 mt-6 md:mt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-10 md:gap-x-14 gap-y-3 sm:gap-y-6">
        <div className="flex items-center gap-2 sm:gap-3 text-white text-xs sm:text-sm md:text-base font-normal justify-center">
          <span className={iconClass}><Mail className="w-5 h-5" /></span>
          <span>ایمیل: info@yoursite.ir</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-white text-xs sm:text-sm md:text-base font-normal justify-center">
          <span className={iconClass}><Phone className="w-5 h-5" /></span>
          <span>تلفن پشتیبانی: 021-1234567#</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-white text-xs sm:text-sm md:text-base font-normal justify-center">
          <span className={iconClass}><Clock className="w-5 h-5" /></span>
          <span>ساعات کاری: 8 صبح تا 10 شب</span>
        </div>
        <div className="flex justify-center mt-2 sm:mt-0">
          <SocialIcons />
        </div>
      </div>
    </div>
  </div>
);

export default ContactInfoBox; 