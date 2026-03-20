import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DataTable, Column } from "@/admin/components/DataTable";
import { AdminNewsArticle, apiNews } from "@/admin/api/stubs";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const emptyArticle: Omit<AdminNewsArticle, "id"> = { slug: "", title: "", excerpt: "", category: "", date: "", image: "", content: "" };

export default function AdminNews() {
  const [data, setData] = useState<AdminNewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<AdminNewsArticle | null>(null);
  const [form, setForm] = useState(emptyArticle);

  const load = () => { setLoading(true); apiNews.list().then((d) => { setData(d); setLoading(false); }); };
  useEffect(load, []);

  const openCreate = () => { setEditing(null); setForm(emptyArticle); setOpen(true); };
  const openEdit = (n: AdminNewsArticle) => { setEditing(n); setForm(n); setOpen(true); };

  const save = async () => {
    if (!form.title.trim()) { toast.error("Заголовок обязателен"); return; }
    if (!form.slug.trim()) { toast.error("Slug обязателен"); return; }
    if (editing) { await apiNews.update(editing.id, form); toast.success("Статья обновлена"); }
    else { await apiNews.create(form); toast.success("Статья создана"); }
    setOpen(false); load();
  };

  const remove = async (n: AdminNewsArticle) => {
    if (!confirm(`Удалить "${n.title}"?`)) return;
    await apiNews.delete(n.id); toast.success("Статья удалена"); load();
  };

  const columns: Column<AdminNewsArticle>[] = [
    { key: "title", header: "Заголовок", render: (n) => <span className="font-medium">{n.title}</span> },
    { key: "category", header: "Категория" },
    { key: "date", header: "Дата" },
    { key: "slug", header: "Slug" },
  ];

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold">Новости</h1>
          <p className="text-muted-foreground mt-1">{data.length} статей</p>
        </div>
        <Button onClick={openCreate}><Plus className="h-4 w-4 mr-2" /> Добавить статью</Button>
      </div>

      <DataTable data={data} columns={columns} onEdit={openEdit} onDelete={remove} loading={loading} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editing ? "Редактировать статью" : "Новая статья"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <div><Label>Заголовок *</Label><Input value={form.title} onChange={(e) => set("title", e.target.value)} /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Slug *</Label><Input value={form.slug} onChange={(e) => set("slug", e.target.value)} placeholder="my-article-slug" /></div>
              <div><Label>Категория</Label><Input value={form.category} onChange={(e) => set("category", e.target.value)} /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Дата</Label><Input type="date" value={form.date} onChange={(e) => set("date", e.target.value)} /></div>
              <div><Label>URL изображения</Label><Input value={form.image || ""} onChange={(e) => set("image", e.target.value)} /></div>
            </div>
            <div><Label>Краткое описание</Label><Textarea value={form.excerpt} onChange={(e) => set("excerpt", e.target.value)} rows={2} /></div>
            <div><Label>Содержание</Label><Textarea value={form.content} onChange={(e) => set("content", e.target.value)} rows={6} /></div>
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
