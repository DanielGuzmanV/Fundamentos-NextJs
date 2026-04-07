import { PATHS } from "@/lib/constants/navigation";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

export default function CryptoMain() { 
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans p-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200 w-full max-w-md flex flex-col items-center gap-6">
        <div className="text-center">
          <h1 className="text-black font-bold text-2xl">Crypto - Dashboard</h1>
          <p className="text-zinc-500 text-sm">Pantalla principal de crypto dashboard</p>
        </div>

        <Link 
          href={PATHS.DEMO_1}
          className="flex items-center justify-center gap-2 cursor-pointer w-full bg-indigo-600 text-white text-lg py-4 rounded-lg font-semibold transition-colors hover:bg-indigo-700"
        >
          <span>Volver a la presentacion</span>
          <LinkIcon size={20} />
        </Link>
      </div>
    </div>
  ); 
}


