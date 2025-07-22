import React from "react";

const FeatureBox = ({ icon: Icon, text }) => (
  <div className="flex items-center bg-[#f5f4fe] rounded-2xl px-8 py-6 min-w-[220px] w-full max-w-xs gap-2">
    <span className="bg-white rounded-full p-2 flex items-center justify-center">
      <Icon size={32} className="text-indigo-600" style={{ filter: "none" }} />
    </span>
    <span className="text-gray-700 md:text-lg">{text}</span>
  </div>
);

export default FeatureBox;
