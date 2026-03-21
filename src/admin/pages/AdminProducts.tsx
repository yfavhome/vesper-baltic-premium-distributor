import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DataTable, Column } from "@/admin/components/DataTable";
import { ImageUpload } from "@/admin/components/ImageUpload";
import { AdminProduct, AdminBrand, apiProducts, apiBrands } from "@/admin/api/stubs";
import { Plus, Filter } from "lucide-react";
import { toast } from "sonner";
import { useAdminI18n } from "@/admin/i18n";
import { motion } from "framer-motion";

const emptyProduct: Omit<AdminProduct, "id"> = { brandId: "", brandName: "", name: "", type: "", volume: "", abv: "", image: "", shopUrl: "" };

export default function AdminProducts() {
  const t = useAdminI18n();
  const [data, setData] = useState<AdminProduct[]>([]);
  const [brands, setBrands] = useState<AdminBrand[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<AdminProduct | null>(null);
  const [form, setForm] = useState(emptyProduct);
  const [filterBrand, setFilterBrand] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const load = () => {
    setLoading(true);
    Promise.all([apiProducts.list(), apiBrands.list()]).then(([p, b]) => {
      setData(p); setBrands(b); setLoading(false);
    });
  };
  useEffect(load, []);

  const types = useMemo(() => [...new Set(data.map((p) => p.type).filter(Boolean))], [data]);

  const filtered = useMemo(() => {
    let result = data;
    if (filterBrand !== "all") result = result.filter((p) => p.brandId === filterBrand);
    if (filterType !== "all") result = result.filter((p) => p.type === filterType);
    return result;
  }, [data, filterBrand, filterType]);

  const openCreate = () => { setEditing(null); setForm(emptyProduct); setOpen(true); };
  const openEdit = (p: AdminProduct) => { setEditing(p); setForm(p); setOpen(true); };

  const save = async () => {
    if (!form.name.trim()) { toast.error(t.products.nameRequired); return; }
    if (!form.brandId) { toast.error(t.products.brandRequired); return; }
    const brandName = brands.find((b) => b.id === form.brandId)?.name || "";
    const payload = { ...form, brandName };
    if (editing) { await apiProducts.update(editing.id, payload); toast.success(t.products.productUpdated); }
    else { await apiProducts.create(payload); toast.success(t.products.productCreated); }
    setOpen(false); load();
  };

  const remove = async (p: AdminProduct) => {
    if (!confirm(`${t.common.confirmDelete} "${p.name}"?`)) return;
    await apiProducts.delete(p.id); toast.success(t.products.productDeleted); load();
  };

  const duplicate = async (p: AdminProduct) => {
    const { id, ...rest } = p;
    await apiProducts.create({ ...rest, name: `${rest.name} (copy)` });
    toast.success(t.products.duplicated); load();
  };

  const bulkDelete = async (ids: string[]) => {
    if (!confirm(`${t.common.confirmDelete} ${ids.length} ${t.common.items}?`)) return;
    await Promise.all(ids.map((id) => apiProducts.delete(id)));
    toast.success(`${ids.length} ${t.common.items} deleted`); load();
  };

  const columns: Column<AdminProduct>[] = [
    { key: "name", header: t.common.name, render: (p) => (
      <div className="flex items-center gap-3">
        {p.image ? (
          <img src={p.image} alt="" className="h-9 w-9 object-contain rounded-lg border bg-background p-0.5" />
        ) : (
          <div className="h-9 w-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <span className="text-xs font-bold text-blue-600">{p.name[0]}</span>
          </div>
        )}
        <span className="font-medium text-foreground">{p.name}</span>
      </div>
    )},
    { key: "brandName", header: t.products.brand, render: (p) => <Badge variant="outline" className="font-normal">{p.brandName}</Badge> },
    { key: "type", header: t.products.type, render: (p) => <span className="text-muted-foreground text-sm">{p.type}</span> },
    { key: "volume", header: t.products.volume, render: (p) => <Badge variant="secondary" className="font-normal text-xs">{p.volume}</Badge> },
    { key: "abv", header: t.products.abv, render: (p) => <span className="text-muted-foreground font-mono text-xs">{p.abv}</span> },
  ];

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex items-center justify-between">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight">{t.products.title}</h1>
          <p className="text-muted-foreground mt-1">{t.products.subtitle} · {data.length} {t.common.items}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
          <Button onClick={openCreate} className="gap-2 shadow-sm">
            <Plus className="h-4 w-4" /> {t.products.addProduct}
          </Button>
        </motion.div>
      </div>

      {/* Filters */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="flex flex-wrap gap-3 items-center">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <Select value={filterBrand} onValueChange={setFilterBrand}>
          <SelectTrigger className="w-44 h-9 text-sm"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t.products.allBrands}</SelectItem>
            {brands.map((b) => <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-40 h-9 text-sm"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t.products.allTypes}</SelectItem>
            {types.map((tp) => <SelectItem key={tp} value={tp}>{tp}</SelectItem>)}
          </SelectContent>
        </Select>
        {(filterBrand !== "all" || filterType !== "all") && (
          <Button variant="ghost" size="sm" onClick={() => { setFilterBrand("all"); setFilterType("all"); }} className="text-xs">
            ✕ {t.common.all}
          </Button>
        )}
      </motion.div>

      <DataTable data={filtered} columns={columns} onEdit={openEdit} onDelete={remove} onDuplicate={duplicate} onBulkDelete={bulkDelete} loading={loading} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display">{editing ? t.products.editProduct : t.products.newProduct}</DialogTitle>
            <DialogDescription>{t.products.subtitle}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div>
              <Label>{t.products.brand} *</Label>
              <Select value={form.brandId} onValueChange={(v) => set("brandId", v)}>
                <SelectTrigger className="mt-1.5"><SelectValue placeholder={t.products.selectBrand} /></SelectTrigger>
                <SelectContent>
                  {brands.map((b) => <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div><Label>{t.common.name} *</Label><Input value={form.name} onChange={(e) => set("name", e.target.value)} className="mt-1.5" /></div>
            <div className="grid grid-cols-3 gap-4">
              <div><Label>{t.products.type}</Label><Input value={form.type} onChange={(e) => set("type", e.target.value)} className="mt-1.5" /></div>
              <div><Label>{t.products.volume}</Label><Input value={form.volume || ""} onChange={(e) => set("volume", e.target.value)} placeholder="0.75L" className="mt-1.5" /></div>
              <div><Label>{t.products.abv}</Label><Input value={form.abv || ""} onChange={(e) => set("abv", e.target.value)} placeholder="12%" className="mt-1.5" /></div>
            </div>

            {/* Image upload */}
            <div>
              <Label>{t.common.image}</Label>
              <ImageUpload value={form.image || ""} onChange={(v) => set("image", v)} className="mt-1.5" />
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] text-muted-foreground">{t.common.orEnterUrl}:</span>
                <Input value={form.image || ""} onChange={(e) => set("image", e.target.value)} className="h-7 text-xs" placeholder="https://..." />
              </div>
            </div>

            <div><Label>{t.products.shopUrl}</Label><Input value={form.shopUrl || ""} onChange={(e) => set("shopUrl", e.target.value)} className="mt-1.5" /></div>
            <div className="flex justify-end gap-2 pt-3 border-t">
              <Button variant="outline" onClick={() => setOpen(false)}>{t.common.cancel}</Button>
              <Button onClick={save}>{editing ? t.common.save : t.common.create}</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
