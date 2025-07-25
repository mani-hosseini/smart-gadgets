import React from "react";

const InputField = ({ label, id, type = "text", register, error, ...rest }) => (
  <div className="mb-6">
    <label
      className="block text-right text-gray-700 text-sm font-bold mb-2"
      htmlFor={id}
    >
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      id={id}
      type={type}
      {...register}
      {...rest}
      className="w-full bg-white md:p-3 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && (
      <p className="text-red-500 text-xs mt-1 text-right">{error}</p>
    )}
  </div>
);

export default InputField; 