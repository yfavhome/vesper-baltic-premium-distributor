import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import logoVesper from "@/assets/logo-vesper.png";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={logoV} alt="" className="h-8 w-auto object-contain" />
              <span className="font-body text-[17px] font-bold tracking-[0.25em] uppercase text-primary-foreground">
                VESPER
              </span>
            </div>
            <p className="text-body text-primary-foreground/60 max-w-xs">{t.footer.tagline}</p>
          </div>

          <div>
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

          <div>
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

          <div>
            <h4 className="text-label text-primary-foreground/40 mb-6">{t.footer.contact}</h4>
            <ul className="space-y-3 text-body text-primary-foreground/60">
              <li><a href="mailto:info@vesper.group" className="hover:text-primary transition-colors">info@vesper.group</a></li>
              <li><a href="mailto:horeca@vesper.group" className="hover:text-primary transition-colors">horeca@vesper.group</a></li>
              <li><a href="tel:+37122100200" className="hover:text-primary transition-colors">+371 22100200</a></li>
              <li><a href="tel:+37167630724" className="hover:text-primary transition-colors">+371 67630724</a></li>
              <li>Jelgavas ceļš 20, Tīraine,<br />Mārupes novads, LV-2167, Latvia</li>
              <li className="pt-1 text-primary-foreground/40 text-[10px] uppercase tracking-widest font-semibold">{t.footer.businessHours}</li>
              <li>{t.footer.businessHoursValue}</li>
            </ul>
            <div className="flex gap-4 mt-6">
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
                  className="w-9 h-9 flex items-center justify-center border border-primary-foreground/20 text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 hover:text-primary hover:border-primary transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Vesper Group. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            {[t.footer.privacy, t.footer.terms, t.footer.cookies].map((item) => (
              <a key={item} href="#" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
