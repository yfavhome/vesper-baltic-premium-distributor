import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import FadeIn from "@/components/shared/FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import distributionHero from "@/assets/distribution-hero.jpg";
import { Truck, Warehouse, ShoppingCart, UtensilsCrossed, MapPin, Globe, Store, Package } from "lucide-react";

const DistributionPage = () => {
  const { t } = useLanguage();

  const services = [
    { icon: ShoppingCart, title: t.distribution.wholesaleTrade, desc: t.distribution.wholesaleDesc },
    { icon: Store, title: t.distribution.retailTrade, desc: t.distribution.retailDesc },
    { icon: Truck, title: t.distribution.logisticsServices, desc: t.distribution.logisticsDesc },
    { icon: Package, title: t.distribution.brandDistribution, desc: t.distribution.brandDistDesc },
    { icon: Globe, title: t.distribution.onlinePlatform, desc: t.distribution.onlineDesc },
    { icon: UtensilsCrossed, title: t.distribution.showroom, desc: t.distribution.showroomDesc },
  ];

  const features = [
    { icon: MapPin, title: t.distribution.countries3, desc: t.distribution.countries3Desc },
    { icon: Globe, title: t.distribution.international, desc: t.distribution.internationalDesc },
    { icon: Store, title: t.distribution.showroomTitle, desc: t.distribution.showroomDescShort },
    { icon: Truck, title: t.distribution.fullCoverage, desc: t.distribution.fullCoverageDesc },
  ];

  return (
    <Layout>
      <PageHero label={t.distribution.label} title={t.distribution.title} subtitle={t.distribution.subtitle} image={distributionHero} />

      <section className="vesper-gradient section-padding py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={3} label={t.distribution.countriesServed} light />
          <AnimatedCounter end={6} label={t.distribution.coreServices} light />
          <AnimatedCounter end={37} suffix="+" label={t.distribution.brandsDistributed} light />
          <AnimatedCounter end={16} label={t.distribution.productCategories} light />
        </div>
      </section>

      <section className="section-padding section-spacing">
        <SectionHeading label={t.distribution.servicesLabel} title={t.distribution.servicesTitle} align="center" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <div className="flex gap-6 p-8 border border-border hover:border-primary/30 transition-all group hover-lift h-full">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-body text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-padding section-spacing bg-secondary/50">
        <SectionHeading label={t.distribution.infraLabel} title={t.distribution.infraTitle} align="center" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.1}>
              <div className="text-center p-8 bg-background border border-border hover:border-primary/20 transition-all">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/5 mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h4>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default DistributionPage;
