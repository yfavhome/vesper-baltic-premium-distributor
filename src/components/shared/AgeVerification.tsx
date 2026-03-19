import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "@/assets/logo-icon.png";

const AgeVerification = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("vesper_age_verified");
    if (!verified) setVisible(true);
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("vesper_age_verified", "true");
    setVisible(false);
  };

  const handleDeny = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="relative w-[90vw] max-w-md bg-background border border-border p-10 text-center shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src={logoIcon} alt="Vesper" className="w-16 h-16 mx-auto mb-6 object-contain" />

            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
              Age Verification
            </h2>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              This website contains information about alcoholic beverages. You must be at least 18 years old to enter.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleConfirm}
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
              >
                I am 18 or older
              </button>
              <button
                onClick={handleDeny}
                className="w-full px-8 py-4 border border-border text-muted-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-secondary transition-colors"
              >
                I am under 18
              </button>
            </div>

            <p className="text-[11px] text-muted-foreground/60 mt-6">
              By entering this site you agree to our Terms of Use and Privacy Policy.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AgeVerification;
