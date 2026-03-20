import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { useLanguage } from "@/i18n/LanguageContext";
import partnersHero from "@/assets/partners-hero.jpg";

const PartnersPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="relative section-spacing overflow-hidden">
      <img src={partnersHero} alt="Partners" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 vesper-overlay" />
      <div className="relative z-10 section-padding text-center">
        <SectionHeading
          label={t.home.partnersLabel}
          title={t.home.partnersTitle}
          subtitle={t.home.partnersSubtitle}
          align="center"
          light
        />
        <Link
          to="/partners"
          className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary-foreground/10 transition-all hover:gap-3"
        >
          {t.home.explorePartnerships} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default PartnersPreview;
