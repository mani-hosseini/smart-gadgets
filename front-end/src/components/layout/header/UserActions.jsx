import { User, ShoppingCart } from "lucide-react";

const UserActions = () => (
  <div className="flex items-center gap-1 max-[898px]:gap-0.5 md:gap-2 hover:text-blue-600">
    <button className="flex items-center gap-1 bg-gray-100 px-2 md:px-3 max-[868px]:px-1 max-[836px]:px-2 py-1.5 md:py-2 max-[868px]:py-1 max-[836px]:py-1 text-[11px] max-[868px]:text-[9px] max-[836px]:text-xs max-[898px]:text-[11px] max-[1000px]:text-xs md:text-sm font-medium rounded-2xl max-[868px]:rounded-xl text-gray-600">
      <User size={18} className="text-gray-600 max-[868px]:w-3.5 max-[868px]:h-3.5 max-[836px]:w-4 max-[836px]:h-4" />
      <span className="hidden min-[569px]:inline">حساب کاربری</span>
    </button>
    <button className="flex items-center gap-1 bg-gray-100 px-2 md:px-3 max-[868px]:px-1 max-[836px]:px-2 py-1.5 md:py-2 max-[868px]:py-1 max-[836px]:py-1 text-[11px] max-[868px]:text-[9px] max-[836px]:text-xs max-[898px]:text-[11px] max-[1000px]:text-xs md:text-sm font-medium rounded-2xl max-[868px]:rounded-xl text-gray-600">
      <ShoppingCart size={18} className="text-gray-600 hover:text-blue-600 max-[868px]:w-3.5 max-[868px]:h-3.5 max-[836px]:w-4 max-[836px]:h-4" />
      <span className="hidden min-[569px]:inline">سبد خرید</span>
    </button>
  </div>
);

export default UserActions; 