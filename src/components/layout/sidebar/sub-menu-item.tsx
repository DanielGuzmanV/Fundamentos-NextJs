"use client";
import { ChevronDown, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
  item: { name: string, icon: LucideIcon, children?: { name: string, href: string }[] };
  onClose: () => void;
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export const SubMenuItem = ({ item, onClose, isCollapsed, setIsCollapsed }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const Icon = item.icon;

  // Verificar si algun hijo es la ruta actual
  const isChildActive = item.children?.some(sub => pathname === sub.href);

  // Si está colapsado, no permitimos abrir el submenú
  const handleToggle = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
      setIsOpen(true);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className={`w-full flex items-center p-3 rounded-lg font-medium transition-all
          ${isCollapsed ? 'justify-center' : 'justify-between gap-3'}
          ${isChildActive 
            ? 'bg-indigo-100 text-indigo-600' // 1. RUTA ACTIVA: Índigo (Prioridad máxima)
            : (isOpen && !isCollapsed)
              ? 'bg-gray-100 text-gray-900'   // 2. SOLO ABIERTO: Gris (Indica interacción)
              : 'text-gray-600 hover:bg-gray-100' // 3. ESTADO NORMAL
          }
        `}
        title={isCollapsed ? item.name : ""}
      >
        <div className="flex items-center gap-3">
          <Icon size={22} className="shrink-0" />
          {!isCollapsed && <span className="whitespace-nowrap transition-opacity duration-200 opacity-100">{item.name}</span>}
        </div>
        
        {!isCollapsed && (
          <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        )}
      </button>

      {/* Solo mostramos los hijos si NO está colapsado y está abierto */}
      {isOpen && !isCollapsed && (
        <div className="ml-9 mt-1 flex flex-col border-l border-gray-100">
          {item.children?.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              onClick={onClose}
              className={`p-2 mb-1 pl-4 text-sm rounded-lg ${
                pathname === sub.href ? 'bg-white text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};