import React, { useState } from "react";
import { NavItem } from "../../models/types";
import SidebarItem from "./Sidebar_items";
import { colors } from "../../../../assets/styles/colours";
import {
  ChevronLeft,
  ChevronRight,
  Package,
  BarChart2,
  Settings,
  ShoppingBag,
  Wrench,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const [activeItem, setActiveItem] = useState<string>("reports");

  const navItems: NavItem[] = [
    {
      id: "sell",
      title: "Sell",
      icon: "ShoppingBag",
      path: "/sell",
    },
    {
      id: "inventory",
      title: "Inventory",
      icon: "Package",
      path: "/inventory",
    },
    {
      id: "reports",
      title: "Reports",
      icon: "BarChart2",
      path: "/reports",
    },
    {
      id: "setup",
      title: "Setup",
      icon: "Wrench",
      path: "/setup",
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShoppingBag":
        return <ShoppingBag size={collapsed ? 24 : 20} />;
      case "Package":
        return <Package size={collapsed ? 24 : 20} />;
      case "BarChart2":
        return <BarChart2 size={collapsed ? 24 : 20} />;
      case "Wrench":
        return <Wrench size={collapsed ? 24 : 20} />;
      default:
        return null;
    }
  };

  return (
    <div 
      className={` z-50 flex flex-col  transition-all duration-300 relative ${
        collapsed ? "w-16" : "w-44"
      }`}
    >
      {/* Logo space */}
      <div className="h-16 flex items-center justify-center border-b border-green-200">
        {/* Logo will be injected here */}
      </div>

      {/* Navigation items */}
      <div className="flex-1">
        {navItems.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            isActive={activeItem === item.id}
            collapsed={collapsed}
            icon={getIcon(item.icon)}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </div>

      {/* Settings at bottom */}
      <div>
        <SidebarItem
          item={{
            id: "settings",
            title: "Settings",
            icon: "Settings",
            path: "/settings",
          }}
          isActive={activeItem === "settings"}
          collapsed={collapsed}
          icon={<Settings size={collapsed ? 24 : 20} />}
          onClick={() => setActiveItem("settings")}
        />
      </div>

      {/* Centered collapse button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 p-1 hover:bg-green-100 rounded-xl transition-colors "
        style={{ backgroundColor: colors["color-1"], color: colors["color-7"] }}
      >
        {collapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>
    </div>
  );
};

export default Sidebar;
