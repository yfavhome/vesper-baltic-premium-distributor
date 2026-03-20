import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { apiAudit, AuditEntry } from "@/admin/api/stubs";
import { useAdminI18n } from "@/admin/i18n";
import { motion } from "framer-motion";
import { Plus, Pencil, Trash2, Wine, Package, Newspaper, FolderTree, Clock } from "lucide-react";

const entityIcons = { brand: Wine, product: Package, news: Newspaper, category: FolderTree };
const actionIcons = { create: Plus, update: Pencil, delete: Trash2 };
const actionColors = {
  create: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  update: "bg-blue-500/10 text-blue-600 border-blue-200",
  delete: "bg-destructive/10 text-destructive border-destructive/20",
};

export default function AdminAuditLog() {
  const t = useAdminI18n();
  const [entries, setEntries] = useState<AuditEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiAudit.list().then((e) => { setEntries(e); setLoading(false); });
    const interval = setInterval(() => {
      apiAudit.list().then(setEntries);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (iso: string) => {
    const d = new Date(iso);
    const now = new Date();
    const diff = Math.floor((now.getTime() - d.getTime()) / 1000);
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return d.toLocaleDateString();
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight">{t.audit.title}</h1>
        <p className="text-muted-foreground mt-1">{t.audit.subtitle}</p>
      </motion.div>

      {loading ? (
        <div className="flex items-center justify-center h-48">
          <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : entries.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center h-48 gap-3">
            <Clock className="h-10 w-10 text-muted-foreground/40" />
            <p className="text-muted-foreground">{t.audit.noActivity}</p>
            <p className="text-xs text-muted-foreground/60">Create, edit or delete content to see activity here</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {entries.map((entry, i) => {
            const EntityIcon = entityIcons[entry.entity];
            const ActionIcon = actionIcons[entry.action];
            const colors = actionColors[entry.action];
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <div className="flex items-center gap-3 p-3 rounded-lg border bg-background hover:bg-muted/20 transition-colors">
                  <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${colors}`}>
                    <ActionIcon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-medium text-foreground">{entry.user}</span>
                      <span className="text-sm text-muted-foreground">{t.audit[entry.action]}</span>
                      <Badge variant="outline" className="text-[10px] gap-1">
                        <EntityIcon className="h-2.5 w-2.5" />
                        {t.audit[entry.entity]}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground font-medium truncate">{entry.entityName}</p>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">{formatTime(entry.timestamp)}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
