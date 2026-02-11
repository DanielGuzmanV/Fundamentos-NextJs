import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen p-6 flex flex-col fixed">
      <h1 className="text-xl font-bold mb-10 text-blue-400">Fundamentos Nextjs</h1>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="hover:text-blue-400 transition">Inicio</Link>
          </li>
          <li>
            <Link href="/ventas" className="hover:text-blue-400 transition">Ventas</Link>
          </li>
        </ul>
      </nav>
      <div className="text-xs text-slate-500">Version - v1.0.0</div>
    </aside>
  )
}





