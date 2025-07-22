import React, { useState, useRef } from "react";

const faqs = [
  {
    question: "آیا امکان پیش خرید کالاهای ناموجود وجود دارد؟",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی است.",
  },
  {
    question: "آیا امکان مرجوع کردن کالا پس از خرید وجود دارد؟",
    answer: "بله، تا ۷ روز پس از خرید امکان مرجوع کردن کالا وجود دارد.",
  },
  {
    question: "آیا امکان پیش خرید کالاهای ناموجود وجود دارد؟",
    answer: "خیر، فقط کالاهای موجود قابل خرید هستند.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  return (
    <div id="faq-section" className="flex flex-col md:flex-row items-center justify-around gap-8 my-12 scroll-mt-24">
      <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
        <img
          src="/about/smart-watches2.png"
          alt="ساعت‌های هوشمند"
          className="max-w-xs md:max-w-md"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 order-1 md:order-2">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-3 transition bg-gray-50 ${openIndex === idx ? "shadow" : ""}`}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              <span className="text-gray-800 md:text-base text-sm">{faq.question}</span>
              <span className="text-2xl text-purple-400">
                {openIndex === idx ? "−" : "+"}
              </span>
            </div>
            <div
              ref={el => (contentRefs.current[idx] = el)}
              style={{
                maxHeight: openIndex === idx ? contentRefs.current[idx]?.scrollHeight : 0,
                opacity: openIndex === idx ? 1 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s"
              }}
            >
              <div className="text-xs md:text-sm mt-4 text-gray-600 text-justify">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 