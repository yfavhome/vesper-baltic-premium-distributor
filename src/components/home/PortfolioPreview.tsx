import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { useLanguage } from "@/i18n/LanguageContext";
import { brands } from "@/data/brands";
import portfolioHero from "@/assets/portfolio-hero.jpg";

const PortfolioPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="relative section-spacing overflow-hidden">
      <img src={portfolioHero} alt="Brand portfolio" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 vesper-overlay" />
      <div className="relative z-10 section-padding">
        <SectionHeading
          label={t.home.portfolioLabel}
          title={t.home.portfolioTitle.replace("37+", `${brands.length}+`)}
          subtitle={t.home.portfolioSubtitle}
          light
        />
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover:gap-3"
        >
          {t.home.viewFullPortfolio} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default PortfolioPreview;
