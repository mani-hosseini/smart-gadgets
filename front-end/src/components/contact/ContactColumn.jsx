import React from "react";
import ContactButton from "./ContactButton";
import Heading from "../ui/heading";

const ContactColumn = ({ heading, text, buttonText, buttonTo }) => (
  <div className="flex flex-col items-start gap-2 sm:gap-4 w-full">
    <Heading title={heading} />
    <p className="text-gray-600 text-xs sm:text-sm leading-7 text-justify">{text}</p>
    <ContactButton to={buttonTo}>{buttonText}</ContactButton>
  </div>
);

export default ContactColumn; 