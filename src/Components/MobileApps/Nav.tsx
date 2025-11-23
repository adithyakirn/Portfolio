import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import apps from "../../data/Apps.json";

const Nav = () => {
  const { appname } = useParams();
  const [appName, setAppName] = useState("");

  useEffect(() => {
    const displayName = apps[appname as keyof typeof apps]?.name;
    setAppName(displayName);
  }, [appname]);
  return (
    <nav className="bg-[#2e2e2e] shadow-[0_1px_2px_rgba(0,0,0,.1)] h-[44px] overflow-hidden fixed w-screen">
      <div className="items-center mx-4 flex justify-center h-full">
        <h1 className="text-white text-center font-sans">{appName}</h1>
      </div>
    </nav>
  );
};

export default Nav;
