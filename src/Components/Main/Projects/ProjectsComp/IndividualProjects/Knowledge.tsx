type KnowledgeProps = {
  frontend: boolean
  backend: boolean
  learning: boolean
}
const frontendArr = [
  "HTML / CSS",
  "JavaScript / TypeScript",
  "React / Next.js",
  "React Native",
  "Tailwind CSS",
  "Animations (GSAP)",
];

const backendArr = [
  "Node.js / Express",
  "PostgreSQL",
  "MongoDB / Mongosh",
  "APIs & REST",
];

const learningArr = [
  "Advanced TypeScript",
  "GraphQL",
  "Authentication & Authorization",
  "Database Design",
  "Testing (Jest / Vitest)",
];

const Knowledge = ({ frontend, backend, learning }: KnowledgeProps) => {
  return (
    <>
      {frontend && frontendArr.map((el, idx) => (
        <li key={`frontend-${idx}`} className="text-[11px] text-[#888] mb-[8px] p-[8px_0] border-b-[#111] border-b-1 uppercase">{el}</li>
      ))}
      {backend && backendArr.map((el, idx) => (
        <li key={`backend-${idx}`} className="text-[11px] text-[#888] mb-[8px] p-[8px_0] border-b-[#111] border-b-1 uppercase">{el}</li>
      ))}
      {learning && learningArr.map((el, idx) => (
        <li key={`learning-${idx}`} className="text-[11px] text-[#888] mb-[8px] p-[8px_0] border-b-[#111] border-b-1 uppercase">{el}</li>
      ))}
    </>
  )
}

export default Knowledge