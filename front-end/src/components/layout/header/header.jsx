import React from "react";
import Topbar from "./topbar";
import Mainbar from "./mainbar";

export default function Header() {
  return (
    <header className="border border-b-gray-100">
      <Topbar />
      {/* Mainbar فقط در سایز بالای 836px نمایش داده شود */}
      <div className="hidden max-[836px]:hidden min-[837px]:block">
        <Mainbar />
      </div>
    </header>
  );
}
  