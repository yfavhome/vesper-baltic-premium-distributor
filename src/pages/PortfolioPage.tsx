import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import BrandCard from "@/components/shared/BrandCard";
import portfolioHero from "@/assets/portfolio-hero.jpg";
import { brands, productCategories, countries } from "@/data/brands";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = ["All", ...productCategories];
const countryList = ["All Countries", ...countries];

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All");
  const [countryFilter, setCountryFilter] = useState("All Countries");
  
  const [search, setSearch] = useState("");

  const filtered = brands.filter((b) => {
    const catMatch = filter === "All" || b.category === filter;
    const countryMatch = countryFilter === "All Countries" || b.country === countryFilter;
    const searchMatch = !search || b.name.toLowerCase().includes(search.toLowerCase()) || b.desc.toLowerCase().includes(search.toLowerCase());
    return catMatch && countryMatch && searchMatch;
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

        {/* Search */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              placeholder="Search brands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((cat) => {
            const count = cat === "All" ? brands.length : brands.filter(b => b.category === cat).length;
            if (cat !== "All" && count === 0) return null;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat} {cat !== "All" && <span className="opacity-60">({count})</span>}
              </button>
            );
          })}
        </div>

        {/* Country filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {countryList.map((c) => (
            <button
              key={c}
              onClick={() => setCountryFilter(c)}
              className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest transition-all ${
                countryFilter === c
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Results count */}
        {(filter !== "All" || countryFilter !== "All Countries" || search) && (
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "brand" : "brands"} found
            </span>
            <button
              onClick={() => { setFilter("All"); setCountryFilter("All Countries"); setSearch(""); }}
              className="text-xs text-primary hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Brand grid - using extracted BrandCard component (fixes hooks-in-loop bug) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((brand, i) => (
            <BrandCard
              key={brand.name}
              brand={brand}
              index={i}
              onClick={() => setSelected(brand)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No brands match the selected filters.</p>
            <button
              onClick={() => { setFilter("All"); setCountryFilter("All Countries"); setSearch(""); }}
              className="text-primary text-sm mt-2 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Brand detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--vesper-dark))]/80 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-background p-10 max-w-lg w-full relative max-h-[80vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
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
                  <p className="text-label text-primary mb-3">Products ({selected.products.length})</p>
                  <div className="space-y-2">
                    {selected.products.map((p, i) => (
                      <div key={`${p.name}-${i}`} className="text-sm text-muted-foreground flex justify-between items-center py-1.5 border-b border-border/50 last:border-0">
                        <span className="flex-1">{p.name}</span>
                        <div className="flex items-center gap-3 text-xs shrink-0 ml-3">
                          {p.volume && <span>{p.volume}</span>}
                          {p.abv && <span className="text-primary/70">{p.abv}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default PortfolioPage;
