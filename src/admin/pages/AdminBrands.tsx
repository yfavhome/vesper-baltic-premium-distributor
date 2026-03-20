import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DataTable, Column } from "@/admin/components/DataTable";
import { AdminBrand, apiBrands } from "@/admin/api/stubs";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const emptyBrand: Omit<AdminBrand, "id"> = { name: "", category: "", country: "", est: "", desc: "", logo: "" };

export default function AdminBrands() {
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
    if (!form.name.trim()) { toast.error("Название обязательно"); return; }
    if (editing) { await apiBrands.update(editing.id, form); toast.success("Бренд обновлён"); }
    else { await apiBrands.create(form); toast.success("Бренд создан"); }
    setOpen(false); load();
  };

  const remove = async (b: AdminBrand) => {
    if (!confirm(`Удалить бренд "${b.name}"?`)) return;
    await apiBrands.delete(b.id); toast.success("Бренд удалён"); load();
  };

  const columns: Column<AdminBrand>[] = [
    { key: "name", header: "Название", render: (b) => (
      <div className="flex items-center gap-3">
        {b.logo && <img src={b.logo} alt="" className="h-8 w-8 object-contain rounded" />}
        <span className="font-medium">{b.name}</span>
      </div>
    )},
    { key: "category", header: "Категория" },
    { key: "country", header: "Страна" },
    { key: "est", header: "Год" },
  ];

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold">Бренды</h1>
          <p className="text-muted-foreground mt-1">{data.length} брендов</p>
        </div>
        <Button onClick={openCreate}><Plus className="h-4 w-4 mr-2" /> Добавить бренд</Button>
      </div>

      <DataTable data={data} columns={columns} onEdit={openEdit} onDelete={remove} loading={loading} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? "Редактировать бренд" : "Новый бренд"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div><Label>Название *</Label><Input value={form.name} onChange={(e) => set("name", e.target.value)} /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Категория</Label><Input value={form.category} onChange={(e) => set("category", e.target.value)} /></div>
              <div><Label>Страна</Label><Input value={form.country} onChange={(e) => set("country", e.target.value)} /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Год основания</Label><Input value={form.est} onChange={(e) => set("est", e.target.value)} /></div>
              <div><Label>URL логотипа</Label><Input value={form.logo || ""} onChange={(e) => set("logo", e.target.value)} /></div>
            </div>
            <div><Label>Описание</Label><Textarea value={form.desc} onChange={(e) => set("desc", e.target.value)} rows={3} /></div>
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
