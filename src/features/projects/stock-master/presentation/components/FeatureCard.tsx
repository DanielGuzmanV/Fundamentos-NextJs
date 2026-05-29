import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  Icon: LucideIcon;
  colorClass: string;
}

export const FeatureCard = ({ title, description, Icon, colorClass }: Props) => {
  return (
    <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${colorClass}`}>
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};