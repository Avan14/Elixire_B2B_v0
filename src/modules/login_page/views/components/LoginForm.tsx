import React, { useState } from "react";
import Input from "./Input";
import { colors } from "../../../../assets/styles/colours";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    phoneNo: "",
    password: "",
    rememberPassword: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Phone No"
          type="tel"
          value={formData.phoneNo}
          onChange={handleChange}
          name="phoneNo"
          id="phoneNo"
          required
        />

        <Input
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          id="password"
          required
          showPasswordToggle
        />

        <div className="flex justify-end">
          <a
            href="#forgot-password"
            className="text-sm text-[#F97316] hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex w-full gap-2">
            <button
              type="submit"
              className={`w-1/2 py-2 px-6 rounded-md font-medium transition-colors duration-200 focus:outline-none bg-[#7CA25D] text-white hover:bg-[#6B8E50] focus:ring-2 focus:ring-[#7CA25D] focus:ring-opacity-50`}
            >
              Log in
            </button>
            <button
              type="submit"
              className={`w-1/2 py-2 px-6 rounded-md font-medium transition-colors duration-200 focus:outline-none text-[#333] hover:text-[#7CA25D] focus:ring-2 focus:ring-[#7CA25D] focus:ring-opacity-50`}
              style={{ backgroundColor: colors["color-11"] }}
            >
              Log in
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 justify-center px-32 py-4">
              <input
                type="checkbox"
                checked={formData.rememberPassword}
                onChange={handleChange}
                className="w-4 h-4 border-gray-300 rounded text-[#7CA25D] focus:ring-[#7CA25D]"
                id="rememberPassword"
                name="rememberPassword"
              />
              <label htmlFor="rememberPassword" className="text-sm text-gray-600">
                Remember password
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
