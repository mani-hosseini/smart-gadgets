import Heading from "../../components/ui/heading";
import React from "react";
import { Link } from "react-router-dom";

export default function HeadingButton({ title, buttonText, buttonLink }) {
  return (
    <div className="flex items-center justify-between ">
      <Heading title={title} />
      <Link
        to={buttonLink}
        className="hidden px-4 py-2 text-blue-700 transition bg-white border border-blue-700 rounded-full md:flex hover:bg-blue-700 hover:text-white"
      >
        {buttonText}
      </Link>
    </div>
  );
}
