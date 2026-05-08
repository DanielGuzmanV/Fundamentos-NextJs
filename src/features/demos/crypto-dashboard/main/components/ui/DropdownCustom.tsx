"use client";

import { ChevronDown } from "lucide-react";
import { DropdownOption } from "../../types/crypto";

interface Props {
  options: DropdownOption[]; // Lista de opciones
  selectedValue: string; // Valor seleccionado
  onValueChange: (value: string) => void; // Función para actualizar el valor
  placeholder?: string; // Opcional, para un texto inicial
}

export const DropdownCustom = ({ options, selectedValue, onValueChange, placeholder }: Props) => {
  return (
    <div className="relative w-full sm:w-auto">
      <select
        value={selectedValue}
        onChange={(e) => onValueChange(e.target.value)}
        className="block w-full min-w-22.5 py-2 pl-2 pr-7 text-slate-700 font-medium border-slate-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md bg-slate-100 appearance-none cursor-pointer truncate"
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((asset) => (
          <option key={asset.value} value={asset.value} className="bg-white text-slate-700">
            {asset.label}
          </option>
        ))}
      </select>

      {/* Ajuste de posición del icono para que sea constante */}
      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-slate-700">
        <ChevronDown size={18} className="shrink-0" />
      </div>
    </div>
  );
};