import { MarketCard } from "../components/market/MarketCard";
import { TOP_COINS } from "../constants/marketData";

export default function CryptoMain() { 

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header de la sección */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Mercado en Vivo</h1>
          <p className="text-slate-500">Estado actual de los activos digitales más populares.</p>
        </div>
        <div className="flex gap-2 items-center px-3 py-1 bg-indigo-100 rounded-full font-bold uppercase w-fit h-fit">
          <div className="rounded-full bg-green-500 animate-pulse h-2.5 w-2.5 shrink-0"/>
          <span className=" text-indigo-700 text-xs leading-none">
            Live Data
          </span>
        </div>
      </div>

      {/* Grid de Market Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TOP_COINS.map((coin) => (
          <MarketCard key={coin.symbol} {...coin} />
        ))}
      </div>

      {/* Aquí irán el Gráfico y la Tabla después */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white h-100 rounded-3xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400">
          Espacio para el Gráfico (Recharts)
        </div>
        <div className="bg-white h-100 rounded-3xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400">
          Actividad Reciente
        </div>
      </div>
    </div>
  ); 
}


