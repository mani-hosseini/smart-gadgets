import React from "react";
import LoginForm from "../components/account/LoginForm";
import RegisterForm from "../components/account/RegisterForm";
import MainContainer from "../components/ui/MainContainer";
export default function Account() {
  return (
    <MainContainer>
            <div className="flex flex-col lg:flex-row gap-12 py-12">
      <RegisterForm />
      <LoginForm />
    </div>
    </MainContainer>
  );
}
