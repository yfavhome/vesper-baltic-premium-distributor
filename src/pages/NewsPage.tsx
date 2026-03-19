import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import newsEvent from "@/assets/news-event.jpg";
import newsPartnership from "@/assets/news-partnership.jpg";
import newsBrands from "@/assets/news-brands.jpg";
import newsSake from "@/assets/news-sake.jpg";
import newsRum from "@/assets/news-rum.jpg";
import newsShop from "@/assets/news-shop.jpg";
import { motion } from "framer-motion";

const NewsPage = () => {
  const { t } = useLanguage();

  const articles = [
    { ...t.newsArticles.event, date: "September 4, 2025", image: newsEvent },
    { ...t.newsArticles.partnerships, date: "2025", image: newsPartnership },
    { ...t.newsArticles.brands, date: "2025", image: newsBrands },
    { ...t.newsArticles.sake, date: "2025", image: newsSake },
    { ...t.newsArticles.rum, date: "2025", image: newsRum },
    { ...t.newsArticles.shop, date: "2025", image: newsShop },
  ];

  return (
    <Layout>
      <SEO title="News & Insights" description="Stay up to date with the latest news, events, and product launches from Vesper Group — the Baltics' premium beverage distributor." />
      <section className="vesper-gradient pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-padding">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-label text-primary mb-4">
            {t.news.label}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-display-lg text-primary-foreground max-w-3xl">
            {t.news.title}
          </motion.h1>
        </div>
      </section>

      <section className="section-padding section-spacing">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="overflow-hidden">
              <img src={articles[0].image} alt={articles[0].title} className="w-full h-full object-cover min-h-[300px] hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-label text-primary mb-3">{articles[0].category}</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">{articles[0].title}</h2>
              <p className="text-body text-muted-foreground mb-4">{articles[0].excerpt}</p>
              <p className="text-sm text-muted-foreground">{articles[0].date}</p>
            </div>
          </div>
        </FadeIn>

        <SectionHeading label={t.news.allArticles} title={t.news.stayInformed} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, i) => (
            <FadeIn key={article.title} delay={i * 0.08}>
              <div className="group cursor-pointer hover-lift">
                <div className="overflow-hidden mb-6">
                  <img src={article.image} alt={article.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="text-label text-primary mb-2">{article.category}</p>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{article.excerpt}</p>
                <p className="text-xs text-muted-foreground">{article.date}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
