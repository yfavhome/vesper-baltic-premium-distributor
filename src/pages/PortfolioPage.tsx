import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import portfolioHero from "@/assets/portfolio-hero.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X } from "lucide-react";

const brands = [
  { name: "De Bernard", category: "Prosecco", country: "Italy", est: "1948", desc: "Italian sparkling wine producer known for premium Prosecco." },
  { name: "Tenuta Angoris", category: "White Wine", country: "Italy", est: "1648", desc: "Historic Italian winery with centuries of winemaking tradition." },
  { name: "Rotari", category: "Sparkling Wine", country: "Italy", est: "1977", desc: "Italian Trento DOC sparkling wine producer." },
  { name: "Forte Alto", category: "Sparkling Wine", country: "Italy", est: "1999", desc: "Modern Italian sparkling wines from Trentino." },
  { name: "Duval-Leroy", category: "Champagne", country: "France", est: "1859", desc: "Prestigious French Champagne house with organic vineyards." },
  { name: "Sutto", category: "Prosecco", country: "Italy", est: "1933", desc: "Family-run Prosecco and wine estate from Veneto." },
  { name: "Piccini 1882", category: "Red Wine", country: "Italy", est: "1882", desc: "Tuscan wine house known for Chianti and premium reds." },
  { name: "Togni", category: "Red Wine", country: "Italy", est: "1954", desc: "Italian winery crafting distinctive wines since 1954." },
  { name: "Black Tears", category: "Rum", country: "Cuba", est: "", desc: "Dry Spiced Rum — a unique Cuban rum with distinctive character." },
  { name: "Dad Joke", category: "Rum", country: "USA", est: "", desc: "Spiced rum and prosecco brand with a playful personality." },
  { name: "Laurent Lequart", category: "Champagne", country: "France", est: "", desc: "Cœur de Cuvée Extra Brut — artisan grower Champagne." },
  { name: "Dassai", category: "Sake", country: "Japan", est: "", desc: "World-renowned premium Japanese sake." },
  // Additional brands to represent the full 37+ portfolio
  { name: "Aivazovsky", category: "Brandy", country: "Armenia", est: "", desc: "Premium Armenian brandy with rich heritage." },
  { name: "Château Tirecul La Gravière", category: "White Wine", country: "France", est: "", desc: "Prestigious Monbazillac sweet wines from Bergerac." },
  { name: "Viña Errazuriz", category: "Red Wine", country: "Chile", est: "1870", desc: "One of Chile's most historic wine producers." },
  { name: "Catena Zapata", category: "Red Wine", country: "Argentina", est: "1902", desc: "Argentina's pioneer of high-altitude Malbec wines." },
  { name: "Spier", category: "Red Wine", country: "South Africa", est: "1692", desc: "Historic South African wine estate." },
  { name: "Villa Maria", category: "White Wine", country: "New Zealand", est: "1961", desc: "New Zealand's most awarded winery." },
  { name: "Schloss Gobelsburg", category: "White Wine", country: "Austria", est: "1171", desc: "Historic Austrian wine estate known for Grüner Veltliner and Riesling." },
  { name: "Weingut Dr. Loosen", category: "White Wine", country: "Germany", est: "1150", desc: "World-class German Riesling producer from the Mosel." },
  { name: "Plantation", category: "Rum", country: "Jamaica", est: "", desc: "Multi-origin Caribbean rum blending house." },
  { name: "Rhum Clément", category: "Rum", country: "Martinique", est: "1887", desc: "Premium AOC Martinique rhum agricole." },
  { name: "Spirits of Old Man", category: "Rum", country: "Germany", est: "", desc: "Crafted blended rums from around the world." },
  { name: "Gin Mare", category: "Gin", country: "Spain", est: "", desc: "Mediterranean-inspired premium Spanish gin." },
  { name: "KI NO BI", category: "Gin", country: "Japan", est: "", desc: "Artisanal Japanese dry gin from Kyoto." },
  { name: "Espolòn", category: "Tequila", country: "Mexico", est: "1998", desc: "Authentic Mexican tequila with artisanal craftsmanship." },
  { name: "Stolichnaya", category: "Vodka", country: "Latvia", est: "1938", desc: "Legendary premium vodka brand." },
  { name: "Vestal", category: "Vodka", country: "Poland", est: "", desc: "Small-batch vintage Polish potato vodka." },
  { name: "Bols", category: "Liqueurs", country: "Netherlands", est: "1575", desc: "The world's oldest distillery brand, known for liqueurs and genever." },
  { name: "Chartreuse", category: "Liqueurs", country: "France", est: "1737", desc: "Legendary herbal liqueur made by Carthusian monks." },
  { name: "Vana Tallinn", category: "Liqueurs", country: "Estonia", est: "1962", desc: "Iconic Estonian rum-based liqueur." },
  { name: "MV Group", category: "Vodka", country: "Lithuania", est: "", desc: "Leading Baltic spirits producer." },
  { name: "Aura", category: "Brandy", country: "Georgia", est: "", desc: "Georgian brandy with rich Caucasus tradition." },
  { name: "Jägermeister", category: "Liqueurs", country: "Germany", est: "1935", desc: "World-famous German herbal liqueur." },
  { name: "Appleton Estate", category: "Rum", country: "Jamaica", est: "1749", desc: "Jamaica's oldest and most celebrated rum producer." },
  { name: "Brancott Estate", category: "White Wine", country: "New Zealand", est: "1976", desc: "Marlborough Sauvignon Blanc pioneer." },
  { name: "Torres", category: "Red Wine", country: "Spain", est: "1870", desc: "One of Spain's most iconic wine families." },
];

const categories = [
  "All", "Whisky", "Vodka", "Rum", "Gin", "Tequila", "Sake",
  "Red Wine", "White Wine", "Rose Wine", "Champagne", "Prosecco",
  "Sparkling Wine", "Brandy", "Cognac", "Liqueurs",
];

const countries = [
  "All Countries", "Argentina", "Armenia", "Austria", "Chile", "Cuba",
  "Estonia", "France", "Georgia", "Germany", "India", "Italy",
  "Jamaica", "Japan", "Latvia", "Lithuania", "Martinique", "Mexico",
  "Netherlands", "New Zealand", "Poland", "South Africa", "Spain", "USA",
];

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

        {/* Filters */}
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
          {countries.map((c) => (
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
            <p className="text-label text-primary text-center mb-1">{selected.category} · {selected.country}</p>
            {selected.est && <p className="text-xs text-muted-foreground text-center mb-4">Established {selected.est}</p>}
            <p className="text-body text-muted-foreground text-center mt-4">{selected.desc}</p>
          </motion.div>
        </div>
      )}
    </Layout>
  );
};

export default PortfolioPage;
