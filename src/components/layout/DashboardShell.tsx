"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import { SidebarCustom } from "@/components/layout/sidebar";
import { useActiveTitle } from "@/hooks/useActiveTitle";
import { PageHeader } from "./PageHeader";


export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const activeTitle = useActiveTitle()

  const openMobileSidebar = () => {
    setIsSidebarOpen(true);
    setIsCollapsed(false);
  }

  return (
    <div className="flex h-screen w-full bg-gray-100 overflow-hidden text-slate-900">
      <SidebarCustom 
        isOpen={isSidebarOpen} 
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        onClose={() => setIsSidebarOpen(false)} 
      />

      <div className="flex-1 flex flex-col min-w-0 transition-all duration-200">
        <header className="lg:hidden flex items-center justify-between p-2 dark:bg-black dark:text-zinc-50">
          <button onClick={openMobileSidebar} className="p-2 text-gray-200">
            <Menu size={24} />
          </button>
          <span className="font-bold text-lg pr-5">{activeTitle}</span>
        </header>
        
        {/* Contenido principal */}
        <div className='hidden lg:block sticky top-0 z-10 bg-gray-50 px-3 lg:px-6'>
          <PageHeader title={activeTitle}/>
        </div>
        <main className="flex-1 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>

      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-white/5 backdrop-blur-sm z-40 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)} 
        />
      )}
    </div>
  );
}