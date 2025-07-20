import { Link } from "react-router-dom";

const NavLink = ({ to, icon: Icon, children, onClick, ...rest }) => (
  <Link to={to} onClick={onClick} className="group flex items-center gap-1 text-gray-700 hover:text-blue-600 text-[11px] max-[898px]:text-[11px] max-[1000px]:text-xs md:text-sm lg:text-base" {...rest}>
    {Icon && <Icon size={18} className="text-blue-600" />} {children}
  </Link>
);

export default NavLink; 