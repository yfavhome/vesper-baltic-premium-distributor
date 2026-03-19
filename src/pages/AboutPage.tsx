import Layout from "@/components/layout/Layout";
import { brands, productCategories } from "@/data/brands";
import SEO from "@/components/shared/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import FadeIn from "@/components/shared/FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import aboutHero from "@/assets/about-hero.jpg";
import { Target, Eye, TrendingUp, Globe, Award, Users } from "lucide-react";

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEO title="About Vesper Group" description={`Learn about Vesper Group — a premium beverage distributor in the Baltics with ${brands.length}+ brands and a commitment to quality.`} />
      <PageHero label={t.about.label} title={t.about.title} subtitle={t.about.subtitle} image={aboutHero} size="tall" />

      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading label={t.about.storyLabel} title={t.about.storyTitle} />
            <div className="space-y-6 text-body text-muted-foreground">
              <p>{t.about.storyP1}</p>
              <p>{t.about.storyP2}</p>
              <p>{t.about.storyP3}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 content-center">
            <AnimatedCounter end={brands.length} suffix="+" label={t.about.brands} />
            <AnimatedCounter end={productCategories.length} label={t.about.productCategories} />
            <AnimatedCounter end={3} label={t.about.balticMarkets} />
            <AnimatedCounter end={6} label={t.about.coreServices} />
          </div>
        </div>
      </section>

      <section className="section-padding section-spacing bg-secondary/50">
        <SectionHeading label={t.about.valuesLabel} title={t.about.valuesTitle} align="center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: t.about.diversityTitle, desc: t.about.diversityDesc },
            { icon: Eye, title: t.about.valuesValueTitle, desc: t.about.valuesValueDesc },
            { icon: TrendingUp, title: t.about.ambitionTitle, desc: t.about.ambitionDesc },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12}>
              <div className="p-10 bg-background border border-border hover:border-primary/20 transition-all h-full">
                <item.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-body text-muted-foreground">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-padding section-spacing">
        <SectionHeading label={t.about.strengthsLabel} title={t.about.strengthsTitle} align="center" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Globe, title: t.about.balticCoverage, desc: t.about.balticCoverageDesc },
            { icon: Award, title: t.about.premiumPortfolio, desc: t.about.premiumPortfolioDesc },
            { icon: Users, title: t.about.partnershipFocus, desc: t.about.partnershipFocusDesc },
            { icon: TrendingUp, title: t.about.fullLogistics, desc: t.about.fullLogisticsDesc },
            { icon: Target, title: t.about.onlineOffline, desc: t.about.onlineOfflineDesc },
            { icon: Eye, title: t.about.brandDist, desc: t.about.brandDistDesc },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="p-8 border border-border hover:border-primary/30 transition-all group hover-lift h-full">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/5 mb-5 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-body text-muted-foreground">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
