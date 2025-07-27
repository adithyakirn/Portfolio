import { useEffect, useState } from "react"
import EncryptedWords from "../EncryptedWords/EncryptedWords"
import HeroInfo from "./HeroInfo/HeroInfo"
import { gsap } from "gsap/gsap-core";
import { TextPlugin } from "gsap/all";
import { scrambleText } from "../EncryptedWords/ScrambleText";
gsap.registerPlugin(TextPlugin)
const Main = () => {
  const [line1, setLine1] = useState("Fùll Ståçk")
  const [line2, setLine2] = useState("Dēv")

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await scrambleText("Fùll Ståçk", setLine1)
        await new Promise(res => setTimeout(res, 2500))
        await scrambleText("Dēv", setLine2)
        await new Promise(res => setTimeout(res, 2500))
      }
    }
    loop()
  }, [])

  return (
    <>
      <div className="main-contents p-100px flex flex-col flex-1 justify-center md:text-center container m-[0_auto] !p-[0_20px]">
        <EncryptedWords />
        <div className="hero-text mb-[60px] ">
          <h1 id="header" className="hero-header text-center text-[clamp(80px,15vw,240px)] font-black leading-[0.85] -tracking-[4px] mb-[30px] relative">
            <div className="relative inline-flex flex-wrap w-full text-normal drop-shadow-[0_0_40px_rgba(242,143,59,0.3)] text-[#F28F3B] text-center cursor-crosshair select-none">
              <div className="w-full flex justify-center flex-nowrap">
                {line1.split("").map((char, i) => (
                  <span key={`line1-${i}`} className="transition duration-150 ease-in-out">{char === " " ? "\u00A0" : char}</span>
                ))}
              </div>
              <div className="w-full flex justify-center flex-wrap">
                {line2.split("").map((char, i) => (
                  <span key={`line2-${i}`} className="transition duration-150 ease-in-out">{char}</span>
                ))}
              </div>
            </div>
          </h1>
        </div>
      </div>
      <HeroInfo />
    </>
  )
}

export default Main