"use client";

import { useState } from 'react'; // Importamos useState
import { BlogMobileMenu } from './BlogMobileMenu'; // Importamos el componente de menú móvil
import { LogoSide } from './LogoSide';
import { NavLinks } from './NavLinks';
import { RightSide } from './RightSide';


export const BlogNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para el menú móvil
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el input de búsqueda

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para manejar la búsqueda. Por ahora, solo un log.
    console.log("Buscando:", searchTerm);
    // En el futuro, esto redirigiría a una página de resultados de búsqueda
    // router.push(`/blog/search?q=${searchTerm}`);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((s) => !s);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);


  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <LogoSide/>

          {/* Navegación Desktop */}
          <div className="hidden lg:flex md:space-x-4 lg:space-x-8 items-center">
            <NavLinks mobileMenu={closeMobileMenu}/>
          </div>

          {/* Acciones y Hamburguesa */}
          <RightSide
            handleSearch={() => handleSearch}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onToggleMobileMenu={toggleMobileMenu}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </div>
      </div>

      {/* Menú Móvil - Ahora aparece debajo de la h-16 */}
      <BlogMobileMenu 
        isOpen={isMobileMenuOpen} 
        handleSearch={() => handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        mobileMenu={closeMobileMenu}
      />
    </nav>
  );
};