import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "@/assets/logo-icon.png";
import logoText from "@/assets/logo-text.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Products", path: "/products" },
  { label: "Distribution", path: "/distribution" },
  { label: "Partners", path: "/partners" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
  { label: "Shop", path: "https://www.alko.lv/", external: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
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
          <Link to="/" className="flex items-center gap-3 relative z-50">
            <img src={logoIcon} alt="Vesper" className="h-9 lg:h-11 w-auto" />
            <img
              src={logoText}
              alt="Vesper"
              className={`h-3.5 lg:h-4 w-auto transition-all duration-500 ${
                scrolled ? "brightness-0" : "brightness-0 invert"
              }`}
            />
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
