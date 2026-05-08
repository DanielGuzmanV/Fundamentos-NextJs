export interface CryptoSummary {
  name: string;
  symbol: string;
  price: string;
  change: number;
}

// Interface para un activo seleccionable
export interface SelectableAsset {
  id: string;
  name: string;
  symbol: string;
}

// Tipo para los datos historicos fusionados para el grafico de comparacion
export interface ComparativeHistoryData {
  time: number;
  data: string;
  [key: string]: number | string;
}

export interface DropdownOption {
  value: string;
  label: string;
}