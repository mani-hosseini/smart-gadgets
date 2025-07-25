import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/account/Sidebar";
import WelcomeBox from "../components/account/WelcomeBox";
import DashboardCards from "../components/account/DashboardCards";
import AccountEmptyState from "../components/account/AccountEmptyState.jsx";
import AddressesSection from "../components/account/AddressesSection.jsx";

export default function MyAccount() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    const path = location.pathname.split("/").pop();
    if (["dashboard", "orders", "downloads", "addresses", "accountDetails"].includes(path)) {
      setActiveSection(path);
    }
  }, [location.pathname]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    navigate(`/my-account/${section}`, { replace: true });
  };

  let content;
  if (activeSection === "dashboard") {
    content = (
      <>
        <WelcomeBox />
        <DashboardCards />
      </>
    );
  } else if (activeSection === "orders") {
    content = (
      <AccountEmptyState
        message="هیچ سفارشی هنوز ثبت نشده است."
        buttonText="مرور محصولات"
        onButtonClick={() => handleSectionChange("dashboard")}
      />
    );
  } else if (activeSection === "downloads") {
    content = (
      <AccountEmptyState
        message="دانلودی برای شما ثبت نشده است."
        buttonText="مشاهده محصولات"
        onButtonClick={() => handleSectionChange("dashboard")}
      />
    );
  } else if (activeSection === "addresses") {
    content = (
      <AddressesSection/>
    );
  }

  return (
    <div className="container mx-auto py-8 flex flex-col-reverse lg:flex-row gap-6">
      <div className="lg:w-1/4 w-full order-2 lg:order-1">
        <Sidebar active={activeSection} onSectionChange={handleSectionChange} />
      </div>
      <div className="lg:w-3/4 w-full flex flex-col gap-6 order-1 lg:order-2">
        <div className="flex bg-[#f5f4ff] rounded-2xl p-6 flex-col md:flex-row gap-6 w-full" style={{ minHeight: "350px" }}>
          {content}
        </div>
      </div>
    </div>
  );
}
