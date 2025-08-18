import React from "react";

const DiagonalStripes = () => (
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center -z-10">
    <div className="w-[220px] sm:w-[340px] h-5 rounded-full bg-pink-300 rotate-[-20deg] mb-2" style={{zIndex: 1}} />
    <div className="w-[260px] sm:w-[400px] h-5 rounded-full bg-teal-300 rotate-[-20deg] mb-2" style={{zIndex: 1}} />
    <div className="w-[180px] sm:w-[300px] h-5 rounded-full bg-orange-300 rotate-[-20deg]" style={{zIndex: 1}} />
  </div>
);

export default DiagonalStripes;
