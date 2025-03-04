import React from 'react';
import Layout from '../components/Layout';

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      quarter: 'Q2 2025',
      items: [
        {
          title: 'New Truck Model Introduction',
          description: 'Preparation for production of the new XC series trucks',
          status: 'in-progress'
        },
        {
          title: 'Assembly Line Upgrade',
          description: 'Installation of new robotic systems in main assembly area',
          status: 'in-progress'
        },
        {
          title: 'Safety Protocol Update',
          description: 'Implementation of enhanced safety measures across all departments',
          status: 'completed'
        }
      ]
    },
    {
      quarter: 'Q3 2025',
      items: [
        {
          title: 'Logistics Optimization Project',
          description: 'New warehouse management system deployment',
          status: 'planned'
        },
        {
          title: 'Quality Control Enhancement',
          description: 'Introduction of AI-powered inspection systems',
          status: 'planned'
        },
        {
          title: 'Employee Training Program',
          description: 'Comprehensive training for new production methods',
          status: 'planned'
        }
      ]
    },
    {
      quarter: 'Q4 2025',
      items: [
        {
          title: 'Sustainability Initiative',
          description: 'Implementation of energy-saving measures across the facility',
          status: 'planned'
        },
        {
          title: 'Full Production of New Models',
          description: 'Scaling up production of the new XC series trucks',
          status: 'planned'
        },
        {
          title: 'Digital Transformation Phase 2',
          description: 'Expansion of digital tools for production monitoring',
          status: 'planned'
        }
      ]
    },
    {
      quarter: 'Q1 2026',
      items: [
        {
          title: 'Facility Expansion',
          description: 'Construction of new production hall for electric trucks',
          status: 'planned'
        },
        {
          title: 'Supply Chain Integration',
          description: 'Enhanced integration with key suppliers',
          status: 'planned'
        },
        {
          title: 'Workforce Development',
          description: 'Advanced skills training for future production needs',
          status: 'planned'
        }
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusColors: Record<string, string> = {
      'completed': 'bg-green-100 text-green-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      'planned': 'bg-gray-100 text-gray-800'
    };

    return (
      <span className={`px-2 py-1 text-xs rounded-full ${statusColors[status]}`}>
        {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
      </span>
    );
  };

  return (
    <Layout title="Roadmap">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-volvo font-bold text-volvo-blue mb-6">Production Roadmap</h2>
        
        <div className="space-y-8">
          {roadmapItems.map((quarter, index) => (
            <div key={index} className="border-l-4 border-volvo-blue pl-4">
              <h3 className="text-xl font-volvo font-semibold text-volvo-blue mb-4">{quarter.quarter}</h3>
              <div className="space-y-4">
                {quarter.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-volvo-lightgray p-4 rounded-md">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium text-volvo-blue">{item.title}</h4>
                      {getStatusBadge(item.status)}
                    </div>
                    <p className="text-sm text-volvo-gray mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Roadmap;