import { useEffect, useState } from "react";
import { Link } from "react-router";
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

const IAppProjectsMobile = () => {
  const theme = useTheme();
  const isDark = theme === "dark";
  const [appsData, setAppsData] = useState<ProjectData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/JSON/Apps.json");
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

  return (
    <div className="flex flex-col gap-[80px] w-full px-5">
      {appsData.map((data: any) => {
        return <MobileCard key={data.id} {...data} isDark={isDark} />;
      })}
    </div>
  );
};

const MobileCard = ({
  projectname,
  year,
  status,
  link,
  about,
  languages,
  isDark,
}: any) => {
  return (
    <div className="w-full relative">
      <div className="w-full h-full flex flex-col gap-4">
        <h1
          className={`text-[clamp(30px,5vw,60px)] font-bold uppercase ${
            isDark ? "text-white" : "text-black"
          } leading-[0.9]`}
        >
          {projectname}
        </h1>
        <div className="flex gap-4 items-center">
          <span className="text-[12px] font-bold text-[#555] tracking-[2px]">
            {year}
          </span>
          <div
            className={`h-[1px] w-[30px] ${
              isDark ? "bg-white/20" : "bg-black/20"
            }`}
          ></div>
          <p className="text-[10px] font-bold tracking-[1px] uppercase text-[#666]">
            {status}
          </p>
        </div>

        <p className="text-[14px] leading-[1.6] text-[#888] line-clamp-4">
          {about}
        </p>

        <Link to={link}>
          <button
            className={`mt-2 px-6 py-3 border ${
              isDark
                ? "border-white/20 text-white hover:bg-white/5"
                : "border-black/20 text-black hover:bg-black/5"
            } rounded-full text-xs font-bold uppercase tracking-widest transition-all w-fit`}
          >
            View App
          </button>
        </Link>

        {/* Separator */}
        <div
          className={`w-full h-[1px] ${
            isDark ? "bg-white/10" : "bg-black/10"
          } mt-10`}
        ></div>
      </div>
    </div>
  );
};

export default IAppProjectsMobile;
