import { Menu, Wallet, X } from "lucide-react";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export const RightSide = ({onClick, isOpen}: Props) => {
  return (
    <div className="flex items-center gap-3">
      <div className="hidden sm:flex items-center gap-3">
        <button className="flex items-center cursor-pointer gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors shadow-lg">
          <Wallet size={18} />
          <span>Connect Wallet</span>
        </button>

        {/* Seccion para el avatar o perfil del usuario */}
        <div className="h-9 w-9 rounded-full cursor-pointer bg-blue-700 border-2 border-white shadow-sm" />
      </div>

      {/* Botón Hamburguesa */}
      <button 
        onClick={onClick}
        className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
    </div>
  )
}