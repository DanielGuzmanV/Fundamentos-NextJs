"use client";
import { useState } from "react";
import { SidebarCustom } from "@/components/layout/sidebar";
import { useActiveTitle } from "@/hooks/useActiveTitle";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderDesktopWeb } from "./HeaderDesktopWeb";


export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const {title, isSubscreen, breadcrumbs} = useActiveTitle()

  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden text-slate-900">
      <SidebarCustom 
        isOpen={isSidebarOpen} 
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        onClose={() => setIsSidebarOpen(false)} 
      />

      <div className="flex-1 flex flex-col min-w-0 transition-all duration-200">
        {/* Header mobile */}
        <HeaderMobile
          isSubscreen={isSubscreen}
          setIsSidebarOpen={() => setIsSidebarOpen(true)}
          title={title}
        />

        {/* Contenido principal */}
        <div className='hidden lg:block sticky top-0 z-10 bg-gray-50 px-3 lg:px-6'>
          {/* Header web-desktop */}
          <HeaderDesktopWeb
            title={title}
            breadcrumbs={breadcrumbs}
            isSubscreen={isSubscreen}
          />

        </div>
        <main className="flex-1 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-white/5 z-40 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)} 
        />
      )}
    </div>
  );
}