import React from "react";
import FooterLinkColumn from "./FooterLinkColumn";

const columns = [
  {
    title: "لینک‌های مفید",
    links: [
      { label: "خانه", href: "#" },
      { label: "فروشگاه", href: "#" },
    ],
  },
  {
    title: "خدمات مشتریان",
    links: [
      { label: "سوالات متداول", href: "#" },
      { label: "پیگیری سفارش", href: "#" },
    ],
  },
  {
    title: "راهنما",
    links: [
      { label: "نحوه خرید", href: "#" },
      { label: "قوانین سایت", href: "#" },
    ],
  },
  {
    title: "دسترسی سریع",
    links: [
      { label: "سبد خرید", href: "#" },
      { label: "محصولات جدید", href: "#" },
    ],
  },
  {
    title: "اطلاعات",
    links: [
      { label: "همکاری با ما", href: "#" },
      { label: "تماس با مدیریت", href: "#" },
    ],
  },
];

export default function Bottomsection() {
  return (
    <div className="bg-white mt-8 sm:mt-10 py-6 sm:py-8 w-[96%] sm:w-[90%] mx-auto rounded-t-xl">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-x-16 lg:gap-x-24">
        <div className="w-full flex flex-wrap justify-center items-stretch gap-4 sm:gap-8 md:gap-x-16 lg:gap-x-24">
          {columns.map((col, i) => (
            <div
              key={i}
              className="flex-1 min-w-[140px] max-w-[220px] flex justify-center"
            >
              <FooterLinkColumn title={col.title} links={col.links} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 sm:mt-4">
        <hr className="w-full border-t border-gray-200 " />
        <p className="text-[10px] sm:text-xs pt-3 sm:pt-4 text-gray-400 text-center w-full">
          تمامی حقوق برای سایت آماده فروشگاه گجت هوشمند محفوظ است.
        </p>
      </div>
    </div>
  );
}
