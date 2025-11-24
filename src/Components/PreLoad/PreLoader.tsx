import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../Context/Context";

interface PreLoaderProps {
  onFinish: () => void;
}

const PreLoader: React.FC<PreLoaderProps> = ({ onFinish }) => {
  const isDarkTheme = useTheme() === "dark";
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2500);
    return () => clearTimeout(timer);
  }, []);

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
