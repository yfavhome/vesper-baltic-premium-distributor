import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
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
import { useRef } from "react";

const categories = [
  { name: "Whisky", image: catWhisky, desc: "Single malts, blends, and rare expressions" },
  { name: "Vodka", image: catVodka, desc: "Ultra-premium vodkas from around the world" },
  { name: "Rum", image: catRum, desc: "Aged, dark, spiced and premium white rums" },
  { name: "Gin", image: catGin, desc: "Craft and classic dry gins" },
  { name: "Tequila", image: catTequila, desc: "Artisanal and premium Mexican spirits" },
  { name: "Sake", image: catMixers, desc: "Premium Japanese rice wine including Dassai" },
  { name: "Red Wine", image: catWine, desc: "From Old World classics to New World discoveries" },
  { name: "White Wine", image: catChampagne, desc: "Crisp and aromatic white wines from top producers" },
  { name: "Rosé Wine", image: catWine, desc: "Elegant rosé wines from leading regions" },
  { name: "Champagne", image: catChampagne, desc: "Prestige cuvées and grower champagnes" },
  { name: "Prosecco", image: catChampagne, desc: "Italian sparkling wines from Veneto and Trentino" },
  { name: "Sparkling Wine", image: catChampagne, desc: "Sparkling wines from around the globe" },
  { name: "Brandy", image: catWhisky, desc: "Premium brandies including Armenian classics" },
  { name: "Cognac", image: catWhisky, desc: "Fine French cognacs and aged eaux-de-vie" },
  { name: "Liqueurs", image: catLiqueurs, desc: "Classic and contemporary liqueurs" },
];

const ProductsPage = () => {
  return (
    <Layout>
      <PageHero
        label="Product Categories"
        title="A Curated Selection of Fine Beverages"
        subtitle="Explore our comprehensive range of premium spirits, wines, and more — 16 categories covering every taste."
        image={productsHero}
      />

      <section className="section-padding section-spacing">
        <SectionHeading label="Categories" title="Discover Our Range" align="center" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-50px" });
            return (
              <motion.div
                ref={ref}
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden cursor-pointer hover-lift"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-vesper-dark/90 via-vesper-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">{cat.name}</h3>
                  <p className="text-sm text-primary-foreground/60">{cat.desc}</p>
                  <div className="w-8 h-[2px] bg-primary mt-4 group-hover:w-16 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
