import { LayoutDashboard } from "lucide-react"

export const LeftSide = () => {
  return (
    <div className="flex items-center gap-4 lg:gap-8">
      <div className="flex items-center gap-2">
        <div className="bg-indigo-600 p-1.5 rounded-lg">
          <LayoutDashboard className="text-white" size={20} />
        </div>
        <span className="font-bold text-xl text-slate-600 tracking-tight">
          Crypto<span className="text-indigo-600">Hub</span>
        </span>
      </div>
    </div>
  )
}