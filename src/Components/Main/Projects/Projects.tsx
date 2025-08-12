import { useTheme } from "../../Context/Context";
import IProjects from "./ProjectsComp/IndividualProjects/IProjects";

const Projects = () => {
  const theme = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <section
        id="projects-wrapper"
        className="min-h-screen p-[100px_20px] lg:pl-[100px] m-[0_auto] relative section"
      >
        <div className="w-full h-full">
          <div className="section-header mb-20 relative ">
            <div className="section-num absolute -top-[20px] right-0 text-[12px] font-bold text-[#333] tracking-[2px]">
              01
            </div>
            <h2
              id="projects"
              className={`text text-[clamp(50px,10vw,140px)] font-bold uppercase -tracking-[2px] ${
                isDark ? "text-[#D1D1D1]" : "text-black"
              } leading-0 relative inline-block drop-shadow-[0_0_40px_rgba(252,252,252,0.2)]`}
            >
              Projects
            </h2>
            <div className="section-subtitle text-[12px] font-normal tracking-[3px] uppercase text-[#666] mt-5">
              Selected Works / 2025 — Present
            </div>
          </div>
          <div className="projects-container mb-20 flex w-full overflow-x-hidden">
            <IProjects />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
