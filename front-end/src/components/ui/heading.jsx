import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="grid grid-cols-2 grid-rows-2 gap-1">
        <div className="w-3 h-3 rounded bg-blue-200" />
        <div className="w-3 h-3 rounded bg-blue-600" />
        <div className="w-3 h-3 rounded bg-blue-600" />
        <div className="w-3 h-3 rounded bg-blue-200" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-gray-700 text-lg sm:text-xl md:text-3xl">
          {title}
        </span>
        <span className="mt-1 h-1 w-8 bg-blue-200 rounded-full" />
      </div>
    </div>
  );
};


export default Heading;
