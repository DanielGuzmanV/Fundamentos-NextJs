import { PATHS } from "@/lib/constants/paths";
import { Home, Info, LayoutList, LogOut } from "lucide-react";

interface BlogNavLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

export const BLOG_NAV_LINKS: BlogNavLink[] = [
  { name: "Inicio", href: PATHS.QUICKBLOG_HOME, icon: Home },
  { name: "Categorias", href: PATHS.QUICKBLOG_CATEGORIES, icon: LayoutList },
  { name: "Acerca de", href: PATHS.QUICKBLOG_ABOUT, icon: Info },
  { name: "Salir", href: PATHS.DEMO_1, icon: LogOut },
]