import { useEffect, useState } from "react"
import { useTheme } from "../Context/Context";


const Header = () => {
  const theme = useTheme();
  const isDark = theme === "dark";
  const nameVariants = [
    "अदित्य.किरण", 
    "அதித்யா.கிரன்", 
    "ఆదిత్య.కిరణ్",  
    "ಆದಿತ್ಯ.ಕಿರಣ್",  
    "ആദിത്യ.കിരൺ",  
    "আদিত্য.কিরণ",  
    "અદિત્ય.કિરણ",  
    "ଅଦିତ୍ୟ.କିରଣ",  
    "ਅਦਿਤ੍ਯਾ.ਕਿਰਣ",
    "ادتیا.کرن",
    "ADITHYA.KIRAN"]
  const [nameIndex, setNameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNameIndex(prev => (prev + 1) % nameVariants.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const name = nameVariants[nameIndex];
  return (
    <>
      <nav className="header flex flex-col justify-between !p-[60px_0_0_0] relative container m-[0_auto]">
        <div className="nav flex justify-between items-center !mb-10 md:!justify-center w-full">
          <div className={`logo drop-shadow-[0_0_40px_rgba(242,143,59,0.3)] text-center text-[14px] font-[600] tracking-[3px] ${isDark ? "text-[#F28F3B]" : "text-[#ff391e]"} w-full `}>
            <span className="text-[#888] font-[normal]">Hey i'm </span>
            {name} <span className="text-[#888] font-[normal]">and i'm a</span>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Header