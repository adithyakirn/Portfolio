import React from "react";
import { Link, NavLink } from "react-router";
import { useTheme } from "../Context/Context";

const MobileApps = () => {
  const theme = useTheme()
  const isDark = theme === 'dark'
  return (
    <div className="h-screen w-screen flex items-center flex-col gap-6 justify-center">
      <div className="flex flex-row gap-5">
        <Link to={"/mobileApps/roosnest"}>
          <div className=" h-28 w-28 items-center rounded-lg flex-col flex hover:scale-110 transition-all duration-600 ease-in-out cursor-pointer">
            <img src="/roosnest.png" className="w-full h-full" alt="" />
            <p className={`text-center text-[12px] ${!isDark && '!text-black'} text-gray-300 font-sans`}>
              RoosNest
            </p>
          </div>
        </Link>
        <Link to={"/mobileApps/yaskitchen"}>
          <div className=" h-28 w-28 items-center rounded-lg flex-col flex hover:scale-110 transition-all duration-600 ease-in-out cursor-pointer">
            <img src="/yaskitchen.png" className="w-full h-full" alt="" />
            <p className={`text-center text-[12px] ${!isDark && '!text-black'} text-gray-300 font-sans`}>
              Yas Kitchen
            </p>
          </div>
        </Link>
      </div>
      <NavLink to={"/"}>
        <h1 className={`font-sans text-sm text-gray-200  ${isDark ? "!text-[#F28F3B] drop-shadow-[0_0_40px_rgba(242,143,59,0.3)]" : "!text-[#ff391e] drop-shadow-[0_0_40px_rgba(255,57,30,0.2)]"} `}>Go Home</h1>
      </NavLink>
    </div>
  );
};

export default MobileApps;
