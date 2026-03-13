import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import newsPlaceholder from "@/assets/news-placeholder.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  );
};

const articles = [
  { title: "Vesper Group Expands Distribution Network to Estonia", date: "March 10, 2026", category: "Company News", excerpt: "Building on our strong presence in Latvia and Lithuania, Vesper Group is pleased to announce the expansion of our distribution operations into Estonia." },
  { title: "New Partnership with Château Margaux", date: "February 22, 2026", category: "Partnerships", excerpt: "We are honored to announce our exclusive distribution partnership with Château Margaux, one of Bordeaux's most prestigious estates." },
  { title: "Baltic Spirits Market: Trends & Outlook for 2026", date: "January 15, 2026", category: "Industry Insights", excerpt: "An in-depth analysis of the premium spirits market across the Baltic states, highlighting key trends and growth opportunities." },
  { title: "Vesper Group Named Baltic Distributor of the Year", date: "December 5, 2025", category: "Awards", excerpt: "Vesper Group has been recognized as the Baltic Distributor of the Year at the European Beverage Distribution Awards." },
  { title: "Sustainability in Beverage Distribution", date: "November 18, 2025", category: "Industry Insights", excerpt: "How Vesper Group is reducing its environmental footprint through sustainable logistics and packaging initiatives." },
  { title: "Premium Vodka Category Shows Strong Baltic Growth", date: "October 30, 2025", category: "Market Updates", excerpt: "The premium vodka segment continues to show robust growth across Baltic markets, driven by consumer preferences for quality spirits." },
];

const NewsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-padding">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-label text-primary mb-4">
            News & Insights
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-display-lg text-foreground max-w-3xl">
            Latest from Vesper Group
          </motion.h1>
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding section-spacing">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="overflow-hidden">
              <img src={newsPlaceholder} alt="Featured" className="w-full h-full object-cover min-h-[300px]" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-label text-primary mb-3">{articles[0].category}</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">{articles[0].title}</h2>
              <p className="text-body text-muted-foreground mb-4">{articles[0].excerpt}</p>
              <p className="text-sm text-muted-foreground">{articles[0].date}</p>
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        <SectionHeading label="All Articles" title="Stay Informed" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, i) => (
            <FadeIn key={article.title} delay={i * 0.1}>
              <div className="group cursor-pointer hover-lift">
                <div className="overflow-hidden mb-6">
                  <img src={newsPlaceholder} alt={article.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700" />
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
