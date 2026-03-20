import { Link } from "react-router-dom";
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
import { ArrowRight } from "lucide-react";

type ArticleKey = "event" | "partnerships" | "brands" | "sake" | "rum" | "shop";

const articlesData: { key: ArticleKey; slug: string; date: string; image: string }[] = [
  { key: "event", slug: "events-vesper-catering", date: "September 4, 2025", image: newsEvent },
  { key: "partnerships", slug: "baltic-market-partnerships", date: "2025", image: newsPartnership },
  { key: "brands", slug: "new-brand-partnerships", date: "2025", image: newsBrands },
  { key: "sake", slug: "dassai-sake-baltics", date: "2025", image: newsSake },
  { key: "rum", slug: "black-tears-rum", date: "2025", image: newsRum },
  { key: "shop", slug: "alko-lv-expands", date: "2025", image: newsShop },
];

const NewsPage = () => {
  const { t } = useLanguage();

  const articles = articlesData.map((d) => ({
    ...d,
    ...t.newsArticles[d.key],
  }));

  return (
    <Layout>
      <SEO title={t.seo.newsTitle} description={t.seo.newsDesc} />
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
          <Link to={`/news/${articles[0].slug}`} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 group">
            <div className="overflow-hidden">
              <img src={articles[0].image} alt={articles[0].title} className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-label text-primary mb-3">{articles[0].category}</p>
              <h2 className="font-display text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">{articles[0].title}</h2>
              <p className="text-body text-muted-foreground mb-4">{articles[0].excerpt}</p>
              <p className="text-sm text-muted-foreground mb-4">{articles[0].date}</p>
              <span className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm uppercase tracking-widest group-hover:gap-3 transition-all">
                {t.news.readMore} <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </FadeIn>

        <SectionHeading label={t.news.allArticles} title={t.news.stayInformed} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, i) => (
            <FadeIn key={article.slug} delay={i * 0.08}>
              <Link to={`/news/${article.slug}`} className="group block hover-lift">
                <div className="overflow-hidden mb-6">
                  <img src={article.image} alt={article.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="text-label text-primary mb-2">{article.category}</p>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{article.excerpt}</p>
                <p className="text-xs text-muted-foreground">{article.date}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
