import { LayoutDashboard, Wine, Package, Newspaper, FolderTree, ArrowLeft, Globe, ChevronDown, Moon, Sun, History } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation, Link } from "react-router-dom";
import { useLanguage, Language } from "@/i18n/LanguageContext";
import { useAdminI18n } from "@/admin/i18n";
import { useState, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const langLabels: Record<Language, string> = { en: "English", lv: "Latviešu", ru: "Русский" };
const langFlags: Record<Language, string> = { en: "🇬🇧", lv: "🇱🇻", ru: "🇷🇺" };

export function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const { lang, setLang } = useLanguage();
  const t = useAdminI18n();
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("admin_dark") === "true" || document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("admin_dark", String(dark));
  }, [dark]);

  const items = [
    { title: t.sidebar.dashboard, url: "/admin", icon: LayoutDashboard },
    { title: t.sidebar.brands, url: "/admin/brands", icon: Wine },
    { title: t.sidebar.products, url: "/admin/products", icon: Package },
    { title: t.sidebar.news, url: "/admin/news", icon: Newspaper },
    { title: t.sidebar.categories, url: "/admin/categories", icon: FolderTree },
    { title: t.sidebar.auditLog, url: "/admin/audit", icon: History },
  ];

  const isActive = (path: string) =>
    path === "/admin"
      ? location.pathname === "/admin"
      : location.pathname.startsWith(path);

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      <SidebarContent className="pt-2">
        <div className="px-4 py-3 mb-2">
          {!collapsed ? (
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center shadow-sm">
                <span className="text-primary-foreground font-display font-bold text-sm">V</span>
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-sm">{t.sidebar.title}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Management</p>
              </div>
            </div>
          ) : (
            <div className="h-9 w-9 mx-auto rounded-lg bg-primary flex items-center justify-center shadow-sm">
              <span className="text-primary-foreground font-display font-bold text-sm">V</span>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70 font-semibold px-4">
            {!collapsed && "Menu"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/admin"}
                      className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
                      activeClassName="!bg-primary/10 !text-primary font-semibold shadow-sm"
                    >
                      <item.icon className="h-[18px] w-[18px] shrink-0 transition-colors" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3 space-y-1 border-t border-border/50">
        {/* Dark mode toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
        >
          {dark ? <Sun className="h-4 w-4 shrink-0" /> : <Moon className="h-4 w-4 shrink-0" />}
          {!collapsed && <span>{dark ? t.sidebar.lightMode : t.sidebar.darkMode}</span>}
        </button>

        {/* Language switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors">
              <Globe className="h-4 w-4 shrink-0" />
              {!collapsed && (
                <>
                  <span>{langFlags[lang]} {langLabels[lang]}</span>
                  <ChevronDown className="h-3 w-3 ml-auto" />
                </>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="start" className="w-48">
            {(Object.keys(langLabels) as Language[]).map((l) => (
              <DropdownMenuItem
                key={l}
                onClick={() => setLang(l)}
                className={lang === l ? "bg-primary/10 text-primary font-medium" : ""}
              >
                <span className="mr-2">{langFlags[l]}</span>
                {langLabels[l]}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          to="/"
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" />
          {!collapsed && t.sidebar.backToSite}
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
