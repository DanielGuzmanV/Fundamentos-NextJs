import { CryptoSummary, DropdownOption, SelectableAsset } from "../types/crypto";

export const TOP_COINS: CryptoSummary[] = [
  { name: "Bitcoin", symbol: "BTC", price: "$64,230.50", change: 2.45 },
  { name: "Ethereum", symbol: "ETH", price: "$3,450.12", change: -1.20 },
  { name: "Solana", symbol: "SOL", price: "$145.80", change: 5.67 },
  { name: "Cardano", symbol: "ADA", price: "$0.45", change: 0.12 },
];

export const PRICE_HISTORY = [
  { day: "Lun", price: 62000 },
  { day: "Mar", price: 63500 },
  { day: "Mie", price: 61000 },
  { day: "Jue", price: 64000 },
  { day: "Vie", price: 63000 },
  { day: "Sab", price: 65000 },
  { day: "Dom", price: 64230 },
];

export const TIME_RANGE_OPTIONS: DropdownOption[] = [
  {value: "day", label: "Dia"},
  {value: "week", label: "Semana"},
  {value: "month", label: "Mes"},
]

// Lista de activos seleccionables
export const SELECTABLE_ASSETS: SelectableAsset[] = [
  { id: "bitcoin", name: "Bitcoin", symbol: "BTC" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH" },
  { id: "solana", name: "Solana", symbol: "SOL" },
  { id: "cardano", name: "Cardano", symbol: "ADA" },
  { id: "ripple", name: "Ripple", symbol: "XRP" },
  { id: "dogecoin", name: "Dogecoin", symbol: "DOGE" },
]