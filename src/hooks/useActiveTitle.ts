import { MENU_ITEMS } from "@/lib/constants/navigation"
import { usePathname } from "next/navigation";

export const useActiveTitle = () => {
  const pathname = usePathname();

  // Buscamos en items principales
  const activeItem = MENU_ITEMS.find(item => item.href === pathname);
  if(activeItem) return activeItem.name

  // Buscamos en submenus
  for(const item of MENU_ITEMS) {
    if(item.isSubmenu && item.children) {
      return "Demos de prueba";
    }
  }

  return "Dashboard";
}