import { usePortfolioData, useTheme } from "../../../../Context/Context";

const IProjects = () => {
  const theme = useTheme();
  const isDark = theme === "dark";
  const { portfolioData: res } = usePortfolioData();

  return (
    <div className="flex flex-col gap-[80px] w-full px-5 py-20">
      {res.map((el) => (
        <div className="w-full relative" key={el.id}>
          <div className="w-full h-full flex flex-col gap-4">
            <h3
              className={`text-[clamp(30px,5vw,60px)] font-bold uppercase ${
                isDark ? "text-white" : "text-black"
              } leading-[0.9]`}
            >
              {el.projectname}
            </h3>

            <div className="flex gap-4 items-center">
              <span className="text-[12px] font-bold text-[#555] tracking-[2px]">
                {el.year}
              </span>
              <div
                className={`h-[1px] w-[30px] ${
                  isDark ? "bg-white/20" : "bg-black/20"
                }`}
              ></div>
              <p
                className={`text-[10px] font-bold tracking-[1px] uppercase p-[2px_6px] border-1 ${
                  el.status.toLowerCase() === "in progress"
                    ? "text-[#E3B341] border-[#E3B341] bg-[#E3B34120]"
                    : el.status.toLowerCase() === "ui/ux"
                    ? "text-[#00BFCF] border-[#00BFCF] bg-[#00BFCF20]"
                    : el.status.toLowerCase() === "visual & functional"
                    ? "text-[#A970FF] border-[#A970FF] bg-[#A970FF20]"
                    : el.status.toLowerCase() === "logic-based"
                    ? "text-[#3DA9FC] border-[#3DA9FC] bg-[#3DA9FC20]"
                    : "text-[#32CD32] border-[#32CD32] bg-[#32CD3220]"
                }`}
              >
                {el.status}
              </p>
            </div>

            <p className="text-[14px] leading-[1.6] text-[#888] line-clamp-4">
              {el.about}
            </p>

            <div className="project-tech flex flex-wrap gap-[8px] mt-2">
              {el.languages.map((lang, index) => (
                <span
                  key={`${el.id}-${lang}-${index}`}
                  className="tech-tag text-[9px] font-bold text-[#666] bg-[rgba(255,255,255,0.05)] border-1 border-solid border-[#2a2a2a] p-[6px_12px] uppercase tracking-[1px]"
                >
                  {lang}
                </span>
              ))}
            </div>

            <button
              onClick={() => window.open(el.link, "_blank")}
              className={`mt-6 px-6 py-3 border ${
                isDark
                  ? "border-white/20 text-white hover:bg-white/5"
                  : "border-black/20 text-black hover:bg-black/5"
              } rounded-full text-xs font-bold uppercase tracking-widest transition-all w-fit`}
            >
              View Project
            </button>

            {/* Separator */}
            <div
              className={`w-full h-[1px] ${
                isDark ? "bg-white/10" : "bg-black/10"
              } mt-10`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IProjects;
