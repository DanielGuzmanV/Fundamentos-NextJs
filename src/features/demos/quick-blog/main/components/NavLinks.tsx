import Link from "next/link";
import { BLOG_NAV_LINKS } from "../constants/BlogNavLinks";

interface Props {
  mobileMenu: () => void;
}

export const NavLinks = ({mobileMenu}: Props) => {
  return (
    <>
      {BLOG_NAV_LINKS.map((link) => {
        const Icon = link.icon;
        // Se podria añadir lógica para isActive si la ruta actual coincide con link.href
        // const router = useRouter();
        // const isActive = router.pathname === link.href;
        const isActive = false; // Por ahora, placeholder sin funcionalidad de active

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={mobileMenu}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${isActive ? "bg-green-50 text-green-700" : "text-slate-600 hover:bg-slate-50 hover:text-green-600"}`}
          >
            <Icon size={18} />
            {link.name}
          </Link>
        );
      })}
    </>
  )
}