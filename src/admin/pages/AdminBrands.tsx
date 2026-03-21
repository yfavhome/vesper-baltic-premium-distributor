import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { DataTable, Column } from "@/admin/components/DataTable";
import { DragList } from "@/admin/components/DragList";
import { ImageUpload } from "@/admin/components/ImageUpload";
import { MultiLangField } from "@/admin/components/MultiLangField";
import { AdminBrand, apiBrands, apiNotifications } from "@/admin/api/stubs";
import { useUnsavedChanges } from "@/admin/hooks/useUnsavedChanges";
import { Plus, Eye, ArrowUpDown } from "lucide-react";
import { toast } from "sonner";
import { useAdminI18n } from "@/admin/i18n";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const emptyBrand: Omit<AdminBrand, "id"> = { name: "", category: "", country: "", est: "", desc: "", logo: "" };

export default function AdminBrands() {
  const t = useAdminI18n();
  const [data, setData] = useState<AdminBrand[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<AdminBrand | null>(null);
  const [form, setForm] = useState(emptyBrand);
  const [initialForm, setInitialForm] = useState(emptyBrand);
  const [preview, setPreview] = useState<AdminBrand | null>(null);
  const [reorderMode, setReorderMode] = useState(false);
  const [descLangs, setDescLangs] = useState({ en: "", lv: "", ru: "" });
  const [saving, setSaving] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<AdminBrand | null>(null);

  const isDirty = open && JSON.stringify(form) !== JSON.stringify(initialForm);
  useUnsavedChanges(isDirty);

  const load = () => {
    setLoading(true);
    apiBrands.list()
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => { toast.error(t.common.errorLoading); setLoading(false); });
  };
  useEffect(load, []);

  const openCreate = () => { setEditing(null); setForm(emptyBrand); setInitialForm(emptyBrand); setDescLangs({ en: "", lv: "", ru: "" }); setOpen(true); };
  const openEdit = (b: AdminBrand) => { setEditing(b); setForm(b); setInitialForm(b); setDescLangs({ en: b.desc, lv: "", ru: "" }); setOpen(true); };

  const handleClose = () => {
    if (isDirty && !confirm(t.common.unsavedWarning)) return;
    setOpen(false);
  };

  const save = async () => {
    if (!form.name.trim()) { toast.error(t.brands.nameRequired); return; }
    setSaving(true);
    try {
      const payload = { ...form, desc: descLangs.en || form.desc };
      if (editing) { await apiBrands.update(editing.id, payload); toast.success(t.brands.brandUpdated); }
      else {
        await apiBrands.create(payload);
        toast.success(t.brands.brandCreated);
        apiNotifications.send("brand_created", payload.name).then((r) => {
          if (r.success) toast.info(t.common.emailSent);
        });
      }
      setOpen(false); load();
    } catch {
      toast.error(t.common.errorSaving);
    } finally {
      setSaving(false);
    }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    try {
      await apiBrands.delete(deleteTarget.id);
      toast.success(t.brands.brandDeleted);
      load();
    } catch {
      toast.error(t.common.errorDeleting);
    }
    setDeleteTarget(null);
  };

  const duplicate = async (b: AdminBrand) => {
    try {
      const { id, ...rest } = b;
      await apiBrands.create({ ...rest, name: `${rest.name} (copy)` });
      toast.success(t.brands.duplicated); load();
    } catch {
      toast.error(t.common.errorSaving);
    }
  };

  const bulkDelete = async (ids: string[]) => {
    if (!confirm(`${t.common.confirmDelete} ${ids.length} ${t.common.items}?`)) return;
    try {
      await Promise.all(ids.map((id) => apiBrands.delete(id)));
      toast.success(`${ids.length} ${t.common.items} deleted`); load();
    } catch {
      toast.error(t.common.errorDeleting);
    }
  };

  const handleReorder = async (ids: string[]) => {
    try {
      await apiBrands.reorder(ids);
      toast.success(t.brands.orderSaved);
      load();
    } catch {
      toast.error(t.common.errorSaving);
    }
  };

  const columns: Column<AdminBrand>[] = [
    { key: "name", header: t.common.name, render: (b) => (
      <button onClick={() => setPreview(b)} className="flex items-center gap-3 hover:opacity-80 transition-opacity text-left">
        {b.logo ? (
          <img src={b.logo} alt="" className="h-10 w-10 object-contain rounded-lg border bg-background p-0.5" />
        ) : (
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-bold text-primary">{b.name[0]}</span>
          </div>
        )}
        <div>
          <span className="font-medium text-foreground">{b.name}</span>
          {b.est && <p className="text-[11px] text-muted-foreground">Est. {b.est}</p>}
        </div>
      </button>
    )},
    { key: "category", header: t.common.category, render: (b) => <Badge variant="secondary" className="font-normal">{b.category}</Badge> },
    { key: "country", header: t.common.country, render: (b) => <span className="text-muted-foreground">{b.country}</span> },
    { key: "desc", header: t.common.description, render: (b) => <span className="text-muted-foreground text-xs line-clamp-1 max-w-[200px]">{b.desc}</span> },
  ];

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight">{t.brands.title}</h1>
          <p className="text-muted-foreground mt-1">{t.brands.subtitle} · {data.length} {t.common.items}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="flex gap-2">
          <Button variant={reorderMode ? "default" : "outline"} onClick={() => setReorderMode(!reorderMode)} className="gap-2" size="sm">
            <ArrowUpDown className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{reorderMode ? t.brands.reorderDone : t.brands.reorderMode}</span>
          </Button>
          <Button onClick={openCreate} className="gap-2 shadow-sm">
            <Plus className="h-4 w-4" /> <span className="hidden sm:inline">{t.brands.addBrand}</span>
          </Button>
        </motion.div>
      </div>

      {reorderMode ? (
        <div>
          <p className="text-xs text-muted-foreground mb-3">{t.common.reorder}</p>
          <DragList items={data} onReorder={handleReorder} renderItem={(b) => (
            <div className="flex items-center gap-3">
              {b.logo ? (
                <img src={b.logo} alt="" className="h-8 w-8 object-contain rounded border bg-background" />
              ) : (
                <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">{b.name[0]}</div>
              )}
              <div>
                <span className="text-sm font-medium">{b.name}</span>
                <span className="text-xs text-muted-foreground ml-2">{b.category}</span>
              </div>
            </div>
          )} />
        </div>
      ) : (
        <DataTable data={data} columns={columns} onEdit={openEdit} onDelete={(b) => setDeleteTarget(b)} onDuplicate={duplicate} onBulkDelete={bulkDelete} loading={loading} />
      )}

      {/* Create/Edit Dialog */}
      <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); else setOpen(v); }}>
        <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display">{editing ? t.brands.editBrand : t.brands.newBrand}</DialogTitle>
            <DialogDescription>{t.brands.subtitle}</DialogDescription>
          </DialogHeader>
          {isDirty && (
            <div className="px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs">
              {t.common.unsavedChanges}
            </div>
          )}
          <div className="space-y-4 mt-2">
            <div><Label>{t.common.name} *</Label><Input value={form.name} onChange={(e) => set("name", e.target.value)} className="mt-1.5" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>{t.common.category}</Label><Input value={form.category} onChange={(e) => set("category", e.target.value)} className="mt-1.5" /></div>
              <div><Label>{t.common.country}</Label><Input value={form.country} onChange={(e) => set("country", e.target.value)} className="mt-1.5" /></div>
            </div>
            <div><Label>{t.common.year}</Label><Input value={form.est} onChange={(e) => set("est", e.target.value)} className="mt-1.5" /></div>
            <div>
              <Label>{t.common.image}</Label>
              <ImageUpload value={form.logo || ""} onChange={(v) => set("logo", v)} className="mt-1.5" />
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] text-muted-foreground">{t.common.orEnterUrl}:</span>
                <Input value={form.logo || ""} onChange={(e) => set("logo", e.target.value)} className="h-7 text-xs" placeholder="https://..." />
              </div>
            </div>
            <MultiLangField label={t.common.description} value={descLangs} onChange={setDescLangs} multiline rows={3} />
            <div className="flex justify-end gap-2 pt-3 border-t">
              <Button variant="outline" onClick={handleClose}>{t.common.cancel}</Button>
              <Button onClick={save} disabled={saving}>{saving ? t.common.loading : editing ? t.common.save : t.common.create}</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteTarget} onOpenChange={(v) => !v && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t.common.confirmDelete}</AlertDialogTitle>
            <AlertDialogDescription>
              {t.common.deleteDescription} "{deleteTarget?.name}"? {t.common.deleteIrreversible}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t.common.cancel}</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              {t.common.delete}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Detail Preview Dialog */}
      <Dialog open={!!preview} onOpenChange={() => setPreview(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display">{t.common.details}</DialogTitle>
          </DialogHeader>
          {preview && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {preview.logo ? (
                  <img src={preview.logo} alt="" className="h-16 w-16 object-contain rounded-xl border bg-background p-1" />
                ) : (
                  <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{preview.name[0]}</span>
                  </div>
                )}
                <div>
                  <h3 className="font-display text-lg font-bold">{preview.name}</h3>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="secondary">{preview.category}</Badge>
                    {preview.country && <Badge variant="outline">{preview.country}</Badge>}
                  </div>
                </div>
              </div>
              {preview.est && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t.common.year}</span>
                  <span className="font-medium">{preview.est}</span>
                </div>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed">{preview.desc}</p>
              <div className="flex gap-2 pt-2 border-t">
                <Button variant="outline" size="sm" className="flex-1" onClick={() => { setPreview(null); openEdit(preview); }}>{t.common.edit}</Button>
                <Link to={`/brand/${preview.name.toLowerCase().replace(/\s+/g, "-")}`} target="_blank">
                  <Button variant="outline" size="sm" className="gap-1.5"><Eye className="h-3.5 w-3.5" /> {t.common.preview}</Button>
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
