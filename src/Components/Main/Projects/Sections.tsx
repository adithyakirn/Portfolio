
import ArsenalSection from "./ProjectsComp/ArsenalSection"
import ProjectsSection from "./ProjectsComp/ProjectsSection"
type SectionProp ={
  heading : string
  sectionNum : number
  sectionSub : string
}
const Sections = ({heading, sectionSub, sectionNum} : SectionProp) => {
  return (
    <>
        <section className="p-[100px_0] relative">
            <div className="section-header mb-20 relative ">
                <div className="section-num absolute -top-[20px] right-0 text-[12px] font-bold text-[#333] tracking-[2px]">0{sectionNum}</div>
                <h2 className="text- text-[clamp(50px,10vw,140px)] font-bold uppercase -tracking-[2px] text-white leading-0 relative inline-block">{heading}</h2>
                <div className="section-subtitle text-[12px] font-normal tracking-[3px] uppercase text-[#666] mt-5">{sectionSub}</div>
            </div>
            {heading==="Projects" && <ProjectsSection/>}
            {heading==="Arsenal" && <ArsenalSection/>}
        </section>
    </>
  )
}

export default Sections