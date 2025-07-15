import Logo from "./Logo";
import NavLink from "./NavLink";
import SupportInfo from "./SupportInfo";
import { Home, ShoppingBag, Info, BookOpen, Phone, HelpCircle } from "lucide-react";
import UserActions from "./UserActions";
import { useState } from "react";
import { Menu } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";

const iconClass = "text-blue-600";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full flex justify-center pt-4">
      <div className="w-[90%] flex items-center justify-between py-2 max-[898px]:py-1">
        {/* دسکتاپ و تبلت */}
        <div className="hidden md:flex items-center gap-8 max-[898px]:gap-4">
          <Logo />
          <nav className="flex gap-10 max-[898px]:gap-4 text-base md:text-lg lg:text-xl">
            <NavLink to="/" icon={Home}>خانه</NavLink>
            <NavLink to="/shop" icon={ShoppingBag}>فروشگاه</NavLink>
            <NavLink to="/about" icon={Info}>درباره ما</NavLink>
            <NavLink to="/blog" icon={BookOpen}>بلاگ</NavLink>
            <NavLink to="/contact" icon={Phone}>تماس</NavLink>
            <NavLink to="/question" icon={HelpCircle}>سوالات متداول</NavLink>
          </nav>
        </div>
        {/* موبایل */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* منو همبرگر */}
          <HamburgerMenu />
          {/* لوگو وسط */}
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>
          {/* دکمه‌های کاربری سمت چپ */}
          <div className="flex items-center">
            <UserActions />
          </div>
        </div>
        {/* اطلاعات پشتیبانی فقط در دسکتاپ */}
        <div className="hidden lg:flex items-center">
          <SupportInfo />
        </div>
      </div>
    </div>
  );
};

export default Topbar;