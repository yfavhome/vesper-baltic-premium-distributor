import { ShoppingCart, Store, Truck, Package, Globe, Wine } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: ShoppingCart, name: t.home.wholesaleTrade, desc: t.home.wholesaleDesc },
    { icon: Store, name: t.home.retailTrade, desc: t.home.retailDesc },
    { icon: Truck, name: t.home.logisticsServices, desc: t.home.logisticsDesc },
    { icon: Package, name: t.home.brandDistribution, desc: t.home.brandDistDesc },
    { icon: Globe, name: t.home.onlinePlatform, desc: t.home.onlineDesc },
    { icon: Wine, name: t.home.showroom, desc: t.home.showroomDesc },
  ];

  return (
    <section className="section-padding section-spacing bg-secondary/50">
      <SectionHeading label={t.home.servicesLabel} title={t.home.servicesTitle} align="center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <FadeIn key={service.name} delay={i * 0.08}>
            <div className="group flex flex-col items-center gap-5 p-10 bg-background border border-border hover:border-primary/30 hover-lift text-center transition-all h-full">
              <div className="w-14 h-14 flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{service.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
