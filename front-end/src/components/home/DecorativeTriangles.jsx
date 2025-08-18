import React from "react";

const DecorativeTriangles = () => (
  <div className="absolute inset-0 pointer-events-none hidden md:block">
    <div className="absolute top-8 left-8 w-3 h-3 bg-pink-300 transform rotate-45"></div>
    <div className="absolute top-25 left-75 w-2 h-2 bg-green-300 transform rotate-45"></div>
    <div className="absolute top-45 left-15 w-3 h-3 bg-pink-300 transform rotate-45"></div>
    <div className="absolute top-12 left-55 w-2 h-2 bg-green-300 transform rotate-45"></div>
    <div className="absolute top-32 left-25 w-3 h-3 bg-pink-300 transform rotate-45"></div>
  </div>
);

export default DecorativeTriangles;
