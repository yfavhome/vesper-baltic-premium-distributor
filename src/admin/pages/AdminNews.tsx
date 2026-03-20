import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DataTable, Column } from "@/admin/components/DataTable";
import { MarkdownEditor } from "@/admin/components/MarkdownEditor";
import { ImageUpload } from "@/admin/components/ImageUpload";
import { MultiLangField } from "@/admin/components/MultiLangField";
import { AdminNewsArticle, apiNews, apiNotifications } from "@/admin/api/stubs";
import { Plus, Calendar, ExternalLink, Wand2 } from "lucide-react";
import { toast } from "sonner";
import { useAdminI18n } from "@/admin/i18n";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const emptyArticle: Omit<AdminNewsArticle, "id"> = { slug: "", title: "", excerpt: "", category: "", date: "", image: "", content: "" };

export default function AdminNews() {
  const t = useAdminI18n();
  const [data, setData] = useState<AdminNewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<AdminNewsArticle | null>(null);
  const [form, setForm] = useState(emptyArticle);
  const [titleLangs, setTitleLangs] = useState({ en: "", lv: "", ru: "" });
  const [excerptLangs, setExcerptLangs] = useState({ en: "", lv: "", ru: "" });

  const load = () => { setLoading(true); apiNews.list().then((d) => { setData(d); setLoading(false); }); };
  useEffect(load, []);

  const openCreate = () => {
    setEditing(null);
    setForm({ ...emptyArticle, date: new Date().toISOString().slice(0, 10) });
    setTitleLangs({ en: "", lv: "", ru: "" });
    setExcerptLangs({ en: "", lv: "", ru: "" });
    setOpen(true);
  };
  const openEdit = (n: AdminNewsArticle) => {
    setEditing(n); setForm(n);
    setTitleLangs({ en: n.title, lv: "", ru: "" });
    setExcerptLangs({ en: n.excerpt, lv: "", ru: "" });
    setOpen(true);
  };

  const save = async () => {
    const title = titleLangs.en || form.title;
    const excerpt = excerptLangs.en || form.excerpt;
    if (!title.trim()) { toast.error(t.news.titleRequired); return; }
    if (!form.slug.trim()) { toast.error(t.news.slugRequired); return; }
    const payload = { ...form, title, excerpt };
    if (editing) { await apiNews.update(editing.id, payload); toast.success(t.news.articleUpdated); }
    else {
      await apiNews.create(payload);
      toast.success(t.news.articleCreated);
      apiNotifications.send("article_created", payload.title).then((r) => {
        if (r.success) toast.info(t.common.emailSent);
      });
    }
    setOpen(false); load();
  };

  const remove = async (n: AdminNewsArticle) => {
    if (!confirm(`${t.common.confirmDelete} "${n.title}"?`)) return;
    await apiNews.delete(n.id); toast.success(t.news.articleDeleted); load();
  };

  const duplicate = async (n: AdminNewsArticle) => {
    const { id, ...rest } = n;
    await apiNews.create({ ...rest, title: `${rest.title} (copy)`, slug: `${rest.slug}-copy` });
    toast.success(t.news.duplicated); load();
  };

  const bulkDelete = async (ids: string[]) => {
    if (!confirm(`${t.common.confirmDelete} ${ids.length} ${t.common.items}?`)) return;
    await Promise.all(ids.map((id) => apiNews.delete(id)));
    toast.success(`${ids.length} deleted`); load();
  };

  const generateSlug = () => {
    const title = titleLangs.en || form.title;
    const slug = title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
    setForm((f) => ({ ...f, slug }));
  };

  const columns: Column<AdminNewsArticle>[] = [
    { key: "title", header: t.news.articleTitle, render: (n) => (
      <div className="max-w-[280px]">
        <span className="font-medium text-foreground line-clamp-1">{n.title}</span>
        {n.excerpt && <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{n.excerpt}</p>}
      </div>
    )},
    { key: "category", header: t.common.category, render: (n) => <Badge variant="secondary" className="font-normal">{n.category}</Badge> },
    { key: "date", header: t.news.date, render: (n) => (
      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
        <Calendar className="h-3.5 w-3.5" />{n.date}
      </div>
    )},
    { key: "slug", header: t.news.slug, render: (n) => <code className="text-[11px] bg-muted px-1.5 py-0.5 rounded font-mono">{n.slug}</code> },
    { key: "preview", header: "", render: (n) => (
      <Link to={`/news/${n.slug}`} target="_blank">
        <Button variant="ghost" size="icon" className="h-7 w-7" title={t.news.previewArticle}>
          <ExternalLink className="h-3.5 w-3.5" />
        </Button>
      </Link>
    )},
  ];

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex items-center justify-between">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight">{t.news.title}</h1>
          <p className="text-muted-foreground mt-1">{t.news.subtitle} · {data.length} {t.common.items}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
          <Button onClick={openCreate} className="gap-2 shadow-sm">
            <Plus className="h-4 w-4" /> {t.news.addArticle}
          </Button>
        </motion.div>
      </div>

      <DataTable data={data} columns={columns} onEdit={openEdit} onDelete={remove} onDuplicate={duplicate} onBulkDelete={bulkDelete} loading={loading} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display">{editing ? t.news.editArticle : t.news.newArticle}</DialogTitle>
            <DialogDescription>{t.news.subtitle}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            {/* Multilingual title */}
            <MultiLangField label={`${t.news.articleTitle} *`} value={titleLangs} onChange={setTitleLangs} />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>{t.news.slug} *</Label>
                <div className="flex gap-1.5 mt-1.5">
                  <Input value={form.slug} onChange={(e) => set("slug", e.target.value)} placeholder="my-article-slug" className="font-mono text-sm" />
                  <Button type="button" variant="outline" size="icon" onClick={generateSlug} title={t.news.generateSlug} className="shrink-0">
                    <Wand2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
              <div><Label>{t.common.category}</Label><Input value={form.category} onChange={(e) => set("category", e.target.value)} className="mt-1.5" /></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div><Label>{t.news.date}</Label><Input type="date" value={form.date} onChange={(e) => set("date", e.target.value)} className="mt-1.5" /></div>
              <div>
                <Label>{t.common.image}</Label>
                <ImageUpload value={form.image || ""} onChange={(v) => set("image", v)} className="mt-1.5" />
              </div>
            </div>

            {/* Multilingual excerpt */}
            <MultiLangField label={t.news.excerpt} value={excerptLangs} onChange={setExcerptLangs} multiline rows={2} />

            {/* Markdown editor for content */}
            <div>
              <Label className="mb-1.5 block">{t.news.content} ({t.news.markdown})</Label>
              <MarkdownEditor value={form.content} onChange={(v) => set("content", v)} rows={12} />
            </div>

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
