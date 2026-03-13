import { motion } from "framer-motion";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  image: string;
}

const PageHero = ({ label, title, subtitle, image }: PageHeroProps) => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 vesper-overlay" />
      <div className="relative z-10 section-padding pb-16 md:pb-24 w-full">
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
