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
        title="Your Trusted Alcohol Distributor in the Baltic Region"
        subtitle="Vesper Group is an alcohol distributor based in Latvia, working across the Baltic region, offering a wide range of beverages from everyday drinks to exclusive premium brands."
        image={aboutHero}
      />

      {/* Story */}
      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading label="Our Story" title="A Growing Force in Baltic Beverage Distribution" />
            <div className="space-y-6 text-body text-muted-foreground">
              <p>Vesper Group is an alcohol distributor based in Latvia, working across the Baltic region. We offer a wide range of beverages — from everyday drinks to exclusive premium brands — making sure that everyone can find the right choice.</p>
              <p>Our portfolio lists the best brands on the market, ranging from loved and respected names with preserved heritage to modern newcomers. We continually increase the range of offered products across the Baltic States in quest of discovery of new exclusive brands.</p>
              <p>Today, we represent 37+ brands from countries including Italy, France, Cuba, Japan, Spain, Argentina, Chile, and many more — distributing across multiple product categories through our extensive retail and HoReCa network.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 content-center">
            <AnimatedCounter end={37} suffix="+" label="Brands" />
            <AnimatedCounter end={16} label="Product Categories" />
            <AnimatedCounter end={3} label="Baltic Markets" />
            <AnimatedCounter end={6} label="Core Services" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding section-spacing bg-secondary">
        <SectionHeading label="Our Values" title="What Drives Vesper Group" align="center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn>
            <div className="p-10 bg-background h-full">
              <Target className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Diversity</h3>
              <p className="text-body text-muted-foreground">Our portfolio lists the best brands on the market, ranging from loved and respected names with preserved heritage to modern newcomers. We continually increase the range of offered products across the Baltic States in quest of discovery of new exclusive brands.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="p-10 bg-background h-full">
              <Eye className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Values</h3>
              <p className="text-body text-muted-foreground">We strive to create mutually fulfilling care for our brands, customers, as well as our employees. Being a highly professional, passionate team, we value relationships founded on mutual trust, based on transparency in our dialogue and data, respect for craftsmanship and responsible approach to each customer, client and partner.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="p-10 bg-background h-full">
              <TrendingUp className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Ambition</h3>
              <p className="text-body text-muted-foreground">We seek to improve our results, relationships and product range. Our ambition is to become the leading company on the market of the Baltic States, satisfy consumer needs for beverage diversity, and also elevate the experience of beverage appreciation.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-padding section-spacing">
        <SectionHeading label="Our Strengths" title="What Sets Vesper Group Apart" align="center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Globe, title: "Baltic Market Coverage", desc: "Wholesale and retail trade covering Latvia, Lithuania, and Estonia with carefully selected partners." },
            { icon: Award, title: "Premium & Diverse Portfolio", desc: "37+ brands from 16+ countries — from everyday favorites to rare exclusive finds." },
            { icon: Users, title: "Partnership Focus", desc: "Long-term relationship approach focused on increasing sales and brand presence for our partners." },
            { icon: TrendingUp, title: "Full Logistics", desc: "Comprehensive logistics services covering Europe, Baltic States, and third countries." },
            { icon: Target, title: "Online & Offline", desc: "E-shop platform (alko.lv) complementing physical retail and showroom presence in Tīraine, Latvia." },
            { icon: Eye, title: "Brand Distribution", desc: "Dedicated brand distribution services focused on increasing market presence and sales." },
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
    </Layout>
  );
};

export default AboutPage;
