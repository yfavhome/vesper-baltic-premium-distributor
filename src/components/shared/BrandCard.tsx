import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BrandCardProps {
  brand: {
    name: string;
    country: string;
    est: string;
    category: string;
  };
  index: number;
  onClick: () => void;
}

const BrandCard = ({ brand, index, onClick }: BrandCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: Math.min(index * 0.03, 0.5) }}
      onClick={onClick}
      className="group cursor-pointer p-8 border border-border hover:border-primary/40 transition-all hover-lift text-center bg-card"
    >
      <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
        <span className="font-display text-xl font-bold text-primary">{brand.name[0]}</span>
      </div>
      <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{brand.name}</h3>
      <p className="text-xs text-muted-foreground mt-1">{brand.country}{brand.est ? ` · Est. ${brand.est}` : ""}</p>
      <p className="text-[10px] text-primary/80 mt-1 uppercase tracking-widest">{brand.category}</p>
    </motion.div>
  );
};

export default BrandCard;
