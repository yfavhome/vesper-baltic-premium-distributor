import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface MultiLangValue {
  en: string;
  lv: string;
  ru: string;
}

interface MultiLangFieldProps {
  label: string;
  value: MultiLangValue;
  onChange: (value: MultiLangValue) => void;
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
}

const langTabs = [
  { key: "en" as const, label: "🇬🇧 EN" },
  { key: "lv" as const, label: "🇱🇻 LV" },
  { key: "ru" as const, label: "🇷🇺 RU" },
];

export function MultiLangField({ label, value, onChange, multiline = false, rows = 3, placeholder }: MultiLangFieldProps) {
  const [tab, setTab] = useState<string>("en");

  const handleChange = (lang: keyof MultiLangValue, text: string) => {
    onChange({ ...value, [lang]: text });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm font-medium leading-none">{label}</label>
        <Tabs value={tab} onValueChange={setTab} className="h-auto">
          <TabsList className="h-7 p-0.5 bg-muted/50 gap-0">
            {langTabs.map((l) => (
              <TabsTrigger
                key={l.key}
                value={l.key}
                className="h-6 text-[10px] px-2 data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                {l.label}
                {value[l.key] && <span className="ml-1 h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      {langTabs.map((l) => (
        <div key={l.key} className={tab === l.key ? "block" : "hidden"}>
          {multiline ? (
            <Textarea
              value={value[l.key]}
              onChange={(e) => handleChange(l.key, e.target.value)}
              rows={rows}
              placeholder={placeholder ? `${placeholder} (${l.key.toUpperCase()})` : ""}
            />
          ) : (
            <Input
              value={value[l.key]}
              onChange={(e) => handleChange(l.key, e.target.value)}
              placeholder={placeholder ? `${placeholder} (${l.key.toUpperCase()})` : ""}
            />
          )}
        </div>
      ))}
    </div>
  );
}
