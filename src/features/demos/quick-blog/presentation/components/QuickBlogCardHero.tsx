import { LucideIcon } from "lucide-react";

interface QuickBlogCardHeroProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  colorClass: string;
}

export const QuickBlogCardHero = ({ title, description, Icon, colorClass }: QuickBlogCardHeroProps) => {
  return (
    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-5 ${colorClass}`}>
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};