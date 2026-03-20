// ── API stubs — replace with real Supabase calls when Cloud is connected ──

export interface AdminBrand {
  id: string;
  name: string;
  category: string;
  country: string;
  est: string;
  desc: string;
  logo?: string;
  order?: number;
}

export interface AdminProduct {
  id: string;
  brandId: string;
  brandName: string;
  name: string;
  type: string;
  volume?: string;
  abv?: string;
  image?: string;
  shopUrl?: string;
}

export interface AdminNewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
  content: string;
}

export interface AdminCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  brandCount: number;
  order?: number;
}

// ── Audit Log ──
export interface AuditEntry {
  id: string;
  action: "create" | "update" | "delete";
  entity: "brand" | "product" | "news" | "category";
  entityName: string;
  timestamp: string;
  user: string;
}

// ── Page Views ──
export interface PageView {
  path: string;
  title: string;
  views: number;
  trend: number; // percentage
}

// ── helpers ──
let counter = 100;
const uid = () => String(++counter);

// ── audit log store ──
const auditLog: AuditEntry[] = [];
function logAction(action: AuditEntry["action"], entity: AuditEntry["entity"], entityName: string) {
  auditLog.unshift({
    id: uid(),
    action,
    entity,
    entityName,
    timestamp: new Date().toISOString(),
    user: "Admin",
  });
  if (auditLog.length > 50) auditLog.pop();
}

// ── seed data ──
const seedBrands: AdminBrand[] = [
  { id: "1", name: "Duval-Leroy", category: "Champagne", country: "France", est: "1859", desc: "Prestigious French Champagne house.", logo: "https://vesper.lv/uploads/file-1759354137593-78717973.png", order: 0 },
  { id: "2", name: "Compass Box", category: "Whisky", country: "Scotland", est: "2000", desc: "Innovative Scotch whisky maker.", order: 1 },
  { id: "3", name: "Hampden Estate", category: "Rum", country: "Jamaica", est: "1753", desc: "Legendary Jamaican rum distillery.", order: 2 },
  { id: "4", name: "Dassai", category: "Sake", country: "Japan", est: "1948", desc: "Premium sake from Yamaguchi prefecture.", order: 3 },
];

const seedProducts: AdminProduct[] = [
  { id: "1", brandId: "1", brandName: "Duval-Leroy", name: "Brut Réserve", type: "Champagne", volume: "0.75L", abv: "12%" },
  { id: "2", brandId: "1", brandName: "Duval-Leroy", name: "Rosé Prestige", type: "Champagne Rosé", volume: "0.75L", abv: "12%" },
  { id: "3", brandId: "2", brandName: "Compass Box", name: "The Spice Tree", type: "Blended Malt", volume: "0.7L", abv: "46%" },
  { id: "4", brandId: "3", brandName: "Hampden Estate", name: "8 Year Old", type: "Rum", volume: "0.7L", abv: "46%" },
];

const seedNews: AdminNewsArticle[] = [
  { id: "1", slug: "events-vesper-catering", title: "Vesper Group Premium Catering", excerpt: "Exclusive beverage catering for corporate events.", category: "Events", date: "2025-09-04", content: "# Vesper Catering\n\nWe offer **premium beverage catering** for corporate events.\n\n## Services\n- Cocktail bars\n- Wine pairings\n- Brand activations\n\n> Excellence in every glass." },
  { id: "2", slug: "baltic-market-partnerships", title: "Baltic Market Expansion", excerpt: "New partnerships in the Baltic region.", category: "Partnerships", date: "2025-01-15", content: "# Baltic Expansion\n\nNew partnerships across **Latvia**, **Lithuania**, and **Estonia**.\n\n## Key highlights\n1. 15 new retail partners\n2. HoReCa expansion\n3. E-commerce growth" },
];

const seedCategories: AdminCategory[] = [
  { id: "1", name: "Champagne", slug: "champagne", description: "Premium French champagnes", brandCount: 3, order: 0 },
  { id: "2", name: "Whisky", slug: "whisky", description: "Single malts and blends", brandCount: 4, order: 1 },
  { id: "3", name: "Rum", slug: "rum", description: "Caribbean and craft rums", brandCount: 2, order: 2 },
  { id: "4", name: "Sake", slug: "sake", description: "Japanese premium sake", brandCount: 1, order: 3 },
  { id: "5", name: "Wine", slug: "wine", description: "Italian and French wines", brandCount: 6, order: 4 },
];

// ── page views seed ──
const pageViews: PageView[] = [
  { path: "/", title: "Home", views: 2847, trend: 12 },
  { path: "/portfolio", title: "Portfolio", views: 1523, trend: 8 },
  { path: "/products", title: "Products", views: 1198, trend: -3 },
  { path: "/brand/duval-leroy", title: "Duval-Leroy", views: 892, trend: 24 },
  { path: "/news", title: "News", views: 634, trend: 15 },
  { path: "/contact", title: "Contact", views: 412, trend: 5 },
  { path: "/brand/compass-box", title: "Compass Box", views: 367, trend: 18 },
  { path: "/about", title: "About", views: 289, trend: -1 },
];

