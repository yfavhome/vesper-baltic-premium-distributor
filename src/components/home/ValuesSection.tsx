import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";

const ValuesSection = () => {
  const { t } = useLanguage();

  const values = [
    { title: t.home.diversityTitle, desc: t.home.diversityDesc },
    { title: t.home.valuesTitle, desc: t.home.valuesDesc },
    { title: t.home.ambitionTitle, desc: t.home.ambitionDesc },
  ];

  return (
    <section className="section-padding section-spacing">
      <SectionHeading label={t.home.whyVesperLabel} title={t.home.ourValues} align="center" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.1}>
            <div className="p-8 lg:p-10 border border-border hover:border-primary/30 transition-all group hover-lift h-full">
              <div className="w-12 h-[2px] bg-primary mb-6 group-hover:w-20 transition-all duration-500" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">{item.title}</h3>
              <p className="text-body text-muted-foreground">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
