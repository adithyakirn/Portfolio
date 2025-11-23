import React from "react";
import { Link } from "react-router";

const MobileApps = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-row gap-5">
        <Link to={"/mobileApps/roosnest"}>
          <div className=" h-28 w-28 items-center rounded-lg flex-col flex hover:scale-110 transition-all duration-600 ease-in-out cursor-pointer">
            <img src="/roosnest.png" className="w-full h-full" alt="" />
            <p className="text-center text-[12px] text-gray-300 font-sans">
              RoosNest
            </p>
          </div>
        </Link>
        <Link to={"/mobileApps/yaskitchen"}>
          <div className=" h-28 w-28 items-center rounded-lg flex-col flex hover:scale-110 transition-all duration-600 ease-in-out cursor-pointer">
            <img src="/yaskitchen.png" className="w-full h-full" alt="" />
            <p className="text-center text-[12px] text-gray-300 font-sans">
              Yas Kitchen
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileApps;
