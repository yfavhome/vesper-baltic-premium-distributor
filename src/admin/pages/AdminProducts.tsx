import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DataTable, Column } from "@/admin/components/DataTable";
import { AdminProduct, AdminBrand, apiProducts, apiBrands } from "@/admin/api/stubs";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const emptyProduct: Omit<AdminProduct, "id"> = { brandId: "", brandName: "", name: "", type: "", volume: "", abv: "", image: "", shopUrl: "" };

export default function AdminProducts() {
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
    if (!form.name.trim()) { toast.error("Название обязательно"); return; }
    if (!form.brandId) { toast.error("Выберите бренд"); return; }
    const brandName = brands.find((b) => b.id === form.brandId)?.name || "";
    const payload = { ...form, brandName };
    if (editing) { await apiProducts.update(editing.id, payload); toast.success("Продукт обновлён"); }
    else { await apiProducts.create(payload); toast.success("Продукт создан"); }
    setOpen(false); load();
  };

  const remove = async (p: AdminProduct) => {
    if (!confirm(`Удалить "${p.name}"?`)) return;
    await apiProducts.delete(p.id); toast.success("Продукт удалён"); load();
  };

  const columns: Column<AdminProduct>[] = [
    { key: "name", header: "Название", render: (p) => <span className="font-medium">{p.name}</span> },
    { key: "brandName", header: "Бренд" },
    { key: "type", header: "Тип" },
    { key: "volume", header: "Объём" },
    { key: "abv", header: "ABV" },
  ];

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold">Продукты</h1>
          <p className="text-muted-foreground mt-1">{data.length} продуктов</p>
        </div>
        <Button onClick={openCreate}><Plus className="h-4 w-4 mr-2" /> Добавить продукт</Button>
      </div>

      <DataTable data={data} columns={columns} onEdit={openEdit} onDelete={remove} loading={loading} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? "Редактировать продукт" : "Новый продукт"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div>
              <Label>Бренд *</Label>
              <Select value={form.brandId} onValueChange={(v) => set("brandId", v)}>
                <SelectTrigger><SelectValue placeholder="Выберите бренд" /></SelectTrigger>
                <SelectContent>
                  {brands.map((b) => <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div><Label>Название *</Label><Input value={form.name} onChange={(e) => set("name", e.target.value)} /></div>
            <div className="grid grid-cols-3 gap-4">
              <div><Label>Тип</Label><Input value={form.type} onChange={(e) => set("type", e.target.value)} /></div>
              <div><Label>Объём</Label><Input value={form.volume || ""} onChange={(e) => set("volume", e.target.value)} placeholder="0.75L" /></div>
              <div><Label>ABV</Label><Input value={form.abv || ""} onChange={(e) => set("abv", e.target.value)} placeholder="12%" /></div>
            </div>
            <div><Label>URL изображения</Label><Input value={form.image || ""} onChange={(e) => set("image", e.target.value)} /></div>
            <div><Label>URL магазина</Label><Input value={form.shopUrl || ""} onChange={(e) => set("shopUrl", e.target.value)} /></div>
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
