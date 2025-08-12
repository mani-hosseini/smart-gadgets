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

  const handleFAQClick = (e) => {
    // If we're already on the about page, dispatch custom event instead of navigation
    if (window.location.pathname === '/about') {
      e.preventDefault();
      window.dispatchEvent(new Event('faq-click'));
    }
  };

  return (
    <div className="w-full flex justify-center pt-4">
      <div className="w-[95%] flex items-center justify-between py-2 max-[898px]:py-1">
        <div className="hidden md:flex items-center gap-8 max-[898px]:gap-4">
          <Logo />
          <nav className="flex gap-10 max-[898px]:gap-4 text-base md:text-lg lg:text-xl">
            <NavLink to="/" icon={Home}>خانه</NavLink>
            <NavLink to="/shop" icon={ShoppingBag}>فروشگاه</NavLink>
            <NavLink to="/blog" icon={BookOpen}>بلاگ</NavLink>
            <NavLink to="/about" icon={Info}>درباره ما</NavLink>
            <NavLink to="/contact" icon={Phone}>تماس</NavLink>
            <NavLink to="/about#faq" icon={HelpCircle} onClick={handleFAQClick}>سوالات متداول</NavLink>
          </nav>
        </div>
        <div className="flex md:hidden items-center justify-between w-full">
          <HamburgerMenu />
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>
          <div className="flex items-center">
            <UserActions />
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <SupportInfo />
        </div>
      </div>
    </div>
  );
};

export default Topbar;