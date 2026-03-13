import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="section-padding flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl lg:text-3xl font-bold tracking-tight">
              <span className="text-primary">VESPER</span>
              <span className={`${scrolled ? "text-foreground" : "text-primary-foreground"} transition-colors duration-500`}>
                {" "}GROUP
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => 
              'external' in link && link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs font-body font-semibold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-primary ${
                    scrolled ? "text-foreground/70" : "text-primary-foreground/80"
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-body font-semibold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-primary ${
                    location.pathname === link.path
                      ? "text-primary"
                      : scrolled
                      ? "text-foreground/70"
                      : "text-primary-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24"
          >
            <div className="flex flex-col items-center gap-6 py-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
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
                      className={`text-lg font-display font-semibold tracking-wide transition-colors hover:text-primary ${
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
