import { BarChart3, Package, ShoppingCart } from "lucide-react";

export const FEATURES = [
  {
    title: "Gestión de Stock",
    description: "Control preciso de existencias, categorías y alertas de bajo stock para que nunca te quedes sin productos.",
    Icon: Package,
    colorClass: "bg-blue-600"
  },
  {
    title: "Ventas y POS",
    description: "Registra ventas rápidamente, genera recibos y gestiona el historial de transacciones de forma eficiente.",
    Icon: ShoppingCart,
    colorClass: "bg-emerald-500"
  },
  {
    title: "Reportes en Vivo",
    description: "Visualiza el rendimiento de tu negocio con gráficos de ganancias, productos top y tendencias de venta.",
    Icon: BarChart3,
    colorClass: "bg-indigo-600"
  }
];