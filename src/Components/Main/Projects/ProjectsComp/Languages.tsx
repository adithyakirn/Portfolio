type LanguageProps = {
    htmlcss: boolean;
    next: boolean
    js: boolean
    ts: boolean
    react: boolean
    tailwind: boolean
}
const Languages = ({ htmlcss, next, js, ts, react, tailwind }: LanguageProps) => {
    return (
        <>
            {htmlcss && <span className="tech-tag text-[9px] font-bold text-[#666] bg-[rgba(255,255,255,0.05)] border-1 border-solid border-[#2a2a2a] p-[6px_12px] uppercase tracking-[1px]">html & css</span>}
            {next && <span className="tech-tag text-[9px] font-bold text-[#666] bg-[rgba(255,255,255,0.05)] border-1 border-solid border-[#2a2a2a] p-[6px_12px] uppercase tracking-[1px]">Next.js</span>}
            {js && <span className="tech-tag text-[9px] font-bold text-[#666] bg-[rgba(255,255,255,0.05)] border-1 border-solid border-[#2a2a2a] p-[6px_12px] uppercase tracking-[1px]">Javascript</span>}
            {ts && <span className="tech-tag text-[9px] font-bold text-[#666] bg-[rgba(255,255,255,0.05)] border-1 border-solid border-[#2a2a2a] p-[6px_12px] uppercase tracking-[1px]">Typescript</span>}
            {react && <span className="tech-tag text-[9px] font-bold text-[#666] bg-[rgba(255,255,255,0.05)] border-1 border-solid border-[#2a2a2a] p-[6px_12px] uppercase tracking-[1px]">React</span>}
            {tailwind && <span className="tech-tag text-[9px] font-bold text-[#666] bg-[rgba(255,255,255,0.05)] border-1 border-solid border-[#2a2a2a] p-[6px_12px] uppercase tracking-[1px]">Tailwind</span>}
        </>
    )
}

export default Languages