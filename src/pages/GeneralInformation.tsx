import React from 'react';
import Layout from '../components/Layout';

const GeneralInformation: React.FC = () => {
  return (
    <Layout title="General Information">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-volvo font-bold text-volvo-blue mb-6">Facility Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-volvo font-semibold text-volvo-blue mb-3">Emergency Contacts</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-volvo-gray">Security:</span>
                <span className="font-medium">+46 123 456 789</span>
              </li>
              <li className="flex justify-between">
                <span className="text-volvo-gray">First Aid:</span>
                <span className="font-medium">+46 123 456 790</span>
              </li>
              <li className="flex justify-between">
                <span className="text-volvo-gray">Maintenance:</span>
                <span className="font-medium">+46 123 456 791</span>
              </li>
              <li className="flex justify-between">
                <span className="text-volvo-gray">IT Support:</span>
                <span className="font-medium">+46 123 456 792</span>
              </li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-volvo font-semibold text-volvo-blue mb-3">Working Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-volvo-gray">Morning Shift:</span>
                <span className="font-medium">06:00 - 14:30</span>
              </li>
              <li className="flex justify-between">
                <span className="text-volvo-gray">Afternoon Shift:</span>
                <span className="font-medium">14:30 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-volvo-gray">Night Shift:</span>
                <span className="font-medium">23:00 - 06:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-volvo-gray">Office Hours:</span>
                <span className="font-medium">08:00 - 17:00</span>
              </li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-volvo font-semibold text-volvo-blue mb-3">Upcoming Events</h3>
            <ul className="space-y-2">
              <li className="flex flex-col">
                <div className="flex justify-between">
                  <span className="font-medium">Safety Training</span>
                  <span className="text-volvo-gray">June 15, 2025</span>
                </div>
                <span className="text-sm text-volvo-gray">Mandatory for all production staff</span>
              </li>
              <li className="flex flex-col">
                <div className="flex justify-between">
                  <span className="font-medium">Factory Shutdown</span>
                  <span className="text-volvo-gray">July 20-31, 2025</span>
                </div>
                <span className="text-sm text-volvo-gray">Annual maintenance period</span>
              </li>
              <li className="flex flex-col">
                <div className="flex justify-between">
                  <span className="font-medium">Team Building Event</span>
                  <span className="text-volvo-gray">August 12, 2025</span>
                </div>
                <span className="text-sm text-volvo-gray">All departments</span>
              </li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-volvo font-semibold text-volvo-blue mb-3">Facility Map</h3>
            <div className="aspect-video bg-volvo-lightgray flex items-center justify-center">
              <p className="text-volvo-gray">Facility map will be displayed here</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 border rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-volvo font-semibold text-volvo-blue mb-3">Announcements</h3>
          <div className="space-y-4">
            <div className="p-3 bg-volvo-lightgray rounded-md">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-volvo-blue">New Safety Protocols</h4>
                <span className="text-sm text-volvo-gray">May 20, 2025</span>
              </div>
              <p className="text-sm text-volvo-gray mt-1">
                Updated safety protocols will be implemented starting next month. All employees must complete the online training module by June 10.
              </p>
            </div>
            
            <div className="p-3 bg-volvo-lightgray rounded-md">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-volvo-blue">Cafeteria Renovation</h4>
                <span className="text-sm text-volvo-gray">May 15, 2025</span>
              </div>
              <p className="text-sm text-volvo-gray mt-1">
                The main cafeteria will be closed for renovation from June 1-14. Temporary food service will be available in Building B.
              </p>
            </div>
            
            <div className="p-3 bg-volvo-lightgray rounded-md">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-volvo-blue">Parking Area Changes</h4>
                <span className="text-sm text-volvo-gray">May 10, 2025</span>
              </div>
              <p className="text-sm text-volvo-gray mt-1">
                Due to construction, the east parking lot will be closed starting June 5. Please use the south and west parking areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GeneralInformation;