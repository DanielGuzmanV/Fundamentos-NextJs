"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import { MobileMenu } from "./MobileMenu";
import { DesktopLinks } from "./DesktopLinks";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Lado Izquierdo: Logo y Salida */}
          <LeftSide/>

          {/* Centro: Navegación Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            <DesktopLinks pathName={pathname}/>
          </div>

          {/* Lado Derecho: Acciones Desktop + Hamburguesa Móvil */}
          <RightSide isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}/>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      <MobileMenu isOpen={isMenuOpen} pathName={pathname} onClick={closeMenu}/>
    </nav>
  );
};