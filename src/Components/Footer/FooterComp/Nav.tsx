import { NavLink } from "react-router";
import { useEffect } from "react";

const Nav = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.body.classList.remove("dark", "light");
      document.body.classList.add(storedTheme);
    }
  }, []);

  return (
    <div className="footer-find lg:flex lg:gap-[6.42361vw] lg:col-span-2 lg:col-start-8 lg:pb-[7.98611vw] relative z-1 col-start-1 col-span-5 pb-[4.8rem] ">
      <div className="relative z-1 ">
        <h2 className="header-end lg:pb-[1.44676vw] hover:after:w-0 text-[#E6E6E6] flex pb-[1.6rem] ">
          <span>/&nbsp;</span>Nav
        </h2>
        <ul className="socials items-start flex flex-col ">
          <li id="home" className="leadin-[1.2] lg:text-[1.15741vw] ">
            <NavLink to="/" className="relative cursor-pointer flex">
              <span className="flex hover:after:w-0 after:transition-[transform_.8s_cubic-bezier(.19,1,.22,1)] after:bottom-0 after:content-[''] after:h-[.1rem] after:left-[0] after:absolute after:w-full after:bg-[#E6E6E6]">
                Home
              </span>
            </NavLink>
          </li>
          <li id="web" className="leadin-[1.2] lg:text-[1.15741vw] ">
            <NavLink to="/allProjects" className="relative cursor-pointer flex">
              <span className="flex hover:after:w-0 after:transition-[transform_.8s_cubic-bezier(.19,1,.22,1)] after:bottom-0 after:content-[''] after:h-[.1rem] after:left-[0] after:absolute after:w-full after:bg-[#E6E6E6]">
                Web Experiences
              </span>
            </NavLink>
          </li>
          <li id="mobile" className="leadin-[1.2] lg:text-[1.15741vw] ">
            <NavLink to="/mobileApps" className="relative cursor-pointer flex">
              <span className="flex hover:after:w-0 after:transition-[transform_.8s_cubic-bezier(.19,1,.22,1)] after:bottom-0 after:content-[''] after:h-[.1rem] after:left-[0] after:absolute after:w-full after:bg-[#E6E6E6]">
                Mobile Apps
              </span>
            </NavLink>
          </li>
          <li id="lets_talk" className="leadin-[1.2] lg:text-[1.15741vw] ">
            <a href="/lets_talk" className="relative cursor-pointer flex">
              <span className="flex hover:after:w-0 after:transition-[transform_.8s_cubic-bezier(.19,1,.22,1)] after:bottom-0 after:content-[''] after:h-[.1rem] after:left-[0] after:absolute after:w-full after:bg-[#E6E6E6]">
                Lets Talk
              </span>
            </a>
          </li>
          <li className="leadin-[1.2] lg:text-[1.15741vw] ">
            <a href="/" className="relative cursor-pointer flex">
              <span className="flex hover:after:w-0 after:transition-[transform_.8s_cubic-bezier(.19,1,.22,1)] after:bottom-0 after:content-[''] after:h-[.1rem] after:left-[0] after:absolute after:w-full after:bg-[#E6E6E6]"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
