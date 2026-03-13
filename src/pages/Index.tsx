import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Truck, Wine, Users, ShieldCheck, ShoppingCart, Package, Globe, Store } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import heroBg from "@/assets/hero-bg.jpg";
import portfolioHero from "@/assets/portfolio-hero.jpg";
import distributionHero from "@/assets/distribution-hero.jpg";
import partnersHero from "@/assets/partners-hero.jpg";
import newsPlaceholder from "@/assets/news-placeholder.jpg";

const FadeInSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const services = [
  { icon: ShoppingCart, name: "Wholesale Trade", desc: "Covering Baltic market" },
  { icon: Store, name: "Retail Trade", desc: "Carefully selected partners" },
  { icon: Truck, name: "Logistics Services", desc: "Europe, Baltic States, 3rd countries" },
  { icon: Package, name: "Brand Distribution", desc: "Increase in sales of distributed brands" },
  { icon: Globe, name: "Online Platform", desc: "E-shop www.alko.lv" },
  { icon: Wine, name: "Showroom", desc: "Vesper shop in Tīraine, Latvia" },
];

const newsItems = [
  { title: "Events with Vesper Catering", date: "September 2025", category: "Events" },
  { title: "Vesper Group Strengthens Baltic Partnerships", date: "2025", category: "Company News" },
  { title: "New Premium Brand Partnerships Announced", date: "2025", category: "Partnerships" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <img src={heroBg} alt="Premium beverages" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 vesper-overlay" />
        <motion.div
          className="absolute inset-0 bg-vesper-dark/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="relative z-10 section-padding w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-label text-primary mb-6">Vesper Group</p>
            <h1 className="text-display-xl text-primary-foreground max-w-4xl">
              Premium Beverage Distribution in the Baltics
            </h1>
            <p className="text-body-lg text-primary-foreground/70 mt-8 max-w-2xl">
              Vesper Group is an alcohol distributor based in Latvia, working across the Baltic region. We offer a wide range of beverages — from everyday drinks to exclusive premium brands — making sure that everyone can find the right choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
              >
                Explore Portfolio <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary-foreground/10 transition-colors"
              >
                Become a Partner
              </Link>
              <a
                href="https://www.alko.lv/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary-foreground/10 transition-colors"
              >
                Shop Online <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-12 bg-primary-foreground/30" />
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              label="About Vesper"
              title="Your Trusted Alcohol Distributor in the Baltic Region"
              subtitle="Vesper Group is an alcohol distributor based in Latvia, working across the Baltic region. We offer a wide range of beverages — from everyday drinks to exclusive premium brands."
            />
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm uppercase tracking-widest hover:gap-3 transition-all"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <AnimatedCounter end={37} suffix="+" label="Brands" />
            <AnimatedCounter end={16} label="Product Categories" />
            <AnimatedCounter end={3} label="Baltic Markets" />
            <AnimatedCounter end={6} label="Services" />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section-padding section-spacing bg-secondary">
        <SectionHeading
          label="Our Services"
          title="Comprehensive Beverage Solutions"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeInSection key={service.name} delay={i * 0.1}>
              <div className="group flex flex-col items-center gap-4 p-10 bg-background hover-lift text-center">
                <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg font-semibold text-foreground">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="relative section-spacing overflow-hidden">
        <img src={portfolioHero} alt="Brand portfolio" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 vesper-overlay" />
        <div className="relative z-10 section-padding">
          <SectionHeading
            label="Our Portfolio"
            title="37+ Brands From Around the World"
            subtitle="We partner with the finest producers from Argentina to Japan, bringing exceptional beverages to the Baltic market."
            light
          />
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            View Full Portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Distribution Overview */}
      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <img src={distributionHero} alt="Distribution" className="w-full h-[400px] object-cover" />
          </FadeInSection>
          <div>
            <SectionHeading
              label="Distribution & Logistics"
              title="Reliable Infrastructure Across the Baltics"
              subtitle="Our logistics network covers Europe, Baltic States, and third countries — ensuring products reach every destination efficiently and safely."
            />
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Truck, label: "Europe-wide Logistics" },
                { icon: ShieldCheck, label: "Quality Assured" },
                { icon: Wine, label: "Temperature Controlled" },
                { icon: Users, label: "Expert Team" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-body text-foreground font-medium">{item.label}</span>
                </div>
              ))}
            </div>
            <Link
              to="/distribution"
              className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm uppercase tracking-widest hover:gap-3 transition-all mt-8"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Preview */}
      <section className="relative section-spacing overflow-hidden">
        <img src={partnersHero} alt="Partners" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 vesper-overlay" />
        <div className="relative z-10 section-padding text-center">
          <SectionHeading
            label="Our Partners"
            title="Trusted by Leading Retailers & Hospitality Venues"
            subtitle="From premium hotel chains to boutique wine bars, we supply the Baltic region's finest establishments."
            align="center"
            light
          />
          <Link
            to="/partners"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary-foreground/10 transition-colors"
          >
            Explore Partnerships <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-spacing">
        <SectionHeading
          label="Why Vesper"
          title="Our Values"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Diversity", desc: "Our portfolio lists the best brands on the market, ranging from loved and respected names with preserved heritage to modern newcomers. We continually increase the range of offered products across the Baltic States." },
            { title: "Values", desc: "We strive to create mutually fulfilling care for our brands, customers, and employees. Being a highly professional, passionate team, we value relationships founded on mutual trust, transparency, and respect for craftsmanship." },
            { title: "Ambition", desc: "We seek to improve our results, relationships and product range. Our ambition is to become the leading company in the Baltic States, satisfy consumer needs for beverage diversity, and elevate the experience of beverage appreciation." },
          ].map((item, i) => (
            <FadeInSection key={item.title} delay={i * 0.1}>
              <div className="p-8 border border-border hover:border-primary/30 transition-colors group hover-lift">
                <div className="w-12 h-[2px] bg-primary mb-6 group-hover:w-16 transition-all" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-body text-muted-foreground">{item.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* News Preview */}
      <section className="section-padding section-spacing bg-secondary">
        <SectionHeading
          label="Vesper News"
          title="Insights & Updates"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <FadeInSection key={item.title} delay={i * 0.15}>
              <Link to="/news" className="group block hover-lift">
                <div className="overflow-hidden mb-6">
                  <img
                    src={newsPlaceholder}
                    alt={item.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-label text-primary mb-2">{item.category}</p>
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="vesper-gradient section-padding section-spacing text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-label text-primary mb-4">Get in Touch</p>
          <h2 className="text-display-md text-primary-foreground max-w-2xl mx-auto mb-8">
            Ready to Partner with Vesper Group?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/37122100200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary-foreground/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
