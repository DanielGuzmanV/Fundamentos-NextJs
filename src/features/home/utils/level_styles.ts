type PropsLevelStyles = {
  badge: string;
  borderHover: string;
  iconBg: string;
}

export const LEVEL_STYLES: Record<string, PropsLevelStyles> = {
  basic: {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    borderHover: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    iconBg: "bg-emerald-500/10 text-emerald-400",
  },
  intermediate: {
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    borderHover: "hover:border-amber-500/50 hover:shadow-amber-500/10",
    iconBg: "bg-amber-500/10 text-amber-400",
  },
  advanced: {
    badge: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    borderHover: "hover:border-rose-500/50 hover:shadow-rose-500/10",
    iconBg: "bg-rose-500/10 text-rose-400",
  },
}