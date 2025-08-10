import React from "react";

export default function AccountEmptyState({ message, buttonText, onButtonClick, icon }) {
  return (
    <div className="bg-[#f5f4ff] rounded-2xl flex flex-col items-start justify-start w-full min-h-[120px]">
      <div className="bg-[#e4e2fe] rounded-xl p-4 flex flex-row flex-nowrap items-center justify-between w-full gap-4 mt-0">
        <div className="flex items-center gap-2 text-right w-full">
          <span className="text-gray-600 text-sm md:text-base">{message}</span>
          {icon && <span className="text-xl text-gray-300">{icon}</span>}
        </div>
        {buttonText && (
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-lg transition-colors text-xs md:text-sm whitespace-nowrap"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
} 