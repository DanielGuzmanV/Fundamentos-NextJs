"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavItemConfig } from "@/lib/constants/navigation";

interface Props {
  item: NavItemConfig;
  onClick: () => void;
  isCollapsed: boolean;
}

export const NavItem = ({item, onClick, isCollapsed}: Props) => {
  const pathname = usePathname();
  const Icon = item.icon;
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href!}
      onClick={onClick}
      className={`flex items-center p-3 rounded-lg font-medium transition-all ${
        isActive ? "bg-indigo-100 text-indigo-600" : "text-gray-600 hover:bg-gray-100"
      } ${isCollapsed ? "lg:justify-center gap-3" : "gap-3"}`}
      title={isCollapsed ? item.name : ""}
    >
      <Icon size={20} className="shrink-0"/>

      <span
        className={`whitespace-nowrap transition-opacity duration-200 ${
          isCollapsed ? "lg:hidden inline" : "inline"
        }`}
      >
        {item.name}
      </span>
    </Link>
  )

}