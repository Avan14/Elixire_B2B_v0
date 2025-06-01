import React from "react";
import { SidebarItemProps } from "../../models/types";
import { colors } from "../../../../assets/styles/colours";



const Sidebar_item: React.FC<SidebarItemProps> = ({
  item,
  isActive,
  collapsed,
  icon,
  onClick,
}) => {
  return (
    <button
      className={`relative flex items-center m-2 p-2 cursor-pointer transition-colors rounded-2xl ${
        isActive
          ? "bg-[#769B64] text-white w-4/5"
          : "text-[#503D33]"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center ">
        <span className="font-bold p-1" style={{color : colors["color-7"]}}>{icon}</span>
        {!collapsed && <span className="mx-2 text-xl font-bold"  >{item.title}</span>}
      </div>

      
    </button>
  );
};

export default Sidebar_item;
