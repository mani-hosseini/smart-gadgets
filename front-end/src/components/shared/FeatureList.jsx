import React from "react";
import FeatureBox from "./FeatureBox";
import { Headphones, ShieldCheck, Wallet, Truck } from "lucide-react";

const features = [
  { icon: Headphones, text: "پشتیبانی 24 ساعته" },
  { icon: ShieldCheck, text: "تضمین اصالت کالاها" },
  { icon: Wallet, text: "قیمت های مناسب" },
  { icon: Truck, text: "ارسال سریع و رایگان" },
];

const FeatureList = () => (
  <div className="flex flex-wrap justify-center gap-6 my-10">
    {features.map((f, i) => (
      <FeatureBox key={i} icon={f.icon} text={f.text} />
    ))}
  </div>
);

export default FeatureList; 