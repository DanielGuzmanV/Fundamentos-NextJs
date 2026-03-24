import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children
}: {children: React.ReactNode}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <main className="flex-1 bg-slate-50 sm:ml-64">
        {children}
      </main>
    </div>
  )
}