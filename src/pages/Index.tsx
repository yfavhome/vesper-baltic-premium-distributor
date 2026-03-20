import SEO from "@/components/shared/SEO";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { brands } from "@/data/brands";
import HeroSection from "@/components/home/HeroSection";
import TrustedBy from "@/components/shared/TrustedBy";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import DistributionPreview from "@/components/home/DistributionPreview";
import PartnersPreview from "@/components/home/PartnersPreview";
import ValuesSection from "@/components/home/ValuesSection";
import NewsPreview from "@/components/home/NewsPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <SEO
        title={t.seo.homeTitle}
        description={t.seo.homeDesc.replace("{{count}}", String(brands.length))}
      />
      <HeroSection />
      <TrustedBy />
      <AboutPreview />
      <ServicesSection />
      <PortfolioPreview />
      <DistributionPreview />
      <PartnersPreview />
      <ValuesSection />
      <NewsPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
