import { useState } from "react";
import SEO from "@/components/shared/SEO";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight, Clock } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.contact.successMessage);
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <Layout>
      <SEO title={t.seo.contactTitle} description={t.seo.contactDesc} />
      <section className="vesper-gradient pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-padding">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-label text-primary mb-4">
            {t.contact.label}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-display-lg text-primary-foreground max-w-3xl">
            {t.contact.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-body-lg text-primary-foreground/70 mt-6 max-w-2xl">
            {t.contact.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading label={t.contact.formLabel} title={t.contact.formTitle} />
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-label text-muted-foreground block mb-2">{t.contact.fullName}</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3.5 border border-border bg-background text-foreground font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder={t.contact.namePlaceholder} />
                </div>
                <div>
                  <label className="text-label text-muted-foreground block mb-2">{t.contact.email}</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3.5 border border-border bg-background text-foreground font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                    placeholder={t.contact.emailPlaceholder} />
                </div>
              </div>
              <div>
                <label className="text-label text-muted-foreground block mb-2">{t.contact.subject}</label>
                <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3.5 border border-border bg-background text-foreground font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder={t.contact.subjectPlaceholder} />
              </div>
              <div>
                <label className="text-label text-muted-foreground block mb-2">{t.contact.message}</label>
                <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3.5 border border-border bg-background text-foreground font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  placeholder={t.contact.messagePlaceholder} />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover:gap-3">
                {t.contact.sendMessage} <Send size={16} />
              </button>
            </form>
          </div>

          <div>
            <SectionHeading label={t.contact.infoLabel} title={t.contact.infoTitle} />
            <div className="space-y-6 mb-12">
              {[
                { icon: Mail, label: t.contact.emailLabel, items: [
                  { text: "info@vesper.group", href: "mailto:info@vesper.group" },
                  { text: "horeca@vesper.group", href: "mailto:horeca@vesper.group" },
                ]},
                { icon: Phone, label: t.contact.phoneLabel, items: [
                  { text: "+371 22100200", href: "tel:+37122100200" },
                  { text: "+371 67630724", href: "tel:+37167630724" },
                ]},
              ].map((section) => (
                <div key={section.label} className="flex gap-4 p-5 border border-border hover:border-primary/20 transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/5 shrink-0">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground mb-1">{section.label}</p>
                    {section.items.map((item) => (
                      <p key={item.text} className="text-body text-muted-foreground">
                        <a href={item.href} className="hover:text-primary transition-colors">{item.text}</a>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex gap-4 p-5 border border-border hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/5 shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground mb-1">{t.contact.addressLabel}</p>
                  <p className="text-body text-muted-foreground whitespace-pre-line">{t.contact.address}</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 border border-border hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/5 shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground mb-1">{t.contact.businessHoursLabel}</p>
                  <p className="text-body text-muted-foreground">{t.contact.businessHoursValue}</p>
                </div>
              </div>
            </div>

            <div className="w-full h-72 border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.0!2d24.0515!3d56.9195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eec5e0a6c0c3c1%3A0x3c0c1e8e6e0e0e0e!2sJelgavas%20ce%C4%BC%C5%A1%2020%2C%20T%C4%ABraine%2C%20M%C4%81rupes%20novads%2C%20LV-2167!5e0!3m2!1sen!2slv!4v1700000000000!5m2!1sen!2slv"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Vesper Group Location" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
