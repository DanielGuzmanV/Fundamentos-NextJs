import { TrendingDown, TrendingUp } from "lucide-react";

interface Props {
  name: string;
  symbol: string;
  price: string;
  change: number;
}

export const MarketCard = ({name, symbol, price, change}: Props) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-slate-500 uppercase">{symbol}</p>
          <h3 className="text-xl font-bold text-slate-900">{name}</h3>
        </div>

        <div className={`p-2 rounded-lg ${isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
          {isPositive ? <TrendingUp size={20}/> : <TrendingDown size={20}/>}
        </div>
      </div>

      <div className="flex items-end justify-between">
        <p className="text-2xl font-black text-slate-900">{price}</p>
        <span className={`text-sm font-bold ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
          {isPositive ? '+' : ''}{change}%
        </span>
      </div>
    </div>
  )
}