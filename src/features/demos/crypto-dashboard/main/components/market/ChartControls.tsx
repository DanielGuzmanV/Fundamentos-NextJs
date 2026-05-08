"use client";

import { SELECTABLE_ASSETS } from "../../constants/marketData";
import { DropdownOption } from "../../types/crypto";
import { DropdownCustom } from "../ui/DropdownCustom";

interface Props {
  onSelectCoins: (coin1Id: string, coin2Id: string) => void;
  selectedCoin1: string;
  selectedCoin2: string;
}

export const ChartControls = ({ onSelectCoins, selectedCoin1, selectedCoin2 }: Props) => {
  const selectableCoinOptions: DropdownOption[] = SELECTABLE_ASSETS.map(asset => ({
    value: asset.id,
    label: `${asset.name} (${asset.symbol})`
  }))
  
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm">
      <span className="text-sm font-medium text-slate-700">Comparar:</span>
      
      {/* Dropdown 1 */}
      <DropdownCustom
        options={selectableCoinOptions}
        selectedValue={selectedCoin1}
        onValueChange={(value) => onSelectCoins(value, selectedCoin2)}
        placeholder="Selecciona un activo"
      />

      <span className="text-sm font-medium text-slate-700">con</span>

      {/* Dropdown 2 */}
      <DropdownCustom
        options={selectableCoinOptions}
        selectedValue={selectedCoin2}
        onValueChange={(value) => onSelectCoins(selectedCoin1, value)}
        placeholder="Selecciona otro activo"
      />
    </div>
  );
};