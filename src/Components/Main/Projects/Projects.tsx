
import ProjectsSection from "./ProjectsComp/ProjectsSection"

const Projects = () => {
  return (
    <>
        <section className="p-[100px_0] relative">
            <div className="section-header mb-20 relative ">
                <div className="section-num absolute -top-[20px] right-0 text-[12px] font-bold text-[#333] tracking-[2px]">01</div>
                <h2 className="text- text-[clamp(50px,10vw,140px)] font-bold uppercase -tracking-[2px] text-white leading-0 relative inline-block">Projects</h2>
                <div className="section-subtitle text-[12px] font-normal tracking-[3px] uppercase text-[#666] mt-5">Selected Works / 2022 — Present</div>
            </div>
            <ProjectsSection/>
        </section>
    </>
  )
}

export default Projects