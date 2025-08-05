import { useEffect, useState } from "react"
import { useTheme } from "../Context/Context"

const phrases: string[] = [
    "next()", "useEffect()", "npm install", "yarn dev", "commit -m",
    "fetch('/api')", "props", "export default", "tailwind.config.js",
    "console.log()", "<Route />", "map()", "reduce()", "useState()",
    "res.json()", "return()", "try/catch", "404()", "dev.to",
    "localhost", "componentDidMount", "await fetch()", "async()",
    "Promise.all", "<Provider />", "Auth()", "getServerSideProps()",
    "json.stringify", "querySelector()", "document.createElement()",
    "onClick={() => {}}", "<Fragment />", "setTimeout()",
    "import { useRef }", "TypeScript", "render()", "clean code",
    "Vite", "Next.js", "const router = useRouter()"
]

const randomChar = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}<>/"
    return chars[Math.floor(Math.random() * chars.length)]
}

const EncryptedWords = () => {
    const theme = useTheme()
    const isDark = theme === "dark"
    const [items, setItems] = useState<{ text: string; top: number; left: number; display: string }[]>([])

    const mobilePositions = [
        { top: 15, left: 20 },
        { top: 32, left: 63 },
        { top: 26, left: 10 },
        { top: 15, left: 60 },
        { top: 34, left: 20 },
        { top: 28, left: 66 },
    ]

    const desktopPositions = [
        { top: 25, left: 10 },
        { top: 55, left: 25 },
        { top: 38, left: 15 },
        { top: 11, left: 15 },
        { top: 54, left: 62 },
        { top: 46, left: 75 },
        { top: 13, left: 49 },
        { top: 18, left: 81 },
        { top: 65, left: 40 },
        { top: 12, left: 30 },
        { top: 42, left: 60 },
        { top: 34, left: 85 },
    ]

    useEffect(() => {
        const isMobile = window.innerWidth < 1024
        const positions = isMobile ? mobilePositions : desktopPositions
        const count = isMobile ? 6 : 12
        const selectedPhrases = phrases.slice(0, count)
        const initialItems = selectedPhrases.map((text, i) => {
            const { top, left } = positions[i]
            return { text: `${text}`, top, left, display: ` ${text}` }
        })
        setItems(initialItems)

        const animate = (i: number): Promise<void> => {
            return new Promise(resolve => {
                const newText = `${phrases[Math.floor(Math.random() * phrases.length)]}`
                let frame = 0
                const resolveFrames = newText.split("").map(() => frame + Math.floor(Math.random() * 8) + 1)

                const scramble = setInterval(() => {
                    frame++
                    const scrambled = newText
                        .split("")
                        .map((char, idx) => (frame >= resolveFrames[idx] ? char : randomChar()))
                        .join("")
                    setItems(current =>
                        current.map((it, index) =>
                            index === i ? { ...it, display: scrambled } : it
                        )
                    )
                    if (frame >= Math.max(...resolveFrames)) {
                        clearInterval(scramble)
                        resolve()
                    }
                }, 100)
            })
        }

        const runSequentialAnimations = async () => {
            while (true) {
                for (let i = 0; i < selectedPhrases.length; i++) {
                    await animate(i)
                    await new Promise(res => setTimeout(res, 220))
                }
            }
        }

        runSequentialAnimations()
    }, [])
    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            {items.map((item, index) => (
                <span
                    key={index}
                    className={`absolute text-[10px] md:text-sm ${isDark ? "text-slate-400" : "text-black"} opacity-30 font-mono select-none transition-all duration-500`}
                    style={{ top: `${item.top}vh`, left: `${item.left}vw`, }}>
                    {item.display}
                </span>
            ))}
        </div>
    )
}

export default EncryptedWords