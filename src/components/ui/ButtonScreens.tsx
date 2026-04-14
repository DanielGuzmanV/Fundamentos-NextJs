import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  linkPath: string;
  Icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'link';
}

export const ButtonScreens = ({ 
  title, 
  linkPath, 
  Icon, 
  variant = 'primary', 
}: Props) => {

  const variants = {
    primary: "group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl shadow-lg transition-all hover:scale-[1.02] bg-indigo-600 shadow-indigo-200 hover:bg-indigo-700 text-white font-bold text-lg",
    secondary: "px-6 py-3 bg-slate-100 text-slate-900 rounded-xl hover:bg-slate-200 transition-colors",
    link: "text-slate-500 hover:text-slate-800 font-medium text-sm transition-colors"
  };
  
  return (
    <Link 
      href={linkPath}
      className={variants[variant]}
    >
      <span>{title}</span>
      {Icon && <Icon size={20} className="group-hover:translate-x-1 transition-transform" />}
    </Link>
  ); 
}