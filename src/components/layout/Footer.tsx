import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
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
                { icon: Instagram, href: "https://www.instagram.com/vespergroup/", label: "Instagram" },
                { icon: Facebook, href: "https://www.facebook.com/vespergroup/", label: "Facebook" },
                { icon: MessageCircle, href: "https://wa.me/37122100200", label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center border border-primary-foreground/20 text-primary-foreground/50 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <s.icon size={16} />
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
