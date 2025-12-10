import { useTheme } from "../../Context/Context";
import ArsenalSection from "./ProjectsComp/ArsenalSection";

const Arsenal = () => {
  const theme = useTheme();
  const isDark = theme === "dark";
  return (
    <>
      <section className="p-[100px_20px] relative container m-[0_auto]">
        <div className="section-header mb-20 relative ">
          <div className="section-num absolute -top-[20px] right-0 text-[12px] font-bold text-[#333] tracking-[2px]">
            02
          </div>
          <h2
            id="arsenal"
            className={`text text-[clamp(50px,10vw,140px)] font-bold uppercase -tracking-[2px] ${
              isDark ? "text-[#D1D1D1]" : "text-black"
            } leading-0 relative inline-block drop-shadow-[0_0_40px_rgba(252,252,252,0.2)]`}
          >
            Arsenal
          </h2>
          <div className="section-subtitle text-[12px] font-normal tracking-[3px] uppercase text-[#666] mt-5">
            Technologies & Tools
          </div>
        </div>
        <ArsenalSection />
      </section>
    </>
  );
};

export default Arsenal;
