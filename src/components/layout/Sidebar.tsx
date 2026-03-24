"use client";

import { MENU_ITEMS } from "@/lib/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {Menu, X} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Boton hamburguesa */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-slate-800 text-white rounded-md sm:hidden"
      >
        {isOpen ? <X size={24}/> : <Menu size={24}/>}
      </button>

      {/* Menu lateral ASIDE */}
      <aside className={`
        h-screen flex flex-col
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-800 text-white p-6 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        sm:translate-x-0
      `}>
        <div className="shrink-0">
          <h2 className="text-xl text-center font-bold mb-5 text-blue-400">Admin Panel</h2>
        </div>
        <nav className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <ul className="space-y-2 py-2">
            {MENU_ITEMS.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className={`block p-2 rounded-lg hover:bg-white/80 hover:text-gray-800 text-lg font-semibold transition-colors ${
                      isActive
                      ? "bg-gray-100 text-gray-800"
                      : "hover:bg-gray-100 hover:text-gray-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              )
              })}
          </ul>
        </nav>
        <div className="text-xs text-slate-500">Version - 1.0.0</div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 sm:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>

  )
}