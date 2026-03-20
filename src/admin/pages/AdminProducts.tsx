import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DataTable, Column } from "@/admin/components/DataTable";
import { AdminProduct, AdminBrand, apiProducts, apiBrands } from "@/admin/api/stubs";
import { Plus } from "lucide-react";
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

  const load = () => {
    setLoading(true);
    Promise.all([apiProducts.list(), apiBrands.list()]).then(([p, b]) => {
      setData(p); setBrands(b); setLoading(false);
    });
  };
  useEffect(load, []);

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

  const columns: Column<AdminProduct>[] = [
    { key: "name", header: t.common.name, render: (p) => <span className="font-medium text-foreground">{p.name}</span> },
    { key: "brandName", header: t.products.brand, render: (p) => (
      <Badge variant="outline" className="font-normal">{p.brandName}</Badge>
    )},
    { key: "type", header: t.products.type, render: (p) => (
      <span className="text-muted-foreground">{p.type}</span>
    )},
    { key: "volume", header: t.products.volume, render: (p) => (
      <Badge variant="secondary" className="font-normal">{p.volume}</Badge>
    )},
    { key: "abv", header: t.products.abv, render: (p) => (
      <span className="text-muted-foreground font-mono text-xs">{p.abv}</span>
    )},
  ];

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight">{t.products.title}</h1>
          <p className="text-muted-foreground mt-1">{t.products.subtitle}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
          <Button onClick={openCreate} className="gap-2 shadow-sm">
            <Plus className="h-4 w-4" /> {t.products.addProduct}
          </Button>
        </motion.div>
      </div>

      <DataTable data={data} columns={columns} onEdit={openEdit} onDelete={remove} loading={loading} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
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
            <div><Label>{t.common.imageUrl}</Label><Input value={form.image || ""} onChange={(e) => set("image", e.target.value)} className="mt-1.5" /></div>
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
