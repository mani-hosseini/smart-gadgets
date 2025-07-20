import React from "react";

const MainContainer = ({ children, className = "" }) => (
  <div className={`w-[96%] sm:w-[90%] mx-auto ${className}`}>
    {children}
  </div>
);

export default MainContainer; 