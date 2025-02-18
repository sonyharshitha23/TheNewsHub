import React from "react";
import { Link, useLocation } from "react-router-dom";
function SideBar({ showSideBar }) {
  const location = useLocation();
  const menuItems = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "Posted",
      path: "/posted",
    },
    {
      title: "AddNews",
      path: "/add",
    },
    {
      title: "Profile",
      path: "/profile",
    },
    {
      title: "Logout",
      path: "/logout",
    },
  ];
  return (
    <div
      className={`min-h-screen max-h-full transition-all duration-500 bg-primary h-screen flex flex-col overflow-hidden ${
        showSideBar ? "w-60" : "w-0"
      }`}
    >
      <div>
        <h1 className="text-2xl font-bold mt-8 ml-7 text-yellow-500">
          THE NEWSHUB
        </h1>
        <div className="flex flex-col mt-20">
          {menuItems.map((item) => {
            return (
              <Link
                to={`${item.path}`}
                className={`pl-10 py-5 text-gray-200 hover:bg-gray-50 hover:text-gray-500 text-sm ${
                  location.pathname.includes(item.path) &&
                  "bg-[#0047b3] text-yellow font-bold"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default SideBar;
