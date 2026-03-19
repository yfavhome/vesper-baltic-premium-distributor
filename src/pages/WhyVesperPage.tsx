import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { ShieldCheck, Wine, Truck, Headphones, Handshake, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const WhyVesperPage = () => {
  const { t } = useLanguage();

  const advantages = [
    { icon: Wine, title: t.whyVesper.premiumPortfolio, desc: t.whyVesper.premiumPortfolioDesc },
    { icon: Truck, title: t.whyVesper.reliableNetwork, desc: t.whyVesper.reliableNetworkDesc },
    { icon: ShieldCheck, title: t.whyVesper.qualityAssurance, desc: t.whyVesper.qualityAssuranceDesc },
    { icon: Headphones, title: t.whyVesper.professionalService, desc: t.whyVesper.professionalServiceDesc },
    { icon: Handshake, title: t.whyVesper.longTermPartnerships, desc: t.whyVesper.longTermPartnershipsDesc },
    { icon: TrendingUp, title: t.whyVesper.marketGrowth, desc: t.whyVesper.marketGrowthDesc },
  ];

  return (
    <Layout>
      <section className="vesper-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="section-padding">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-label text-primary mb-4">
            {t.whyVesper.label}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-display-lg text-primary-foreground max-w-3xl">
            {t.whyVesper.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-body-lg text-primary-foreground/70 mt-6 max-w-2xl">
            {t.whyVesper.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((adv, i) => (
            <FadeIn key={adv.title} delay={i * 0.08}>
              <div className="p-10 border border-border hover:border-primary/30 transition-all group hover-lift h-full">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/5 mb-6 group-hover:bg-primary/10 transition-colors">
                  <adv.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{adv.title}</h3>
                <p className="text-body text-muted-foreground leading-relaxed">{adv.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 section-padding section-spacing text-center">
        <SectionHeading label={t.whyVesper.ctaLabel} title={t.whyVesper.ctaTitle} align="center" subtitle={t.whyVesper.ctaSub} />
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover:gap-3">
          {t.whyVesper.getStarted} <ArrowRight size={16} />
        </Link>
      </section>
    </Layout>
  );
};

export default WhyVesperPage;
