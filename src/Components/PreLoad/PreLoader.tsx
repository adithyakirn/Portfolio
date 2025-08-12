import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../Context/Context";

interface PreLoaderProps {
  onFinish: () => void;
}

const PreLoader: React.FC<PreLoaderProps> = ({ onFinish }) => {
  const isDarkTheme = useTheme() === "dark"
  const [percentage, setPercentage] = useState(0);
  const [fadeOutContent, setFadeOutContent] = useState(false);
  const [fadeOutOverlay, setFadeOutOverlay] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const duration = 1000; // 6 seconds

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let finished = false;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const newPercentage = Math.round(progress * 100);
      setPercentage(newPercentage);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else if (!finished) {
        finished = true;
        // Ensure percentage is exactly 100 at the end
        setPercentage(100);
        // Start fade out sequence after percentage hits 100
        setTimeout(() => setFadeOutContent(true), 2000);
        setTimeout(() => setFadeOutOverlay(true), 3000);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    if (fadeOutOverlay) {
      const timeoutId = setTimeout(() => {
        onFinish();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [fadeOutOverlay, onFinish]);

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .percentage-text {
          font-size: 2rem;
          font-weight: bold;
          color: #00faff;
          text-shadow:
            0 0 5px #00faff,
            0 0 10px #00faff,
            0 0 20px #00faff,
            0 0 40px #00faff;
          user-select: none;
          margin-right: 20px;
          min-width: 60px;
          text-align: right;
        }
      `}</style>
      <div
        className={`fixed inset-0 ${isDarkTheme ? "bg-[#0A0A0A]" : "bg-[#F8F8F8]"} z-50 flex items-center justify-center transition-all duration-[1000ms] ease-in-out ${
          fadeOutOverlay
            ? "opacity-0 pointer-events-none -translate-y-full"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <h1
            className="preloader-title text-center font-black leading-[0.85] -tracking-[4px] mb-8"
            style={{
              fontSize: "clamp(80px, 15vw, 240px)",
              lineHeight: "0.85",
              letterSpacing: "-4px",
              color: "#F28F3B",
              textShadow: "0 0 40px rgba(242,143,59,0.3)",
              opacity: fadeOutContent ? 0 : 1,
              transform: fadeOutContent ? "scale(1)" : "scale(1.05)",
              transition: "opacity 1s ease, transform 1s ease"
            }}
          >
            <>
              Fùll Ståçk
              <br />
              Dēv
            </>
          </h1>
          <div className="flex flex-row items-center justify-center">
            <span
              className="percentage-text"
              style={{ opacity: fadeOutContent ? 0 : 1, transition: "opacity 0.5s" }}
              aria-live="polite"
              aria-atomic="true"
            >
              {percentage}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreLoader;