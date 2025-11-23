import React from "react";
import { NavLink, useParams } from "react-router";
import Nav from "./Nav";
import Main from "./Main";
import Category from "./Category";
import Images from "./Images";
import About from "./About";
import { useTheme } from "../Context/Context";

const IndividualApps = () => {
  const theme = useTheme()
  const isDark = theme === 'dark'
  const { appname } = useParams();
  return (
    <>
      <Nav />
      <div className="h-[28px] lg:hidden" />
      <Main appname={appname} />
      <Category />
      <Images/>
      <About/>
      <NavLink to={'/mobileApps'} style={{background : 'black', marginBlock : '100px'}}>
        <h1 className={`text-center cursor-pointer mx-auto ${isDark ? 'text-[#F28F3B] drop-shadow-[0_0_40px_rgba(242,143,59,0.3)]' : '!text-[#ff391e] drop-shadow-[0_0_40px_rgba(255,57,30,0.2)]'}`}>Go Back</h1>
      </NavLink>
      <div className="h-5"></div>
    </>
  );
};

export default IndividualApps;
