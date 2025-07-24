import Knowledge from "./Knowledge"

type SkillProp = {
  title: "Frontend" | "Backend" | "DevOps"
}

const SkillSection = ({ title }: SkillProp) => {
  const isFrontend = title === "Frontend"
  const isBackend = title === "Backend"
  const isDevOps = title === "DevOps"

  return (
    <div className="skill-section text-center">
      <h3 className="skill-title text-[14px] font-normal tracking-[2px] uppercase text-white mb-[24px] ">
        {title}
      </h3>
      <ul className="skill-list list-none">
        <Knowledge
          frontend={isFrontend}
          backend={isBackend}
          devOps={isDevOps}
        />
      </ul>
    </div>
  )
}

export default SkillSection