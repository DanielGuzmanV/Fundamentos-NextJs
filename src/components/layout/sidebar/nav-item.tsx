"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavItemConfig } from "@/lib/constants/navigation";

interface Props {
  item: NavItemConfig;
  onClick: () => void;
}

export const NavItem = ({item, onClick}: Props) => {
  const pathname = usePathname();
  const Icon = item.icon;
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href!}
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-colors 
        ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}
      `}
    >
      <Icon size={20}/>
      <span>{item.name}</span>
    </Link>
  )

}