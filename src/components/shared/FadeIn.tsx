import { motion, useInView } from "framer-motion";
import { forwardRef, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(
  ({ children, delay = 0, className = "", direction = "up", distance = 30 }, _ref) => {
    const internalRef = useRef(null);
    const inView = useInView(internalRef, { once: true, margin: "-60px" });

    const directionMap = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
      none: {},
    };

    return (
      <motion.div
        ref={internalRef}
        initial={{ opacity: 0, ...directionMap[direction] }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
);

FadeIn.displayName = "FadeIn";

export default FadeIn;
