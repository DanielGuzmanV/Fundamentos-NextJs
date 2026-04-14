// src/app/crypto-dashboard/layout.tsx
import { Metadata } from "next";
import { Navbar } from "@/features/demos/crypto-dashboard/main/components/layout/Navbar";

export const metadata: Metadata = {
  title: "CryptoHub | Real-Time Market",
  description: "Monitorea tus criptomonedas favoritas en tiempo real con CryptoHub.",
};

export default function CryptoDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Navbar persistente */}
      <Navbar />

      {/* Área de contenido */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>

      {/* Footer simple (Opcional) */}
      <footer className="py-8 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} CryptoHub Demo - Portafolio Next.js</p>
      </footer>
    </div>
  );
}