import IProjects from "./IndividualProjects/IProjects"

const ProjectsSection = () => {
  return (
    <>
        <section className="mb-20 grid-container grid lg:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] lg:gap-[60px_80px] grid-cols-1 gap-10">
            <IProjects/>
        </section>
    </>
  )
}

export default ProjectsSection