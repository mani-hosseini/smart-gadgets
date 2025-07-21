import React from "react";

const MainContainer = ({ children, className = "" }) => (
  <div className={`w-[95%] mx-auto ${className}`}>
    {children}
  </div>
);

export default MainContainer; 