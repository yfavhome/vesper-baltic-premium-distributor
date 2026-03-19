import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { getBrandSlug } from "@/pages/BrandPage";
import { MapPin } from "lucide-react";

interface BrandCardProps {
  brand: {
    name: string;
    country: string;
    est: string;
    category: string;
  };
  index: number;
  onClick?: () => void;
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
    >
      <Link
        to={`/brand/${getBrandSlug(brand.name)}`}
        className="group relative block cursor-pointer p-8 border border-border hover:border-primary/50 transition-all duration-300 text-center bg-card overflow-hidden"
      >
        {/* Hover background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-transparent transition-all duration-500" />
        
        <div className="relative z-10">
          {/* Brand initial */}
          <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
            <span className="font-display text-xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">{brand.name[0]}</span>
          </div>
          
          {/* Brand name */}
          <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{brand.name}</h3>
          
          {/* Country with icon */}
          <div className="flex items-center justify-center gap-1 mt-1.5">
            <MapPin size={10} className="text-muted-foreground/50 group-hover:text-primary/50 transition-colors duration-300" />
            <p className="text-xs text-muted-foreground">{brand.country}{brand.est ? ` · Est. ${brand.est}` : ""}</p>
          </div>
          
          {/* Category badge */}
          <p className="text-[10px] text-primary/70 mt-2 uppercase tracking-widest group-hover:text-primary transition-colors duration-300">{brand.category}</p>
          
          {/* Hover arrow indicator */}
          <div className="mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-[10px] text-primary uppercase tracking-widest font-semibold">View →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BrandCard;
