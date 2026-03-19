import { motion, useInView } from "framer-motion";
import { forwardRef, useRef } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ label, title, subtitle, align = "left", light = false }, _ref) => {
    const internalRef = useRef(null);
    const isInView = useInView(internalRef, { once: true, margin: "-100px" });

    return (
      <div ref={internalRef} className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}>
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-label text-primary mb-4"
          >
            {label}
          </motion.p>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className={`text-display-md ${light ? "text-primary-foreground" : "text-foreground"} ${
            align === "center" ? "mx-auto" : ""
          } max-w-3xl`}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className={`text-body-lg mt-4 max-w-2xl ${
              light ? "text-primary-foreground/70" : "text-muted-foreground"
            } ${align === "center" ? "mx-auto" : ""}`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";

export default SectionHeading;
