import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import partnersHero from "@/assets/partners-hero.jpg";
import { ShoppingCart, UtensilsCrossed, Wine, Hotel, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const partnerTypes = [
  { icon: ShoppingCart, title: "Retail Chains", desc: "We supply the largest retail networks across Latvia, Lithuania, and Estonia with our full premium portfolio.", partners: ["Rimi", "Maxima", "Prisma", "Stockmann"] },
  { icon: UtensilsCrossed, title: "Restaurants", desc: "Fine dining establishments trust Vesper to curate their wine lists and spirits selection.", partners: ["Vincents", "3 Pavāru", "Entresol", "Ferma"] },
  { icon: Wine, title: "Bars & Lounges", desc: "From craft cocktail bars to premium lounges, we supply the spirits that drive exceptional experiences.", partners: ["Herbārijs", "Black Magic", "Skyline Bar", "I Love You"] },
  { icon: Hotel, title: "Hotels", desc: "International hotel chains and boutique properties rely on our consistent service and quality.", partners: ["Grand Hotel Kempinski", "Radisson", "Pullman", "Hotel Bergs"] },
  { icon: Building2, title: "Hospitality Groups", desc: "Large hospitality operators benefit from our centralized ordering and distribution capabilities.", partners: ["SemaraH Hotels", "Lido", "Baltic Hotel Group"] },
];

const partnerLogos = [
  "Rimi", "Maxima", "Prisma", "Stockmann", "SELVER", "Coop", "Lidl", "Barbora",
  "Grand Hotel", "Radisson", "Hilton", "Marriott",
];

const PartnersPage = () => {
  return (
    <Layout>
      <PageHero
        label="Partners & HoReCa"
        title="Building Lasting Partnerships"
        subtitle="We collaborate with the Baltic region's finest retail chains, restaurants, hotels, and bars."
        image={partnersHero}
      />

      {/* Partner Types */}
      <section className="section-padding section-spacing">
        <SectionHeading label="Our Partners" title="Serving Every Channel" />
        <div className="space-y-6">
          {partnerTypes.map((type, i) => (
            <FadeIn key={type.title} delay={i * 0.08}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 border border-border hover:border-primary/20 transition-all group hover-lift">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <type.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{type.title}</h3>
                  </div>
                  <p className="text-body text-muted-foreground">{type.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  {type.partners.map((p) => (
                    <span key={p} className="px-4 py-2 bg-secondary text-xs font-semibold uppercase tracking-wider text-muted-foreground border border-border">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Partner Logos */}
      <section className="section-padding section-spacing bg-secondary/50">
        <SectionHeading label="Trusted By" title="Our Partner Network" align="center" />
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partnerLogos.map((logo, i) => (
            <FadeIn key={logo} delay={i * 0.04}>
              <div className="p-6 bg-background border border-border flex items-center justify-center h-20 hover:border-primary/20 transition-colors">
                <span className="font-display text-sm font-bold text-muted-foreground/50">{logo}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="vesper-gradient section-padding section-spacing text-center">
        <SectionHeading label="Join Us" title="Become a Vesper Partner" light align="center" subtitle="Interested in adding premium brands to your portfolio? Get in touch with our partnership team." />
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover:gap-3">
          Contact Us <ArrowRight size={16} />
        </Link>
      </section>
    </Layout>
  );
};

export default PartnersPage;
