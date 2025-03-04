import React from 'react';
import Layout from '../components/Layout';
import { useUser } from '../context/UserContext';

const MissionOperators: React.FC = () => {
  const { user } = useUser();

  // Mock data for mission operators
  const missionOperators = [
    {
      name: 'John Smith',
      role: 'Team Leader',
      responsibilities: ['Coordinate daily operations', 'Quality assurance', 'Team performance'],
      contact: '+46 123 456 789',
      email: 'john.smith@volvo.com',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Maria Garcia',
      role: 'Safety Officer',
      responsibilities: ['Safety protocol enforcement', 'Incident investigation', 'Safety training'],
      contact: '+46 123 456 790',
      email: 'maria.garcia@volvo.com',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Robert Johnson',
      role: 'Quality Inspector',
      responsibilities: ['Product quality checks', 'Process improvement', 'Documentation'],
      contact: '+46 123 456 791',
      email: 'robert.johnson@volvo.com',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Sarah Williams',
      role: 'Maintenance Specialist',
      responsibilities: ['Equipment maintenance', 'Troubleshooting', 'Preventive maintenance'],
      contact: '+46 123 456 792',
      email: 'sarah.williams@volvo.com',
      photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Michael Brown',
      role: 'Process Engineer',
      responsibilities: ['Process optimization', 'Technical support', 'Implementation of new methods'],
      contact: '+46 123 456 793',
      email: 'michael.brown@volvo.com',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Emma Davis',
      role: 'Logistics Coordinator',
      responsibilities: ['Material flow management', 'Inventory control', 'Supply coordination'],
      contact: '+46 123 456 794',
      email: 'emma.davis@volvo.com',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <Layout title="Mission Operators">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-volvo font-bold text-volvo-blue mb-6">
          {user?.area.name} - {user?.team.name} Mission Operators
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missionOperators.map((operator, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-square overflow-hidden bg-volvo-lightgray">
                <img 
                  src={operator.photo} 
                  alt={operator.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-volvo font-semibold text-volvo-blue">{operator.name}</h3>
                <p className="text-volvo-gray font-medium">{operator.role}</p>
                
                <div className="mt-3">
                  <h4 className="text-sm font-medium text-volvo-gray mb-1">Responsibilities:</h4>
                  <ul className="text-sm text-volvo-gray list-disc list-inside">
                    {operator.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-sm">
                    <span className="font-medium text-volvo-gray">Contact: </span>
                    {operator.contact}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-volvo-gray">Email: </span>
                    <a href={`mailto:${operator.email}`} className="text-volvo-lightblue hover:underline">
                      {operator.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MissionOperators;