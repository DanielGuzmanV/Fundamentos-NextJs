"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeaderDesktopWebProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  isSubscreen?: boolean;
}

export const HeaderDesktopWeb = ({
  title,
  breadcrumbs = [],
  isSubscreen = false,
}: HeaderDesktopWebProps) => {
  return (
    <header className="hidden lg:flex h-16 items-center justify-between px-6 py-4">
      {isSubscreen && breadcrumbs.length > 0 ? (
        <nav aria-label="Breadcrumb" className="flex items-center text-sm text-muted-foreground">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <div key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="mx-2 h-4 w-4 shrink-0 text-muted-foreground/60" />
                )}
                {isLast || !item.href ? (
                  <span
                    className="text-xl font-semibold text-black truncate max-w-55 lg:max-w-[320px]"
                    title={item.label}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="truncate max-w-35 lg:max-w-45 text-xl font-semibold text-black transition-colors hover:text-primary"
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      ) : (
        <h1 className="text-xl font-bold text-black truncate">{title}</h1>
      )}
    </header>
  );
};