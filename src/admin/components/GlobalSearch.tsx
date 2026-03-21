import { useState, useEffect, useMemo, useRef } from "react";
import { Search, Wine, Package, Newspaper, FolderTree, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { apiBrands, apiProducts, apiNews, apiCategories, AdminBrand, AdminProduct, AdminNewsArticle, AdminCategory } from "@/admin/api/stubs";
import { useNavigate } from "react-router-dom";
import { useAdminI18n } from "@/admin/i18n";

interface SearchResult {
  type: "brand" | "product" | "news" | "category";
  id: string;
  name: string;
  subtitle: string;
  href: string;
}

const typeConfig = {
  brand: { icon: Wine, color: "text-primary", bg: "bg-primary/10" },
  product: { icon: Package, color: "text-blue-600", bg: "bg-blue-500/10" },
  news: { icon: Newspaper, color: "text-amber-600", bg: "bg-amber-500/10" },
  category: { icon: FolderTree, color: "text-emerald-600", bg: "bg-emerald-500/10" },
};

export function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const t = useAdminI18n();

  // Load all data once
  const [allData, setAllData] = useState<{
    brands: AdminBrand[];
    products: AdminProduct[];
    news: AdminNewsArticle[];
    categories: AdminCategory[];
  }>({ brands: [], products: [], news: [], categories: [] });

  useEffect(() => {
    Promise.all([apiBrands.list(), apiProducts.list(), apiNews.list(), apiCategories.list()])
      .then(([brands, products, news, categories]) => setAllData({ brands, products, news, categories }));
  }, []);

  // Search
  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.toLowerCase();
    const r: SearchResult[] = [];

    allData.brands.filter(b => b.name.toLowerCase().includes(q) || b.category.toLowerCase().includes(q))
      .forEach(b => r.push({ type: "brand", id: b.id, name: b.name, subtitle: `${b.category} · ${b.country}`, href: "/admin/brands" }));

    allData.products.filter(p => p.name.toLowerCase().includes(q) || p.brandName.toLowerCase().includes(q))
      .forEach(p => r.push({ type: "product", id: p.id, name: p.name, subtitle: `${p.brandName} · ${p.type}`, href: "/admin/products" }));

    allData.news.filter(n => n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q))
      .forEach(n => r.push({ type: "news", id: n.id, name: n.title, subtitle: `${n.category} · ${n.date}`, href: "/admin/news" }));

    allData.categories.filter(c => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q))
      .forEach(c => r.push({ type: "category", id: c.id, name: c.name, subtitle: c.description, href: "/admin/categories" }));

    setResults(r.slice(0, 8));
    setSelectedIdx(0);
  }, [query, allData]);

  // Keyboard nav
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIdx(i => Math.min(i + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSelectedIdx(i => Math.max(i - 1, 0)); }
    else if (e.key === "Enter" && results[selectedIdx]) {
      navigate(results[selectedIdx].href);
      setQuery("");
      setOpen(false);
    }
    else if (e.key === "Escape") { setOpen(false); setQuery(""); }
  };

  // Click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Ctrl+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div ref={containerRef} className="relative flex-1 max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => query && setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={`${t.common.search} (Ctrl+K)`}
          className="pl-9 pr-16 h-9 bg-secondary/50 border-border/50 text-sm"
        />
        <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden sm:inline-flex h-5 items-center gap-0.5 rounded border bg-muted px-1.5 text-[10px] font-mono text-muted-foreground">
          ⌘K
        </kbd>
      </div>

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-popover border border-border rounded-lg shadow-lg overflow-hidden z-50">
          <div className="py-1.5">
            {results.map((r, i) => {
              const cfg = typeConfig[r.type];
              const Icon = cfg.icon;
              return (
                <button
                  key={`${r.type}-${r.id}`}
                  onClick={() => { navigate(r.href); setQuery(""); setOpen(false); }}
                  onMouseEnter={() => setSelectedIdx(i)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors ${
                    i === selectedIdx ? "bg-accent" : "hover:bg-accent/50"
                  }`}
                >
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${cfg.bg}`}>
                    <Icon className={`h-4 w-4 ${cfg.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{r.name}</p>
                    <p className="text-[11px] text-muted-foreground truncate">{r.subtitle}</p>
                  </div>
                  <Badge variant="outline" className="text-[9px] shrink-0">{t.audit[r.type]}</Badge>
                  {i === selectedIdx && <ArrowRight className="h-3 w-3 text-muted-foreground shrink-0" />}
                </button>
              );
            })}
          </div>
          <div className="px-3 py-2 border-t bg-muted/30 flex items-center gap-3 text-[10px] text-muted-foreground">
            <span>↑↓ navigate</span>
            <span>↵ open</span>
            <span>esc close</span>
          </div>
        </div>
      )}

      {open && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-popover border border-border rounded-lg shadow-lg z-50 p-6 text-center">
          <Search className="h-8 w-8 text-muted-foreground/30 mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">{t.common.noData}</p>
        </div>
      )}
    </div>
  );
}
