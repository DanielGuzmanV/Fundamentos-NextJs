"use client"

import { Menu, X } from "lucide-react";
import { FormSearch } from "./FormSearch";
import React from 'react'; // Necesario para React.FormEvent

interface Props {
  handleSearch: () => void; // Corregido: acepta evento
  searchTerm: string;
  setSearchTerm: (value: string) => void; // Corregido: acepta string
  onToggleMobileMenu: () => void; // Renombrado para claridad
  isMobileMenuOpen: boolean; // Renombrado para claridad
}

export const RightSide = ({
  handleSearch,
  searchTerm,
  setSearchTerm,
  onToggleMobileMenu, // Usar este para el botón
  isMobileMenuOpen // Usar este para el icono del botón
}: Props) => {
  return (
    <div className="flex items-center gap-4">
      <div className='hidden sm:block'>
        <FormSearch
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      <button
        type="button"
        onClick={onToggleMobileMenu}
        className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
        aria-label="Menú"
      >
        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
    </div>
  );
};