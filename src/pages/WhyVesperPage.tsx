import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { ShieldCheck, Wine, Truck, Headphones, Handshake, TrendingUp, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.06}>
      <div className="border border-border hover:border-primary/20 transition-colors">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-6 text-left"
        >
          <span className="font-display text-lg font-semibold text-foreground pr-4">{question}</span>
          <ChevronDown
            size={20}
            className={`shrink-0 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="px-6 pb-6 text-body text-muted-foreground">{answer}</p>
        </motion.div>
      </div>
    </FadeIn>
  );
};

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

  const faqItems = (t as any).faq?.items || [
    { q: "What regions do you distribute to?", a: "We distribute across all three Baltic states — Latvia, Lithuania, and Estonia." },
    { q: "What is the minimum order quantity?", a: "Minimum order quantities vary by product and channel." },
    { q: "How can I become a distribution partner?", a: "Contact us through our website or email info@vesper.group." },
    { q: "Do you offer tastings and brand presentations?", a: "Yes! We regularly organize tastings and educational sessions." },
    { q: "What types of businesses do you work with?", a: "We work with retail chains, restaurants, bars, hotels, and e-commerce platforms." },
    { q: "How do you ensure product quality during transport?", a: "All our logistics use temperature-controlled warehousing and transportation." },
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

      {/* FAQ Section */}
      <section className="bg-secondary/30 section-padding section-spacing">
        <SectionHeading
          label={t.faq?.label || "FAQ"}
          title={t.faq?.title || "Frequently Asked Questions"}
          align="center"
          subtitle={t.faq?.subtitle || "Find answers to common questions about working with Vesper Group."}
        />
        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item: { q: string; a: string }, i: number) => (
            <FAQItem key={i} question={item.q} answer={item.a} index={i} />
          ))}
        </div>
      </section>

      <section className="section-padding section-spacing text-center">
        <SectionHeading label={t.whyVesper.ctaLabel} title={t.whyVesper.ctaTitle} align="center" subtitle={t.whyVesper.ctaSub} />
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover:gap-3">
          {t.whyVesper.getStarted} <ArrowRight size={16} />
        </Link>
      </section>
    </Layout>
  );
};

export default WhyVesperPage;
