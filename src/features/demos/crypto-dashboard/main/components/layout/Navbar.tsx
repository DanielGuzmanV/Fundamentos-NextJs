"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PATHS } from "@/lib/constants/paths";
import { Wallet, LayoutDashboard, LineChart, PieChart, Repeat, History } from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();

  // Configuración de los links internos de la demo
  const navLinks = [
    { name: "Mercado", href: PATHS.CRYPTO_DASHBOARD, icon: LineChart },
    { name: "Portfolio", href: PATHS.CRYPTO_PORTFOLIO, icon: PieChart },
    { name: "Swap", href: PATHS.CRYPTO_SWAP, icon: Repeat },
    { name: "Historial", href: PATHS.CRYPTO_HISTORY, icon: History },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Lado Izquierdo: Logo y Botón Volver */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <LayoutDashboard className="text-white" size={20} />
              </div>
              <span className="font-bold text-xl text-slate-600 tracking-tight hidden md:block">
                Crypto<span className="text-indigo-600">Hub</span>
              </span>
            </div>
          </div>

          {/* Centro: Navegación Principal */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all
                    ${isActive 
                      ? "bg-indigo-50 text-indigo-600" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                >
                  <Icon size={18} />
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Lado Derecho: Acciones (Simuladas) */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
              <Wallet size={18} />
              <span>Connect Wallet</span>
            </button>
            
            {/* Avatar de Usuario simulado */}
            <div className="h-9 w-9 rounded-full from-indigo-500 to-purple-500 border-2 bg-black border-white shadow-sm cursor-pointer" />
          </div>

        </div>
      </div>

      {/* Navegación Móvil (Solo iconos) */}
      <div className="md:hidden border-t border-slate-100 bg-white px-2 py-1 flex justify-around">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`p-3 rounded-xl ${isActive ? "text-indigo-600 bg-indigo-50" : "text-slate-500"}`}
            >
              <Icon size={22} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};