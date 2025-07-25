import ArsenalSection from "./ProjectsComp/ArsenalSection"

const Arsenal = () => {
  return (
    <>
        <section className="p-[100px_0] relative -mt-[340vh]">
            <div className="section-header mb-20 relative ">
                <div className="section-num absolute -top-[20px] right-0 text-[12px] font-bold text-[#333] tracking-[2px]">02</div>
                <h2 id="arsenal" className="text text-[clamp(50px,10vw,140px)] font-bold uppercase -tracking-[2px] text-[#D1D1D1] leading-0 relative inline-block">Arsenal</h2>
                <div className="section-subtitle text-[12px] font-normal tracking-[3px] uppercase text-[#666] mt-5">Technologies & Tools</div>
            </div>
            <ArsenalSection/>
        </section>
    </>
  )
}

export default Arsenal