// ── in-memory stores ──
let brands = [...seedBrands];
let products = [...seedProducts];
let news = [...seedNews];
let categories = [...seedCategories];

const delay = (ms = 200) => new Promise((r) => setTimeout(r, ms));

// ══════════════════════════════════════
// BRANDS
// ══════════════════════════════════════
export const apiBrands = {
  list: async (): Promise<AdminBrand[]> => { await delay(); return [...brands].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)); },
  get: async (id: string) => { await delay(); return brands.find((b) => b.id === id); },
  create: async (data: Omit<AdminBrand, "id">) => { await delay(); const b = { ...data, id: uid(), order: brands.length }; brands.push(b); logAction("create", "brand", b.name); return b; },
  update: async (id: string, data: Partial<AdminBrand>) => { await delay(); brands = brands.map((b) => (b.id === id ? { ...b, ...data } : b)); logAction("update", "brand", brands.find((b) => b.id === id)?.name || ""); return brands.find((b) => b.id === id)!; },
  delete: async (id: string) => { const name = brands.find((b) => b.id === id)?.name || ""; await delay(); brands = brands.filter((b) => b.id !== id); logAction("delete", "brand", name); },
  reorder: async (ids: string[]) => { await delay(); brands = ids.map((id, i) => ({ ...brands.find((b) => b.id === id)!, order: i })); },
};

// ══════════════════════════════════════
// PRODUCTS
// ══════════════════════════════════════
export const apiProducts = {
  list: async (): Promise<AdminProduct[]> => { await delay(); return [...products]; },
  get: async (id: string) => { await delay(); return products.find((p) => p.id === id); },
  create: async (data: Omit<AdminProduct, "id">) => { await delay(); const p = { ...data, id: uid() }; products.push(p); logAction("create", "product", p.name); return p; },
  update: async (id: string, data: Partial<AdminProduct>) => { await delay(); products = products.map((p) => (p.id === id ? { ...p, ...data } : p)); logAction("update", "product", products.find((p) => p.id === id)?.name || ""); return products.find((p) => p.id === id)!; },
  delete: async (id: string) => { const name = products.find((p) => p.id === id)?.name || ""; await delay(); products = products.filter((p) => p.id !== id); logAction("delete", "product", name); },
};

// ══════════════════════════════════════
// NEWS
// ══════════════════════════════════════
export const apiNews = {
  list: async (): Promise<AdminNewsArticle[]> => { await delay(); return [...news]; },
  get: async (id: string) => { await delay(); return news.find((n) => n.id === id); },
  create: async (data: Omit<AdminNewsArticle, "id">) => { await delay(); const n = { ...data, id: uid() }; news.push(n); logAction("create", "news", n.title); return n; },
  update: async (id: string, data: Partial<AdminNewsArticle>) => { await delay(); news = news.map((n) => (n.id === id ? { ...n, ...data } : n)); logAction("update", "news", news.find((n) => n.id === id)?.title || ""); return news.find((n) => n.id === id)!; },
  delete: async (id: string) => { const title = news.find((n) => n.id === id)?.title || ""; await delay(); news = news.filter((n) => n.id !== id); logAction("delete", "news", title); },
};

// ══════════════════════════════════════
// CATEGORIES
// ══════════════════════════════════════
export const apiCategories = {
  list: async (): Promise<AdminCategory[]> => { await delay(); return [...categories].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)); },
  get: async (id: string) => { await delay(); return categories.find((c) => c.id === id); },
  create: async (data: Omit<AdminCategory, "id">) => { await delay(); const c = { ...data, id: uid(), order: categories.length }; categories.push(c); logAction("create", "category", c.name); return c; },
  update: async (id: string, data: Partial<AdminCategory>) => { await delay(); categories = categories.map((c) => (c.id === id ? { ...c, ...data } : c)); logAction("update", "category", categories.find((c) => c.id === id)?.name || ""); return categories.find((c) => c.id === id)!; },
  delete: async (id: string) => { const name = categories.find((c) => c.id === id)?.name || ""; await delay(); categories = categories.filter((c) => c.id !== id); logAction("delete", "category", name); },
  reorder: async (ids: string[]) => { await delay(); categories = ids.map((id, i) => ({ ...categories.find((c) => c.id === id)!, order: i })); },
};

// ══════════════════════════════════════
// AUDIT LOG
// ══════════════════════════════════════
export const apiAudit = {
  list: async (): Promise<AuditEntry[]> => { await delay(); return [...auditLog]; },
};

// ══════════════════════════════════════
// PAGE VIEWS
// ══════════════════════════════════════
export const apiPageViews = {
  list: async (): Promise<PageView[]> => { await delay(); return [...pageViews]; },
};

// ══════════════════════════════════════
// EMAIL NOTIFICATIONS (stub)
// ══════════════════════════════════════
export const apiNotifications = {
  send: async (type: string, entityName: string): Promise<{ success: boolean }> => {
    await delay(500);
    console.log(`[Email Stub] Notification: ${type} — ${entityName}`);
    return { success: true };
  },
};
