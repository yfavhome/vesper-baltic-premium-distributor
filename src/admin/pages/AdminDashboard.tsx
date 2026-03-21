import { useEffect, useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Wine, Package, Newspaper, FolderTree, Plus, TrendingUp, TrendingDown, AlertTriangle, Database, HardDrive, Shield, Clock, ExternalLink, BarChart3, Eye, ArrowUpRight } from "lucide-react";
import { apiBrands, apiProducts, apiNews, apiCategories, apiPageViews, AdminBrand, AdminProduct, AdminNewsArticle, PageView } from "@/admin/api/stubs";
import { Link } from "react-router-dom";
import { useAdminI18n } from "@/admin/i18n";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const COLORS = ["hsl(0, 100%, 38%)", "hsl(220, 70%, 50%)", "hsl(40, 80%, 50%)", "hsl(150, 60%, 40%)", "hsl(280, 60%, 50%)", "hsl(10, 80%, 55%)"];

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.ceil(value / 20));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(start);
    }, 40);
    return () => clearInterval(timer);
  }, [value]);
  return <>{display}</>;
}

export default function AdminDashboard() {
  const t = useAdminI18n();
  const { lang } = useLanguage();
  const [brands, setBrands] = useState<AdminBrand[]>([]);
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [news, setNews] = useState<AdminNewsArticle[]>([]);
  const [catCount, setCatCount] = useState(0);
  const [pageViews, setPageViews] = useState<PageView[]>([]);

  useEffect(() => {
    Promise.all([apiBrands.list(), apiProducts.list(), apiNews.list(), apiCategories.list(), apiPageViews.list()]).then(
      ([b, p, n, c, pv]) => { setBrands(b); setProducts(p); setNews(n); setCatCount(c.length); setPageViews(pv); }
    );
  }, []);

  const categoryData = useMemo(() => {
    const map: Record<string, number> = {};
    brands.forEach((b) => { map[b.category] = (map[b.category] || 0) + 1; });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [brands]);

  const productsByBrand = useMemo(() => {
    const map: Record<string, number> = {};
    products.forEach((p) => { map[p.brandName] = (map[p.brandName] || 0) + 1; });
    return Object.entries(map)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);
  }, [products]);

  const today = new Date().toLocaleDateString(lang === "lv" ? "lv-LV" : lang === "ru" ? "ru-RU" : "en-GB", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  const totalViews = useMemo(() => pageViews.reduce((s, p) => s + p.views, 0), [pageViews]);

  const stats = [
    { label: t.dashboard.totalBrands, value: brands.length, icon: Wine, href: "/admin/brands", color: "bg-primary/10 text-primary", ring: "ring-primary/20" },
    { label: t.dashboard.totalProducts, value: products.length, icon: Package, href: "/admin/products", color: "bg-blue-500/10 text-blue-600", ring: "ring-blue-500/20" },
    { label: t.dashboard.totalNews, value: news.length, icon: Newspaper, href: "/admin/news", color: "bg-amber-500/10 text-amber-600", ring: "ring-amber-500/20" },
    { label: t.dashboard.totalCategories, value: catCount, icon: FolderTree, href: "/admin/categories", color: "bg-emerald-500/10 text-emerald-600", ring: "ring-emerald-500/20" },
  ];

  const quickActions = [
    { label: t.dashboard.addBrand, href: "/admin/brands", icon: Wine, color: "text-primary" },
    { label: t.dashboard.addProduct, href: "/admin/products", icon: Package, color: "text-blue-600" },
    { label: t.dashboard.addArticle, href: "/admin/news", icon: Newspaper, color: "text-amber-600" },
    { label: t.dashboard.addCategory, href: "/admin/categories", icon: FolderTree, color: "text-emerald-600" },
  ];

  const systemItems = [
    { label: t.dashboard.database, icon: Database, status: t.dashboard.statusStub, ok: false },
    { label: t.dashboard.storage, icon: HardDrive, status: t.dashboard.notConnected, ok: false },
    { label: t.dashboard.auth, icon: Shield, status: t.dashboard.notConnected, ok: false },
  ];

  return (
    <div className="space-y-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-sm text-muted-foreground">{t.dashboard.welcome} 👋</p>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight mt-1">
            {t.dashboard.title}
          </h1>
          <div className="flex items-center gap-2 mt-1.5">
            <Clock className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground capitalize">{today}</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex gap-2">
          <Link to="/admin/brands">
            <Button className="gap-2 shadow-sm"><Plus className="h-4 w-4" /> {t.dashboard.addBrand}</Button>
          </Link>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
            <Link to={s.href}>
              <Card className={`group relative overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border cursor-pointer hover:ring-2 ${s.ring}`}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">{s.label}</p>
                      <p className="text-3xl font-bold text-foreground mt-2 tabular-nums">
                        <AnimatedNumber value={s.value} />
                      </p>
                    </div>
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${s.color} ring-1 ${s.ring}`}>
                      <s.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 mt-3">
                    <TrendingUp className="h-3 w-3 text-emerald-500" />
                    <span className="text-[11px] text-emerald-600 font-medium">{t.common.active}</span>
                    <span className="text-[11px] text-muted-foreground ml-auto group-hover:text-primary transition-colors">{t.dashboard.viewAll} →</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar chart - products by brand */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  {t.products.title} / {t.products.brand}
                </h2>
              </div>
              {productsByBrand.length > 0 ? (
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={productsByBrand} barSize={28}>
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis allowDecimals={false} tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid hsl(var(--border))" }} />
                    <Bar dataKey="count" fill="hsl(0, 100%, 38%)" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-[220px] flex items-center justify-center text-sm text-muted-foreground">{t.common.noData}</div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Pie chart - categories */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <FolderTree className="h-4 w-4 text-muted-foreground" />
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  {t.dashboard.contentBreakdown}
                </h2>
              </div>
              {categoryData.length > 0 ? (
                <div className="flex items-center gap-6">
                  <ResponsiveContainer width={180} height={180}>
                    <PieChart>
                      <Pie data={categoryData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={3} strokeWidth={0}>
                        {categoryData.map((_, i) => (
                          <Cell key={i} fill={COLORS[i % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid hsl(var(--border))" }} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex-1 space-y-2">
                    {categoryData.map((d, i) => (
                      <div key={d.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                          <span className="text-foreground">{d.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">{d.value}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="h-[180px] flex items-center justify-center text-sm text-muted-foreground">{t.common.noData}</div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Page Views Statistics */}
      {pageViews.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}>
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">{t.dashboard.pageViews}</h2>
                </div>
                <Badge variant="secondary" className="text-xs font-mono">
                  {totalViews.toLocaleString()} {t.dashboard.views}
                </Badge>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {pageViews.slice(0, 8).map((pv, i) => (
                  <div key={pv.path} className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/20 transition-colors">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-foreground truncate">{pv.title}</p>
                      <p className="text-[10px] text-muted-foreground font-mono truncate">{pv.path}</p>
                    </div>
                    <div className="text-right ml-3 shrink-0">
                      <p className="text-sm font-bold tabular-nums text-foreground">{pv.views.toLocaleString()}</p>
                      <div className={`flex items-center gap-0.5 justify-end ${pv.trend >= 0 ? "text-emerald-600" : "text-destructive"}`}>
                        {pv.trend >= 0 ? <TrendingUp className="h-2.5 w-2.5" /> : <TrendingDown className="h-2.5 w-2.5" />}
                        <span className="text-[10px] font-medium">{pv.trend > 0 ? "+" : ""}{pv.trend}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick actions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="border-border/50 h-full">
            <CardContent className="p-6">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">{t.dashboard.quickActions}</h2>
              <div className="space-y-2">
                {quickActions.map((a) => (
                  <Link to={a.href} key={a.label}>
                    <Button variant="ghost" className="w-full justify-start gap-3 h-11 hover:bg-accent transition-all">
                      <div className={`h-7 w-7 rounded-lg bg-accent flex items-center justify-center ${a.color}`}>
                        <Plus className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm">{a.label}</span>
                      <ExternalLink className="h-3 w-3 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100" />
                    </Button>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* System status */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
          <Card className="border-border/50 h-full">
            <CardContent className="p-6">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">{t.dashboard.systemStatus}</h2>
              <div className="space-y-4">
                {systemItems.map((s) => (
                  <div key={s.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <s.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-foreground">{s.label}</span>
                    </div>
                    <Badge variant={s.ok ? "default" : "secondary"} className={`text-[10px] ${!s.ok ? "bg-amber-100 text-amber-700 border-amber-200" : ""}`}>
                      {s.status}
                    </Badge>
                  </div>
                ))}
                <div className="pt-2">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                    <span>Memory usage</span>
                    <span>24%</span>
                  </div>
                  <Progress value={24} className="h-1.5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stub warning */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Card className="border-amber-200/60 bg-gradient-to-br from-amber-50/50 to-orange-50/30 dark:from-amber-950/20 dark:to-orange-950/10 dark:border-amber-800/30 h-full">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <h2 className="text-sm font-semibold text-amber-800 dark:text-amber-300">{t.dashboard.stubWarning}</h2>
              </div>
              <p className="text-xs text-amber-700/80 dark:text-amber-400/70 leading-relaxed mb-4">
                {t.dashboard.stubDesc}
              </p>
              <Button size="sm" variant="outline" className="w-full border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/30 gap-2">
                <Database className="h-3.5 w-3.5" />
                {t.dashboard.connectCloud}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent news */}
      {news.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">{t.dashboard.recentActivity}</h2>
                <Link to="/admin/news">
                  <Button variant="ghost" size="sm" className="text-xs gap-1">{t.dashboard.viewAll} <ExternalLink className="h-3 w-3" /></Button>
                </Link>
              </div>
              <div className="space-y-3">
                {news.slice(0, 3).map((n) => (
                  <div key={n.id} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                      <Newspaper className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{n.title}</p>
                      <p className="text-[11px] text-muted-foreground">{n.category} · {n.date}</p>
                    </div>
                    <Badge variant="secondary" className="text-[10px] shrink-0">{n.category}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
