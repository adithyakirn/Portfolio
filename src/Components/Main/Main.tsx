import EncryptedWords from "../EncryptedWords/EncryptedWords"
import HeroInfo from "./HeroInfo/HeroInfo"
import { gsap } from "gsap/gsap-core";
import { TextPlugin } from "gsap/all";
gsap.registerPlugin(TextPlugin)
const Main = () => {
  return (
    <>
      <div className="main-contents flex flex-col flex-1 justify-center md:text-center container m-[0_auto] !p-[0_20px]">
        <EncryptedWords />
        <div className="hero-text mb-[60px] ">
          <h1 id="header" className="hero-header text-center text-[clamp(80px,15vw,240px)] font-black leading-[0.85] -tracking-[4px] mb-[30px] relative">
            <div className="relative inline-block text-[#F28F3B] text-center">
              {"Fùll Ståçk".split("").map((char, i) => (
                <span key={`line1-${i}`} className="inline-block">{char === " " ? "\u00A0" : char}</span>
              ))}
              <br />
              {"Dēv".split("").map((char, i) => (
                <span key={`line2-${i}`} className="inline-block">{char}</span>
              ))}
            </div>
          </h1>
        </div>
      </div>
      <HeroInfo />
    </>
  )
}
// {drop-shadow-[0_0_40px_rgba(242,143,59,0.2)]}
export default Main