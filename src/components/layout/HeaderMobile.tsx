"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Menu } from "lucide-react";

interface HeaderMobileProps {
  isSubscreen?: boolean;
  setIsSidebarOpen: () => void;
  title: string;
}

export const HeaderMobile = ({
  isSubscreen = false,
  setIsSidebarOpen,
  title,
}: HeaderMobileProps) => {
  const router = useRouter();

  return (
    <header className="flex lg:hidden items-center gap-2 p-2 bg-background border-b border-border min-w-0 w-full">
      {isSubscreen ? (
        <button
          onClick={() => router.back()}
          className="shrink-0 p-2 text-gray-100 rounded-lg transition-colors"
          aria-label="Volver atrás"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
      ) : (
        <button
          onClick={setIsSidebarOpen}
          className="shrink-0 p-2 text-gray-100 rounded-lg transition-colors"
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6" />
        </button>
      )}
      <h1 className="font-bold text-lg text-gray-100 truncate flex-1">
        {title}
      </h1>
    </header>
  );
};