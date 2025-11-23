import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import Home from "./Pages/Home";
import AllProjects from "./Pages/AllProjects";
import LetsTalk from "./Components/LetsTalk/LetsTalk";
import Error404 from "./Components/Error/Error";

import PageTransition from "./Components/Transition/PageTransition";
import { useTheme } from "./Components/Context/Context";
import MobileApps from "./Components/MobileApps/MobileApps";
import IndividualApps from "./Components/MobileApps/IndividualApps";

function App() {
  const location = useLocation();
  const theme = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;
    const smoother = ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#inner-content",
      smooth: isMobile ? 1 : 1.5,
      normalizeScroll: isMobile,
      ignoreMobileResize: true,
    });

    return () => {
      smoother.kill();
      ScrollTrigger.refresh();
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateBodyClass = () => {
      const theme = mediaQuery.matches ? "dark" : "light";
      document.body.classList.remove("dark", "light");
      document.body.classList.add(theme);
    };

    updateBodyClass();

    mediaQuery.addEventListener("change", updateBodyClass);

    return () => {
      mediaQuery.removeEventListener("change", updateBodyClass);
    };
  }, [location]);

  return (
    <div
      id="wrapper"
      className={`${isDark ? "bg-[#0a0a0a]" : "bg-[#fafafa]"}
       container-wrapper min-h-[100vh] bg m-[0_auto] transition-opacity duration-1000 ease-in-out opacity-100`}
    >
      <div id="inner-content" className="m-[0_auto]">
        <Routes location={location}>
          <Route
            path="/"
            element={
              <PageTransition locationKey={location.pathname}>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/allProjects"
            element={
              <PageTransition locationKey={location.pathname}>
                <AllProjects />
              </PageTransition>
            }
          />
          <Route
            path="/lets_talk"
            element={
              <PageTransition locationKey={location.pathname}>
                <LetsTalk />
              </PageTransition>
            }
          />
          <Route
            path="/mobileApps"
            element={
              <PageTransition locationKey={location.pathname}>
                <MobileApps />
              </PageTransition>
            }
          />
          <Route
            path="/mobileApps/:appname"
            element={
              <PageTransition locationKey={location.pathname}>
                <IndividualApps />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition locationKey={location.pathname}>
                <Error404 />
              </PageTransition>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
