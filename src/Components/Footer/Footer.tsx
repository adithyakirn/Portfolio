import FooterEnd from "./FooterComp/FooterEnd";
import ScrambleChar from "../EncryptedWords/Scramble";
import { useTheme } from "../Context/Context";
import { Link } from "react-router";


const Footer = () => {
  const theme = useTheme()
  const isDark = theme === "dark"
  const chars = ["L", "e", "t", "'", "s", "T", "a", "l", "k"];
  return (
    <>
      <footer className="overflow-clip relative">
        <div className="footer-header group z-4 relative">
          <Link to="/lets_talk" className={`group hidden lg:flex items-center ${isDark ? "text-[#F2F2F2]" : "text-[#ff391e]"} font-[reg] justify-between relative text-[7.2rem] lg:text-[12.15278vw]`}>
            <span className="relative -translate-x-[20px] flex overflow-hidden w-[10.70602vw] h-[8.96991vw] items-center justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 19"
                className="transition-transform drop-shadow-[0_0_40px_rgba(252,252,252,0.2)]  duration-700 ease-[cubic-bezier(.19,1,.22,1)] transform -translate-x-[50rem] group-hover:translate-x-0 lg:h-[8.96991vw] lg:w-[10.70602vw]">
                <path d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z"></path>
              </svg>
            </span>
            <span className="flex !overflow-hidden relative lg:ml-[-.07em] justify-start transform transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)] hover:before:-translate-x-[90rem] group-hover:translate-x-[2vw] before:transition-[all.5s_cubic-bezier(.19,1,.22,1)] before:delay-[.2] before:bg-current before:bottom-[3.13194vw] before:content-[''] before:h-[.1rem] before:left-[.072em] before:absolute before:right-[-.065em] origin-left">
              <span className="text-splitter--splitted text-splitter group drop-shadow-[0_0_40px_rgba(252,252,252,0.2)]">
                {chars.map((char, i) => (
                  <ScrambleChar key={i} char={char} />
                ))}
              </span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 19"
              className="transition-transform duration-700 drop-shadow-[0_0_40px_rgba(252,252,252,0.2)] ease-[cubic-bezier(.19,1,.22,1)] transform group-hover:translate-x-[20rem] lg:h-[8.96991vw] lg:left-[.5787vw] lg:w-[10.70602vw] relative">
              <path d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z"></path>
            </svg>
            <span className="absolute bottom-[.2rem] left-0 w-full h-[.1rem] bg-current" />
          </Link>
        </div>
        <FooterEnd />
      </footer>
    </>
  );
};

export default Footer;