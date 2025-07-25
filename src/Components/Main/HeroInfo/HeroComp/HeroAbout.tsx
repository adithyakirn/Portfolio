type HeroProp = {
    head : string
    label : any
}
const HeroAbout = ({head, label} : HeroProp) => {
  return (
    <>
        <div className="info-block border-[#1A1A1A] pl-6 border-l-1">
            <div className="info-label text-[9px] font-bold tracking-[2px] uppercase text-[#555555] mb-3">{head}</div>
            <div className="info text-[13px] font-normal text-[#ccc] leading-[1.6]">{label}</div>
        </div>
    </>
  )
}

export default HeroAbout