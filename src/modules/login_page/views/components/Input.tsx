import React, { useState } from "react";
import { InputProps } from "../../models/types";
import { Eye, EyeOff } from "lucide-react";
import { colors } from "../../../../assets/styles/colours";

const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  onChange,
  name,
  id,
  placeholder,
  required = false,
  showPasswordToggle = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mb-4 ">
      <label
        htmlFor={id}
        className="block text-sm text-gray-600 mb-1"
        style={{ color: colors["color-8"] }}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={showPasswordToggle && showPassword ? "text" : type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full py-2 px-0 border-b border-gray-300 bg-transparent focus:border-[#7CA25D] focus:outline-none transition-colors"
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <Eye size={18} className="text-gray-500" />
            ) : (
              <EyeOff size={18} className="text-gray-500" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
