import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import newsEvent from "@/assets/news-event.jpg";
import newsPartnership from "@/assets/news-partnership.jpg";
import newsBrands from "@/assets/news-brands.jpg";

const NewsPreview = () => {
  const { t } = useLanguage();

  const newsItems = [
    { slug: "events-vesper-catering", title: t.newsArticles.event.title, date: "September 2025", category: t.newsArticles.event.category, image: newsEvent },
    { slug: "baltic-market-partnerships", title: t.newsArticles.partnerships.title, date: "2025", category: t.newsArticles.partnerships.category, image: newsPartnership },
    { slug: "new-brand-partnerships", title: t.newsArticles.brands.title, date: "2025", category: t.newsArticles.brands.category, image: newsBrands },
  ];

  return (
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
            <Link to={`/news/${item.slug}`} className="group block hover-lift">
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
  );
};

export default NewsPreview;
