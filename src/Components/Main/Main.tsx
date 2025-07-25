import HeroInfo from "./HeroInfo/HeroInfo"

const Main = () => {
  return (
    <>
      <div className="main-contents flex flex-col flex-1 justify-center md:text-center">
        <div className="hero-text mb-[60px] ">
          <h1 className="hero-header text-[clamp(80px,15vw,240px)] font-black leading-[0.85] -tracking-[4px] mb-[30px] relative">
            <div className="relative inline-block text-[#F28F3B] ">Fùll Ståçk Dēv</div>
          </h1>
        </div>
      </div>
      <HeroInfo />
    </>
  )
}
// {drop-shadow-[0_0_40px_rgba(242,143,59,0.2)]}
export default Main