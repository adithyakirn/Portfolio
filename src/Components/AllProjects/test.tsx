import { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { useTheme } from "../Context/Context";

type Project = {
  id: number;
  projectname: string;
  languages: string[];
  status: string;
  year: number;
  link: string;
  about: string;
};

export function BentoGridDemo() {
    const theme = useTheme()
    const isDark = theme === "dark"
  const [items, setItems] = useState<
  {
      title: string;
      description: string;
      link: string;
    }[]
    >([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch("/JSON/Portfolio.json");
                const json = await res.json();
                const data = json.allProjects.map((project: Project) => ({
                    title: project.projectname,
                    description: project.about,
                    link: project.link,
                }));
                setItems(data);
            } catch (err) {
                console.error("Failed to fetch project data", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
  }, []);

  return (
    <BentoGrid className="">
      {loading
        ? Array.from({ length: 6 }).map((_, i) => (
            <BentoGridItem
              key={i}
              title=""
              description=""
              header={<Skeleton />}
              icon={<Skeleton />}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))
        : items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={null}
              icon={
                <div onClick = {() => window.open(item.link, "_blank")} className="relative w-full h-[200px] md:!h-full block">
                  <iframe
                    src={item.link}
                    title={item.title}
                    className={`absolute top-0 left-0 w-full h-full rounded-[5px] pointer-events-none ${isDark && "grayscale"}`}
                    loading="lazy"
                  />
                </div>
              }
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div
    className={`w-full h-full min-h-[6rem] flex rounded-[8px] bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 animate-pulse`}
  ></div>
);
