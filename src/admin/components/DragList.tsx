import { useEffect, useState } from "react";
import { GripVertical } from "lucide-react";

interface DragListProps<T extends { id: string }> {
  items: T[];
  onReorder: (newOrder: string[]) => void;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}

export function DragList<T extends { id: string }>({ items, onReorder, renderItem, className = "" }: DragListProps<T>) {
interface DragListProps<T extends DragItem> {
  items: T[];
  onReorder: (newOrder: string[]) => void;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}

export function DragList<T extends DragItem>({ items, onReorder, renderItem, className = "" }: DragListProps<T>) {
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [overIdx, setOverIdx] = useState<number | null>(null);
  const [localItems, setLocalItems] = useState(items);

  useEffect(() => { setLocalItems(items); }, [items]);

  const handleDragStart = (e: React.DragEvent, idx: number) => {
    setDragIdx(idx);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(idx));
  };

  const handleDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setOverIdx(idx);
  };

  const handleDrop = (e: React.DragEvent, dropIdx: number) => {
    e.preventDefault();
    if (dragIdx === null || dragIdx === dropIdx) {
      setDragIdx(null);
      setOverIdx(null);
      return;
    }
    const newItems = [...localItems];
    const [moved] = newItems.splice(dragIdx, 1);
    newItems.splice(dropIdx, 0, moved);
    setLocalItems(newItems);
    onReorder(newItems.map((i) => i.id));
    setDragIdx(null);
    setOverIdx(null);
  };

  return (
    <div className={`space-y-1 ${className}`}>
      {localItems.map((item, i) => (
        <div
          key={item.id}
          draggable
          onDragStart={(e) => handleDragStart(e, i)}
          onDragOver={(e) => handleDragOver(e, i)}
          onDrop={(e) => handleDrop(e, i)}
          onDragEnd={() => { setDragIdx(null); setOverIdx(null); }}
          className={`
            flex items-center gap-2 p-2 rounded-lg border bg-background transition-all cursor-move
            ${dragIdx === i ? "opacity-50 scale-[0.98]" : ""}
            ${overIdx === i && dragIdx !== i ? "border-primary shadow-sm" : "border-border/50"}
          `}
        >
          <GripVertical className="h-4 w-4 text-muted-foreground shrink-0 hover:text-foreground" />
          <div className="flex-1 min-w-0">
            {renderItem(item, i)}
          </div>
        </div>
      ))}
    </div>
  );
}
