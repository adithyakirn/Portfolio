import { useEffect, useLayoutEffect, useState } from "react";
import { useTheme } from "../Context/Context";

interface PreLoaderProps {
  onFinish: () => void;
  scrollTriggerReady: boolean;
}

const PreLoader = ({ onFinish, scrollTriggerReady }: PreLoaderProps) => {
  const theme = useTheme();
  const isDark = theme === "dark";
  const [isExiting, setIsExiting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useLayoutEffect(() => {
    // Basic minimum loading time
    const minLoadTime = 2000;
    const startTime = Date.now();

    // Prevent scrolling while loader is active
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    // Aggressive scroll lock
    const handleScrollLock = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("scroll", handleScrollLock);

    const checkReady = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);

      if (scrollTriggerReady) {
        setTimeout(() => {
          setIsExiting(true);

          // Wait for transition to finish before unmounting
          setTimeout(() => {
            setShouldRender(false);
            // Allow scrolling again
            document.body.style.overflow = "";
            window.removeEventListener("scroll", handleScrollLock);
            // Ensure we are at top before unmounting
            window.scrollTo(0, 0);
            onFinish();
          }, 800); // 800ms fade out duration
        }, remainingTime);
      } else {
        // If not ready, keep checking
        setTimeout(checkReady, 100);
      }
    };

    checkReady();

    // Cleanup function to ensure overflow is reset and listener removed if component unmounts prematurely
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("scroll", handleScrollLock);
    };
  }, [scrollTriggerReady, onFinish]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center transition-opacity duration-[800ms] ease-in-out ${
        isDark ? "bg-[#0a0a0a]" : "bg-[#fafafa]"
      } ${isExiting ? "opacity-0" : "opacity-100"}`}
    >
      <div className="text-center">
        <h1
          className={`text-4xl font-bold uppercase tracking-widest ${
            isDark ? "text-[#F28F3B]" : "text-[#ff391e]"
          }`}
        >
          Good things take a second
        </h1>
      </div>
    </div>
  );
};

export default PreLoader;
