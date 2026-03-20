import { motion } from "framer-motion";
import { brands } from "@/data/brands";
import { useLanguage } from "@/i18n/LanguageContext";

// Get unique brand names for the marquee
const marqueBrands = brands.slice(0, 20);

const TrustedBy = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-12 md:py-16 border-y border-border bg-secondary/30">
      <div className="section-padding mb-8">
        <p className="text-label text-muted-foreground text-center">
          {t.home.trustedByBrands.replace("{{count}}", String(brands.length))}
        </p>
      </div>

      {/* Infinite scroll marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/80 to-transparent z-10" />

        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: [0, -2400] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {/* Double the items for seamless loop */}
          {[...marqueBrands, ...marqueBrands].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center gap-3 shrink-0"
            >
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0 overflow-hidden">
                {brand.logo ? (
                  <img src={brand.logo} alt={`${brand.name} logo`} className="w-full h-full object-contain p-1" loading="lazy" />
                ) : (
                  <span className="font-display text-sm font-bold text-primary">
                    {brand.name[0]}
                  </span>
                )}
              <div className="flex flex-col">
                <span className="text-sm font-display font-semibold text-foreground">
                  {brand.name}
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                  {brand.country}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
