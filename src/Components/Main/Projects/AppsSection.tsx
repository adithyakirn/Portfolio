import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { useTheme } from "../../Context/Context";
import IAppProjects from "./ProjectsComp/IndividualProjects/IAppProjects";
import IAppProjectsMobile from "./ProjectsComp/IndividualProjects/IAppProjectsMobile";

const AppsSection = () => {
  const theme = useTheme();
  const isDark = theme === "dark";
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section
      id="apps-wrapper"
      className="min-h-screen py-10 lg:py-25 m-[0_auto] relative section"
    >
      <div className="w-full h-full">
        <div className="section-header mb-20 relative px-10 lg:px-[100px]">
          <div className="section-num absolute -top-[20px] right-10 text-[12px] font-bold text-[#333] tracking-[2px]">
            01
          </div>
          <h2
            className={`text text-[clamp(50px,10vw,140px)] font-bold uppercase -tracking-[2px] ${
              isDark ? "text-[#D1D1D1]" : "text-black"
            } leading-0 relative inline-block drop-shadow-[0_0_40px_rgba(252,252,252,0.2)]`}
          >
            APPS
          </h2>
          <div className="section-subtitle text-[12px] font-normal tracking-[3px] uppercase text-[#666] mt-5">
            Published Applications / 2025
          </div>
        </div>
        <div className="projects-container mb-20 flex w-full overflow-x-hidden">
          {isDesktop ? <IAppProjects /> : <IAppProjectsMobile />}
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
