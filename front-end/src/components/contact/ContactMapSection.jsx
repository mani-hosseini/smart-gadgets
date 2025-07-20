import React from "react";
import Heading from "../ui/heading";

const address = "استان تهران میدان ونک خیابان برزیل شرقی روبروی مجتمع فنی تهران کوچه عباسی پلاک 34 واحد 2 ";

const ContactMapSection = () => (
  <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 my-2 sm:my-8 md:my-20 mt-0">
    <div className="w-full md:w-1/2 h-48 sm:h-56 md:h-48 rounded-l-full overflow-hidden flex items-center justify-center mb-6 md:mb-0">
      <iframe
        title="map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=54.355%2C31.897%2C54.365%2C31.907&amp;layer=mapnik"
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>    <div className="flex flex-col items-start w-full md:w-1/2 mt-4 md:mt-0">
      <Heading title="نشانی ما روی نقشه" />
      <p className="text-gray-600 text-xs sm:text-sm leading-7 text-justify mt-4">
        {address}
      </p>
    </div>
  </div>
);

export default ContactMapSection; 