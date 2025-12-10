import { useEffect, useRef, useState } from "react";
import { usePortfolioData, useTheme } from "../../../../Context/Context";

const IProjectsDesktop = () => {
  const theme = useTheme();
  const isDark = theme === "dark";
  const { portfolioData: res } = usePortfolioData();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const center = container.scrollLeft + container.clientWidth / 2;
    // Find the child that is closest to the center
    const children = Array.from(container.children) as HTMLElement[];
    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(childCenter - center);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
    }
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="w-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar py-20 px-[50vw] gap-0 items-center"
      style={{ scrollBehavior: "smooth" }}
    >
      {res.map((el, index) => (
        <Card
          key={el.id}
          {...el}
          isDark={isDark}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  );
};

const Card = ({
  projectname,
  year,
  status,
  link,
  about,
  languages,
  isDark,
  isActive,
}: any) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      className={`relative min-w-[85vw] md:min-w-[40vw] h-[60vh] snap-center transition-all duration-500 ease-in-out ${
        isActive
          ? "scale-110 z-20 opacity-100"
          : "scale-90 z-10 opacity-50 blur-[1px]"
      }`}
    >
      <div
        className={`project-card w-full h-full group relative rounded-[15px] border-1 border-solid border-[rgba(255,255,255,0.05)] ${
          isDark ? "bg-[#121212]" : "bg-white shadow-xl border-black/10"
        } p-8 transition-all duration-400 ease-in-out flex flex-col overflow-hidden`}
      >
        <div className="project-meta flex justify-between items-center mb-5">
          <div className="projectyear text-[10px] font-bold text-[#555] tracking-[2px] ">
            {year}
          </div>
          <p
            className={`project-status text-[8px] font-bold tracking-[1px] uppercase p-[4px_8px] border-1 ${
              status.toLowerCase() === "in progress"
                ? "text-[#E3B341] border-[#E3B341] bg-[#E3B34120]"
                : status.toLowerCase() === "ui/ux"
                ? "text-[#00BFCF] border-[#00BFCF] bg-[#00BFCF20]"
                : status.toLowerCase() === "visual & functional"
                ? "text-[#A970FF] border-[#A970FF] bg-[#A970FF20]"
                : status.toLowerCase() === "logic-based"
                ? "text-[#3DA9FC] border-[#3DA9FC] bg-[#3DA9FC20]"
                : "text-[#32CD32] border-[#32CD32] bg-[#32CD3220]"
            }`}
          >
            {status}
          </p>
        </div>
        <h3
          className={`project-title text-[22px] font-bold uppercase tracking-[1px] mb-[16px] ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {projectname}
        </h3>
        <p className="project-description text-[12px] text-[#ccc] leading-[1.7] mb-[24px] line-clamp-3">
          {about}
        </p>
        <div className="project-tech flex flex-wrap gap-[8px] mb-auto">
          {languages.map((lang: string, index: number) => (
            <span
              key={`${lang}-${index}`}
              className="tech-tag text-[9px] font-bold text-[#666] bg-[rgba(255,255,255,0.05)] border-1 border-solid border-[#2a2a2a] p-[6px_12px] uppercase tracking-[1px]"
            >
              {lang}
            </span>
          ))}
        </div>

        <div
          className="relative w-full h-[50%] overflow-hidden rounded-md group cursor-pointer mt-4"
          onClick={() => window.open(link, "_blank")}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 z-50 flex items-center justify-center bg-black/50">
            <span className="text-white text-sm font-bold tracking-widest uppercase">
              Visit Site
            </span>
          </div>

          <div className="w-full h-full relative">
            <iframe
              src={link}
              title="preview"
              className={`w-full h-full ${
                isDark && "grayscale"
              } object-cover pointer-events-none ${
                isMobile ? "hidden" : "block"
              }`}
              loading="lazy"
            />
            {isMobile && (
              <div
                className={`w-full h-full flex items-center justify-center border ${
                  isDark
                    ? "border-white/10 bg-white/5"
                    : "border-black/10 bg-black/5"
                }`}
              >
                <span
                  className={`text-[10px] uppercase tracking-widest font-bold ${
                    isDark ? "text-white/40" : "text-black/40"
                  }`}
                >
                  Click to View
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IProjectsDesktop;
