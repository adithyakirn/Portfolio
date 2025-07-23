import Languages from "../Languages"

const IProjects = () => {
    return (
        <>
            <div className="project-card border-1 border-solid border-[#1a1a1a] bg-[rgba(255,255,255,0.01)] before:blur-lg p-10 transition-all duration-400 ease-in-out before:content-[''] before:absolute before:top-0 before:-left-[100%] w-full before:h-[2px] before:bg-[linear-gradient(90deg,transparent,#fff,transparent)] before:transition-all before:duration-600 before:ease-in-out h-full">
                <div className="project-meta flex justify-between items-center mb-5">
                    <div className="projectyear text-[10px] font-bold text-[#555] tracking-[2px] ">2025</div>
                    <p className="project-status text-[8px] font-bold tracking-[1px] uppercase text-[#00ff41] border-1 border-[#00ff41] p-[4px_8px]">In Progress</p>
                </div>
                <h3 className="project-title text-[22px] font-bold uppercase tracking-[1px] mb-[16px] text-white">Amazon-Clone</h3>
                <p className="project-description text-[12px] text-[#ccc] leading-[1.7] mb-[24px] ">A TypeScript + React-based Amazon UI clone with modular components, routing, and responsive design. Built for frontend practice and UI replication.</p>
                <div className="project-tech flex flex-wrap gap-[8px] ">
                    <Languages htmlcss={false} next={false} js={true} ts={true} react={true} tailwind={true} />
                </div>
            </div>
        </>
    )
}

export default IProjects