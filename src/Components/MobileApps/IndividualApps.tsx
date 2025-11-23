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
      <NavLink to={'/'}>
        <h1 className="text-center my-5 mb-10 cursor-pointer mx-auto">Go Home</h1>
      </NavLink>
    </>
  );
};

export default IndividualApps;
