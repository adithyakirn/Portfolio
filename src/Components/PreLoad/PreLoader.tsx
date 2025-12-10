import { useEffect, useState } from "react";
import { useTheme } from "../Context/Context";

interface PreLoaderProps {
  onFinish: () => void;
  scrollTriggerReady: boolean;
}

const PreLoader = ({ onFinish, scrollTriggerReady }: PreLoaderProps) => {
  const theme = useTheme();
  const isDark = theme === "dark";
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Basic minimum loading time
    const minLoadTime = 2000;
    const startTime = Date.now();

    // Prevent scrolling while loader is active
    document.body.style.overflow = "hidden";

    const checkReady = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);

      if (scrollTriggerReady) {
        setTimeout(() => {
          setShouldRender(false);
          // Allow scrolling again
          document.body.style.overflow = "";
          window.scrollTo(0, 0);
          onFinish();
        }, remainingTime);
      } else {
        // If not ready, keep checking
        setTimeout(checkReady, 100);
      }
    };

    checkReady();

    // Cleanup function to ensure overflow is reset if component unmounts prematurely
    return () => {
      document.body.style.overflow = "";
    };
  }, [scrollTriggerReady, onFinish]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center ${
        isDark ? "bg-[#0a0a0a]" : "bg-[#fafafa]"
      }`}
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
