import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children
}: {children: React.ReactNode}) {
  return (
    <div className="flex">
      <Sidebar/>
      <main className="ml-64 flex-1 min-h-screen bg-slate-50">
        {children}
      </main>
    </div>
  )
}




