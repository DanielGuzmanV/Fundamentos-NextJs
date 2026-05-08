"use client";

import { useState } from "react";
import { MarketCard } from "../components/market/MarketCard";
import { PriceChart } from "../components/market/PriceChart";
import { ChartControls } from "../components/market/ChartControls";
import { TOP_COINS } from "../constants/marketData";
import { TimeRange } from "../components/market/TimeRange";

export default function CryptoMain() { 
  const [selectedCoin1, setSelectedCoin1] = useState('bitcoin'); // Estado para la moneda 1
  const [selectedCoin2, setSelectedCoin2] = useState('ethereum'); // Estado para la moneda 2
  const [selectedTime, setSelectedTime] = useState('Dia');

  const handleSelectCoins = (coin1Id: string, coin2Id: string) => {
    setSelectedCoin1(coin1Id);
    setSelectedCoin2(coin2Id);
    // Aquí es donde en el futuro llamaríamos a la API para obtener los datos históricos
  };

  const handleSelectTime = (selectDay: string) => {
    setSelectedTime(selectDay);
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700 h-full flex flex-col">
      {/* Header de la sección */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Mercado en Vivo</h1>
          <p className="text-slate-500">Estado actual de los activos digitales más populares.</p>
        </div>
        <div className="flex gap-2 items-center px-3 py-1 bg-indigo-100 rounded-full font-bold uppercase w-fit h-fit">
          <div className="rounded-full bg-emerald-500 animate-pulse h-2.5 w-2.5 shrink-0"/>
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

      {/* Contenedor principal del Gráfico y Actividad Reciente */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-125 bg-blue-100 p-3 rounded-xl"> {/* flex-1 para que crezca, min-h para responsive */}
        {/* Lado del Gráfico (izquierdo) */}
        <div className="lg:col-span-2 flex flex-col"> {/* Contenedor para el header del gráfico y el gráfico en sí */}
          {/* Header del gráfico y controles */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            {/* Header para seleccionar el rango de tiempo */}
            <TimeRange
              selectedTime={selectedTime}
              onSelectTime={handleSelectTime}
              selectedCoin1={selectedCoin1} 
              selectedCoin2={selectedCoin2}
            />

            {/* Controles de selección de monedas */}
            <ChartControls 
              selectedCoin1={selectedCoin1}
              selectedCoin2={selectedCoin2}
              onSelectCoins={handleSelectCoins}
            />
          </div>

          {/* Contenedor que da el fondo y el padding al gráfico */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex-1 min-h-75"> {/* flex-1 para que el gráfico crezca */}
            <PriceChart selectedCoin1={selectedCoin1} selectedCoin2={selectedCoin2} /> 
          </div>
        </div>

        {/* Lado de Actividad Reciente (derecho)*/}
        <div className="bg-white h-full rounded-3xl border border-dashed border-slate-300 flex items-center justify-center text-slate-400">
          Actividad Reciente
        </div>
      </div>
    </div>
  ); 
}