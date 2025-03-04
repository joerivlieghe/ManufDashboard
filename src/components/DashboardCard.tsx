import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  onClick: () => void;
  color?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  title, 
  icon: Icon, 
  onClick, 
  color = 'bg-volvo-blue' 
}) => {
  return (
    <button
      onClick={onClick}
      className={`${color} text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center h-full min-h-40`}
    >
      <Icon size={48} className="mb-4" />
      <h3 className="text-xl font-volvo font-semibold text-center">{title}</h3>
    </button>
  );
};

export default DashboardCard;