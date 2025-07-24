type KnowledgeProps = {
  frontend: boolean
  backend: boolean
  devOps: boolean
}
const frontendArr = [
  "React / Next.js",
  "Vue.js / Nuxt.js",
  "Svelte / SvelteKit",
  "Angular",
  "TypeScript",
  "WebGL / Three.js",
  "D3.js",
  "Tailwind CSS"]

const backendArr = [
  "Node.js / Express",
  "Python / FastAPI",
  "Rust / Actix",
  "Go / Gin",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "GraphQL"
]

const devOpsArr = [
  "Docker / Kubernetes",
  "AWS / GCP",
  "Terraform",
  "CI/CD Pipelines",
  "Monitoring / Logging",
  "Linux Administration",
  "Nginx",
  "Load Balancing"
]
const Knowledge = ({ frontend, backend, devOps }: KnowledgeProps) => {
  return (
    <>
      {frontend && frontendArr.map((el, idx) => (
        <li key={`frontend-${idx}`} className="text-[11px] text-[#888] mb-[8px] p-[8px_0] border-b-[#111] border-b-1 uppercase">{el}</li>
      ))}
      {backend && backendArr.map((el, idx) => (
        <li key={`backend-${idx}`} className="text-[11px] text-[#888] mb-[8px] p-[8px_0] border-b-[#111] border-b-1 uppercase">{el}</li>
      ))}
      {devOps && devOpsArr.map((el, idx) => (
        <li key={`devops-${idx}`} className="text-[11px] text-[#888] mb-[8px] p-[8px_0] border-b-[#111] border-b-1 uppercase">{el}</li>
      ))}
    </>
  )
}

export default Knowledge