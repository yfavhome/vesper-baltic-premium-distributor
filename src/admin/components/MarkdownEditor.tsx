import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Bold, Italic, Heading1, Heading2, List, ListOrdered, Quote, Link as LinkIcon, Image as ImageIcon, Eye, Code } from "lucide-react";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  className?: string;
}

export function MarkdownEditor({ value, onChange, rows = 12, className = "" }: MarkdownEditorProps) {
  const [tab, setTab] = useState<string>("write");

  const insertMd = useCallback((before: string, after = "") => {
    const textarea = document.querySelector<HTMLTextAreaElement>("[data-md-editor]");
    if (!textarea) { onChange(value + before + after); return; }
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = value.substring(start, end);
    const newVal = value.substring(0, start) + before + (selected || "text") + after + value.substring(end);
    onChange(newVal);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + (selected || "text").length);
    }, 0);
  }, [value, onChange]);

  const toolbar = [
    { icon: Bold, action: () => insertMd("**", "**"), title: "Bold" },
    { icon: Italic, action: () => insertMd("*", "*"), title: "Italic" },
    { icon: Heading1, action: () => insertMd("\n# "), title: "H1" },
    { icon: Heading2, action: () => insertMd("\n## "), title: "H2" },
    { icon: List, action: () => insertMd("\n- "), title: "List" },
    { icon: ListOrdered, action: () => insertMd("\n1. "), title: "Numbered List" },
    { icon: Quote, action: () => insertMd("\n> "), title: "Quote" },
    { icon: LinkIcon, action: () => insertMd("[", "](url)"), title: "Link" },
    { icon: ImageIcon, action: () => insertMd("![alt](", ")"), title: "Image" },
    { icon: Code, action: () => insertMd("`", "`"), title: "Code" },
  ];

  const renderPreview = () => {
    let html = value
      .replace(/^### (.*$)/gm, '<h3 class="text-base font-semibold mt-4 mb-2">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-lg font-semibold mt-5 mb-2">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-xl font-bold mt-6 mb-3">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`(.*?)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm font-mono">$1</code>')
      .replace(/^\> (.*$)/gm, '<blockquote class="border-l-2 border-primary/30 pl-3 italic text-muted-foreground my-2">$1</blockquote>')
      .replace(/^\d+\. (.*$)/gm, '<li class="ml-4 list-decimal">$1</li>')
      .replace(/^- (.*$)/gm, '<li class="ml-4 list-disc">$1</li>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary underline">$1</a>')
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded max-h-40 my-2" />')
      .replace(/\n/g, "<br />");
    return html;
  };

  return (
    <div className={`border rounded-lg overflow-hidden ${className}`}>
      <Tabs value={tab} onValueChange={setTab}>
        <div className="flex items-center justify-between bg-muted/30 border-b px-2">
          {/* Toolbar */}
          <div className="flex items-center gap-0.5 py-1.5 overflow-x-auto">
            {toolbar.map((t) => (
              <Button
                key={t.title}
                type="button"
                variant="ghost"
                size="icon"
                className="h-7 w-7 shrink-0"
                onClick={t.action}
                title={t.title}
                disabled={tab === "preview"}
              >
                <t.icon className="h-3.5 w-3.5" />
              </Button>
            ))}
          </div>
          <TabsList className="h-8 bg-transparent gap-1">
            <TabsTrigger value="write" className="h-6 text-xs px-2.5 data-[state=active]:bg-background">Write</TabsTrigger>
            <TabsTrigger value="preview" className="h-6 text-xs px-2.5 data-[state=active]:bg-background">
              <Eye className="h-3 w-3 mr-1" /> Preview
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="write" className="m-0">
          <Textarea
            data-md-editor
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={rows}
            className="border-0 rounded-none focus-visible:ring-0 font-mono text-sm resize-y"
            placeholder="Write your content in Markdown..."
          />
        </TabsContent>
        <TabsContent value="preview" className="m-0">
          <div
            className="p-4 min-h-[200px] prose prose-sm max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: renderPreview() || '<p class="text-muted-foreground">Nothing to preview</p>' }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
