import { motion } from "framer-motion";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  image: string;
  size?: "default" | "compact" | "tall";
  align?: "bottom-left" | "center" | "bottom-center";
}

const sizeClasses = {
  compact: "h-[45vh] md:h-[50vh]",
  default: "h-[60vh] md:h-[70vh]",
  tall: "h-[70vh] md:h-[80vh]",
};

const alignClasses = {
  "bottom-left": "items-end text-left",
  "bottom-center": "items-end text-center",
  center: "items-center text-center",
};

const PageHero = ({ label, title, subtitle, image, size = "default", align = "bottom-left" }: PageHeroProps) => {
  return (
    <section className={`relative ${sizeClasses[size]} flex ${alignClasses[align]} overflow-hidden`}>
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      <div className="absolute inset-0 vesper-overlay" />
      <div className={`relative z-10 section-padding pb-16 md:pb-24 w-full ${align === "center" ? "flex flex-col items-center" : ""}`}>
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-label text-primary mb-4"
          >
            {label}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-display-lg text-primary-foreground max-w-3xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-body-lg text-primary-foreground/70 mt-6 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
