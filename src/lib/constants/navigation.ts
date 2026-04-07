import { BookOpen, LampDesk, LayoutDashboard, LucideIcon, Settings } from "lucide-react";

export const PATHS = {
  HOME: '/',
  PROJECT_1: '/proyecto_1',
  DEMO_1: '/demos/demo-1',
  DEMO_2: '/demos/demo-2',
  SETTINGS: '/settings',
  LOGIN: '/login',
} as const;

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
  {
    name: 'Demos',
    icon: BookOpen,
    isSubmenu: true,
    children:[
      {name: 'Crypto Dashboard', href: PATHS.DEMO_1},
      {name: 'IA-Powered Chatbot', href: PATHS.DEMO_2},
    ]
  },
  {name: 'Ajustes', icon: Settings, href: PATHS.SETTINGS}
]