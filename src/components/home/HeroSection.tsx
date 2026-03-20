import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center overflow-hidden noise-overlay">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed supports-[not(background-attachment:fixed)]:bg-scroll" style={{ backgroundImage: `url(${heroBg})` }} role="img" aria-label="Premium beverages" />
      <div className="absolute inset-0 vesper-overlay" />
      <motion.div
        className="absolute inset-0 bg-vesper-dark/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div className="relative z-10 section-padding w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-label text-primary mb-6">{t.home.heroLabel}</p>
          <h1 className="text-display-xl text-primary-foreground max-w-4xl" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            {t.home.heroTitle}
          </h1>
          <p className="text-body-lg text-primary-foreground/80 mt-8 max-w-2xl font-normal" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.6)' }}>
            {t.home.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground font-body font-semibold text-xs sm:text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover:gap-3"
            >
              {t.home.explorePortfolio} <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-xs sm:text-sm uppercase tracking-widest hover:bg-primary-foreground/20 backdrop-blur-sm transition-colors"
            >
              {t.home.becomePartner}
            </Link>
            <a
              href="https://www.alko.lv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-xs sm:text-sm uppercase tracking-widest hover:bg-primary-foreground/20 backdrop-blur-sm transition-all hover:gap-3"
            >
              {t.home.shopOnline} <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-primary-foreground/40 font-body">{t.home.scroll}</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary-foreground/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
