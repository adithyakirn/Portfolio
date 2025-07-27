import { useState, useRef } from "react"

const charsPool = "!@#$%^&*";

const ScrambleChar = ({ char }: { char: string }) => {
  const [display, setDisplay] = useState(char);
  const isAnimating = useRef(false);

  const scramble = async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const target = char;
    let frame = 0;
    const resolveFrames = target.split("").map(() => frame + Math.floor(Math.random() * 8) + 1);

    return new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        frame++;
        const scrambled = target
          .split("")
          .map((c, i) => (frame >= resolveFrames[i] ? c : charsPool[Math.floor(Math.random() * charsPool.length)]))
          .join("");
        setDisplay(scrambled);

        if (frame >= Math.max(...resolveFrames)) {
          clearInterval(interval);
          isAnimating.current = false;
          resolve();
        }
      }, 100);
    });
  };

  const handleMouseEnter = () => {
    scramble();
  };

  return (
    <span
      className="inline-block"
      onMouseEnter={handleMouseEnter}
    >
      {display}
    </span>
  );
};

export default ScrambleChar;