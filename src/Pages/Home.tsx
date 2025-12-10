import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Projects/Main";
import Arsenal from "../Components/Main/Projects/Arsenal";
import Projects from "../Components/Main/Projects/Projects";
import AppsSection from "../Components/Main/Projects/AppsSection";
import { useLayoutEffect } from "react";

const Home = () => {
  useLayoutEffect(() => {
    // Aggressively force scroll to top
    // 1. Immediate
    window.scrollTo(0, 0);

    // 2. Next frame
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    // 3. Small timeout for late paint
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <Main />
      <div className="section-devider h-[1px] bg-[linear-gradient(90deg,transparent,#333,transparent)] m-[120px_0]"></div>
      <AppsSection />
      <Projects />
      <div className="section-devider h-[1px] bg-[linear-gradient(90deg,transparent,#333,transparent)] m-[120px_0]"></div>
      <Arsenal />
      <Footer />
    </>
  );
};

export default Home;
