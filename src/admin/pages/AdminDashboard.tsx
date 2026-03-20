import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wine, Package, Newspaper, FolderTree, Plus, TrendingUp, AlertTriangle } from "lucide-react";
import { apiBrands, apiProducts, apiNews, apiCategories } from "@/admin/api/stubs";
import { Link } from "react-router-dom";
import { useAdminI18n } from "@/admin/i18n";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const t = useAdminI18n();
  const [counts, setCounts] = useState({ brands: 0, products: 0, news: 0, categories: 0 });

  useEffect(() => {
    Promise.all([apiBrands.list(), apiProducts.list(), apiNews.list(), apiCategories.list()]).then(
      ([b, p, n, c]) => setCounts({ brands: b.length, products: p.length, news: n.length, categories: c.length })
    );
  }, []);

  const stats = [
    { label: t.dashboard.totalBrands, value: counts.brands, icon: Wine, href: "/admin/brands", gradient: "from-primary/20 to-primary/5", iconColor: "text-primary" },
    { label: t.dashboard.totalProducts, value: counts.products, icon: Package, href: "/admin/products", gradient: "from-blue-500/20 to-blue-500/5", iconColor: "text-blue-600" },
    { label: t.dashboard.totalNews, value: counts.news, icon: Newspaper, href: "/admin/news", gradient: "from-amber-500/20 to-amber-500/5", iconColor: "text-amber-600" },
    { label: t.dashboard.totalCategories, value: counts.categories, icon: FolderTree, href: "/admin/categories", gradient: "from-emerald-500/20 to-emerald-500/5", iconColor: "text-emerald-600" },
  ];

  const quickActions = [
    { label: t.dashboard.addBrand, href: "/admin/brands", icon: Wine },
    { label: t.dashboard.addProduct, href: "/admin/products", icon: Package },
    { label: t.dashboard.addArticle, href: "/admin/news", icon: Newspaper },
    { label: t.dashboard.addCategory, href: "/admin/categories", icon: FolderTree },
  ];

  return (
    <div className="space-y-8 max-w-7xl">
      {/* Header */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight"
        >
          {t.dashboard.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-muted-foreground mt-1"
        >
          {t.dashboard.subtitle}
        </motion.p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Link to={s.href}>
              <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <CardContent className="relative p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{s.label}</p>
                      <p className="text-3xl font-bold text-foreground mt-2">{s.value}</p>
                    </div>
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center bg-background shadow-sm ${s.iconColor}`}>
                      <s.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    <TrendingUp className="h-3 w-3 text-emerald-500" />
                    <span className="text-xs text-emerald-600 font-medium">Active</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="lg:col-span-2"
        >
          <Card className="border-border/50">
            <CardContent className="p-6">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">{t.dashboard.quickActions}</h2>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((a) => (
                  <Link to={a.href} key={a.label}>
                    <Button variant="outline" className="w-full justify-start gap-3 h-12 hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all">
                      <div className="h-7 w-7 rounded-md bg-primary/10 flex items-center justify-center">
                        <Plus className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-sm">{a.label}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stub warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-amber-200/50 bg-amber-50/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <h2 className="text-sm font-semibold text-amber-800">{t.dashboard.stubWarning}</h2>
              </div>
              <p className="text-xs text-amber-700/80 leading-relaxed">
                {t.dashboard.stubDesc}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
