import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DataTable, Column } from "@/admin/components/DataTable";
import { DragList } from "@/admin/components/DragList";
import { AdminCategory, apiCategories } from "@/admin/api/stubs";
import { Plus, ArrowUpDown } from "lucide-react";
import { toast } from "sonner";
import { useAdminI18n } from "@/admin/i18n";
import { motion } from "framer-motion";

const emptyCategory: Omit<AdminCategory, "id"> = { name: "", slug: "", description: "", brandCount: 0 };

export default function AdminCategories() {
  const t = useAdminI18n();
  const [data, setData] = useState<AdminCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<AdminCategory | null>(null);
  const [form, setForm] = useState(emptyCategory);
  const [reorderMode, setReorderMode] = useState(false);

  const load = () => { setLoading(true); apiCategories.list().then((d) => { setData(d); setLoading(false); }); };
  useEffect(load, []);

  const openCreate = () => { setEditing(null); setForm(emptyCategory); setOpen(true); };
  const openEdit = (c: AdminCategory) => { setEditing(c); setForm(c); setOpen(true); };

  const save = async () => {
    if (!form.name.trim()) { toast.error(t.categories.nameRequired); return; }
    const slug = form.slug || form.name.toLowerCase().replace(/\s+/g, "-");
    const payload = { ...form, slug };
    if (editing) { await apiCategories.update(editing.id, payload); toast.success(t.categories.categoryUpdated); }
    else { await apiCategories.create(payload); toast.success(t.categories.categoryCreated); }
    setOpen(false); load();
  };

  const remove = async (c: AdminCategory) => {
    if (!confirm(`${t.common.confirmDelete} "${c.name}"?`)) return;
    await apiCategories.delete(c.id); toast.success(t.categories.categoryDeleted); load();
  };

  const duplicate = async (c: AdminCategory) => {
    const { id, ...rest } = c;
    await apiCategories.create({ ...rest, name: `${rest.name} (copy)`, slug: `${rest.slug}-copy` });
    toast.success(t.categories.duplicated); load();
  };

  const bulkDelete = async (ids: string[]) => {
    if (!confirm(`${t.common.confirmDelete} ${ids.length} ${t.common.items}?`)) return;
    await Promise.all(ids.map((id) => apiCategories.delete(id)));
    toast.success(`${ids.length} deleted`); load();
  };

  const handleReorder = async (ids: string[]) => {
    await apiCategories.reorder(ids);
    toast.success(t.categories.orderSaved);
    load();
  };

  const columns: Column<AdminCategory>[] = [
    { key: "name", header: t.common.name, render: (c) => (
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
          <span className="text-xs font-bold text-emerald-600">{c.name[0]}</span>
        </div>
        <span className="font-medium text-foreground">{c.name}</span>
      </div>
    )},
    { key: "slug", header: t.categories.slug, render: (c) => <code className="text-[11px] bg-muted px-1.5 py-0.5 rounded font-mono">{c.slug}</code> },
    { key: "description", header: t.common.description, render: (c) => <span className="text-muted-foreground text-sm line-clamp-1 max-w-[220px]">{c.description}</span> },
    { key: "brandCount", header: t.categories.brandsCount, render: (c) => <Badge variant="secondary" className="font-normal">{c.brandCount}</Badge> },
  ];

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex items-center justify-between">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight">{t.categories.title}</h1>
          <p className="text-muted-foreground mt-1">{t.categories.subtitle} · {data.length} {t.common.items}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="flex gap-2">
          <Button variant={reorderMode ? "default" : "outline"} onClick={() => setReorderMode(!reorderMode)} className="gap-2" size="sm">
            <ArrowUpDown className="h-3.5 w-3.5" />
            {reorderMode ? t.categories.reorderDone : t.categories.reorderMode}
          </Button>
          <Button onClick={openCreate} className="gap-2 shadow-sm">
            <Plus className="h-4 w-4" /> {t.categories.addCategory}
          </Button>
        </motion.div>
      </div>

      {reorderMode ? (
        <div>
          <p className="text-xs text-muted-foreground mb-3">{t.common.reorder}</p>
          <DragList
            items={data}
            onReorder={handleReorder}
            renderItem={(c) => (
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-emerald-600">{c.name[0]}</span>
                </div>
                <div>
                  <span className="text-sm font-medium">{c.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">{c.brandCount} brands</span>
                </div>
              </div>
            )}
          />
        </div>
      ) : (
        <DataTable data={data} columns={columns} onEdit={openEdit} onDelete={remove} onDuplicate={duplicate} onBulkDelete={bulkDelete} loading={loading} />
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display">{editing ? t.categories.editCategory : t.categories.newCategory}</DialogTitle>
            <DialogDescription>{t.categories.subtitle}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div><Label>{t.common.name} *</Label><Input value={form.name} onChange={(e) => set("name", e.target.value)} className="mt-1.5" /></div>
            <div><Label>{t.categories.slug}</Label><Input value={form.slug} onChange={(e) => set("slug", e.target.value)} placeholder={t.categories.slugAuto} className="mt-1.5 font-mono text-sm" /></div>
            <div><Label>{t.common.description}</Label><Textarea value={form.description} onChange={(e) => set("description", e.target.value)} rows={3} className="mt-1.5" /></div>
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
