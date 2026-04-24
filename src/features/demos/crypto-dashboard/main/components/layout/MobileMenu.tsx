import Link from "next/link";
import { navLinks } from "../../constants/navLinks";
import { Wallet } from "lucide-react";

interface Props {
  isOpen: boolean;
  pathName: string;
  onClick: () => void;
}

export const MobileMenu = ({isOpen, pathName, onClick}: Props) => {
  return (
    <>
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Navegación</p>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathName === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClick}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-colors
                    ${isActive ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50"}`}
                >
                  <Icon size={22} />
                  {link.name}
                </Link>
              );
            })}

            <div className="sm:hidden pt-4 mt-4 border-t border-slate-100 space-y-4">
              <div className="flex items-center gap-3 px-3">
                <div className="h-10 w-10 rounded-full bg-blue-700 border-2 border-white shadow-sm" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900">Usuario Demo</span>
                  <span className="text-xs text-slate-500">ID: 0x4f2...e91</span>
                </div>
              </div>
              
              <button className="w-full flex items-center justify-center gap-3 bg-indigo-600 text-white px-4 py-4 rounded-2xl font-bold text-base hover:bg-indigo-700 transition-colors">
                <Wallet size={20} />
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}