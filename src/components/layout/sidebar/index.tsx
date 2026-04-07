import { X, LogIn, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { SubMenuItem } from "./sub-menu-item";
import { MENU_ITEMS, PATHS } from "@/lib/constants/navigation";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export const SidebarCustom = ({ isOpen, onClose, isCollapsed, setIsCollapsed }: Props) => {
  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 transform transition-all duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:relative lg:translate-x-0 
      ${isCollapsed ? 'lg:w-20' : 'lg:w-64'} 
      w-64 dark:bg-black dark:text-zinc-50
      overflow-x-hidden
    `}>
      <div className="flex flex-col h-full">
        {/* Header con botón de Toggle */}
        <div className={`p-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isCollapsed && (
            <div className="flex items-center gap-3 font-bold text-xl overflow-hidden whitespace-nowrap">
              <span>NextJs Master</span>
            </div>
          )}
          
          {/* Botón para colapsar (Solo visible en Desktop) */}
          <button 
            className="hidden lg:block p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <PanelLeftOpen size={20}/> : <PanelLeftClose size={20}/>}
          </button>

          {/* Botón para cerrar (Solo visible en Móvil) */}
          <button className="lg:hidden p-2 text-gray-500" onClick={onClose}>
            <X size={24}/>
          </button>
        </div>

        {/* Navegacion de items */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto overflow-x-hidden">

          {MENU_ITEMS.map((item) => (
            item.isSubmenu
            ? <SubMenuItem 
              key={item.name} 
              item={item} 
              onClose={onClose} 
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />
            : <NavItem key={item.name} item={item} onClick={onClose} isCollapsed={isCollapsed}/>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 overflow-x-hidden">
          <Link 
            href={PATHS.LOGIN} 
            className={`flex items-center gap-3 p-3 text-gray-600 hover:text-indigo-600 font-medium transition-colors ${isCollapsed ? 'justify-center' : ''}`}
            onClick={onClose}
          >
            <LogIn size={20} className="shrink-0"/>
            {!isCollapsed && <span>Cerrar Sesion</span>}
          </Link>
        </div>
      </div>
    </aside>
  )
}