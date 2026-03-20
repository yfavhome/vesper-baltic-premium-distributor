import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="vesper-gradient section-padding section-spacing text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-label text-primary mb-4">{t.home.ctaLabel}</p>
        <h2 className="text-display-md text-primary-foreground max-w-2xl mx-auto mb-8">
          {t.home.ctaTitle}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover:gap-3"
          >
            {t.home.contactUs} <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/37122100200"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary-foreground/10 transition-colors"
          >
            {t.home.whatsappUs}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
