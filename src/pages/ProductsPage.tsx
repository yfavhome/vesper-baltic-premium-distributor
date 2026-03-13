import { useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { brands, productCategories, getCategoryProductCount } from "@/data/brands";
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
import { Search, ArrowRight, Wine, Package } from "lucide-react";
import { Input } from "@/components/ui/input";

const categoryImages: Record<string, string> = {
  Whisky: catWhisky, Vodka: catVodka, Rum: catRum, Gin: catGin,
  Tequila: catTequila, Sake: catMixers, "Red Wine": catWine,
  "White Wine": catChampagne, "Rosé Wine": catWine, Champagne: catChampagne,
  Prosecco: catChampagne, "Sparkling Wine": catChampagne, Brandy: catWhisky,
  Cognac: catWhisky, Liqueurs: catLiqueurs,
};

const categoryDescriptions: Record<string, string> = {
  Whisky: "Single malts, blends, and rare expressions",
  Vodka: "Ultra-premium vodkas from around the world",
  Rum: "Aged, dark, spiced and premium white rums",
  Gin: "Craft and classic dry gins",
  Tequila: "Artisanal and premium Mexican spirits",
  Sake: "Premium Japanese rice wine including Dassai",
  "Red Wine": "From Old World classics to New World discoveries",
  "White Wine": "Crisp and aromatic white wines from top producers",
  "Rosé Wine": "Elegant rosé wines from leading regions",
  Champagne: "Prestige cuvées and grower champagnes",
  Prosecco: "Italian sparkling wines from Veneto and Trentino",
  "Sparkling Wine": "Sparkling wines from around the globe",
  Brandy: "Premium brandies including Armenian classics",
  Cognac: "Fine French cognacs and aged eaux-de-vie",
  Liqueurs: "Classic and contemporary liqueurs",
};

const ProductsPage = () => {
  const [search, setSearch] = useState("");

  const categoriesWithData = useMemo(() =>
    productCategories.map(cat => ({
      name: cat,
      image: categoryImages[cat] || catWine,
      desc: categoryDescriptions[cat] || "",
      brandCount: brands.filter(b => b.category === cat).length,
      productCount: getCategoryProductCount(cat),
    })).filter(cat => cat.brandCount > 0),
    []
  );

  const filtered = useMemo(() => {
    if (!search) return categoriesWithData;
    const q = search.toLowerCase();
    return categoriesWithData.filter(c =>
      c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q)
    );
  }, [search, categoriesWithData]);

  const totalBrands = brands.length;
  const totalProducts = brands.reduce((s, b) => s + (b.products?.length || 0), 0);

  return (
    <Layout>
      <PageHero
        label="Product Categories"
        title="A Curated Selection of Fine Beverages"
        subtitle="Explore our comprehensive range of premium spirits, wines, and more — carefully sourced from the world's finest producers."
        image={productsHero}
      />

      {/* Stats Bar */}
      <section className="section-padding py-8 border-b border-border bg-secondary/30">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Wine size={18} className="text-primary" />
              <div>
                <span className="font-display text-2xl font-bold text-foreground">{categoriesWithData.length}</span>
                <span className="text-xs text-muted-foreground ml-2">Categories</span>
              </div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex items-center gap-3">
              <Package size={18} className="text-primary" />
              <div>
                <span className="font-display text-2xl font-bold text-foreground">{totalBrands}</span>
                <span className="text-xs text-muted-foreground ml-2">Brands</span>
              </div>
            </div>
            <div className="w-px h-8 bg-border hidden md:block" />
            <div className="hidden md:flex items-center gap-3">
              <div>
                <span className="font-display text-2xl font-bold text-foreground">{totalProducts}+</span>
                <span className="text-xs text-muted-foreground ml-2">Products</span>
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              placeholder="Search categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      <section className="section-padding section-spacing">
        <SectionHeading label="Categories" title="Discover Our Range" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cat, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-50px" });
            return (
              <motion.div
                ref={ref}
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={`/products/${encodeURIComponent(cat.name)}`}
                  className="group relative block overflow-hidden cursor-pointer hover-lift"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--vesper-dark))]/90 via-[hsl(var(--vesper-dark))]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">
                        {cat.brandCount} {cat.brandCount === 1 ? "brand" : "brands"} · {cat.productCount} products
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">{cat.name}</h3>
                    <p className="text-sm text-primary-foreground/60">{cat.desc}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="w-8 h-[2px] bg-primary group-hover:w-16 transition-all duration-500" />
                      <ArrowRight size={14} className="text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Wine className="mx-auto text-muted-foreground/30 mb-4" size={48} />
            <p className="text-muted-foreground">No categories match "{search}"</p>
            <button onClick={() => setSearch("")} className="text-primary text-sm mt-2 hover:underline">
              Clear search
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ProductsPage;
