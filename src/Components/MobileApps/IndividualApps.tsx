import React from "react";
import { NavLink, useParams } from "react-router";
import Nav from "./Nav";
import Main from "./Main";
import Category from "./Category";
import Images from "./Images";
import About from "./About";

const IndividualApps = () => {
  const { appname } = useParams();
  return (
    <>
      <Nav />
      <div className="h-[28px]" />
      <Main appname={appname} />
      <Category />
      <Images/>
      <About/>
      <NavLink to={'/mobileApps'} style={{background : 'black', marginBlock : '100px'}}>
        <h1 className="text-center cursor-pointer mx-auto">Go Back</h1>
      </NavLink>
      <div className="h-5"></div>
    </>
  );
};

export default IndividualApps;
