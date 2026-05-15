import { PATHS } from "@/lib/constants/paths";
import { History, LineChart, LogOut, LucideIcon, PieChart, Repeat } from "lucide-react";

interface PropsLinks {
  name: string;
  href: string;
  icon: LucideIcon;
}

export const navLinks: PropsLinks[] = [
  { name: "Mercado", href: PATHS.CRYPTO_DASHBOARD, icon: LineChart },
  { name: "Portfolio", href: PATHS.CRYPTO_PORTFOLIO, icon: PieChart },
  { name: "Swap", href: PATHS.CRYPTO_SWAP, icon: Repeat },
  { name: "Historial", href: PATHS.CRYPTO_HISTORY, icon: History },
  { name: "Salir", href: PATHS.DEMO_1, icon: LogOut },
]