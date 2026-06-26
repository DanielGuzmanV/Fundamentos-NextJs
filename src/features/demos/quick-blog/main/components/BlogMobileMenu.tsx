"use client";

import { NavLinks } from './NavLinks';
import { FormSearch } from './FormSearch';

interface BlogMobileMenuProps {
  isOpen: boolean;
  searchTerm: string;
  handleSearch: () => void;
  setSearchTerm: (value: string) => void;
  mobileMenu: () => void;
}

export const BlogMobileMenu = ({
  isOpen, 
  searchTerm, 
  handleSearch, 
  setSearchTerm, 
  mobileMenu 
}: BlogMobileMenuProps) => {
  // Si el menú no está abierto, no renderizamos nada
  if (!isOpen) return null;

  return (
    <div className="absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl lg:hidden z-40 animate-in slide-in-from-top duration-300">
      <div className="flex flex-col gap-4 p-4 pb-8">
        <div className='block sm:hidden'>
          <FormSearch
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
        <div className="border-t border-slate-100">
          <NavLinks mobileMenu={mobileMenu}/>
        </div>
      </div>
    </div>
  );
};