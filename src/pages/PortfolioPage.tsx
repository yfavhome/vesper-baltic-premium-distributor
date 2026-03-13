import { useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import portfolioHero from "@/assets/portfolio-hero.jpg";
import { brands, productCategories, countries } from "@/data/brands";
import { motion, useInView } from "framer-motion";
import { X } from "lucide-react";

const categories = ["All", ...productCategories];
const countryList = ["All Countries", ...countries];

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All");
  const [countryFilter, setCountryFilter] = useState("All Countries");
  const [selected, setSelected] = useState<typeof brands[0] | null>(null);

  const filtered = brands.filter((b) => {
    const catMatch = filter === "All" || b.category === filter;
    const countryMatch = countryFilter === "All Countries" || b.country === countryFilter;
    return catMatch && countryMatch;
  });

  return (
    <Layout>
      <PageHero
        label="Brand Portfolio"
        title="World-Class Brands, One Trusted Partner"
        subtitle="Discover the premium brands we distribute across the Baltic region."
        image={portfolioHero}
      />

      <section className="section-padding section-spacing">
        <SectionHeading label="Our Brands" title={`${brands.length} Brands From Around the World`} align="center" />

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {countryList.map((c) => (
            <button
              key={c}
              onClick={() => setCountryFilter(c)}
              className={`px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest transition-all ${
                countryFilter === c
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((brand, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-50px" });
            return (
              <motion.div
                ref={ref}
                key={brand.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.03 }}
                onClick={() => setSelected(brand)}
                className="group cursor-pointer p-8 border border-border hover:border-primary/40 transition-all hover-lift text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-primary">{brand.name[0]}</span>
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{brand.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{brand.country}{brand.est ? ` · Est. ${brand.est}` : ""}</p>
                <p className="text-[10px] text-primary/80 mt-1 uppercase tracking-widest">{brand.category}</p>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No brands match the selected filters.</p>
        )}
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--vesper-dark))]/80 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background p-10 max-w-md mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>
            <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center">
              <span className="font-display text-3xl font-bold text-primary">{selected.name[0]}</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground text-center mb-2">{selected.name}</h3>
            <p className="text-label text-primary text-center mb-1">{selected.category} · {selected.country}</p>
            {selected.est && <p className="text-xs text-muted-foreground text-center mb-4">Established {selected.est}</p>}
            <p className="text-body text-muted-foreground text-center mt-4">{selected.desc}</p>
            {selected.products && selected.products.length > 0 && (
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-label text-primary mb-3">Products</p>
                <div className="space-y-2">
                  {selected.products.map(p => (
                    <div key={p.name} className="text-sm text-muted-foreground flex justify-between">
                      <span>{p.name}</span>
                      <span className="text-xs">{p.volume}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </Layout>
  );
};

export default PortfolioPage;
