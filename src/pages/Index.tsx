import { Link } from "react-router-dom";
import SEO from "@/components/shared/SEO";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Wine, Users, ShieldCheck, ShoppingCart, Package, Globe, Store } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import FadeIn from "@/components/shared/FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";
import portfolioHero from "@/assets/portfolio-hero.jpg";
import distributionHero from "@/assets/distribution-hero.jpg";
import partnersHero from "@/assets/partners-hero.jpg";
import newsEvent from "@/assets/news-event.jpg";
import newsPartnership from "@/assets/news-partnership.jpg";
import newsBrands from "@/assets/news-brands.jpg";

const Index = () => {
  const { t } = useLanguage();

  const services = [
    { icon: ShoppingCart, name: t.home.wholesaleTrade, desc: t.home.wholesaleDesc },
    { icon: Store, name: t.home.retailTrade, desc: t.home.retailDesc },
    { icon: Truck, name: t.home.logisticsServices, desc: t.home.logisticsDesc },
    { icon: Package, name: t.home.brandDistribution, desc: t.home.brandDistDesc },
    { icon: Globe, name: t.home.onlinePlatform, desc: t.home.onlineDesc },
    { icon: Wine, name: t.home.showroom, desc: t.home.showroomDesc },
  ];

  const newsItems = [
    { title: t.newsArticles.event.title, date: "September 2025", category: t.newsArticles.event.category, image: newsEvent },
    { title: t.newsArticles.partnerships.title, date: "2025", category: t.newsArticles.partnerships.category, image: newsPartnership },
    { title: t.newsArticles.brands.title, date: "2025", category: t.newsArticles.brands.category, image: newsBrands },
  ];

  return (
    <Layout>
      <SEO title="Vesper Group — Premium Beverage Distribution in the Baltics" description="Vesper Group is the leading premium beverage distributor in the Baltic region. 37+ brands, 600+ products from world-class producers." />
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
            <p className="text-label text-primary mb-6">{t.home.heroLabel}</p>
            <h1 className="text-display-xl text-primary-foreground max-w-4xl">
              {t.home.heroTitle}
            </h1>
            <p className="text-body-lg text-primary-foreground/70 mt-8 max-w-2xl">
              {t.home.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover:gap-3"
              >
                {t.home.explorePortfolio} <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary-foreground/10 transition-colors"
              >
                {t.home.becomePartner}
              </Link>
              <a
                href="https://www.alko.lv/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary-foreground/10 transition-all hover:gap-3"
              >
                {t.home.shopOnline} <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-primary-foreground/40 font-body">{t.home.scroll}</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-primary-foreground/40 to-transparent" />
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              label={t.home.aboutLabel}
              title={t.home.aboutTitle}
              subtitle={t.home.aboutSubtitle}
            />
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm uppercase tracking-widest hover:gap-3 transition-all group"
            >
              {t.home.learnMore} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <AnimatedCounter end={37} suffix="+" label={t.home.brands} />
            <AnimatedCounter end={16} label={t.home.productCategories} />
            <AnimatedCounter end={3} label={t.home.balticMarkets} />
            <AnimatedCounter end={6} label={t.home.services} />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section-padding section-spacing bg-secondary/50">
        <SectionHeading label={t.home.servicesLabel} title={t.home.servicesTitle} align="center" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.name} delay={i * 0.08}>
              <div className="group flex flex-col items-center gap-5 p-10 bg-background border border-border hover:border-primary/30 hover-lift text-center transition-all">
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

      {/* Portfolio Preview */}
      <section className="relative section-spacing overflow-hidden">
        <img src={portfolioHero} alt="Brand portfolio" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 vesper-overlay" />
        <div className="relative z-10 section-padding">
          <SectionHeading
            label={t.home.portfolioLabel}
            title={t.home.portfolioTitle}
            subtitle={t.home.portfolioSubtitle}
            light
          />
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover:gap-3"
          >
            {t.home.viewFullPortfolio} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Distribution Overview */}
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

      {/* Partners Preview */}
      <section className="relative section-spacing overflow-hidden">
        <img src={partnersHero} alt="Partners" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 vesper-overlay" />
        <div className="relative z-10 section-padding text-center">
          <SectionHeading
            label={t.home.partnersLabel}
            title={t.home.partnersTitle}
            subtitle={t.home.partnersSubtitle}
            align="center"
            light
          />
          <Link
            to="/partners"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary-foreground/10 transition-all hover:gap-3"
          >
            {t.home.explorePartnerships} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-spacing">
        <SectionHeading label={t.home.whyVesperLabel} title={t.home.ourValues} align="center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: t.home.diversityTitle, desc: t.home.diversityDesc },
            { title: t.home.valuesTitle, desc: t.home.valuesDesc },
            { title: t.home.ambitionTitle, desc: t.home.ambitionDesc },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="p-8 lg:p-10 border border-border hover:border-primary/30 transition-all group hover-lift h-full">
                <div className="w-12 h-[2px] bg-primary mb-6 group-hover:w-20 transition-all duration-500" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-body text-muted-foreground">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* News Preview */}
      <section className="section-padding section-spacing bg-secondary/50">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <SectionHeading label={t.home.newsLabel} title={t.home.newsTitle} />
          <Link
            to="/news"
            className="hidden md:inline-flex items-center gap-2 text-primary font-body font-semibold text-sm uppercase tracking-widest hover:gap-3 transition-all group mb-12 md:mb-16"
          >
            {t.home.allNews} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12}>
              <Link to="/news" className="group block hover-lift">
                <div className="overflow-hidden mb-6">
                  <img
                    src={item.image}
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
            </FadeIn>
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
          <p className="text-label text-primary mb-4">{t.home.ctaLabel}</p>
          <h2 className="text-display-md text-primary-foreground max-w-2xl mx-auto mb-8">
            {t.home.ctaTitle}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover:gap-3"
            >
              {t.home.contactUs} <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/37122100200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary-foreground/10 transition-colors"
            >
              {t.home.whatsappUs}
            </a>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
