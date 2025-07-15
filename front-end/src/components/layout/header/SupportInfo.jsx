import { Phone } from "lucide-react";

const SupportInfo = () => (
  <div className="flex items-center gap-2">
    <div className="flex flex-col items-center justify-center text-sm">
      <span className="text-black font-semibold">پشتیبانی</span>
      <span className="text-black font-bold">021-1234567#</span>
    </div>
    <span className="flex items-center justify-center bg-blue-50 rounded-full p-3">
      <Phone size={20} className="text-blue-600 mx-auto" />
    </span>
  </div>
);

export default SupportInfo; 