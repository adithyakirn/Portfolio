import SkillSection from "./IndividualProjects/SkillSection"

const ArsenalSection = () => {
  return (
    <>
        <div className="skills-grid grid mt-20 md:grid-cols-3 grid-cols-1 gap-10 lg:gap-20">
            <SkillSection title="Frontend" />
            <SkillSection title="Backend" />
            <SkillSection title="Learning" />
        </div>
    </>
  )
}

export default ArsenalSection