import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message. We'll be in touch shortly.");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="vesper-gradient pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="section-padding">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-label text-primary mb-4">
            Contact Us
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-display-lg text-primary-foreground max-w-3xl">
            Let's Start a Conversation
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-body-lg text-primary-foreground/70 mt-6 max-w-2xl">
            Whether you're a brand looking for Baltic distribution or a retailer interested in our portfolio, we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="section-padding section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <SectionHeading label="Get in Touch" title="Send Us a Message" />
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-label text-muted-foreground block mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-label text-muted-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-label text-muted-foreground block mb-2">Company</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="text-label text-muted-foreground block mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

          {/* Info */}
          <div>
            <SectionHeading label="Contact Information" title="Reach Us Directly" />
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-body font-semibold text-foreground">Email</p>
                  <p className="text-body text-muted-foreground">info@vespergroup.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-body font-semibold text-foreground">Phone</p>
                  <p className="text-body text-muted-foreground">+371 2000 0000</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-body font-semibold text-foreground">Address</p>
                  <p className="text-body text-muted-foreground">
                    Brīvības iela 100<br />
                    Riga, LV-1001<br />
                    Latvia
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="w-full h-64 bg-secondary flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.5!2d24.1!3d56.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTbCsDU3JzAwLjAiTiAyNMKwMDYnMDAuMCJF!5e0!3m2!1sen!2slv!4v1600000000000!5m2!1sen!2slv"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vesper Group Location"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
