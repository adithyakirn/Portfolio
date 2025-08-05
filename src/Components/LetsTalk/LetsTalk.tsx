import { Link } from "react-router";
import { useTheme } from "../Context/Context";
import ScrambleChar from "../EncryptedWords/Scramble";
const LetsTalk = () => {
  const theme = useTheme()
  const isDark = theme === "dark"
  const chars = ["L", "e", "t", "'", "s", "T", "a", "l", "k"];

  return (
    <div className={`h-screen flex justify-center flex-col ${isDark ? '' : ''}`}>
      <div className={`text-center px-4 py-10 font-[reg]`}>
        <Link to="/lets_talk" className={`hidden lg:flex items-center justify-center ${isDark ? "text-[#F2F2F2]" : "text-[#ff391e]"} font-[reg] justify-between relative text-[7.2rem] lg:text-[12.15278vw]`}>
          <span className="flex !overflow-hidden relative lg:ml-[-.07em] justify-center transform  before:transition-[all.5s_cubic-bezier(.19,1,.22,1)] before:delay-[.2] before:bg-current before:bottom-[3.13194vw] before:content-[''] before:h-[.1rem] before:left-[.072em] before:absolute before:right-[-.065em] origin-left">
            <span className="text-splitter--splitted text-splitter group drop-shadow-[0_0_40px_rgba(252,252,252,0.2)]">
              {chars.map((char, i) => (
                <ScrambleChar key={i} char={char} />
              ))}
            </span>
          </span>
        </Link>
        <p className="text-[16px] leading-relaxed max-w-2xl mx-auto ">
          Thanks for dropping by. I’m currently open to full-time roles, freelance projects, and collaborations. If you’ve got something in mind, scroll down and let’s connect.
        </p>
      </div>
      <div className="px-4 pb-10 font-[reg] text-[16px] text-center leading-[1.1]">
        <p>
          <a href="mailto:adithyakiran021@gmail.com" className={`relative after:transition-[transform_.8s_cubic-bezier(.19,1,.22,1)] after:bottom-0 after:content-[''] after:h-[.1rem] after:left-[0] after:absolute after:w-full ${isDark ? 'after:bg-white' : 'after:bg-[#ff391e]'} hover:after:w-0`}>
            adithyakiran021@gmail.com
          </a>
          <br />
          <em>/</em>
          <a href="tel:8547266801" className={`relative after:transition-[transform_.8s_cubic-bezier(.19,1,.22,1)] after:bottom-0 after:content-[''] after:h-[.1rem] after:left-[0] after:absolute after:w-full ${isDark ? 'after:bg-white' : 'after:bg-[#ff391e]'} hover:after:w-0`}>
            +91 8547266801
          </a>
        </p>
        <ul className="flex justify-center gap-6 mt-6 flex-wrap">
          <li>
            <a href="https://www.instagram.com/adtyakirn/" className={`relative cursor-pointer hover:after:w-0 after:transition-[transform_.8s_cubic-bezier(.19,1,.22,1)] after:bottom-0 after:content-[''] after:h-[.1rem] after:left-[0] after:absolute after:w-full ${isDark ? 'after:bg-white' : 'after:bg-[#ff391e]'}`}>
              Instagram
            </a>
          </li>
          <li>
            <a href="https://wa.me/918547266801" className={`relative cursor-pointer hover:after:w-0 after:transition-[transform_.8s_cubic-bezier(.19,1,.22,1)] after:bottom-0 after:content-[''] after:h-[.1rem] after:left-[0] after:absolute after:w-full ${isDark ? 'after:bg-white' : 'after:bg-[#ff391e]'}`}>
              WhatsApp
            </a>
          </li>
          <li>
            <a href="https://github.com/adithyakirn" className={`relative cursor-pointer hover:after:w-0 after:transition-[transform_.8s_cubic-bezier(.19,1,.22,1)] after:bottom-0 after:content-[''] after:h-[.1rem] after:left-[0] after:absolute after:w-full ${isDark ? 'after:bg-white' : 'after:bg-[#ff391e]'}`}>
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/adithya-kiran-c-b-6a4738355/" className={`relative cursor-pointer hover:after:w-0 after:transition-[transform_.8s_cubic-bezier(.19,1,.22,1)] after:bottom-0 after:content-[''] after:h-[.1rem] after:left-[0] after:absolute after:w-full ${isDark ? 'after:bg-white' : 'after:bg-[#ff391e]'}`}>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <Link to="/" className="justify-center flex items-center gap-2 group">
        <h1 className={`text-sm transform transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)] group-hover:translate-x-2 font-semibold tracking-wider uppercase relative cursor-pointer hover:after:w-0 after:transition-[transform_.8s_cubic-bezier(.19,1,.22,1)] after:bottom-[-.2rem] after:content-[''] after:h-[.15rem] after:left-[0] after:absolute after:w-full ${isDark ? 'text-white after:bg-white' : 'text-black after:bg-black'}`}>Go Home</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22 19"
          className={`h-3 w-3 transform transition-transform duration-500 ease-[cubic-bezier(.19,1,.22,1)] group-hover:translate-x-2 ${isDark ? 'fill-white' : 'fill-black'}`}><path d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z"></path>
        </svg>
      </Link>
    </div>
  )
}

export default LetsTalk