import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import newsEvent from "@/assets/news-event.jpg";
import newsPartnership from "@/assets/news-partnership.jpg";
import newsBrands from "@/assets/news-brands.jpg";
import newsSake from "@/assets/news-sake.jpg";
import newsRum from "@/assets/news-rum.jpg";
import newsShop from "@/assets/news-shop.jpg";
import { motion } from "framer-motion";

const articles = [
  { title: "Events with Vesper Catering", date: "September 4, 2025", category: "Events", excerpt: "Vesper Group strengthens partnerships in the Baltic market. Our team took part in a business networking event bringing together leading companies and professionals from Latvia and beyond.", image: newsEvent },
  { title: "Vesper Group Strengthens Baltic Market Partnerships", date: "2025", category: "Company News", excerpt: "This week, our team participated in a networking event bringing together leading companies and professionals from Latvia and beyond, discussing market trends and new opportunities.", image: newsPartnership },
  { title: "New Premium Brand Partnerships Announced", date: "2025", category: "Partnerships", excerpt: "Vesper Group continues to expand its portfolio with new exclusive brand partnerships, bringing world-class beverages to Baltic consumers.", image: newsBrands },
  { title: "Dassai Sake Now Available in the Baltics", date: "2025", category: "Product Launch", excerpt: "We are proud to introduce Dassai, one of Japan's most renowned sake brands, to the Baltic market through our distribution network.", image: newsPlaceholder },
  { title: "Black Tears Dry Spiced Rum Arrives", date: "2025", category: "Product Launch", excerpt: "Cuban-crafted Black Tears Dry Spiced Rum is now available through Vesper Group's Baltic distribution channels.", image: newsPlaceholder },
  { title: "Vesper Online Shop alko.lv Expands Range", date: "2025", category: "Company News", excerpt: "Our e-commerce platform alko.lv continues to grow with an expanded selection of premium beverages available for convenient online ordering.", image: newsPlaceholder },
];

const NewsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="vesper-gradient pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-padding">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-label text-primary mb-4">
            News & Insights
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-display-lg text-primary-foreground max-w-3xl">
            Latest from Vesper Group
          </motion.h1>
        </div>
      </section>

      {/* Featured */}
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

        {/* Grid */}
        <SectionHeading label="All Articles" title="Stay Informed" />
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
