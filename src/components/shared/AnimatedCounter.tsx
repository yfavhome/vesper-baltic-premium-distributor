import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  light?: boolean;
}

const AnimatedCounter = ({ end, suffix = "", label, light = false }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(end / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className={`text-5xl md:text-6xl font-display font-bold ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {count}
        {suffix}
      </div>
      <p className={`text-label mt-3 ${light ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
        {label}
      </p>
    </div>
  );
};

export default AnimatedCounter;
