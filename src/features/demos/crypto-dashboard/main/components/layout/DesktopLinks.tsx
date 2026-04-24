import Link from "next/link";
import { navLinks } from "../../constants/navLinks";

export const DesktopLinks = ({pathName}: {pathName: string}) => {
  return (
    <>
      {navLinks.map((link) => {
        const Icon = link.icon;
        const isActive = pathName === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all
              ${isActive ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-50"}`}
          >
            <Icon size={18} />
            {link.name}
          </Link>
        );
      })}
    </>
  )
}