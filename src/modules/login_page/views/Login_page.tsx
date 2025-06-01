import React from "react";
import Logo from "./components/Logo";
import LoginForm from "./components/LoginForm";
import { colors } from "../../../assets/styles/colours";

const LoginPage: React.FC = () => {
  return (
    <div
      className="h-screen flex  pt-24 pl-24 "
      style={{ backgroundColor: colors["color-11"] }}
    >
      <div
        className="w-full h-full  rounded-2xl  shadow-lg overflow-hidden "
        style={{ backgroundColor: colors["color-1"] }}
      >
        <div className="flex flex-col md:flex-row p-20">
          <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12">
            <Logo />
          </div>

          <div className="hidden md:block w-px self-stretch mx-2" style={{backgroundColor : colors["color-8"]}}></div>

          <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
