import React from "react";
import Logo from "./components/Logo";
import LoginForm from "./components/LoginForm";
import { colors } from "../../../assets/styles/colours";

const LoginPage: React.FC = () => {
  return (
    <div
      className="h-screen flex flex-col items-end justify-end"
      style={{ backgroundColor: colors["color-11"] }}
    >
      <div
        className="w-full max-w-7xl h-10/12 rounded-2xl shadow-lg overflow-hidden bg-white p-4 sm:p-8 md:p-20"
        style={{ backgroundColor: colors["color-1"] }}
      >
        <div className="flex flex-col md:flex-row">
          {/* LEFT: Logo */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-8">
            <Logo />
          </div>

          {/* Divider (only on md+) */}
          <div
            className="hidden md:block w-px self-stretch mx-2"
            style={{ backgroundColor: colors["color-8"] }}
          />

          {/* RIGHT: LoginForm */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-8">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
