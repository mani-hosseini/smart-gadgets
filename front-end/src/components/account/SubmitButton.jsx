import React from "react";

const SubmitButton = ({ children, ...rest }) => (
  <button
    type="submit"
    className="w-full cursor-pointer bg-indigo-600 text-white md:py-3 py-2 rounded-md hover:bg-indigo-700 transition-colors"
    {...rest}
  >
    {children}
  </button>
);

export default SubmitButton; 