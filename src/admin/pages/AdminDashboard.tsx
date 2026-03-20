import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wine, Package, Newspaper, FolderTree } from "lucide-react";
import { apiBrands, apiProducts, apiNews, apiCategories } from "@/admin/api/stubs";
import { Link } from "react-router-dom";

const stats = [
  { label: "Бренды", icon: Wine, key: "brands" as const, href: "/admin/brands", color: "text-primary" },
  { label: "Продукты", icon: Package, key: "products" as const, href: "/admin/products", color: "text-blue-600" },
  { label: "Новости", icon: Newspaper, key: "news" as const, href: "/admin/news", color: "text-amber-600" },
  { label: "Категории", icon: FolderTree, key: "categories" as const, href: "/admin/categories", color: "text-emerald-600" },
];

export default function AdminDashboard() {
  const [counts, setCounts] = useState({ brands: 0, products: 0, news: 0, categories: 0 });

  useEffect(() => {
    Promise.all([apiBrands.list(), apiProducts.list(), apiNews.list(), apiCategories.list()]).then(
      ([b, p, n, c]) => setCounts({ brands: b.length, products: p.length, news: n.length, categories: c.length })
    );
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Общий обзор контента</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Link to={s.href} key={s.key}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">{counts[s.key]}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">⚠️ API в режиме заглушек</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Данные хранятся в памяти и сбрасываются при перезагрузке. Подключите Lovable Cloud для
            постоянного хранения, авторизации и загрузки файлов.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
