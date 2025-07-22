import Heading from "../../components/ui/heading";
import React from "react";
import { Link } from "react-router-dom";

export default function HeadingButton() {
  return (
    <div className="flex items-center justify-between my-12">
      <Heading title="سوالات متداول" />
      <Link
        to="/about#faq-section"
        className="md:flex hidden px-4 py-2 bg-white  text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition rounded-full"
      >
        مشاهده همه
      </Link>
    </div>
  );
}
