import { BookOpen, LampDesk, LayoutDashboard, LucideIcon, Settings } from "lucide-react";
import { PATHS } from "./paths";

export interface NavItemConfig {
  name: string;
  icon: LucideIcon;
  href?: string;
  isSubmenu?: boolean;
  children?: {name: string, href: string}[];
}

export const MENU_ITEMS: NavItemConfig[] = [
  {name: 'Dashboard', icon: LayoutDashboard, href: PATHS.HOME},
  {name: 'Proyecto 1', icon: LampDesk, href: PATHS.PROJECT_1},
  {name: 'Proyecto 2', icon: LampDesk, href: PATHS.PROJECT_2},
  {
    name: 'Demos',
    icon: BookOpen,
    isSubmenu: true,
    children:[
      {name: 'QuickBlog', href: PATHS.DEMO_1},
      {name: 'IA-Powered Chatbot', href: PATHS.DEMO_2},
    ]
  },
  {name: 'Ajustes', icon: Settings, href: PATHS.SETTINGS}
]