import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import Nav from "./Nav";
import Main from "./Main";
import Category from "./Category";
import Images from "./Images";
import About from "./About";
import { useTheme } from "../Context/Context";

const IndividualApps = () => {
  const theme = useTheme();
  const isDark = theme === "dark";
  const { appname } = useParams();
  const [appData, setAppData] = useState<any>(null);

  useEffect(() => {
    fetch("/JSON/Apps.json")
      .then((res) => res.json())
      .then((data) => {
        const safeName = appname ?? "roosnest";
        setAppData(data[safeName]);
      })
      .catch((err) => console.error("Failed to load apps data", err));
  }, [appname]);

  if (!appData) return null;

  return (
    <>
      <Nav data={appData} />
      <div className="h-[28px] lg:hidden" />
      <Main data={appData} />
      <Category data={appData} />
      <Images data={appData} />
      <About data={appData} />
      <NavLink
        to={"/mobileApps"}
        style={{ background: "black", marginBlock: "100px" }}
      >
        <h1
          className={`text-center cursor-pointer mx-auto ${
            isDark
              ? "text-[#F28F3B] drop-shadow-[0_0_40px_rgba(242,143,59,0.3)]"
              : "!text-[#ff391e] drop-shadow-[0_0_40px_rgba(255,57,30,0.2)]"
          }`}
        >
          Go Back
        </h1>
      </NavLink>
      <div className="h-5"></div>
    </>
  );
};

export default IndividualApps;
