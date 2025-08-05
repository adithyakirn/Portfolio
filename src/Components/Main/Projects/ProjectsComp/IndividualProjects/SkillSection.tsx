import { useTheme } from "../../../../Context/Context"
import Knowledge from "./Knowledge"

type SkillProp = {
  title: "Frontend" | "Backend" | "Learning"
}

const SkillSection = ({ title }: SkillProp) => {
  const theme = useTheme()
  const isDark = theme === 'dark'
  const isFrontend = title === "Frontend"
  const isBackend = title === "Backend"
  const isLearning = title === "Learning"

  return (
    <div className="skill-section text-center">
      <h3 className={`skill-title text-[14px] font-normal tracking-[2px] mb-[24px] uppercase ${ isDark ? 'text-white' : 'text-black'} `}>
        {title}
      </h3>
      <ul className="skill-list list-none">
        <Knowledge
          frontend={isFrontend}
          backend={isBackend}
          learning={isLearning}
        />
      </ul>
    </div>
  )
}

export default SkillSection