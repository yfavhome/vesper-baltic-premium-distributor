import { useState } from "react";
import SEO from "@/components/shared/SEO";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import BrandCard from "@/components/shared/BrandCard";
import portfolioHero from "@/assets/portfolio-hero.jpg";
import { brands, productCategories, countries } from "@/data/brands";
import { Search } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

import { Input } from "@/components/ui/input";

const PortfolioPage = () => {
  const { t } = useLanguage();
  const categories = [t.portfolio.all, ...productCategories];
  const countryList = [t.portfolio.allCountries, ...countries];
  const [filter, setFilter] = useState(t.portfolio.all);
  const [countryFilter, setCountryFilter] = useState(t.portfolio.allCountries);
  const [search, setSearch] = useState("");

  const filtered = brands.filter((b) => {
    const catMatch = filter === "All" || b.category === filter;
    const countryMatch = countryFilter === "All Countries" || b.country === countryFilter;
    const searchMatch = !search || b.name.toLowerCase().includes(search.toLowerCase()) || b.desc.toLowerCase().includes(search.toLowerCase());
    return catMatch && countryMatch && searchMatch;
  });

  return (
    <Layout>
      <SEO title="Brand Portfolio" description="Explore 37+ premium brands distributed by Vesper Group across the Baltics — wines, champagnes, spirits, and more from world-class producers." />
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

        {/* Brand grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((brand, i) => (
            <BrandCard
              key={brand.name}
              brand={brand}
              index={i}
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
    </Layout>
  );
};

export default PortfolioPage;
