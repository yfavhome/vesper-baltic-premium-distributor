import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import FadeIn from "@/components/shared/FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import newsEvent from "@/assets/news-event.jpg";
import newsPartnership from "@/assets/news-partnership.jpg";
import newsBrands from "@/assets/news-brands.jpg";
import newsSake from "@/assets/news-sake.jpg";
import newsRum from "@/assets/news-rum.jpg";
import newsShop from "@/assets/news-shop.jpg";

type ArticleKey = "event" | "partnerships" | "brands" | "sake" | "rum" | "shop";

interface ArticleData {
  key: ArticleKey;
  slug: string;
  date: string;
  image: string;
}

const articlesData: ArticleData[] = [
  { key: "event", slug: "events-vesper-catering", date: "September 4, 2025", image: newsEvent },
  { key: "partnerships", slug: "baltic-market-partnerships", date: "2025", image: newsPartnership },
  { key: "brands", slug: "new-brand-partnerships", date: "2025", image: newsBrands },
  { key: "sake", slug: "dassai-sake-baltics", date: "2025", image: newsSake },
  { key: "rum", slug: "black-tears-rum", date: "2025", image: newsRum },
  { key: "shop", slug: "alko-lv-expands", date: "2025", image: newsShop },
];

const NewsArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const articleIndex = articlesData.findIndex((a) => a.slug === slug);
  const articleData = articlesData[articleIndex];

  if (!articleData) {
    return (
      <Layout>
        <SEO title="Article Not Found" description="" />
        <div className="flex min-h-[60vh] items-center justify-center section-padding">
          <div className="text-center">
            <h1 className="text-display-md text-foreground mb-4">{t.news.articleNotFound}</h1>
            <Link to="/news" className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm uppercase tracking-widest hover:gap-3 transition-all">
              <ArrowLeft size={16} /> {t.news.backToNews}
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const article = t.newsArticles[articleData.key];
  const prevArticle = articleIndex > 0 ? articlesData[articleIndex - 1] : null;
  const nextArticle = articleIndex < articlesData.length - 1 ? articlesData[articleIndex + 1] : null;

  // Get related articles (excluding current)
  const relatedArticles = articlesData
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <Layout>
      <SEO title={article.title} description={article.excerpt} />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
        <img src={articleData.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 vesper-overlay" />
        <div className="relative z-10 section-padding pb-12 md:pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Link to="/news" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground font-body text-xs uppercase tracking-widest mb-4 transition-colors">
              <ArrowLeft size={14} /> {t.news.backToNews}
            </Link>
            <p className="text-label text-primary mb-3">{article.category}</p>
            <h1 className="text-display-lg text-primary-foreground max-w-3xl" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
              {article.title}
            </h1>
            <p className="text-sm text-primary-foreground/50 mt-4 font-body">{articleData.date}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding section-spacing">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed">
              {article.excerpt}
            </p>
            <div className="border-t border-border pt-8 mt-8">
              <p className="text-body text-muted-foreground">
                {t.news.moreContentSoon}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="section-padding pb-12">
        <div className="flex justify-between items-center border-t border-border pt-8">
          {prevArticle ? (
            <Link
              to={`/news/${prevArticle.slug}`}
              className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-1">{t.news.prevArticle}</p>
                <p className="text-sm font-display font-semibold">{t.newsArticles[prevArticle.key].title}</p>
              </div>
            </Link>
          ) : <div />}
          {nextArticle ? (
            <Link
              to={`/news/${nextArticle.slug}`}
              className="group flex items-center gap-3 text-right text-muted-foreground hover:text-primary transition-colors"
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-1">{t.news.nextArticle}</p>
                <p className="text-sm font-display font-semibold">{t.newsArticles[nextArticle.key].title}</p>
              </div>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding section-spacing bg-secondary/50">
        <h2 className="text-label text-primary mb-3">{t.news.relatedArticles}</h2>
        <h3 className="font-display text-2xl font-bold text-foreground mb-8">{t.news.moreFromVesper}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedArticles.map((related, i) => {
            const relatedArticle = t.newsArticles[related.key];
            return (
              <FadeIn key={related.slug} delay={i * 0.08}>
                <Link to={`/news/${related.slug}`} className="group block hover-lift">
                  <div className="overflow-hidden mb-4">
                    <img src={related.image} alt={relatedArticle.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <p className="text-label text-primary mb-2">{relatedArticle.category}</p>
                  <h4 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {relatedArticle.title}
                  </h4>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default NewsArticlePage;
