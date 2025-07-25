import React from "react";

const menuItems = [
  { label: "پیشخوان", value: "dashboard" },
  { label: "سفارش ها", value: "orders" },
  { label: "دانلودها", value: "downloads" },
  { label: "آدرس ها", value: "addresses" },
  { label: "جزئیات حساب", value: "accountDetails" },
  { label: "خروج", value: "logout" },
];

export default function Sidebar({ active, onSectionChange }) {
  return (
    <div className="bg-[#f5f4ff] rounded-2xl p-4 flex flex-col gap-2">
      {menuItems.map((item) => (
        <button
          key={item.value}
          className={`w-full md:text-base text-sm text-right px-4 py-2 rounded-xl transition-colors font-medium cursor-pointer mb-1
            ${active === item.value ? "bg-indigo-600 text-white" : "bg-white text-indigo-700 hover:bg-indigo-100"}`}
          onClick={() => {
            if (item.value === "logout") {
              localStorage.removeItem("user");
              window.location.href = "/account";
            } else {
              onSectionChange(item.value);
            }
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
} 