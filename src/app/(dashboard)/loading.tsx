import { Loader2 } from "lucide-react";

export default function DashboardLoading() {
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-blue-800" />
        <p className="text-lg font-medium text-blue-500">
          Cargando panel de control...
        </p>
      </div>
    </div>
  )
}