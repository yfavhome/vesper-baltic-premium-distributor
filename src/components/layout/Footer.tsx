import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-vesper-dark text-primary-foreground">
      <div className="section-padding py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-primary">VESPER</span> GROUP
            </h3>
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
              <li>info@vespergroup.com</li>
              <li>+371 2000 0000</li>
              <li>Riga, Latvia</li>
            </ul>
            <div className="flex gap-4 mt-6">
              {["LinkedIn", "Instagram", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/40 hover:text-primary transition-colors"
                >
                  {s.slice(0, 2)}
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
