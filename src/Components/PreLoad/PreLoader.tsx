import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../Context/Context";

interface PreLoaderProps {
  onFinish: () => void;
  scrollTriggerReady: boolean;
}

const PreLoader: React.FC<PreLoaderProps> = ({
  onFinish,
  scrollTriggerReady,
}) => {
  const isDarkTheme = useTheme() === "dark";
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    const minDisplayTime = 1500; // Minimum time to show loader for UX
    const startTime = Date.now();

    const handleHide = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

      // Wait for minimum display time if ready too quickly
      setTimeout(() => {
        // Ensure scroll is at top before hiding loader
        window.scrollTo(0, 0);
        setShowLoader(false);
      }, remainingTime);
    };

    // Wait for both DOM content loaded AND ScrollTrigger ready
    if (scrollTriggerReady) {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", handleHide);
        return () => {
          document.removeEventListener("DOMContentLoaded", handleHide);
        };
      } else {
        handleHide();
      }
    }
  }, [scrollTriggerReady]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
        onFinish();
      }}
    >
      {showLoader && (
        <motion.div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 ${
            isDarkTheme ? "bg-black" : "bg-white"
          }`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, delay: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.5 },
              delay: 0.5,
            }}
            className={`text-2xl md:text-3xl font-bold text-center uppercase tracking-wider ${
              isDarkTheme ? "text-[#F28F3C]" : "text-[#FF381E]"
            }`}
          >
            Good things take a second
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;
