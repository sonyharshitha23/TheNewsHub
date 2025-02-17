import React, { useState } from "react";
import SideBar from "./SideBar";
import { CiCircleList } from "react-icons/ci";
function Layout(props) {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <div className="layout flex w-full">
      <div className="sidebar">
        <SideBar showSideBar={showSideBar} />
      </div>
      <div className="w-full">
        <div className="header bg-primary h-20 w-full flex items-center">
          <CiCircleList
            onClick={() => setShowSideBar(!showSideBar)}
            color="#b8c2f2"
            size={50}
            className="cursor-pointer"
          />
        </div>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}
export default Layout;
