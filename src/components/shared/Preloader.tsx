import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "@/assets/logo-v-icon.png";

const Preloader = () => {
  const [visible, setVisible] = useState(() => {
    return !sessionStorage.getItem("vesper_preloader_shown");
  });

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("vesper_preloader_shown", "true");
    }, 2200);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-vesper-dark"
        >
          <motion.img
            src={logoIcon}
            alt="Vesper"
            className="h-20 w-auto object-contain brightness-0 invert"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.span
            className="mt-4 font-body text-[18px] font-bold tracking-[0.35em] uppercase text-primary-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            VESPER
          </motion.span>
          <motion.div
            className="mt-6 h-[2px] bg-primary"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
