// ── API stubs — replace with real Supabase calls when Cloud is connected ──

export interface AdminBrand {
  id: string;
  name: string;
  category: string;
  country: string;
  est: string;
  desc: string;
  logo?: string;
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
}

// ── helpers ──
let counter = 100;
const uid = () => String(++counter);

// ── seed data ──
const seedBrands: AdminBrand[] = [
  { id: "1", name: "Duval-Leroy", category: "Champagne", country: "France", est: "1859", desc: "Prestigious French Champagne house.", logo: "https://vesper.lv/uploads/file-1759354137593-78717973.png" },
  { id: "2", name: "Compass Box", category: "Whisky", country: "Scotland", est: "2000", desc: "Innovative Scotch whisky maker." },
  { id: "3", name: "Hampden Estate", category: "Rum", country: "Jamaica", est: "1753", desc: "Legendary Jamaican rum distillery." },
  { id: "4", name: "Dassai", category: "Sake", country: "Japan", est: "1948", desc: "Premium sake from Yamaguchi prefecture." },
];

const seedProducts: AdminProduct[] = [
  { id: "1", brandId: "1", brandName: "Duval-Leroy", name: "Brut Réserve", type: "Champagne", volume: "0.75L", abv: "12%" },
  { id: "2", brandId: "1", brandName: "Duval-Leroy", name: "Rosé Prestige", type: "Champagne Rosé", volume: "0.75L", abv: "12%" },
  { id: "3", brandId: "2", brandName: "Compass Box", name: "The Spice Tree", type: "Blended Malt", volume: "0.7L", abv: "46%" },
  { id: "4", brandId: "3", brandName: "Hampden Estate", name: "8 Year Old", type: "Rum", volume: "0.7L", abv: "46%" },
];

const seedNews: AdminNewsArticle[] = [
  { id: "1", slug: "events-vesper-catering", title: "Vesper Group Premium Catering", excerpt: "Exclusive beverage catering for corporate events.", category: "Events", date: "2025-09-04", content: "Full article content here..." },
  { id: "2", slug: "baltic-market-partnerships", title: "Baltic Market Expansion", excerpt: "New partnerships in the Baltic region.", category: "Partnerships", date: "2025-01-15", content: "Full article content here..." },
];

const seedCategories: AdminCategory[] = [
  { id: "1", name: "Champagne", slug: "champagne", description: "Premium French champagnes", brandCount: 3 },
  { id: "2", name: "Whisky", slug: "whisky", description: "Single malts and blends", brandCount: 4 },
  { id: "3", name: "Rum", slug: "rum", description: "Caribbean and craft rums", brandCount: 2 },
  { id: "4", name: "Sake", slug: "sake", description: "Japanese premium sake", brandCount: 1 },
  { id: "5", name: "Wine", slug: "wine", description: "Italian and French wines", brandCount: 6 },
];

// ── in-memory stores ──
let brands = [...seedBrands];
let products = [...seedProducts];
let news = [...seedNews];
let categories = [...seedCategories];

// simulate async
const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

// ══════════════════════════════════════
// BRANDS
// ══════════════════════════════════════
export const apiBrands = {
  list: async (): Promise<AdminBrand[]> => { await delay(); return [...brands]; },
  get: async (id: string) => { await delay(); return brands.find((b) => b.id === id); },
  create: async (data: Omit<AdminBrand, "id">) => { await delay(); const b = { ...data, id: uid() }; brands.push(b); return b; },
  update: async (id: string, data: Partial<AdminBrand>) => { await delay(); brands = brands.map((b) => (b.id === id ? { ...b, ...data } : b)); return brands.find((b) => b.id === id)!; },
  delete: async (id: string) => { await delay(); brands = brands.filter((b) => b.id !== id); },
};

// ══════════════════════════════════════
// PRODUCTS
// ══════════════════════════════════════
export const apiProducts = {
  list: async (): Promise<AdminProduct[]> => { await delay(); return [...products]; },
  get: async (id: string) => { await delay(); return products.find((p) => p.id === id); },
  create: async (data: Omit<AdminProduct, "id">) => { await delay(); const p = { ...data, id: uid() }; products.push(p); return p; },
  update: async (id: string, data: Partial<AdminProduct>) => { await delay(); products = products.map((p) => (p.id === id ? { ...p, ...data } : p)); return products.find((p) => p.id === id)!; },
  delete: async (id: string) => { await delay(); products = products.filter((p) => p.id !== id); },
};

// ══════════════════════════════════════
// NEWS
// ══════════════════════════════════════
export const apiNews = {
  list: async (): Promise<AdminNewsArticle[]> => { await delay(); return [...news]; },
  get: async (id: string) => { await delay(); return news.find((n) => n.id === id); },
  create: async (data: Omit<AdminNewsArticle, "id">) => { await delay(); const n = { ...data, id: uid() }; news.push(n); return n; },
  update: async (id: string, data: Partial<AdminNewsArticle>) => { await delay(); news = news.map((n) => (n.id === id ? { ...n, ...data } : n)); return news.find((n) => n.id === id)!; },
  delete: async (id: string) => { await delay(); news = news.filter((n) => n.id !== id); },
};

// ══════════════════════════════════════
// CATEGORIES
// ══════════════════════════════════════
export const apiCategories = {
  list: async (): Promise<AdminCategory[]> => { await delay(); return [...categories]; },
  get: async (id: string) => { await delay(); return categories.find((c) => c.id === id); },
  create: async (data: Omit<AdminCategory, "id">) => { await delay(); const c = { ...data, id: uid() }; categories.push(c); return c; },
  update: async (id: string, data: Partial<AdminCategory>) => { await delay(); categories = categories.map((c) => (c.id === id ? { ...c, ...data } : c)); return categories.find((c) => c.id === id)!; },
  delete: async (id: string) => { await delay(); categories = categories.filter((c) => c.id !== id); },
};
