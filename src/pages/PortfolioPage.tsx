import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import portfolioHero from "@/assets/portfolio-hero.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X } from "lucide-react";

const brands = [
  { name: "Château Margaux", category: "Wine", country: "France", desc: "Premier Grand Cru Classé from Bordeaux." },
  { name: "Dom Pérignon", category: "Champagne", country: "France", desc: "The iconic prestige cuvée." },
  { name: "Macallan", category: "Whisky", country: "Scotland", desc: "Single malt Scotch of exceptional quality." },
  { name: "Grey Goose", category: "Vodka", country: "France", desc: "Ultra-premium French vodka." },
  { name: "Hendrick's", category: "Gin", country: "Scotland", desc: "Distinctively infused with cucumber and rose." },
  { name: "Diplomatico", category: "Rum", country: "Venezuela", desc: "Award-winning Venezuelan rum." },
  { name: "Patrón", category: "Tequila", country: "Mexico", desc: "Handcrafted premium tequila." },
  { name: "Cointreau", category: "Liqueur", country: "France", desc: "The original triple sec liqueur." },
  { name: "Fever-Tree", category: "Mixers", country: "UK", desc: "Premium natural mixers." },
  { name: "Cloudy Bay", category: "Wine", country: "New Zealand", desc: "Iconic Marlborough Sauvignon Blanc." },
  { name: "Veuve Clicquot", category: "Champagne", country: "France", desc: "Bold, rich champagne since 1772." },
  { name: "Glenmorangie", category: "Whisky", country: "Scotland", desc: "Highland single malt whisky." },
  { name: "Belvedere", category: "Vodka", country: "Poland", desc: "Polish luxury vodka." },
  { name: "Tanqueray", category: "Gin", country: "England", desc: "London dry gin since 1830." },
  { name: "Zacapa", category: "Rum", country: "Guatemala", desc: "Ultra-premium Guatemalan rum." },
  { name: "Opus One", category: "Wine", country: "USA", desc: "Napa Valley's iconic Bordeaux blend." },
];

const categories = ["All", "Wine", "Champagne", "Whisky", "Vodka", "Gin", "Rum", "Tequila", "Liqueur", "Mixers"];

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof brands[0] | null>(null);

  const filtered = filter === "All" ? brands : brands.filter((b) => b.category === filter);

  return (
    <Layout>
      <PageHero
        label="Brand Portfolio"
        title="World-Class Brands, One Trusted Partner"
        subtitle="Discover the premium brands we distribute across the Baltic region."
        image={portfolioHero}
      />

      <section className="section-padding section-spacing">
        <SectionHeading label="Our Brands" title="A Portfolio of Distinction" align="center" />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
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

        {/* Grid */}
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
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelected(brand)}
                className="group cursor-pointer p-8 border border-border hover:border-primary/40 transition-all hover-lift text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-primary">{brand.name[0]}</span>
                </div>
                <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{brand.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{brand.category} · {brand.country}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-vesper-dark/80 backdrop-blur-sm" onClick={() => setSelected(null)}>
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
            <p className="text-label text-primary text-center mb-4">{selected.category} · {selected.country}</p>
            <p className="text-body text-muted-foreground text-center">{selected.desc}</p>
          </motion.div>
        </div>
      )}
    </Layout>
  );
};

export default PortfolioPage;
