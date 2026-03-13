import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Wine, Truck, Headphones, Handshake, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  );
};

const advantages = [
  { icon: Wine, title: "Premium Product Portfolio", desc: "Access to over 85 world-class brands and 2,500+ products, carefully curated for the Baltic market. From prestigious wines to artisanal spirits, our portfolio meets every need." },
  { icon: Truck, title: "Reliable Distribution Network", desc: "State-of-the-art logistics infrastructure spanning all three Baltic states, with temperature-controlled warehousing and next-day delivery to major cities." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous quality control at every stage, from import to delivery. Our climate-controlled facilities and trained handlers ensure products arrive in perfect condition." },
  { icon: Headphones, title: "Professional Service", desc: "Dedicated account managers, responsive customer support, and proactive communication ensure a seamless partnership experience." },
  { icon: Handshake, title: "Long-term Partnerships", desc: "We build relationships, not transactions. Our partners enjoy dedicated support, market insights, and collaborative growth strategies." },
  { icon: TrendingUp, title: "Market Growth Expertise", desc: "Data-driven market analysis, brand-building support, and strategic positioning to maximize your brand's potential in the Baltic region." },
];

const WhyVesperPage = () => {
  return (
    <Layout>
      {/* Hero section without image */}
      <section className="vesper-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="section-padding">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-label text-primary mb-4"
          >
            Why Choose Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-display-lg text-primary-foreground max-w-3xl"
          >
            The Vesper Advantage
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-body-lg text-primary-foreground/70 mt-6 max-w-2xl"
          >
            Discover why leading brands and retailers choose Vesper Group as their distribution partner in the Baltics.
          </motion.p>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((adv, i) => (
            <FadeIn key={adv.title} delay={i * 0.1}>
              <div className="p-10 border border-border hover:border-primary/30 transition-all group hover-lift">
                <adv.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{adv.title}</h3>
                <p className="text-body text-muted-foreground leading-relaxed">{adv.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary section-padding section-spacing text-center">
        <SectionHeading label="Partner With Us" title="Experience the Vesper Difference" align="center" subtitle="Join the growing network of brands and retailers who trust Vesper Group for premium distribution in the Baltics." />
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors">
          Get Started <ArrowRight size={16} />
        </Link>
      </section>
    </Layout>
  );
};

export default WhyVesperPage;
