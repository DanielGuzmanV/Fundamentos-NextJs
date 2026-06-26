interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const PageHeader = ({ title, description}: PageHeaderProps) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-200">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        {description && <p className="mt-1 text-sm text-gray-600">{description}</p>}
      </div>
    </div>
  );
};