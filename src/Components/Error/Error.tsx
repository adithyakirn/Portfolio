import { useNavigate } from "react-router";
import { useEffect} from "react";
import { useTheme } from "../Context/Context";

function Error404() {
    const theme = useTheme()
    const isDark = theme === 'dark'
  const navigate = useNavigate()
  useEffect(() => {
    const ogTitle = document.title
      document.title = "Page Not Found"
    return () => {
      document.title = ogTitle;
    };
  },[])
  return (
    <>
      <div className={`${isDark ? "bg-black" : "bg-white"} grid h-[100dvh] place-content-center place-items-center`}>
        <div className="w-full h-full flex justify-center flex-col mt-[calc((-3rem-5rem)*2)]">
          <div className="text-[10rem] md:text-[24rem] font-[reg] text-center leading-normal bg-gradient-to-b from-[#ff391e] via-[#ff381e24] to-transparent bg-clip-text text-transparent m-10">404</div>
          <p className={`font-[400] text-[clamp(1.42rem,1.23rem+0.94vw,2.37rem)] leading-[calc(2.125ex+6px)] font-[reg] text-balance m-0 px-8 text-center mt-[-3rem] md:mt-[-8rem] ${isDark ? 'text-[#969696]' : 'text-black'}`}>The page you are trying to access can not be found.</p>
        </div>
        <div className="homepage-button mt-4 text-center">
          <button className="cursor-pointer inline-block align-top outline-0 rounded-sm" onClick={() => navigate("/")}>
            <div className={`flex items-start content-center w-full min-w-min box-border text-start no-underline font-normal text-[1rem] font-[reg] border-2 border-[#010205] rounded-sm px-[26px] py-[13px] ${isDark ? 'text-[#969696] border-[#969696]' : 'text-black border-[#010205]'}`}>
              To Homepage
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Error404;
