import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import distributionHero from "@/assets/distribution-hero.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Warehouse, ShoppingCart, UtensilsCrossed, MapPin, Globe, Store, Package } from "lucide-react";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  );
};

const services = [
  { icon: ShoppingCart, title: "Wholesale Trade", desc: "Comprehensive wholesale distribution covering the entire Baltic market with reliable supply chains." },
  { icon: Store, title: "Retail Trade", desc: "Carefully selected retail partners ensuring premium products reach the right consumers." },
  { icon: Truck, title: "Logistics Services", desc: "Full logistics coverage across Europe, Baltic States, and third countries with professional handling." },
  { icon: Package, title: "Brand Distribution", desc: "Dedicated brand distribution services focused on increasing sales and market presence of distributed brands." },
  { icon: Globe, title: "Online Platform", desc: "E-commerce through our online shop at alko.lv, providing convenient access to our full product range." },
  { icon: UtensilsCrossed, title: "Showroom", desc: "Visit our Vesper shop and showroom in Tīraine, Latvia for a curated tasting and selection experience." },
];

const features = [
  { icon: MapPin, title: "3 Countries", desc: "Latvia, Lithuania, Estonia" },
  { icon: Globe, title: "International", desc: "Europe & 3rd country logistics" },
  { icon: Store, title: "Showroom", desc: "Vesper shop in Tīraine" },
  { icon: Truck, title: "Full Coverage", desc: "Wholesale & retail channels" },
];

const DistributionPage = () => {
  return (
    <Layout>
      <PageHero
        label="Distribution & Logistics"
        title="Reliable Infrastructure, Exceptional Service"
        subtitle="Our logistics network covers Europe, Baltic States, and third countries — ensuring products reach every destination."
        image={distributionHero}
      />

      {/* Key Stats */}
      <section className="vesper-gradient section-padding py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={3} label="Countries Served" light />
          <AnimatedCounter end={6} label="Core Services" light />
          <AnimatedCounter end={37} suffix="+" label="Brands Distributed" light />
          <AnimatedCounter end={16} label="Product Categories" light />
        </div>
      </section>

      {/* Services */}
      <section className="section-padding section-spacing">
        <SectionHeading label="Our Services" title="End-to-End Distribution Solutions" align="center" />
        <div className="space-y-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 p-8 border border-border hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0">
                  <service.icon className="w-8 h-8 text-primary" />
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

      {/* Features Grid */}
      <section className="section-padding section-spacing bg-secondary">
        <SectionHeading label="Infrastructure" title="Built for Scale & Reliability" align="center" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.1}>
              <div className="text-center p-8 bg-background">
                <f.icon className="w-8 h-8 text-primary mx-auto mb-4" />
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
