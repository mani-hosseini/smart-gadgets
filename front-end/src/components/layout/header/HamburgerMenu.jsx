import React, { useState } from "react";
import { Menu, X, Home, ShoppingBag, Info, BookOpen, Phone, HelpCircle } from "lucide-react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import SearchBox from "./SearchBox";

const links = [
  { to: "/", icon: Home, label: "خانه" },
  { to: "/shop", icon: ShoppingBag, label: "فروشگاه" },
  { to: "/about", icon: Info, label: "درباره ما" },
  { to: "/blog", icon: BookOpen, label: "بلاگ" },
  { to: "/contact", icon: Phone, label: "تماس" },
  { to: "/question", icon: HelpCircle, label: "سوالات متداول" },
];

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-1 rounded-full bg-blue-50 hover:bg-blue-100 transition border border-blue-100 shadow-sm md:hidden"
        aria-label="باز کردن منو"
      >
        <Menu size={22} className="text-blue-600" />
      </button>
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-200"
            onClick={() => setOpen(false)}
          />
          {/* Drawer */}
          <nav
            className={
              `fixed top-0 right-0 h-screen w-[80vw] max-w-xs bg-white z-50 gap-y-4 flex flex-col p-4 shadow-2xl transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`
            }
            style={{ minWidth: 240 }}
          >
            <div className="relative flex items-center justify-center mb-4">
              {/* دکمه بستن */}
              <button
                onClick={() => setOpen(false)}
                className="absolute left-0 p-1 rounded-full hover:bg-gray-100 transition"
                aria-label="بستن منو"
              >
                <X size={22} className="text-gray-600" />
              </button>
              {/* لوگو */}
              <div className="flex-1 flex justify-center">
                <Logo />
              </div>
            </div>
            {/* اینپوت جستجو */}
            <div className="mb-4 w-full">
              <SearchBox className="w-full" />
            </div>
            {/* لینک‌ها */}
            <div className="flex flex-col gap-1 bg-blue-50 rounded-lg ">
              {links.map(({ to, icon, label }, idx) => (
                <React.Fragment key={to}>
                  <NavLink
                    to={to}
                    className="flex items-center gap-2 rounded-none text-sm"
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <span
                      className={
                        "text-sm text-right py-2 px-6 rounded-lg transition-colors w-full" +
                        (idx === 0
                          ? " bg-blue-600 text-white"
                          : " hover:bg-blue-600 hover:text-white")
                      }
                    >
                      {label}
                    </span>
                  </NavLink>
                  {/* خط زیر هر لینک به جز آخرین */}
                  {idx !== links.length - 1 && (
                    <div className="border-b border-gray-200 mx-3" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </nav>
        </>
      )}
    </>
  );
} 