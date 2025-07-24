import HeroInfo from "./HeroInfo/HeroInfo"

const Main = () => {
  return (
    <>
      <div className="main-contents flex flex-col flex-1 justify-center md:text-center">
        <div className="hero-text mb-[60px] ">
          <div className="hero-subtitle text-[14px] font-[300] tracking-[6px] uppercase text-[#666] !mb-[40px]">Portfolio / 2025</div>
          <h1 className="hero-header text-[clamp(80px,15vw,240px)] font-black leading-[0.85] uppercase -tracking-[4px] mb-[30px] relative">
            <div className="relative inline-block">FULL STACK DEV</div>
          </h1>
        </div>
      </div>
      <HeroInfo />
    </>
  )
}

export default Main