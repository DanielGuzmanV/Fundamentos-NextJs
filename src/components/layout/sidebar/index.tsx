import { X, LogIn } from "lucide-react";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { SubMenuItem } from "./sub-menu-item";
import { MENU_ITEMS, PATHS } from "@/lib/constants/navigation";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SidebarCustom = ({isOpen, onClose}: Props) => {
  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:relative lg:translate-x-0
    `}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-xl">
            <div className="bg-indigo-600 text-white px-3 py-3 rounded-lg">N</div>
            <span>NextJs Master</span>
          </div>
          <button className="lg:hidden p-2 text-gray-500" onClick={onClose}>
            <X size={24}/>
          </button>
        </div>

        {/* Navegacion de items */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          <p className="px-3 mt-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Menu Principal</p>

          {MENU_ITEMS.map((item) => (
            item.isSubmenu
            ? <SubMenuItem key={item.name} item={item} onClose={onClose}/>
            : <NavItem key={item.name} item={item} onClick={onClose}/>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100">
          <Link 
            href={PATHS.LOGIN} 
            className="flex items-center gap-3 p-3 text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            onClick={onClose}
          >
            <LogIn size={20}/>
            <span>Cerrar Sesion</span>
          </Link>
        </div>
      </div>
    </aside>
  )
}