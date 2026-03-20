import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DataTable, Column } from "@/admin/components/DataTable";
import { AdminBrand, apiBrands } from "@/admin/api/stubs";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useAdminI18n } from "@/admin/i18n";
import { motion } from "framer-motion";

const emptyBrand: Omit<AdminBrand, "id"> = { name: "", category: "", country: "", est: "", desc: "", logo: "" };

export default function AdminBrands() {
  const t = useAdminI18n();
  const [data, setData] = useState<AdminBrand[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<AdminBrand | null>(null);
  const [form, setForm] = useState(emptyBrand);

  const load = () => { setLoading(true); apiBrands.list().then((d) => { setData(d); setLoading(false); }); };
  useEffect(load, []);

  const openCreate = () => { setEditing(null); setForm(emptyBrand); setOpen(true); };
  const openEdit = (b: AdminBrand) => { setEditing(b); setForm(b); setOpen(true); };

  const save = async () => {
    if (!form.name.trim()) { toast.error(t.brands.nameRequired); return; }
    if (editing) { await apiBrands.update(editing.id, form); toast.success(t.brands.brandUpdated); }
    else { await apiBrands.create(form); toast.success(t.brands.brandCreated); }
    setOpen(false); load();
  };

  const remove = async (b: AdminBrand) => {
    if (!confirm(`${t.common.confirmDelete} "${b.name}"?`)) return;
    await apiBrands.delete(b.id); toast.success(t.brands.brandDeleted); load();
  };

  const columns: Column<AdminBrand>[] = [
    { key: "name", header: t.common.name, render: (b) => (
      <div className="flex items-center gap-3">
        {b.logo ? (
          <img src={b.logo} alt="" className="h-9 w-9 object-contain rounded-lg border bg-background p-0.5" />
        ) : (
          <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">{b.name[0]}</span>
          </div>
        )}
        <div>
          <span className="font-medium text-foreground">{b.name}</span>
          {b.est && <p className="text-[11px] text-muted-foreground">Est. {b.est}</p>}
        </div>
      </div>
    )},
    { key: "category", header: t.common.category, render: (b) => (
      <Badge variant="secondary" className="font-normal">{b.category}</Badge>
    )},
    { key: "country", header: t.common.country, render: (b) => (
      <span className="text-muted-foreground">{b.country}</span>
    )},
  ];

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight">{t.brands.title}</h1>
          <p className="text-muted-foreground mt-1">{t.brands.subtitle}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
          <Button onClick={openCreate} className="gap-2 shadow-sm">
            <Plus className="h-4 w-4" /> {t.brands.addBrand}
          </Button>
        </motion.div>
      </div>

      <DataTable data={data} columns={columns} onEdit={openEdit} onDelete={remove} loading={loading} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display">{editing ? t.brands.editBrand : t.brands.newBrand}</DialogTitle>
            <DialogDescription>{t.brands.subtitle}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div><Label>{t.common.name} *</Label><Input value={form.name} onChange={(e) => set("name", e.target.value)} className="mt-1.5" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>{t.common.category}</Label><Input value={form.category} onChange={(e) => set("category", e.target.value)} className="mt-1.5" /></div>
              <div><Label>{t.common.country}</Label><Input value={form.country} onChange={(e) => set("country", e.target.value)} className="mt-1.5" /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>{t.common.year}</Label><Input value={form.est} onChange={(e) => set("est", e.target.value)} className="mt-1.5" /></div>
              <div><Label>{t.common.logoUrl}</Label><Input value={form.logo || ""} onChange={(e) => set("logo", e.target.value)} className="mt-1.5" /></div>
            </div>
            <div><Label>{t.common.description}</Label><Textarea value={form.desc} onChange={(e) => set("desc", e.target.value)} rows={3} className="mt-1.5" /></div>
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
