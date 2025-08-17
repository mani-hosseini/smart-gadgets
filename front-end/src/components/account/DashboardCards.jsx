import React from "react";
import { User, Heart, LogOut, Map, Download, List } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cards = [
  { icon: <List size={28} className="mx-auto text-gray-400 group-hover:text-blue-700" />, label: "سفارش ها", section: "orders" },
  { icon: <Download size={28} className="mx-auto text-gray-400 group-hover:text-blue-700" />, label: "دانلود ها", section: "downloads" },
  { icon: <Map size={28} className="mx-auto text-gray-400 group-hover:text-blue-700" />, label: "آدرس", section: "addresses" },
  { icon: <LogOut size={28} className="mx-auto text-gray-400 group-hover:text-blue-700" />, label: "خروج", section: "logout" },
  { icon: <Heart size={28} className="mx-auto text-gray-400 group-hover:text-blue-700" />, label: "علاقمندی", section: "favorites" },
  { icon: <User size={28} className="mx-auto text-gray-400 group-hover:text-blue-700" />, label: "جزئیات حساب", section: "accountDetails" },
];

export default function DashboardCards() {
  const navigate = useNavigate();

  const handleCardClick = (section) => {
    if (section === "logout") {
      // Dispatch custom event to notify cart context about user logout
      window.dispatchEvent(new CustomEvent('userLogout'));
      
      // Clear user data
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      
      navigate("/account", { replace: true });
    } else if (section === "favorites") {
      navigate("/my-account/favorites");
    } else {
      navigate(`/my-account/${section}`);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center min-h-[120px]  cursor-pointer group"
          onClick={() => handleCardClick(card.section)}
        >
          <span className="group-hover:text-blue-700 text-gray-400 transition-colors duration-200">{card.icon}</span>
          <div className="mt-3 text-sm  md:text-base group-hover:text-blue-700 text-gray-600 transition-colors duration-200">{card.label}</div>
        </div>
      ))}
    </div>
  );
}
