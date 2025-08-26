import React from "react";
import FooterLinkColumn from "./FooterLinkColumn";

const columns = [
  {
    title: "لینک‌های مفید",
    links: [
      { label: "خانه", href: "/" },
      { label: "فروشگاه", href: "/shop" },
    ],
  },
  {
    title: "خدمات مشتریان",
    links: [
      { label: "سبد خرید", href: "/cart" },
      { label: "حساب کاربری", href: "/my-account" },
    ],
  },
  {
    title: "راهنما",
    links: [
      { label: "درباره ما", href: "/about" },
      { label: "تماس با ما", href: "/contact" },
    ],
  },
  {
    title: "دسترسی سریع",
    links: [
      { label: "وبلاگ", href: "/blog" },
      { label: "ورود / ثبت‌نام", href: "/account" },
    ],
  },
  {
    title: "اطلاعات",
    links: [
      { label: "تکمیل خرید", href: "/checkout" },
      { label: "محصولات جدید", href: "/shop" },
    ],
  },
];

export default function Bottomsection() {
  return (
    <div className="bg-white mt-8 sm:mt-10 py-6 sm:py-8 w-[96%] sm:w-[90%] mx-auto rounded-t-xl">
      <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-row sm:gap-8 md:gap-x-16 lg:gap-x-24">
        <div className="flex flex-wrap items-stretch justify-center w-full gap-4 sm:gap-8 md:gap-x-16 lg:gap-x-24">
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
