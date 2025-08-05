import { useTheme } from "../../../Context/Context"

type HeroProp = {
    head : string
    label : React.ReactNode
}
const HeroAbout = ({head, label} : HeroProp) => {
      const theme = useTheme()
    const isDark = theme === "dark"
  return (
    <>
        <div className="info-block border-[#1A1A1A] pl-6 border-l-1">
            <div className={`info-label text-[9px] font-bold tracking-[2px] uppercase ${isDark ? "text-[#555555]" : "text-black"} mb-3`}>{head}</div>
            <div className={`info text-[13px] font-normal ${isDark ? "text-[#ccc]" : "text-[#555555]"} leading-[1.6]`}>{label}</div>
        </div>
    </>
  )
}

export default HeroAbout