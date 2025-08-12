import React, { useState, useRef, useEffect } from "react";

const sortOptions = [
  { value: "price-low", label: "از ارزان به گران" },
  { value: "price-high", label: "از گران به ارزان" },
  { value: "newest", label: "از جدید به قدیم" },
  { value: "oldest", label: "از قدیم به جدید" },
];

export default function ProductHeader({ onSortChange }) {
  const [selectedSort, setSelectedSort] = useState("newest");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSortChange = (value) => {
    setSelectedSort(value);
    setIsDropdownOpen(false);
    onSortChange?.(value);
  };

  const selectedSortLabel =
    sortOptions.find((option) => option.value === selectedSort)?.label ||
    "مرتب سازی براساس...";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-[#4837f3] rounded-2xl p-4 mb-6">
      <div className="flex items-center justify-between">
        {/* Left Side - Shop Title */}
        <div className="text-white">
          <h1 className="text-xl font-bold tracking-wide">فروشگاه</h1>
        </div>
        {/* Right Side - Sort Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-white text-gray-600 px-4 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-50 transition-all duration-200 min-w-[220px] shadow-sm hover:shadow-md"
          >
            <span className="text-sm font-medium">{selectedSortLabel}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 text-gray-500 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Menu with Animation */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 z-50 animate-in slide-in-from-top-2 duration-200">
              {sortOptions.map((option, index) => (
                <button
                  key={option.value}
                  onClick={() => handleSortChange(option.value)}
                  className={`w-full text-right px-4 py-3 text-sm hover:bg-blue-50 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg ${
                    selectedSort === option.value
                      ? "bg-blue-100 text-blue-600 font-medium"
                      : "text-gray-700 hover:text-blue-600"
                  } ${
                    index !== sortOptions.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
