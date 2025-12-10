import { useTheme } from "../../Context/Context";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import IProjectsMobile from "./ProjectsComp/IndividualProjects/IProjectsMobile";
import IProjectsDesktop from "./ProjectsComp/IndividualProjects/IProjectsDesktop";

const Projects = () => {
  const theme = useTheme();
  const isDark = theme === "dark";
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section
      id="projects-wrapper"
      className="min-h-screen py-10 lg:py-25 relative section"
    >
      <div className="w-full h-full">
        <div className="section-header mb-20 relative px-10 lg:px-[100px] ">
          <div className="section-num absolute -top-[20px] right-10 text-[12px] font-bold text-[#333] tracking-[2px]">
            01
          </div>
          <h2
            id="projects"
            className={`text text-[clamp(50px,10vw,140px)] font-bold uppercase -tracking-[2px] ${
              isDark ? "text-[#D1D1D1]" : "text-black"
            } leading-0 relative inline-block  drop-shadow-[0_0_40px_rgba(252,252,252,0.2)]`}
          >
            Projects
          </h2>
          <div className="section-subtitle text-[12px] font-normal tracking-[3px] uppercase text-[#666] mt-5">
            Selected Works / 2025 — Present
          </div>
        </div>
        <div className="projects-container mb-20 flex w-full">
          <IProjectsDesktop />
        </div>
      </div>
    </section>
  );
};

export default Projects;
