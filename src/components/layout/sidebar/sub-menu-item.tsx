"use client";
import { ChevronDown, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
  item: {name: string, icon: LucideIcon, children?: {name: string, href: string}[]};
  onClose: () => void;
}

export const SubMenuItem = ({item, onClose}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const Icon = item.icon;

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon size={20}/>
          <span>{item.name}</span>
        </div>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
      </button>

      { isOpen && (
        <div className="ml-9 mt-1 flex flex-col border-l border-gray-100">
          {item.children?.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              onClick={onClose}
              className={`p-2 mb-1 pl-4 text-sm rounded-lg ${
                pathname === sub.href ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}