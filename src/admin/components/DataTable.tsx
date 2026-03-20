import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pencil, Trash2, Search, Download, Copy, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";
import { useAdminI18n } from "@/admin/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
}

interface DataTableProps<T extends { id: string }> {
  data: T[];
  columns: Column<T>[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  onDuplicate?: (item: T) => void;
  loading?: boolean;
  searchable?: boolean;
  exportable?: boolean;
  selectable?: boolean;
  onBulkDelete?: (ids: string[]) => void;
  pageSize?: number;
}

export function DataTable<T extends { id: string }>({
  data,
  columns,
  onEdit,
  onDelete,
  onDuplicate,
  loading,
  searchable = true,
  exportable = true,
  selectable = true,
  onBulkDelete,
  pageSize: defaultPageSize = 10,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const t = useAdminI18n();

  const filtered = useMemo(() => {
    let result = data;
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((item) =>
        columns.some((col) => {
          const val = (item as Record<string, unknown>)[col.key];
          return val && String(val).toLowerCase().includes(q);
        })
      );
    }
    if (sortKey) {
      result = [...result].sort((a, b) => {
        const aVal = String((a as Record<string, unknown>)[sortKey] ?? "");
        const bVal = String((b as Record<string, unknown>)[sortKey] ?? "");
        return sortDir === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      });
    }
    return result;
  }, [data, search, sortKey, sortDir, columns]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paged = filtered.slice(page * pageSize, (page + 1) * pageSize);

  const toggleSort = (key: string) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortKey(key); setSortDir("asc"); }
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  const toggleAll = () => {
    if (selected.size === paged.length) setSelected(new Set());
    else setSelected(new Set(paged.map((i) => i.id)));
  };

  const exportCsv = () => {
    const headers = columns.map((c) => c.header);
    const rows = filtered.map((item) =>
      columns.map((c) => {
        const val = (item as Record<string, unknown>)[c.key];
        return `"${String(val ?? "").replace(/"/g, '""')}"`;
      })
    );
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "export.csv";
    a.click();
    URL.revokeObjectURL(url);
    toast.success(t.common.export);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground">{t.common.loading}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 w-full sm:w-auto">
          {searchable && (
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t.common.search}
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(0); }}
                className="pl-9 bg-background"
              />
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {selected.size > 0 && onBulkDelete && (
            <Button
              variant="destructive"
              size="sm"
              onClick={() => {
                onBulkDelete(Array.from(selected));
                setSelected(new Set());
              }}
              className="gap-1.5"
            >
              <Trash2 className="h-3.5 w-3.5" />
              {t.common.bulkDelete} ({selected.size})
            </Button>
          )}
          {exportable && filtered.length > 0 && (
            <Button variant="outline" size="sm" onClick={exportCsv} className="gap-1.5">
              <Download className="h-3.5 w-3.5" />
              {t.common.export}
            </Button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-48 bg-background rounded-lg border border-dashed gap-2">
          <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground text-sm">{t.common.noData}</p>
        </div>
      ) : (
        <div className="bg-background rounded-lg border overflow-hidden shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30 hover:bg-muted/30">
                {selectable && (
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selected.size === paged.length && paged.length > 0}
                      onCheckedChange={toggleAll}
                    />
                  </TableHead>
                )}
                {columns.map((col) => (
                  <TableHead
                    key={col.key}
                    className="text-xs uppercase tracking-wider font-semibold text-muted-foreground cursor-pointer select-none hover:text-foreground transition-colors"
                    onClick={() => toggleSort(col.key)}
                  >
                    <span className="flex items-center gap-1">
                      {col.header}
                      {sortKey === col.key && (
                        <span className="text-primary">{sortDir === "asc" ? "↑" : "↓"}</span>
                      )}
                    </span>
                  </TableHead>
                ))}
                {(onEdit || onDelete || onDuplicate) && (
                  <TableHead className="w-28 text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                    {t.common.actions}
                  </TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence>
                {paged.map((item, i) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ delay: i * 0.02, duration: 0.15 }}
                    className={`border-b transition-colors group ${
                      selected.has(item.id) ? "bg-primary/5" : "hover:bg-muted/30"
                    }`}
                  >
                    {selectable && (
                      <TableCell className="py-3">
                        <Checkbox
                          checked={selected.has(item.id)}
                          onCheckedChange={() => toggleSelect(item.id)}
                        />
                      </TableCell>
                    )}
                    {columns.map((col) => (
                      <TableCell key={col.key} className="py-3">
                        {col.render
                          ? col.render(item)
                          : String((item as Record<string, unknown>)[col.key] ?? "")}
                      </TableCell>
                    ))}
                    {(onEdit || onDelete || onDuplicate) && (
                      <TableCell className="py-3">
                        <div className="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                          {onDuplicate && (
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent" onClick={() => onDuplicate(item)} title={t.common.duplicate}>
                              <Copy className="h-3.5 w-3.5" />
                            </Button>
                          )}
                          {onEdit && (
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10 hover:text-primary" onClick={() => onEdit(item)} title={t.common.edit}>
                              <Pencil className="h-3.5 w-3.5" />
                            </Button>
                          )}
                          {onDelete && (
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive" onClick={() => onDelete(item)} title={t.common.delete}>
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    )}
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </div>
      )}

      {/* Footer with pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p className="text-muted-foreground text-xs">
          {t.common.showing} {page * pageSize + 1}–{Math.min((page + 1) * pageSize, filtered.length)} {t.common.of} {filtered.length} {t.common.items}
          {search && ` (${data.length} ${t.common.all.toLowerCase()})`}
        </p>
        <div className="flex items-center gap-3">
          <Select value={String(pageSize)} onValueChange={(v) => { setPageSize(Number(v)); setPage(0); }}>
            <SelectTrigger className="w-20 h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 20, 50].map((n) => (
                <SelectItem key={n} value={String(n)}>{n} {t.common.perPage}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8" disabled={page === 0} onClick={() => setPage((p) => p - 1)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center px-2 text-xs text-muted-foreground">
              {page + 1} / {Math.max(totalPages, 1)}
            </div>
            <Button variant="outline" size="icon" className="h-8 w-8" disabled={page >= totalPages - 1} onClick={() => setPage((p) => p + 1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
