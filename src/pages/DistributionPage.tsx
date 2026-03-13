import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import distributionHero from "@/assets/distribution-hero.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Warehouse, BarChart3, ShoppingCart, UtensilsCrossed, MapPin, ThermometerSnowflake, Clock } from "lucide-react";

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
  { icon: Truck, title: "Distribution Network", desc: "Comprehensive fleet covering all three Baltic states with daily delivery routes to major cities and regions." },
  { icon: Warehouse, title: "Warehouse Operations", desc: "Modern, temperature-controlled warehouse facilities with advanced inventory management systems." },
  { icon: BarChart3, title: "Supply Chain Management", desc: "End-to-end supply chain visibility from producer shipment to retail shelf placement." },
  { icon: ShoppingCart, title: "Retail Distribution", desc: "Direct relationships with major retail chains and independent stores across the Baltics." },
  { icon: UtensilsCrossed, title: "HoReCa Supply", desc: "Dedicated service for hotels, restaurants, and bars with tailored delivery schedules." },
];

const features = [
  { icon: MapPin, title: "3 Countries", desc: "Latvia, Lithuania, Estonia" },
  { icon: ThermometerSnowflake, title: "Climate Control", desc: "Temperature-regulated storage" },
  { icon: Clock, title: "Next-Day Delivery", desc: "To all major Baltic cities" },
  { icon: Truck, title: "Modern Fleet", desc: "GPS-tracked delivery vehicles" },
];

const DistributionPage = () => {
  return (
    <Layout>
      <PageHero
        label="Distribution & Logistics"
        title="Reliable Infrastructure, Exceptional Service"
        subtitle="Our state-of-the-art logistics network ensures premium products reach every corner of the Baltic region."
        image={distributionHero}
      />

      {/* Key Stats */}
      <section className="vesper-gradient section-padding py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={3} label="Countries Served" light />
          <AnimatedCounter end={500} suffix="+" label="Delivery Points" light />
          <AnimatedCounter end={98} suffix="%" label="On-Time Delivery" light />
          <AnimatedCounter end={24} suffix="/7" label="Order Support" light />
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
