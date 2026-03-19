import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import logoIcon from "@/assets/logo-v-icon.png";

const Footer = () => {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.about, path: "/about" },
    { label: t.nav.portfolio, path: "/portfolio" },
    { label: t.nav.products, path: "/products" },
    { label: t.nav.distribution, path: "/distribution" },
  ];

  const companyItems = [
    { label: t.nav.partners, path: "/partners" },
    { label: "Why Vesper", path: "/why-vesper" },
    { label: t.nav.news, path: "/news" },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <footer className="bg-vesper-dark text-primary-foreground">
      <div className="section-padding py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column — wider */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <img src={logoIcon} alt="Vesper" className="h-10 w-auto object-contain mix-blend-screen" />
              <span className="font-body text-[17px] font-bold tracking-[0.25em] uppercase text-primary-foreground">
                VESPER
              </span>
            </div>
            <p className="text-body text-primary-foreground/60 max-w-sm leading-relaxed">{t.footer.tagline}</p>
            
            {/* Social icons moved here */}
            <div className="flex gap-3 mt-8">
              {[
                { label: "Ig", href: "https://www.instagram.com/vespergroup/" },
                { label: "Fb", href: "https://www.facebook.com/vespergroup/" },
                { label: "Wa", href: "https://wa.me/37122100200" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-primary-foreground/20 text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-label text-primary-foreground/40 mb-6">{t.footer.navigation}</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-body text-primary-foreground/60 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-label text-primary-foreground/40 mb-6">{t.footer.company}</h4>
            <ul className="space-y-3">
              {companyItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-body text-primary-foreground/60 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — wider */}
          <div className="lg:col-span-4">
            <h4 className="text-label text-primary-foreground/40 mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-body text-primary-foreground/60">
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-primary/60 shrink-0" />
                <div>
                  <a href="mailto:info@vesper.group" className="hover:text-primary transition-colors block">info@vesper.group</a>
                  <a href="mailto:horeca@vesper.group" className="hover:text-primary transition-colors block text-primary-foreground/40 text-sm">horeca@vesper.group</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-primary/60 shrink-0" />
                <div>
                  <a href="tel:+37122100200" className="hover:text-primary transition-colors block">+371 22100200</a>
                  <a href="tel:+37167630724" className="hover:text-primary transition-colors block text-primary-foreground/40 text-sm">+371 67630724</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-primary/60 shrink-0 mt-1" />
                <span>Jelgavas ceļš 20, Tīraine,<br />Mārupes novads, LV-2167, Latvia</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={14} className="text-primary/60 shrink-0" />
                <span>{t.footer.businessHoursValue}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Vesper Group. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">{t.footer.privacy}</Link>
            <Link to="/terms" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">{t.footer.terms}</Link>
            <Link to="/cookies" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">{t.footer.cookies}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
