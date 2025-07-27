import FooterFigure from "./FooterFigure"
import Nav from "./Nav"
import ReachOut from "./ReachOut"
import Socials from "./Socials"

const FooterEnd = () => {
  return (
    <>
        <div className="bg-[#1A1A1A] text-[#E6E6E6] grid grid-cols-5  !p-[30px] w-full  relative top-[.1rem] lg:grid-cols-9 lg:p-[0_.46296vw] lg:gap-[0_.46296vw]">
            <ReachOut/>
            <Socials/>
            <Nav/>
            <FooterFigure/>
        </div>
    </>
  )
}

export default FooterEnd