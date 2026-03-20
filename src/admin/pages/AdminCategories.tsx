import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DataTable, Column } from "@/admin/components/DataTable";
import { AdminCategory, apiCategories } from "@/admin/api/stubs";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const emptyCategory: Omit<AdminCategory, "id"> = { name: "", slug: "", description: "", brandCount: 0 };

export default function AdminCategories() {
  const [data, setData] = useState<AdminCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<AdminCategory | null>(null);
  const [form, setForm] = useState(emptyCategory);

  const load = () => { setLoading(true); apiCategories.list().then((d) => { setData(d); setLoading(false); }); };
  useEffect(load, []);

  const openCreate = () => { setEditing(null); setForm(emptyCategory); setOpen(true); };
  const openEdit = (c: AdminCategory) => { setEditing(c); setForm(c); setOpen(true); };

  const save = async () => {
    if (!form.name.trim()) { toast.error("Название обязательно"); return; }
    const slug = form.slug || form.name.toLowerCase().replace(/\s+/g, "-");
    const payload = { ...form, slug };
    if (editing) { await apiCategories.update(editing.id, payload); toast.success("Категория обновлена"); }
    else { await apiCategories.create(payload); toast.success("Категория создана"); }
    setOpen(false); load();
  };

  const remove = async (c: AdminCategory) => {
    if (!confirm(`Удалить категорию "${c.name}"?`)) return;
    await apiCategories.delete(c.id); toast.success("Категория удалена"); load();
  };

  const columns: Column<AdminCategory>[] = [
    { key: "name", header: "Название", render: (c) => <span className="font-medium">{c.name}</span> },
    { key: "slug", header: "Slug" },
    { key: "description", header: "Описание" },
    { key: "brandCount", header: "Брендов" },
  ];

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold">Категории</h1>
          <p className="text-muted-foreground mt-1">{data.length} категорий</p>
        </div>
        <Button onClick={openCreate}><Plus className="h-4 w-4 mr-2" /> Добавить категорию</Button>
      </div>

      <DataTable data={data} columns={columns} onEdit={openEdit} onDelete={remove} loading={loading} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? "Редактировать категорию" : "Новая категория"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div><Label>Название *</Label><Input value={form.name} onChange={(e) => set("name", e.target.value)} /></div>
            <div><Label>Slug</Label><Input value={form.slug} onChange={(e) => set("slug", e.target.value)} placeholder="auto-generated" /></div>
            <div><Label>Описание</Label><Textarea value={form.description} onChange={(e) => set("description", e.target.value)} rows={3} /></div>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setOpen(false)}>Отмена</Button>
              <Button onClick={save}>{editing ? "Сохранить" : "Создать"}</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
