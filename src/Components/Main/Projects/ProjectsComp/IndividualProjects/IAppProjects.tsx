import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useTheme } from "../../../../Context/Context";

type ProjectData = {
  id: string;
  projectname: string;
  languages: string[];
  status: string;
  year: number;
  link: string;
  about: string;
};

const IAppProjects = () => {
  const theme = useTheme();
  const isDark = theme === "dark";
  const [appsData, setAppsData] = useState<ProjectData[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/JSON/Apps.json");
        if (!data.ok) {
          throw new Error(`HTTP error! status: ${data.status}`);
        }
        const response = await data.json();

        const mappedData: ProjectData[] = Object.entries(response).map(
          ([key, value]: [string, any]) => ({
            id: key,
            projectname: value.name,
            languages: [value.framework],
            status: value.subtitle,
            year: 2025,
            link: `/mobileApps/${key}`,
            about: value.description,
          })
        );

        setAppsData(mappedData);
      } catch (error) {
        console.log("Error fetching apps data", error);
      }
    };
    fetchData();
  }, []);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const center = container.scrollLeft + container.clientWidth / 2;
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
      handleScroll();
    }
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex, appsData]);

  if (!appsData.length) return null;

  return (
    <div
      ref={containerRef}
      className="w-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar py-20 px-[50vw] gap-0 items-center"
      style={{ scrollBehavior: "smooth" }}
    >
      {appsData.map((el, index) => (
        <Card
          key={el.id}
          {...el}
          isDark={isDark}
          isActive={index === activeIndex}
          navigate={navigate}
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
  isDark,
  isActive,
  navigate,
}: any) => {
  return (
    <div
      className={`relative min-w-[85vw] md:min-w-[40vw] h-[45vh] snap-center transition-all duration-500 ease-in-out ${
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
          <span className="text-[10px] font-bold text-[#555] tracking-[2px]">
            {year}
          </span>
          <span className="text-[8px] font-bold tracking-[1px] uppercase p-[2px_6px] border-1 text-[#3DA9FC] border-[#3DA9FC] bg-[#3DA9FC20]  max-w-[50%]">
            {status}
          </span>
        </div>
        <h3
          className={`project-title text-[20px] font-bold uppercase tracking-[1px] mb-[10px] ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {projectname}
        </h3>
        <p className="project-description text-xs text-[#ccc] leading-[1.7] line-clamp-6 mb-6">
          {about}
        </p>

        <button
          onClick={() => navigate(link)}
          className={`mt-auto px-6 py-3 border ${
            isDark
              ? "border-white/20 text-white hover:bg-white/5"
              : "border-black/20 text-black hover:bg-black/5"
          } rounded-full text-xs font-bold uppercase tracking-widest transition-all w-fit`}
        >
          View App
        </button>
      </div>
    </div>
  );
};

export default IAppProjects;
