import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import { brands, getBrandsByCategory, productCategories } from "@/data/brands";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { ArrowLeft, Search, Wine, X, MapPin, Calendar, ChevronRight, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

import catWine from "@/assets/cat-wine.jpg";
import catChampagne from "@/assets/cat-champagne.jpg";
import catWhisky from "@/assets/cat-whisky.jpg";
import catVodka from "@/assets/cat-vodka.jpg";
import catGin from "@/assets/cat-gin.jpg";
import catRum from "@/assets/cat-rum.jpg";
import catTequila from "@/assets/cat-tequila.jpg";
import catLiqueurs from "@/assets/cat-liqueurs.jpg";
import catMixers from "@/assets/cat-mixers.jpg";

const categoryImages: Record<string, string> = {
  Whisky: catWhisky, Vodka: catVodka, Rum: catRum, Gin: catGin,
  Tequila: catTequila, Sake: catMixers, "Red Wine": catWine,
  "White Wine": catChampagne, "Rosé Wine": catWine, Champagne: catChampagne,
  Prosecco: catChampagne, "Sparkling Wine": catChampagne, Brandy: catWhisky,
  Cognac: catWhisky, Liqueurs: catLiqueurs,
};

const ProductCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const decodedCategory = decodeURIComponent(category || "");

  const [search, setSearch] = useState("");
  const [countryFilter, setCountryFilter] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"name" | "country">("name");

  const categoryBrands = useMemo(() => getBrandsByCategory(decodedCategory), [decodedCategory]);

  const availableCountries = useMemo(
    () => [...new Set(categoryBrands.map(b => b.country))].sort(),
    [categoryBrands]
  );

  const filteredBrands = useMemo(() => {
    let result = categoryBrands.filter(b => {
      const matchSearch = search === "" ||
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        b.desc.toLowerCase().includes(search.toLowerCase()) ||
        (b.products || []).some(p => p.name.toLowerCase().includes(search.toLowerCase()));
      const matchCountry = countryFilter === "all" || b.country === countryFilter;
      return matchSearch && matchCountry;
    });
    result.sort((a, b) => sortBy === "country" ? a.country.localeCompare(b.country) : a.name.localeCompare(b.name));
    return result;
  }, [categoryBrands, search, countryFilter, sortBy]);

  const totalProducts = filteredBrands.reduce((s, b) => s + (b.products?.length || 0), 0);
  const heroImage = categoryImages[decodedCategory] || catWine;

  if (!productCategories.includes(decodedCategory as any) && categoryBrands.length === 0) {
    return (
      <Layout>
        <div className="section-padding section-spacing text-center min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-display-md text-foreground mb-4">Category Not Found</h1>
          <p className="text-body-lg text-muted-foreground mb-8">
            The category "{decodedCategory}" doesn't exist.
          </p>
          <Link to="/products" className="inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft size={16} /> Back to All Categories
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Category Hero */}
      <section className="relative h-[50vh] md:h-[55vh] flex items-end overflow-hidden">
        <img src={heroImage} alt={decodedCategory} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 vesper-overlay" />
        <div className="relative z-10 section-padding pb-12 md:pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors text-sm mb-4"
            >
              <ArrowLeft size={14} /> All Categories
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-label text-primary mb-3"
          >
            Product Category
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-display-lg text-primary-foreground"
          >
            {decodedCategory}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex items-center gap-6 mt-4"
          >
            <span className="text-primary-foreground/60 text-sm">
              {categoryBrands.length} {categoryBrands.length === 1 ? "Brand" : "Brands"}
            </span>
            <span className="w-1 h-1 rounded-full bg-primary-foreground/40" />
            <span className="text-primary-foreground/60 text-sm">
              {categoryBrands.reduce((s, b) => s + (b.products?.length || 0), 0)} Products
            </span>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="section-padding py-8 border-b border-border sticky top-20 lg:top-24 z-30 bg-background/95 backdrop-blur-md">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              placeholder="Search brands or products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-3">
            <SlidersHorizontal size={14} className="text-muted-foreground hidden md:block" />
            <Select value={countryFilter} onValueChange={setCountryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                {availableCountries.map(c => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={(v) => setSortBy(v as "name" | "country")}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">By Name</SelectItem>
                <SelectItem value="country">By Country</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {(search || countryFilter !== "all") && (
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs text-muted-foreground">
              {filteredBrands.length} brands · {totalProducts} products
            </span>
            <button
              onClick={() => { setSearch(""); setCountryFilter("all"); }}
              className="text-xs text-primary hover:underline ml-2"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Brand Cards with expandable products */}
      <section className="section-padding py-16">
        {filteredBrands.length === 0 ? (
          <div className="text-center py-20">
            <Wine className="mx-auto text-muted-foreground/30 mb-4" size={48} />
            <p className="text-muted-foreground">No brands match your search.</p>
            <button onClick={() => { setSearch(""); setCountryFilter("all"); }} className="text-primary text-sm mt-2 hover:underline">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBrands.map((brand, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-30px" });
              const isExpanded = selectedBrand === brand.name;

              return (
                <motion.div
                  ref={ref}
                  key={brand.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.05 }}
                  className="border border-border hover:border-primary/30 transition-all bg-card overflow-hidden"
                >
                  {/* Brand Header */}
                  <button
                    onClick={() => setSelectedBrand(isExpanded ? null : brand.name)}
                    className="w-full flex items-center gap-6 p-6 md:p-8 text-left group"
                  >
                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <span className="font-display text-xl font-bold text-primary">{brand.name[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {brand.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-1 flex-wrap">
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin size={10} /> {brand.country}
                        </span>
                        {brand.est && (
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar size={10} /> Est. {brand.est}
                          </span>
                        )}
                        <span className="text-xs text-primary/70">
                          {brand.products?.length || 0} products
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-1 md:line-clamp-none">{brand.desc}</p>
                    </div>
                    <ChevronRight
                      size={20}
                      className={`text-muted-foreground shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                    />
                  </button>

                  {/* Expanded Products */}
                  <AnimatePresence>
                    {isExpanded && brand.products && brand.products.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                          <div className="border-t border-border pt-6">
                            <p className="text-label text-primary mb-4">Available Products</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                              {brand.products.map((product) => (
                                <div
                                  key={product.name + (product.volume || '')}
                                  className="p-4 bg-secondary/50 border border-border/50 hover:border-primary/20 transition-all"
                                >
                                  <h4 className="font-body text-sm font-medium text-foreground leading-tight">{product.name}</h4>
                                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                                    <span className="text-[10px] uppercase tracking-widest text-primary/80 font-semibold">{product.type}</span>
                                    {product.volume && (
                                      <span className="text-[10px] text-muted-foreground">{product.volume}</span>
                                    )}
                                    {product.abv && (
                                      <span className="text-[10px] text-muted-foreground">{product.abv} ABV</span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      {/* Other Categories */}
      <section className="section-padding py-16 bg-secondary/30 border-t border-border">
        <SectionHeading label="Explore More" title="Other Categories" align="center" />
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {productCategories.filter(c => c !== decodedCategory).map(cat => {
            const count = brands.filter(b => b.category === cat).length;
            if (count === 0) return null;
            return (
              <Link
                key={cat}
                to={`/products/${encodeURIComponent(cat)}`}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-widest bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              >
                {cat} <span className="text-primary/50 ml-1">({count})</span>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default ProductCategoryPage;
