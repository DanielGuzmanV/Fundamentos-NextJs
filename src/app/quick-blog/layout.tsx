import { BlogNavbar } from "@/features/demos/quick-blog/main/components/BlogNavbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick-Blog",
  description: "Un blog dinámico optimizado para una carga ultrarrápida.",
};

export default function QuickBlogDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Navbar persistente */}
      <BlogNavbar/>

      {/* Área de contenido */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>

      {/* Footer simple (Opcional) */}
      <footer className="py-8 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} QuickBlog Demo - Portafolio Next.js</p>
      </footer>
    </div>
  );
}