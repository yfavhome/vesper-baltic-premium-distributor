import { useState, useRef, useMemo } from "react";
import SEO from "@/components/shared/SEO";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { brands, productCategories, countries, getCategoryProductCount } from "@/data/brands";
import { getBrandSlug } from "@/pages/BrandPage";
import productsHero from "@/assets/products-hero.jpg";
import catWine from "@/assets/cat-wine.jpg";
import catChampagne from "@/assets/cat-champagne.jpg";
import catWhisky from "@/assets/cat-whisky.jpg";
import catVodka from "@/assets/cat-vodka.jpg";
import catGin from "@/assets/cat-gin.jpg";
import catRum from "@/assets/cat-rum.jpg";
import catTequila from "@/assets/cat-tequila.jpg";
import catLiqueurs from "@/assets/cat-liqueurs.jpg";
import catMixers from "@/assets/cat-mixers.jpg";
import { motion, useInView } from "framer-motion";
import { Search, ArrowRight, Wine, Package, Filter, X, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/i18n/LanguageContext";

const categoryImages: Record<string, string> = {
  Champagne: catChampagne, Prosecco: catChampagne, "Sparkling Wine": catChampagne,
  "White Wine": catWine, "Rosé Wine": catWine, "Red Wine": catWine,
  Whisky: catWhisky, Rum: catRum, Gin: catGin, Vodka: catVodka,
  Tequila: catTequila, Sake: catMixers,
  Cognac: catWhisky, Brandy: catWhisky, Liqueurs: catLiqueurs, Mixers: catMixers,
};

// categoryDescriptions moved to i18n

interface CategoryData {
  name: string;
  image: string;
  desc: string;
  brandCount: number;
  productCount: number;
}

const CategoryCard = ({ cat, index, t }: { cat: CategoryData; index: number; t: any }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06 }}
    >
      <Link
        to={`/products/${encodeURIComponent(cat.name)}`}
        className="group relative block overflow-hidden cursor-pointer"
      >
        <div className="aspect-[4/5] overflow-hidden relative">
          <div className="absolute inset-0 bg-secondary animate-pulse" />
          <img
            src={cat.image}
            alt={cat.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 relative z-[1]"
            style={{ opacity: 1 }}
            onLoad={(e) => {
              const target = e.currentTarget;
              target.style.opacity = '1';
              const skeleton = target.previousElementSibling as HTMLElement;
              if (skeleton) skeleton.style.display = 'none';
            }}
          />
        </div>
        {/* Overlay with enhanced hover */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:from-black/95 group-hover:via-black/40 transition-all duration-500" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-[3] p-8 transform group-hover:translate-y-[-4px] transition-transform duration-500">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">
              {cat.brandCount} {cat.brandCount === 1 ? t.products.brand : t.products.brands} · {cat.productCount} {t.products.productsLabel.toLowerCase()}
            </span>
          </div>
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2 group-hover:text-primary transition-colors duration-300">{cat.name}</h3>
          <p className="text-sm text-primary-foreground/60 group-hover:text-primary-foreground/80 transition-colors duration-300">{cat.desc}</p>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-8 h-[2px] bg-primary group-hover:w-16 transition-all duration-500" />
            <ArrowRight size={14} className="text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
          </div>
        </div>

        {/* Top corner badge on hover */}
        <div className="absolute top-4 right-4 z-[3] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="px-3 py-1.5 bg-primary/90 text-primary-foreground text-[10px] uppercase tracking-widest font-semibold backdrop-blur-sm">
            {t.products.explore}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [countryFilter, setCountryFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const { t } = useLanguage();

  // Unique product types across all brands
  const allTypes = useMemo(() => {
    const types = new Set<string>();
    brands.forEach(b => b.products?.forEach(p => types.add(p.type)));
    return ["All", ...Array.from(types).sort()];
  }, []);

  const [typeFilter, setTypeFilter] = useState("All");

  const categoriesWithData = useMemo(() =>
    productCategories.map(cat => ({
      name: cat,
      image: categoryImages[cat] || catWine,
      desc: (t.products.categoryDescriptions as Record<string, string>)[cat] || "",
      brandCount: brands.filter(b => b.category === cat).length,
      productCount: getCategoryProductCount(cat),
    })).filter(cat => cat.brandCount > 0),
    [t]
  );

  // Filter categories based on search
  const filteredCategories = useMemo(() => {
    if (!search) return categoriesWithData;
    const q = search.toLowerCase();
    return categoriesWithData.filter(c =>
      c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q)
    );
  }, [search, categoriesWithData]);

  // Filter individual products
  const filteredProducts = useMemo(() => {
    if (categoryFilter === "All" && countryFilter === "All" && typeFilter === "All" && !search) return null;
    if (!search && categoryFilter === "All" && countryFilter === "All" && typeFilter === "All") return null;

    return brands
      .filter(b => {
        if (categoryFilter !== "All" && b.category !== categoryFilter) return false;
        if (countryFilter !== "All" && b.country !== countryFilter) return false;
        return true;
      })
      .flatMap(b =>
        (b.products || [])
          .filter(p => {
            if (typeFilter !== "All" && p.type !== typeFilter) return false;
            if (search) {
              const q = search.toLowerCase();
              return p.name.toLowerCase().includes(q) || p.type.toLowerCase().includes(q) || b.name.toLowerCase().includes(q);
            }
            return true;
          })
          .map(p => ({ ...p, brandName: b.name, brandSlug: getBrandSlug(b.name), country: b.country }))
      );
  }, [search, categoryFilter, countryFilter, typeFilter]);

  const hasActiveFilters = categoryFilter !== "All" || countryFilter !== "All" || typeFilter !== "All" || search;
  const showProductResults = hasActiveFilters && filteredProducts !== null;

  const totalBrands = brands.length;
  const totalProducts = brands.reduce((s, b) => s + (b.products?.length || 0), 0);

  const clearFilters = () => {
    setSearch("");
    setCategoryFilter("All");
    setCountryFilter("All");
    setTypeFilter("All");
  };

  return (
    <Layout>
      <SEO title="Products" description="Browse our curated selection of premium beverages — champagne, wine, whisky, rum, gin, vodka, and more. 600+ products from 37+ brands." />
      <PageHero
        label={t.products.label}
        title={t.products.title}
        subtitle={t.products.subtitle}
        image={productsHero}
        size="compact"
        align="bottom-center"
      />

      {/* Stats & Search Bar */}
      <section className="section-padding py-8 border-b border-border bg-secondary/30">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Wine size={18} className="text-primary" />
              <div>
                <span className="font-display text-2xl font-bold text-foreground">{categoriesWithData.length}</span>
                <span className="text-xs text-muted-foreground ml-2">{t.products.categoriesLabel}</span>
              </div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex items-center gap-3">
              <Package size={18} className="text-primary" />
              <div>
                <span className="font-display text-2xl font-bold text-foreground">{totalBrands}</span>
                <span className="text-xs text-muted-foreground ml-2">{t.products.brandsLabel}</span>
              </div>
            </div>
            <div className="w-px h-8 bg-border hidden md:block" />
            <div className="hidden md:flex items-center gap-3">
              <div>
                <span className="font-display text-2xl font-bold text-foreground">{totalProducts}+</span>
                <span className="text-xs text-muted-foreground ml-2">{t.products.productsLabel}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                placeholder={t.products.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all border ${
                showFilters || hasActiveFilters
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-foreground/30"
              }`}
            >
              <Filter size={14} />
              {t.products.filters}
              {hasActiveFilters && (
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary-foreground text-primary text-[10px] font-bold">
                  {[categoryFilter !== "All", countryFilter !== "All", typeFilter !== "All"].filter(Boolean).length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 pt-6 border-t border-border"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category */}
              <div>
                <label className="text-label text-muted-foreground mb-3 block">{t.products.category}</label>
                <div className="flex flex-wrap gap-1.5">
                  {["All", ...productCategories].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest transition-all ${
                        categoryFilter === cat
                          ? "bg-primary text-primary-foreground"
                          : "bg-background text-muted-foreground hover:text-foreground border border-border"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="text-label text-muted-foreground mb-3 block">{t.products.country}</label>
                <div className="flex flex-wrap gap-1.5">
                  {["All", ...countries].map((c) => (
                    <button
                      key={c}
                      onClick={() => setCountryFilter(c)}
                      className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest transition-all ${
                        countryFilter === c
                          ? "bg-foreground text-background"
                          : "bg-background text-muted-foreground hover:text-foreground border border-border"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type */}
              <div>
                <label className="text-label text-muted-foreground mb-3 block">{t.products.productType}</label>
                <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto">
                  {allTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setTypeFilter(type)}
                      className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest transition-all ${
                        typeFilter === type
                          ? "bg-primary/80 text-primary-foreground"
                          : "bg-background text-muted-foreground hover:text-foreground border border-border"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {hasActiveFilters && (
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                <span className="text-sm text-muted-foreground">{t.products.activeFilters}</span>
                {categoryFilter !== "All" && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs">
                    {categoryFilter}
                    <button onClick={() => setCategoryFilter("All")}><X size={12} /></button>
                  </span>
                )}
                {countryFilter !== "All" && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-foreground/10 text-foreground text-xs">
                    {countryFilter}
                    <button onClick={() => setCountryFilter("All")}><X size={12} /></button>
                  </span>
                )}
                {typeFilter !== "All" && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs">
                    {typeFilter}
                    <button onClick={() => setTypeFilter("All")}><X size={12} /></button>
                  </span>
                )}
                <button onClick={clearFilters} className="text-xs text-primary hover:underline ml-auto">
                  {t.products.clearAll}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </section>

      <section className="section-padding section-spacing">
        {/* Show filtered products if filters active */}
        {showProductResults ? (
          <>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {filteredProducts!.length} {t.products.productsFound}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">{t.products.filteredResults}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts!.map((product, i) => (
                <motion.div
                  key={`${product.name}-${product.brandName}-${i}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.03, 0.5) }}
                  className="p-6 border border-border hover:border-primary/30 transition-all group"
                >
                  <Link to={`/brand/${product.brandSlug}`} className="text-[10px] text-primary uppercase tracking-widest font-semibold hover:underline">
                    {product.brandName}
                  </Link>
                  <h3 className="font-display text-sm font-semibold text-foreground mt-1 leading-snug">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                    <span className="px-2 py-0.5 bg-secondary text-foreground/70">{product.type}</span>
                    {product.volume && <span>{product.volume}</span>}
                    {product.abv && <span className="text-primary/70">{product.abv}</span>}
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground/60">
                    <MapPin size={10} /> {product.country}
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts!.length === 0 && (
              <div className="text-center py-20">
                <Wine className="mx-auto text-muted-foreground/30 mb-4" size={48} />
                <p className="text-muted-foreground">No products match your filters</p>
                <button onClick={clearFilters} className="text-primary text-sm mt-2 hover:underline">
                  Clear all filters
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <SectionHeading label={t.products.categoriesLabel} title={t.products.discoverRange} align="center" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((cat, i) => (
                <CategoryCard key={cat.name} cat={cat} index={i} t={t} />
              ))}
            </div>

            {filteredCategories.length === 0 && (
              <div className="text-center py-20">
                <Wine className="mx-auto text-muted-foreground/30 mb-4" size={48} />
                <p className="text-muted-foreground">No categories match "{search}"</p>
                <button onClick={() => setSearch("")} className="text-primary text-sm mt-2 hover:underline">
                  Clear search
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </Layout>
  );
};

export default ProductsPage;
