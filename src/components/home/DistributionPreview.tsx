import { Link } from "react-router-dom";
import { ArrowRight, Truck, ShieldCheck, Wine, Users } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import distributionHero from "@/assets/distribution-hero.jpg";

const DistributionPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding section-spacing">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="overflow-hidden">
            <img src={distributionHero} alt="Distribution" className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </FadeIn>
        <div>
          <SectionHeading
            label={t.home.distLabel}
            title={t.home.distTitle}
            subtitle={t.home.distSubtitle}
          />
          <div className="grid grid-cols-2 gap-5 mb-8">
            {[
              { icon: Truck, label: t.home.europeLogistics },
              { icon: ShieldCheck, label: t.home.qualityAssured },
              { icon: Wine, label: t.home.tempControlled },
              { icon: Users, label: t.home.expertTeam },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 bg-secondary/50 border border-border">
                <item.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <Link
            to="/distribution"
            className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm uppercase tracking-widest hover:gap-3 transition-all group"
          >
            {t.home.learnMore} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DistributionPreview;
