import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, Language } from "@/i18n/LanguageContext";
import logoIcon from "@/assets/logo-v-icon.png";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "lv", label: "LV" },
  { code: "ru", label: "RU" },
];

interface DropdownItem {
  label: string;
  path: string;
  external?: boolean;
}

interface NavItem {
  label: string;
  path?: string;
  external?: boolean;
  children?: DropdownItem[];
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navItems: NavItem[] = [
    { label: t.nav.home, path: "/" },
    {
      label: t.nav.about,
      children: [
        { label: t.nav.about, path: "/about" },
        { label: "Why Vesper", path: "/why-vesper" },
        { label: "Brand Partnership", path: "/brand-partnership" },
      ],
    },
    { label: t.nav.portfolio, path: "/portfolio" },
    {
      label: t.nav.products,
      children: [
        { label: t.nav.products, path: "/products" },
        { label: t.nav.distribution, path: "/distribution" },
      ],
    },
    { label: t.nav.partners, path: "/partners" },
    { label: t.nav.news, path: "/news" },
    { label: t.nav.contact, path: "/contact" },
    { label: t.nav.shop, path: "https://www.alko.lv/", external: true },
  ];

  // Flatten for mobile + active detection
  const allPaths = navItems.flatMap((item) =>
    item.children ? item.children.map((c) => c.path) : item.path ? [item.path] : []
  );

  const isActiveDropdown = (item: NavItem) =>
    item.children?.some((c) => location.pathname === c.path);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const linkClass = (isActive: boolean) =>
    `text-[10px] 2xl:text-[11px] font-body font-semibold uppercase tracking-[0.12em] transition-colors duration-300 hover:text-primary relative whitespace-nowrap after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
      isActive
        ? "text-primary after:w-full"
        : scrolled
        ? "text-foreground/70 after:w-0 hover:after:w-full"
        : "text-primary-foreground/80 after:w-0 hover:after:w-full"
    }`;

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
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 relative z-50 shrink-0">
            <img src={logoIcon} alt="Vesper" className={`h-12 lg:h-14 w-auto object-contain transition-all duration-500 ${
              scrolled ? "" : "mix-blend-screen"
            }`} />
            <span className={`font-body text-[14px] lg:text-[16px] font-bold tracking-[0.25em] uppercase transition-colors duration-500 ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              VESPER
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navItems.map((item) => {
              // Dropdown item
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={`${linkClass(!!isActiveDropdown(item))} flex items-center gap-1`}
                    >
                      {item.label}
                      <ChevronDown
                        size={10}
                        className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isActiveDropdown(item) && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[180px] bg-background/95 backdrop-blur-md border border-border shadow-xl py-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={`block px-5 py-2.5 text-[11px] font-body font-semibold uppercase tracking-[0.1em] transition-colors duration-200 ${
                                location.pathname === child.path
                                  ? "text-primary bg-primary/5"
                                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // External link
              if (item.external) {
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass(false)}
                  >
                    {item.label}
                  </a>
                );
              }

              // Regular link
              return (
                <Link
                  key={item.path}
                  to={item.path!}
                  className={linkClass(location.pathname === item.path)}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Language Switcher */}
            <div className={`flex items-center gap-0.5 ml-1 pl-3 border-l ${
              scrolled ? "border-foreground/15" : "border-primary-foreground/20"
            }`}>
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`text-[10px] font-body font-bold uppercase tracking-wider px-1.5 py-1 transition-all ${
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

          {/* Tablet/Mobile: Language + Toggle */}
          <div className="flex xl:hidden items-center gap-2 relative z-50">
            <div className="hidden md:flex items-center gap-0.5 mr-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`text-[10px] font-body font-bold uppercase tracking-wider px-1 py-0.5 transition-all ${
                    lang === l.code
                      ? "text-primary"
                      : mobileOpen
                      ? "text-foreground/40"
                      : scrolled
                      ? "text-foreground/40"
                      : "text-primary-foreground/40"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 transition-colors ${
                mobileOpen ? "text-foreground" : scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
            <div className="flex flex-col items-center justify-center h-full gap-5">
              {navItems.map((item, i) => {
                // Dropdown in mobile → expandable
                if (item.children) {
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.04 }}
                      className="text-center"
                    >
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className={`text-xl font-display font-semibold tracking-wide transition-colors hover:text-primary flex items-center gap-2 ${
                          isActiveDropdown(item) ? "text-primary" : "text-foreground/70"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col items-center gap-3 mt-3">
                              {item.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className={`text-base font-display tracking-wide transition-colors hover:text-primary ${
                                    location.pathname === child.path ? "text-primary" : "text-foreground/50"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.04 }}
                  >
                    {item.external ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-display font-semibold tracking-wide transition-colors hover:text-primary text-foreground/70"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.path!}
                        className={`text-xl font-display font-semibold tracking-wide transition-colors hover:text-primary ${
                          location.pathname === item.path ? "text-primary" : "text-foreground/70"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}

              {/* Mobile Language Switcher */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navItems.length * 0.04 }}
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
