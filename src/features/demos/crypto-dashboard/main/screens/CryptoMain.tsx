import { MarketCard } from "../components/market/MarketCard";
import { PriceChart } from "../components/market/PriceChart";
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

      {/* Gráfico y la Tabla después */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-100"> 
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Rendimiento Semanal</h3>
                <p className="text-sm text-slate-500">Bitcoin (BTC) vs USD</p>
              </div>
              <div className="flex gap-2">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+12.5%</span>
              </div>
            </div>
            <PriceChart />
          </div>
        </div>
        <div className="bg-white h-100 rounded-3xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400">
          Actividad Reciente
        </div>
      </div>
    </div>
  ); 
}


