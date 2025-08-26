import Heading from "../../components/ui/heading";
import React from "react";
import { Link } from "react-router-dom";

export default function HeadingButton({ title, buttonText, buttonLink }) {
  return (
    <div className="flex items-center justify-between my-12">
      <Heading title={title} />
      <Link
        to={buttonLink}
        className="md:flex hidden px-4 py-2 bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition rounded-full"
      >
        {buttonText}
      </Link>
    </div>
  );
}
