import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-v.png";
import logoText from "@/assets/logo-vesper.png";

const Footer = () => {
  return (
    <footer className="bg-vesper-dark text-primary-foreground">
      <div className="section-padding py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoIcon} alt="Vesper" className="h-12 w-auto" />
              <img src={logoText} alt="Vesper" className="h-4 w-auto brightness-0 invert" />
            </div>
            <p className="text-body text-primary-foreground/60 max-w-xs">
              Premium beverage distribution across the Baltic region. Connecting world-class brands with discerning markets.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-label text-primary-foreground/40 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {["About", "Portfolio", "Products", "Distribution"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-body text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-label text-primary-foreground/40 mb-6">Company</h4>
            <ul className="space-y-3">
              {["Partners", "Why Vesper", "News", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-body text-primary-foreground/60 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-label text-primary-foreground/40 mb-6">Contact</h4>
            <ul className="space-y-3 text-body text-primary-foreground/60">
              <li><a href="mailto:info@vesper.group" className="hover:text-primary transition-colors">info@vesper.group</a></li>
              <li><a href="mailto:horeca@vesper.group" className="hover:text-primary transition-colors">horeca@vesper.group</a></li>
              <li><a href="tel:+37122100200" className="hover:text-primary transition-colors">+371 22100200</a></li>
              <li><a href="tel:+37167630724" className="hover:text-primary transition-colors">+371 67630724</a></li>
              <li>Jelgavas ceļš 20, Tīraine,<br />Mārupes novads, LV-2167, Latvia</li>
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
            © {new Date().getFullYear()} Vesper Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors"
              >
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
