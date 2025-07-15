import { Link } from "react-router-dom";

const NavLink = ({ to, icon: Icon, children }) => (
  <Link to={to} className="group flex items-center gap-1 text-gray-700 hover:text-blue-600 text-[11px] max-[898px]:text-[11px] max-[1000px]:text-xs md:text-sm lg:text-base">
    {Icon && <Icon size={18} className="text-blue-600" />} {children}
  </Link>
  
);

export default NavLink; 