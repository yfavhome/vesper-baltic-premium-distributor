import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeIn from "@/components/shared/FadeIn";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { brands, productCategories, countries } from "@/data/brands";
import partnersHero from "@/assets/partners-hero.jpg";
import distributionHero from "@/assets/distribution-hero.jpg";
import { ArrowRight, Globe, TrendingUp, Users, Truck, ShieldCheck, Store, BarChart3, Handshake, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  brandName: z.string().trim().min(1, "Brand name is required").max(100),
  contactName: z.string().trim().min(1, "Contact name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(30).optional(),
  country: z.string().trim().min(1, "Country is required").max(100),
  category: z.string().trim().min(1, "Category is required").max(100),
  message: z.string().trim().max(2000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const BrandPartnershipPage = () => {
  const [form, setForm] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast.success("Partnership inquiry submitted! We'll be in touch within 48 hours.");
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const advantages = [
    { icon: Globe, title: "Baltic Market Access", desc: "Direct access to Latvia, Lithuania, and Estonia through our established retail and HoReCa network." },
    { icon: TrendingUp, title: "Sales Growth Focus", desc: "Dedicated brand management team focused on growing your market share and revenue." },
    { icon: Truck, title: "Full Logistics", desc: "Temperature-controlled warehousing, customs clearance, and last-mile delivery across the Baltics." },
    { icon: Store, title: "Retail & HoReCa", desc: "Placement in premium retail chains, restaurants, bars, and hotels." },
    { icon: BarChart3, title: "Market Intelligence", desc: "Regular reporting on sales performance, market trends, and competitive landscape." },
    { icon: Handshake, title: "Long-term Partnership", desc: "We invest in brands we believe in — with marketing support and brand-building strategy." },
  ];

  const process = [
    { step: "01", title: "Initial Contact", desc: "Share your brand details through our partnership form." },
    { step: "02", title: "Evaluation", desc: "Our team reviews market fit, positioning, and potential." },
    { step: "03", title: "Proposal", desc: "We present a tailored distribution plan with targets." },
    { step: "04", title: "Launch", desc: "Market entry with dedicated team and logistics support." },
  ];

  return (
    <Layout>
      <SEO
        title="Brand Partnership — Vesper Group"
        description="Partner with Vesper Group for premium beverage distribution across the Baltics. Access 3 markets, established retail network, and dedicated brand management."
      />
      <PageHero
        label="Brand Partnership"
        title="Grow Your Brand in the Baltics"
        subtitle="We partner with ambitious producers to build lasting market presence across Latvia, Lithuania, and Estonia."
        image={partnersHero}
        size="tall"
        align="bottom-left"
      />

      {/* Stats */}
      <section className="section-padding py-16 border-b border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={brands.length} suffix="+" label="Brands Distributed" />
          <AnimatedCounter end={countries.length} label="Countries Represented" />
          <AnimatedCounter end={3} label="Baltic Markets" />
          <AnimatedCounter end={productCategories.length} label="Product Categories" />
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="section-padding section-spacing">
        <SectionHeading
          label="Why Vesper Group"
          title="What We Bring to the Partnership"
          subtitle="A dedicated team, proven logistics, and deep market knowledge — everything your brand needs to succeed in the Baltics."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="group p-8 lg:p-10 border border-border hover:border-primary/30 transition-all hover-lift h-full relative overflow-hidden noise-overlay">
                <div className="relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/5 mb-6 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-body text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative section-spacing overflow-hidden">
        <img src={distributionHero} alt="Distribution process" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 vesper-overlay" />
        <div className="relative z-10 section-padding">
          <SectionHeading
            label="How It Works"
            title="From First Contact to Market Launch"
            align="center"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {process.map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="text-center">
                  <span className="font-display text-5xl font-bold text-primary/30">{item.step}</span>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground mt-4 mb-2">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/60">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study / Social Proof */}
      <section className="section-padding section-spacing bg-secondary/50">
        <SectionHeading
          label="Success Stories"
          title="Brands That Grew With Us"
          align="center"
        />
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="p-10 lg:p-14 border border-border bg-background relative noise-overlay">
              <div className="relative z-10">
                <div className="w-16 h-[2px] bg-primary mb-8" />
                <blockquote className="font-display text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                  "Vesper Group understood our brand positioning from day one. Their Baltic market knowledge and established network helped us achieve our first-year targets within 6 months."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-primary">P</span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground">Partner Brand Manager</p>
                    <p className="text-sm text-muted-foreground">European Spirits Producer</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading
              label="Start a Partnership"
              title="Tell Us About Your Brand"
              subtitle="Fill out the form and our partnership team will reach out within 48 hours to discuss your brand's potential in the Baltic market."
            />
            <div className="space-y-4 mt-8">
              {[
                "Direct access to 3 Baltic markets",
                "Dedicated brand management team",
                "Temperature-controlled logistics",
                "Regular sales reporting and analytics",
                "Marketing and brand-building support",
                "Flexible partnership models",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  <span className="text-body text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 border border-primary/20 bg-primary/5 text-center h-full flex flex-col items-center justify-center"
              >
                <CheckCircle2 size={48} className="text-primary mb-6" />
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Thank You!</h3>
                <p className="text-body text-muted-foreground max-w-md">
                  Your partnership inquiry has been received. Our team will review your brand and reach out within 48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 p-8 lg:p-10 border border-border bg-card">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-label text-muted-foreground mb-2 block">Brand Name *</label>
                    <Input
                      value={form.brandName || ""}
                      onChange={(e) => updateField("brandName", e.target.value)}
                      placeholder="Your brand name"
                      className={errors.brandName ? "border-destructive" : ""}
                    />
                    {errors.brandName && <p className="text-xs text-destructive mt-1">{errors.brandName}</p>}
                  </div>
                  <div>
                    <label className="text-label text-muted-foreground mb-2 block">Contact Name *</label>
                    <Input
                      value={form.contactName || ""}
                      onChange={(e) => updateField("contactName", e.target.value)}
                      placeholder="Your full name"
                      className={errors.contactName ? "border-destructive" : ""}
                    />
                    {errors.contactName && <p className="text-xs text-destructive mt-1">{errors.contactName}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-label text-muted-foreground mb-2 block">Email *</label>
                    <Input
                      type="email"
                      value={form.email || ""}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="email@brand.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-label text-muted-foreground mb-2 block">Phone</label>
                    <Input
                      type="tel"
                      value={form.phone || ""}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-label text-muted-foreground mb-2 block">Country of Origin *</label>
                    <Input
                      value={form.country || ""}
                      onChange={(e) => updateField("country", e.target.value)}
                      placeholder="e.g. France, Italy"
                      className={errors.country ? "border-destructive" : ""}
                    />
                    {errors.country && <p className="text-xs text-destructive mt-1">{errors.country}</p>}
                  </div>
                  <div>
                    <label className="text-label text-muted-foreground mb-2 block">Product Category *</label>
                    <Input
                      value={form.category || ""}
                      onChange={(e) => updateField("category", e.target.value)}
                      placeholder="e.g. Wine, Spirits, Champagne"
                      className={errors.category ? "border-destructive" : ""}
                    />
                    {errors.category && <p className="text-xs text-destructive mt-1">{errors.category}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-label text-muted-foreground mb-2 block">Additional Details</label>
                  <Textarea
                    value={form.message || ""}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Tell us about your brand, production volume, current markets..."
                    rows={4}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover:gap-3 w-full justify-center"
                >
                  Submit Partnership Inquiry <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BrandPartnershipPage;
