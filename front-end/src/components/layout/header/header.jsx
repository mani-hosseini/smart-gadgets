import React from "react";
import Topbar from "./topbar";
import Mainbar from "./mainbar";

export default function Header() {
  return (
    <header className="border-b border-b-gray-100">
      <Topbar />
      <div className="hidden max-[836px]:hidden min-[837px]:block">
        <Mainbar />
      </div>
    </header>
  );
}
  