import React from "react";
import play from "../../../../assets/images/play.png";
import bell from "../../../../assets/images/bell-48.png";
import { Search, Bell, Settings2Icon, Wallet } from "lucide-react";
import { colors } from "../../../../assets/styles/colours";

const Header: React.FC = () => {
  return (
    <div className={` z-50 flex items-center justify-between px-4 py-2 bg-${colors["color-1"]}`} >
      {/* Logo and Name */}
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Bell></Bell>
        </div>
        <h1 className="text-2xl font-bold mr-8" style={{textDecorationColor : colors["color-17"]}}>Elixire</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-between text-white px-4 py-2 rounded-full w-full max-w-xl" style={{backgroundColor: colors["color-10"]}}>
        {/* Left arrow and placeholder */}
        <div className="flex items-center space-x-2">
          <button className="text-white">
            <img
              src={play}
              alt="Play Button"
              className="transform rotate-180 h-4 invert"
            />
          </button>
          <span className="border-l border-white h-4"></span>
          <input
            type="text"
            placeholder="Search Elixire"
            className="bg-transparent focus:outline-none placeholder-white text-white pl-2"
          />
        </div>

        {/* Right icons */}
        <div className="flex items-center space-x-4">
          {/* Settings Icon */}
          <button >
            <Settings2Icon></Settings2Icon>
          </button>
          {/* Magnifying glass icon */}
          <button>
            <Search></Search>
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <div className="bg-green-100 px-2 py-1 rounded mr-4 flex items-center text-white" style={{backgroundColor : colors["color-15"]}}>
          <span className="mr-1">
            <Wallet></Wallet>
          </span>
          <span>₹ 2000</span>
        </div>
        <div className="relative flex items-center">
          {/* Bell Icon*/}
          <button className="text-white">
            <img
              src={bell}
              alt="notification"
              className=" h-8 "
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
