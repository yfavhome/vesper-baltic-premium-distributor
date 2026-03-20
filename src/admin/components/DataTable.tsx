import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2, Search } from "lucide-react";
import { useState } from "react";
import { useAdminI18n } from "@/admin/i18n";
import { motion, AnimatePresence } from "framer-motion";

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  searchable?: boolean;
}

interface DataTableProps<T extends { id: string }> {
  data: T[];
  columns: Column<T>[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  loading?: boolean;
  searchable?: boolean;
}

export function DataTable<T extends { id: string }>({
  data,
  columns,
  onEdit,
  onDelete,
  loading,
  searchable = true,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const t = useAdminI18n();

  const filtered = search
    ? data.filter((item) =>
        columns.some((col) => {
          const val = (item as Record<string, unknown>)[col.key];
          return val && String(val).toLowerCase().includes(search.toLowerCase());
        })
      )
    : data;

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
      {searchable && (
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t.common.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-background"
          />
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="flex items-center justify-center h-40 bg-background rounded-lg border border-dashed">
          <p className="text-muted-foreground text-sm">{t.common.noData}</p>
        </div>
      ) : (
        <div className="bg-background rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30 hover:bg-muted/30">
                {columns.map((col) => (
                  <TableHead key={col.key} className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                    {col.header}
                  </TableHead>
                ))}
                {(onEdit || onDelete) && (
                  <TableHead className="w-24 text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                    {t.common.actions}
                  </TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence>
                {filtered.map((item, i) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.03, duration: 0.2 }}
                    className="border-b transition-colors hover:bg-muted/30 group"
                  >
                    {columns.map((col) => (
                      <TableCell key={col.key} className="py-3">
                        {col.render
                          ? col.render(item)
                          : String((item as Record<string, unknown>)[col.key] ?? "")}
                      </TableCell>
                    ))}
                    {(onEdit || onDelete) && (
                      <TableCell className="py-3">
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {onEdit && (
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10 hover:text-primary" onClick={() => onEdit(item)}>
                              <Pencil className="h-3.5 w-3.5" />
                            </Button>
                          )}
                          {onDelete && (
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive" onClick={() => onDelete(item)}>
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

      <p className="text-xs text-muted-foreground">
        {filtered.length} {t.common.items}
        {search && ` (${data.length} ${t.common.all.toLowerCase()})`}
      </p>
    </div>
  );
}
