import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, Language } from "@/i18n/LanguageContext";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "lv", label: "LV" },
  { code: "ru", label: "RU" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.portfolio, path: "/portfolio" },
    { label: t.nav.products, path: "/products" },
    { label: t.nav.distribution, path: "/distribution" },
    { label: t.nav.partners, path: "/partners" },
    { label: t.nav.news, path: "/news" },
    { label: t.nav.contact, path: "/contact" },
    { label: t.nav.shop, path: "https://www.alko.lv/", external: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_hsl(var(--border))]"
            : "bg-transparent"
        }`}
      >
        <div className="section-padding flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex items-center gap-1 relative z-50">
            <span className="font-display text-3xl lg:text-4xl font-bold text-primary leading-none">V</span>
            <span className="text-primary text-[8px] lg:text-[9px] -ml-0.5 -mt-3 leading-none">★</span>
            <span className={`font-body text-[15px] lg:text-[17px] font-bold tracking-[0.25em] uppercase transition-colors duration-500 ml-1.5 ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              VESPER
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) =>
              'external' in link && link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[11px] font-body font-semibold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-primary ${
                    scrolled ? "text-foreground/70" : "text-primary-foreground/80"
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] font-body font-semibold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-primary relative ${
                    location.pathname === link.path
                      ? "text-primary"
                      : scrolled
                      ? "text-foreground/70"
                      : "text-primary-foreground/80"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              )
            )}

            {/* Language Switcher */}
            <div className="flex items-center gap-1 ml-2 border-l border-current/20 pl-4">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`text-[10px] font-body font-bold uppercase tracking-wider px-1.5 py-0.5 transition-all ${
                    lang === l.code
                      ? "text-primary"
                      : scrolled
                      ? "text-foreground/40 hover:text-foreground/70"
                      : "text-primary-foreground/40 hover:text-primary-foreground/70"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors relative z-50 ${
              mobileOpen ? "text-foreground" : scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                >
                  {'external' in link && link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-display font-semibold tracking-wide transition-colors hover:text-primary text-foreground/70"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className={`text-xl font-display font-semibold tracking-wide transition-colors hover:text-primary ${
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-foreground/70"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile Language Switcher */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.04 }}
                className="flex items-center gap-3 mt-4 pt-4 border-t border-border"
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`text-sm font-body font-bold uppercase tracking-wider px-3 py-1.5 transition-all ${
                      lang === l.code
                        ? "text-primary border-b-2 border-primary"
                        : "text-foreground/40 hover:text-foreground/70"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
