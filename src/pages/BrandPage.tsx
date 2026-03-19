import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { brands } from "@/data/brands";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Wine, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const BrandPage = () => {
  const { brandSlug } = useParams();
  const { t } = useLanguage();
  const brand = brands.find(
    (b) => b.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") === brandSlug
  );

  if (!brand) {
    return (
      <Layout>
        <div className="section-padding pt-40 pb-20 text-center">
          <h1 className="text-display-md text-foreground mb-4">Brand Not Found</h1>
          <Link to="/portfolio" className="text-primary hover:underline">← Back to Portfolio</Link>
        </div>
      </Layout>
    );
  }

  const relatedBrands = brands
    .filter((b) => b.category === brand.category && b.name !== brand.name)
    .slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="vesper-gradient pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-padding">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-primary transition-colors text-sm mb-8"
          >
            <ArrowLeft size={16} /> {t.nav.portfolio}
          </Link>

          <div className="flex flex-col md:flex-row md:items-end gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-24 h-24 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0"
            >
              <span className="font-display text-5xl font-bold text-primary">
                {brand.name[0]}
              </span>
            </motion.div>

            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-display-lg text-primary-foreground"
              >
                {brand.name}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="flex flex-wrap items-center gap-4 mt-4"
              >
                <span className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60">
                  <Wine size={14} className="text-primary" /> {brand.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60">
                  <MapPin size={14} className="text-primary" /> {brand.country}
                </span>
                {brand.est && (
                  <span className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60">
                    <Calendar size={14} className="text-primary" /> Est. {brand.est}
                  </span>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-label text-primary mb-4">About the Brand</h2>
          <p className="text-body-lg text-muted-foreground">{brand.desc}</p>
        </div>
      </section>

      {/* Products */}
      {brand.products && brand.products.length > 0 && (
        <section className="section-padding pb-16 md:pb-24">
          <h2 className="text-label text-primary mb-2">Products</h2>
          <p className="text-sm text-muted-foreground mb-8">
            {brand.products.length} {brand.products.length === 1 ? "product" : "products"} available
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {brand.products.map((product, i) => (
              <motion.div
                key={`${product.name}-${i}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.04, 0.5) }}
                className="p-6 border border-border hover:border-primary/30 transition-all group"
              >
                <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                  <span className="px-2 py-0.5 bg-secondary text-foreground/70">{product.type}</span>
                  {product.volume && <span>{product.volume}</span>}
                  {product.abv && <span className="text-primary/70">{product.abv}</span>}
                </div>
                {product.shopUrl && (
                  <a
                    href={product.shopUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline"
                  >
                    Buy online <ExternalLink size={10} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Related brands */}
      {relatedBrands.length > 0 && (
        <section className="bg-secondary/30 section-padding py-16 md:py-24">
          <h2 className="text-label text-primary mb-2">More in {brand.category}</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Discover other {brand.category.toLowerCase()} brands in our portfolio
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedBrands.map((b) => (
              <Link
                key={b.name}
                to={`/brand/${b.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                className="p-6 border border-border bg-background hover:border-primary/40 transition-all text-center hover-lift"
              >
                <div className="w-12 h-12 rounded-full bg-secondary mx-auto mb-3 flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-primary">{b.name[0]}</span>
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground">{b.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{b.country}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BrandPage;

export function getBrandSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
