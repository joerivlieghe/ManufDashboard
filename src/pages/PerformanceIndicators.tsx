import React from 'react';
import Layout from '../components/Layout';
import { kpis } from '../data/mockData';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

const PerformanceIndicators: React.FC = () => {
  const categoryNames = {
    safety: 'Safety',
    quality: 'Quality',
    delivery: 'Delivery',
    cost: 'Cost',
    environment: 'Environment',
    people: 'People'
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="text-green-500" size={16} />;
      case 'down':
        return <ArrowDown className="text-red-500" size={16} />;
      case 'stable':
        return <Minus className="text-gray-500" size={16} />;
      default:
        return null;
    }
  };

  const getProgressColor = (value: number, target: number, isLowerBetter: boolean = false) => {
    const percentage = isLowerBetter
      ? (target / value) * 100
      : (value / target) * 100;
    
    if (percentage >= 100) {
      return 'bg-green-500';
    } else if (percentage >= 80) {
      return 'bg-yellow-500';
    } else {
      return 'bg-red-500';
    }
  };

  const isLowerBetter = (category: string) => {
    return ['cost', 'environment'].includes(category);
  };

  return (
    <Layout title="Performance Indicators">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-volvo font-bold text-volvo-blue mb-6">SQDCEP KPIs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categoryNames).map(([category, name]) => {
            const categoryKpis = kpis.filter(kpi => kpi.category === category);
            
            return (
              <div key={category} className="border rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-volvo font-semibold text-volvo-blue mb-3">{name}</h3>
                <div className="space-y-4">
                  {categoryKpis.map(kpi => (
                    <div key={kpi.id} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-volvo-gray">{kpi.name}</span>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-bold">
                            {kpi.value} {kpi.unit}
                          </span>
                          {getTrendIcon(kpi.trend)}
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${getProgressColor(kpi.value, kpi.target, isLowerBetter(category))}`}
                          style={{ 
                            width: `${Math.min(
                              isLowerBetter(category) 
                                ? (kpi.target / kpi.value) * 100 
                                : (kpi.value / kpi.target) * 100, 
                              100
                            )}%` 
                          }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-volvo-gray">
                        <span>Current: {kpi.value} {kpi.unit}</span>
                        <span>Target: {kpi.target} {kpi.unit}</span>
                      </div>
                    </div>
                  ))}
                  {categoryKpis.length === 0 && (
                    <p className="text-sm text-volvo-gray">No KPIs available for this category.</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default PerformanceIndicators;