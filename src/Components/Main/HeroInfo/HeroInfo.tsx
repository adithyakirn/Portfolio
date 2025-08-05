
import HeroAbout from "./HeroComp/HeroAbout"

const HeroInfo = () => {
    return (
        <>
            <div className="grid mt-20 gap-[30px] pb-15 md:gap-10 grid-cols-1 container m-[0_auto] md:grid-cols-3 lg:gap-15 relative md:text-center">
                <HeroAbout head="About" label="Crafting digital experiences through code. Specialized in scalable web applications and innovative user interfaces." />
                <HeroAbout head="Location" label="Kerala, India" />

                <HeroAbout head="Status" label={<>Available for Projects<br />Full-time & Freelance</>} />
                <div className="scroll-indicator absolute bottom-10 left-[50%] -translate-x-[50%] text-[9px] tracking-[2px] uppercase text-[#444] animate-pulse md:bottom-0">Scroll Down ↓</div>
            </div>
        </>
    )
}

export default HeroInfo