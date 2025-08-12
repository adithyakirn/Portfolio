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

function App() {
  const location = useLocation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const smoother = ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#inner-content",
    });

    return () => {
      smoother.kill();
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
  }, []);

  return (
    <div
      id="wrapper"
      className="container-wrapper min-h-[100vh] m-[0_auto] transition-opacity duration-1000 ease-in-out opacity-100"
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
