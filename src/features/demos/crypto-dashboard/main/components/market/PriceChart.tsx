"use client";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { PRICE_HISTORY } from '../../constants/marketData';

interface Props {
  selectedCoin1: string;
  selectedCoin2: string;
  // Aquí podríamos añadir 'data' en el futuro
}

export const PriceChart = ({}: Props) => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={PRICE_HISTORY} margin={{bottom: 25}}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="black" />
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#94a3b8', fontSize: 12}}
            dy={10}
            interval={0}
            padding={{ left: 10, right: 15 }}
          />
          <YAxis hide domain={['dataMin - 1000', 'dataMax + 1000']} />
          <Tooltip 
            contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
          />
          <Area 
            type="monotone" 
            dataKey="price" 
            stroke="#4f46e5" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorPrice)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};