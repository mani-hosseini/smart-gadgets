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
  { to: "/about#faq", icon: HelpCircle, label: "سوالات متداول" },
];

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleOpen = () => {
    setIsClicked(true);
    setOpen(true);
    setIsAnimating(true);
    
    // Reset click animation after a short delay
    setTimeout(() => setIsClicked(false), 200);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setOpen(false), 500);
  };

  const handleFAQClick = (e) => {
    // If we're already on the about page, dispatch custom event instead of navigation
    if (window.location.pathname === '/about') {
      e.preventDefault();
      window.dispatchEvent(new Event('faq-click'));
      handleClose(); // Close the hamburger menu
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className={`p-1 rounded-full bg-blue-50 hover:bg-blue-100 transition-all duration-200 border border-blue-100 shadow-sm md:hidden ${
          isClicked ? 'scale-95 rotate-90 bg-blue-100' : 'scale-100 rotate-0'
        }`}
        aria-label="باز کردن منو"
      >
        <Menu size={22} className={`text-blue-600 transition-transform duration-200 ${
          isClicked ? 'scale-110' : 'scale-100'
        }`} />
      </button>
      {open && (
        <>
          <div
            className={`fixed inset-0 bg-black/50 z-50 transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
          />
          <nav
            className={
              `fixed top-0 right-0 h-screen w-[80vw] max-w-xs bg-white z-50 gap-y-4 flex flex-col p-4 shadow-2xl transition-all duration-500 ease-in-out ${isAnimating ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'}`
            }
            style={{ minWidth: 240 }}
          >
            <div className="relative flex items-center justify-center mb-4">
              <button
                onClick={handleClose}
                className="absolute left-0 p-1 rounded-full hover:bg-gray-100 transition"
                aria-label="بستن منو"
              >
                <X size={22} className="text-gray-600" />
              </button>
              <div className="flex-1 flex justify-center">
                <Logo />
              </div>
            </div>
            <div className="mb-4 w-full">
              <SearchBox className="w-full" />
            </div>
            <div className="flex flex-col gap-1 bg-blue-50 rounded-lg ">
              {links.map(({ to, icon, label }, idx) => (
                <React.Fragment key={to}>
                  <NavLink
                    to={to}
                    className="flex items-center gap-2 rounded-none text-sm"
                    style={{ backgroundColor: 'transparent' }}
                    onClick={label === "سوالات متداول" ? handleFAQClick : handleClose}
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