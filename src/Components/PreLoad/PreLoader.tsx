import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../Context/Context";

interface PreLoaderProps {
  onFinish: () => void;
}

const PreLoader: React.FC<PreLoaderProps> = ({ onFinish }) => {
  const isDarkTheme = useTheme() === "dark";
  const [showLoader, setShowLoader] = useState(true);


// Set overflow hidden on mount
useEffect(() => {
  document.body.style.overflow = "hidden";
  // No cleanup needed as we handle reset on exit complete
}, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2500); // total delay including fade
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
          className={`fixed inset-0 ${
            isDarkTheme ? "bg-[#0A0A0A]" : "bg-[#F8F8F8]"
          } z-50 flex items-center justify-center`}
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%", pointerEvents: "none" }}
          transition={{ duration: 1 }}
        >
        <motion.div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            border: "4px solid #ccc",
            borderTop: "4px solid #00faff",
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
  welcome to my portfolio!
        </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;