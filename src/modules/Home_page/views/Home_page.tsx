import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { colors } from "../../../assets/styles/colours";

export const Hompage : React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-col flex-1 overflow-hidden h-screen" style={{backgroundColor : colors["color-1"]}}>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white rounded-2xl">
          {/* Your main content goes here */}
        </main>
      </div>
    </div>
  );
};

export default Hompage;
