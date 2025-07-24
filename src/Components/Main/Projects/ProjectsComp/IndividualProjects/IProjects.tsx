import { useEffect, useState } from "react"
type PortfolioJson = {
    id: number
    projectname: string
    languages: string[]
    status: string
    year: number
    link: string
    about: string
}
const IProjects = () => {
    const [res, setRes] = useState<PortfolioJson[]>([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch("/JSON/Portfolio.json")
                const response = await data.json()
                setRes(response.Project_Details)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <>
            {res.map((el) => (
                <a href={el.link} target="_blank" className="cursor-pointer" key={el.id}>
                    <div className="project-card rounded-[5px] border-1 focus-visible:outline-[-webkit-focus-ring-color_auto_1px] hover:-translate-y-[5px] hover:border-[#333] border-solid border-[#1a1a1a] bg-[rgba(255,255,255,0.01)] before:blur-lg p-10 transition-all duration-400 ease-in-out before:content-[''] before:absolute before:top-0 before:-left-[100%] w-full before:h-[2px] before:bg-[linear-gradient(90deg,transparent,#fff,transparent)] before:transition-all before:duration-600 before:ease-in-out h-full">
                        <div className="project-meta flex justify-between items-center mb-5">
                            <div className="projectyear text-[10px] font-bold text-[#555] tracking-[2px] ">{el.year}</div>
                            <p className={`project-status text-[8px] font-bold tracking-[1px] uppercase p-[4px_8px] border-1 ${el.status.toLowerCase() === "in progress"
                                        ? "text-yellow-400 border-yellow-400"
                                        : "text-[#00ff41] border-[#00ff41]"
                                    }`}>
                                {el.status}
                            </p>
                        </div>
                        <h3 className="project-title text-[22px] font-bold uppercase tracking-[1px] mb-[16px] text-white">{el.projectname}</h3>
                        <p className="project-description text-[12px] text-[#ccc] leading-[1.7] mb-[24px] ">{el.about}</p>
                        <div className="project-tech flex flex-wrap gap-[8px] ">
                            {el.languages.map((lang) => {
                                return (
                                    <span className="tech-tag text-[9px] font-bold text-[#666] bg-[rgba(255,255,255,0.05)] border-1 border-solid border-[#2a2a2a] p-[6px_12px] uppercase tracking-[1px]">{lang}</span>
                                )
                            })}
                        </div>
                    </div>
                </a>
            ))}
        </>
    )
}

export default IProjects