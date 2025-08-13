import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTheme } from "../../../../Context/Context";

type PortfolioJson = {
    id: number;
    projectname: string;
    languages: string[];
    status: string;
    year: number;
    link: string;
    about: string;
};

const IProjects = () => {
    const theme =  useTheme()
    const isDark = theme === "dark"
    const [res, setRes] = useState<PortfolioJson[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch("/JSON/Portfolio.json");
                const response = await data.json();
                setRes(response.Project_Details);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (!res.length) return;
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            const panels = gsap.utils.toArray<HTMLElement>(".panels");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#projects-wrapper",
                    start: "top top",
                    end: `+=${res.length * 490}vh`,
                    scrub: true,
                    scroller: "#wrapper",
                }
            });
            panels.forEach((panel, i) => {
                tl.to(panel, {
                    y: `-${i * (panel.offsetHeight - 50)}px`,
                    filter: "blur(5px)",
                    ease: "power2.out",
                    duration: 8,
                });
                tl.to(panel, {
                    filter: "blur(0px)",
                    ease: "power2.inOut",
                    duration: 2,
                });
            });
            ScrollTrigger.create({
                trigger: "#projects-wrapper",
                start: "top top",
                end: `+=${res.length * 500}vh`,
                pin: true,
                pinSpacing: true,
                scroller: "#wrapper",
            });
        });

        return () => ctx.revert();
    }, [res]);

    return (
        <div className="project-scroll-inner relative" style={{ height: `${res.length * 100}vh` }}>
            {res.map((el) => (
                <div className="panels min-h-screen" key={el.id}>
                    <div className="relative group h-100 cursor-pointer" onClick={() => window.open(el.link, "_blank")}>
                        <div className={`project-card group-hover:blur-sm relative z-10 rounded-[5px] border-1 focus-visible:outline-[-webkit-focus-ring-color_auto_1px] hover:-translate-y-[5px] hover:border-[#333] border-solid border-[rgba(255,255,255,0.05)] ${isDark ? "bg-[#121212]" : "bg-[white] border-[rgba(0_0_0_0_0.2)] shadow-[0_0_30px_10px_rgb(0_0_000/0.2)]"} before:blur-lg p-10 transition-all duration-400 ease-in-out before:content-[''] before:absolute before:top-0 before:-left-[100%] w-full before:h-[2px] before:bg-[linear-gradient(90deg,transparent,#fff,transparent)] before:transition-all before:duration-600 before:ease-in-out h-full`}>
                            <div className="project-meta flex justify-between items-center mb-5">
                                <div className="projectyear text-[10px] font-bold text-[#555] tracking-[2px] ">{el.year}</div>
                                <p className={`project-status text-[8px] font-bold tracking-[1px] uppercase p-[4px_8px] border-1 ${el.status.toLowerCase() === "in progress"
                                    ? "text-[#E3B341] border-[#E3B341] bg-[#E3B34120]"
                                    : el.status.toLowerCase() === "ui/ux"
                                        ? "text-[#00BFCF] border-[#00BFCF] bg-[#00BFCF20]"
                                        : el.status.toLowerCase() === "visual & functional"
                                            ? "text-[#A970FF] border-[#A970FF] bg-[#A970FF20]"
                                            : el.status.toLowerCase() === "logic-based"
                                                ? "text-[#3DA9FC] border-[#3DA9FC] bg-[#3DA9FC20]"
                                                : "text-[#32CD32] border-[#32CD32] bg-[#32CD3220]"
                                    }`}>{el.status}
                                </p>
                            </div>
                            <h3 className={`project-title text-[22px] font-bold uppercase tracking-[1px] mb-[16px] ${isDark ? "text-white" : "text-black" }`}>{el.projectname}</h3>
                            <p className="project-description text-[12px] text-[#ccc] leading-[1.7] mb-[24px] ">{el.about}</p>
                            <div className="project-tech flex flex-wrap gap-[8px] ">
                                {el.languages.map((lang, index) => (
                                    <span key={`${el.id}-${lang}-${index}`} className="tech-tag text-[9px] font-bold text-[#666] bg-[rgba(255,255,255,0.05)] border-1 border-solid border-[#2a2a2a] p-[6px_12px] uppercase tracking-[1px]">{lang}</span>))}
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 z-50 w-full h-full lg:opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-md !overflow-hidden shadow-lg">
                            <div className="w-[135%] h-[135%] scale-[0.75] origin-top-left">
                                 <iframe src={el.link} title="preview" className={`w-full h-full ${isDark && "grayscale"} !pointer-events-none`} loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IProjects;