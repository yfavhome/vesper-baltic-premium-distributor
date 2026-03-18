import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import { motion } from "framer-motion";
import { ShieldCheck, Wine, Truck, Headphones, Handshake, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const advantages = [
  { icon: Wine, title: "Premium Product Portfolio", desc: "Access to over 37 world-class brands and hundreds of products, carefully curated for the Baltic market. From prestigious wines to artisanal spirits." },
  { icon: Truck, title: "Reliable Distribution Network", desc: "Logistics infrastructure spanning all three Baltic states, with temperature-controlled warehousing and professional handling." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous quality control at every stage, from import to delivery. Our climate-controlled facilities ensure products arrive in perfect condition." },
  { icon: Headphones, title: "Professional Service", desc: "Dedicated account managers, responsive customer support, and proactive communication ensure a seamless partnership experience." },
  { icon: Handshake, title: "Long-term Partnerships", desc: "We build relationships, not transactions. Our partners enjoy dedicated support, market insights, and collaborative growth strategies." },
  { icon: TrendingUp, title: "Market Growth Expertise", desc: "Data-driven market analysis, brand-building support, and strategic positioning to maximize your brand's potential in the Baltic region." },
];

const WhyVesperPage = () => {
  return (
    <Layout>
      {/* Hero section */}
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

      {/* CTA */}
      <section className="bg-secondary/50 section-padding section-spacing text-center">
        <SectionHeading label="Partner With Us" title="Experience the Vesper Difference" align="center" subtitle="Join the growing network of brands and retailers who trust Vesper Group for premium distribution in the Baltics." />
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover:gap-3">
          Get Started <ArrowRight size={16} />
        </Link>
      </section>
    </Layout>
  );
};

export default WhyVesperPage;
