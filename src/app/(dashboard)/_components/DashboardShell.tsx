"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import { SidebarCustom } from "@/components/layout/sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

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

      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        <header className="lg:hidden flex items-center justify-between p-2 dark:bg-black dark:text-zinc-50">
          <button onClick={openMobileSidebar} className="p-2 text-gray-200">
            <Menu size={24} />
          </button>
          <span className="font-bold">Dashboard</span>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="max-w-6xl mx-auto p-4">
            {children}
          </div>
        </main>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-slate-800/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}
    </div>
  );
}