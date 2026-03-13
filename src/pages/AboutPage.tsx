import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import aboutHero from "@/assets/about-hero.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Globe, Award, Users, TrendingUp } from "lucide-react";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  );
};

const AboutPage = () => {
  return (
    <Layout>
      <PageHero
        label="About Us"
        title="Building the Future of Premium Beverage Distribution"
        subtitle="Vesper Group has been at the forefront of the Baltic beverage industry, setting new standards in distribution excellence."
        image={aboutHero}
      />

      {/* Story */}
      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading label="Our Story" title="A Legacy of Excellence in Beverage Distribution" />
            <div className="space-y-6 text-body text-muted-foreground">
              <p>Founded with a vision to elevate the premium beverage landscape in the Baltic region, Vesper Group has grown from a boutique distributor to the region's most trusted partner for world-class brands.</p>
              <p>Our deep understanding of local markets, combined with international expertise, allows us to bridge the gap between prestigious producers and discerning consumers across Latvia, Lithuania, and Estonia.</p>
              <p>Today, we represent over 85 premium brands, distributing more than 2,500 products through our extensive retail and HoReCa network.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 content-center">
            <AnimatedCounter end={85} suffix="+" label="Premium Brands" />
            <AnimatedCounter end={2500} suffix="+" label="Products" />
            <AnimatedCounter end={500} suffix="+" label="Retail Partners" />
            <AnimatedCounter end={3} label="Baltic Markets" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding section-spacing bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn>
            <div className="p-10 bg-background">
              <Target className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-body text-muted-foreground">To deliver premium beverage experiences to the Baltic region through exceptional distribution services, fostering lasting partnerships with producers and retailers alike.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="p-10 bg-background">
              <Eye className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-body text-muted-foreground">To be recognized as the Baltic region's premier beverage distribution partner, renowned for our curated portfolio, operational excellence, and unwavering commitment to quality.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-padding section-spacing">
        <SectionHeading label="Our Strengths" title="What Sets Vesper Group Apart" align="center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Globe, title: "Market Expertise", desc: "Deep knowledge of Baltic consumer preferences and market dynamics across all three states." },
            { icon: Award, title: "Premium Selection", desc: "A rigorously curated portfolio featuring the world's most sought-after beverage brands." },
            { icon: Users, title: "Partnership Focus", desc: "Long-term relationship approach with both brand principals and retail partners." },
            { icon: TrendingUp, title: "Growth Drive", desc: "Proven track record of brand building and market share growth in the region." },
            { icon: Target, title: "Precision Logistics", desc: "State-of-the-art distribution infrastructure ensuring quality from warehouse to shelf." },
            { icon: Eye, title: "Market Intelligence", desc: "Data-driven insights and reporting to optimize brand performance and positioning." },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="p-8 border border-border hover:border-primary/30 transition-colors group">
                <item.icon className="w-6 h-6 text-primary mb-5" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-body text-muted-foreground">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="vesper-gradient section-padding section-spacing">
        <SectionHeading label="Leadership" title="Experienced Team, Proven Results" light align="center" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Andris Kalniņš", role: "CEO & Founder" },
            { name: "Līga Bērziņa", role: "COO" },
            { name: "Mārtiņš Ozols", role: "Commercial Director" },
            { name: "Ieva Liepiņa", role: "Head of Marketing" },
          ].map((person, i) => (
            <FadeIn key={person.name} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary-foreground/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-foreground/40" />
                </div>
                <h4 className="font-display text-base font-semibold text-primary-foreground">{person.name}</h4>
                <p className="text-sm text-primary-foreground/50 mt-1">{person.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
