import React from "react";
import { colors } from "../../../../assets/styles/colours";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-44 h-44 mb-4">
        <div className="absolute inset-0 bg-white rounded-full shadow-md"></div>
      </div>
      <div className="text-center flex flex-col items-end p-2">
        <h1 className="text-5xl font-bold tracking-widest text-black">
          ELIXIRE
        </h1>
        <div className="text-lg  tracking-wide p-1 " style={{ color : colors["color-11"]}}>B2B</div>
      </div>
    </div>
  );
};

export default Logo;
