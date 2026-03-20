import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { useLanguage } from "@/i18n/LanguageContext";
import { brands, productCategories } from "@/data/brands";

const AboutPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding section-spacing">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading
            label={t.home.aboutLabel}
            title={t.home.aboutTitle}
            subtitle={t.home.aboutSubtitle}
          />
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm uppercase tracking-widest hover:gap-3 transition-all group"
          >
            {t.home.learnMore} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <AnimatedCounter end={brands.length} suffix="+" label={t.home.brands} />
          <AnimatedCounter end={productCategories.length} label={t.home.productCategories} />
          <AnimatedCounter end={3} label={t.home.balticMarkets} />
          <AnimatedCounter end={6} label={t.home.services} />
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
