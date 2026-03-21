import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { GlobalSearch } from "./GlobalSearch";
import { useAdminI18n } from "@/admin/i18n";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";

export default function AdminLayout() {
  const t = useAdminI18n();
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("admin_dark") === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("admin_dark", String(dark));
  }, [dark]);

  return (
    <SidebarProvider>
      <div className={`min-h-screen flex w-full ${dark ? "dark" : ""}`}>
        <div className="min-h-screen flex w-full bg-background text-foreground">
          <AdminSidebar dark={dark} onToggleDark={() => setDark(!dark)} />
          <div className="flex-1 flex flex-col min-w-0">
            <header className="h-14 flex items-center gap-3 px-3 md:px-4 bg-card border-b border-border/50 sticky top-0 z-30">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground shrink-0" />
              <Separator orientation="vertical" className="h-5 hidden md:block" />
              <span className="font-display text-base font-semibold text-foreground tracking-tight hidden md:block shrink-0">
                {t.sidebar.title}
              </span>
              <GlobalSearch />
            </header>
            <main className="flex-1 p-3 md:p-6 lg:p-8 overflow-auto bg-secondary/30">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
