import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useUser } from '../context/UserContext';

const Communication: React.FC = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState('announcements');

  // Mock data for announcements
  const announcements = [
    {
      id: 1,
      title: 'Production Target Achievement',
      content: 'Congratulations to all teams for achieving the monthly production target. Special recognition to Team A for exceeding their target by 15%.',
      date: '2025-05-20',
      author: 'Production Manager'
    },
    {
      id: 2,
      title: 'New Safety Protocols',
      content: 'Updated safety protocols will be implemented starting next month. All employees must complete the online training module by June 10.',
      date: '2025-05-18',
      author: 'Safety Officer'
    },
    {
      id: 3,
      title: 'Upcoming Maintenance Schedule',
      content: 'Scheduled maintenance for production line 3 will take place on May 25-26. Please adjust your production plans accordingly.',
      date: '2025-05-15',
      author: 'Maintenance Department'
    },
    {
      id: 4,
      title: 'Quality Improvement Initiative',
      content: 'We are launching a new quality improvement initiative next month. Team leaders will receive detailed information in the upcoming meeting.',
      date: '2025-05-12',
      author: 'Quality Assurance'
    }
  ];

  // Mock data for team messages
  const teamMessages = [
    {
      id: 1,
      title: 'Team Meeting Schedule',
      content: 'Our weekly team meeting will be held on Thursday at 2:00 PM in Conference Room B. Please prepare your progress reports.',
      date: '2025-05-19',
      author: 'Team Leader'
    },
    {
      id: 2,
      title: 'Equipment Training',
      content: 'Training for the new assembly equipment will be conducted next Monday. All team members are required to attend.',
      date: '2025-05-17',
      author: 'Team Leader'
    },
    {
      id: 3,
      title: 'Process Improvement Suggestions',
      content: 'Thank you for your suggestions on improving the assembly process. We will discuss the implementation plan in our next meeting.',
      date: '2025-05-14',
      author: 'Process Engineer'
    }
  ];

  // Mock data for important contacts
  const importantContacts = [
    {
      name: 'Production Manager',
      contact: '+46 123 456 789',
      email: 'production.manager@volvo.com'
    },
    {
      name: 'HR Department',
      contact: '+46 123 456 790',
      email: 'hr@volvo.com'
    },
    {
      name: 'IT Support',
      contact: '+46 123 456 791',
      email: 'it.support@volvo.com'
    },
    {
      name: 'Maintenance',
      contact: '+46 123 456 792',
      email: 'maintenance@volvo.com'
    },
    {
      name: 'Quality Assurance',
      contact: '+46 123 456 793',
      email: 'quality@volvo.com'
    },
    {
      name: 'Safety Officer',
      contact: '+46 123 456 794',
      email: 'safety@volvo.com'
    }
  ];

  return (
    <Layout title="Communication">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-volvo font-bold text-volvo-blue mb-6">
          Communication Center
        </h2>
        
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('announcements')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'announcements'
                    ? 'border-volvo-blue text-volvo-blue'
                    : 'border-transparent text-volvo-gray hover:text-volvo-blue hover:border-volvo-lightblue'
                }`}
              >
                Announcements
              </button>
              <button
                onClick={() => setActiveTab('team')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'team'
                    ? 'border-volvo-blue text-volvo-blue'
                    : 'border-transparent text-volvo-gray hover:text-volvo-blue hover:border-volvo-lightblue'
                }`}
              >
                Team Messages
              </button>
              <button
                onClick={() => setActiveTab('contacts')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'contacts'
                    ? 'border-volvo-blue text-volvo-blue'
                    : 'border-transparent text-volvo-gray hover:text-volvo-blue hover:border-volvo-lightblue'
                }`}
              >
                Important Contacts
              </button>
            </nav>
          </div>
        </div>
        
        {activeTab === 'announcements' && (
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="border rounded-md p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-volvo font-semibold text-volvo-blue">{announcement.title}</h3>
                  <span className="text-sm text-volvo-gray">{new Date(announcement.date).toLocaleDateString()}</span>
                </div>
                <p className="text-volvo-gray mt-2">{announcement.content}</p>
                <p className="text-sm text-volvo-gray mt-2">Posted by: {announcement.author}</p>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'team' && (
          <div className="space-y-4">
            <div className="mb-4">
              <h3 className="text-lg font-volvo font-semibold text-volvo-blue mb-2">
                {user?.team.name} Messages
              </h3>
            </div>
            {teamMessages.map((message) => (
              <div key={message.id} className="border rounded-md p-4 bg-volvo-lightgray">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-volvo font-semibold text-volvo-blue">{message.title}</h3>
                  <span className="text-sm text-volvo-gray">{new Date(message.date).toLocaleDateString()}</span>
                </div>
                <p className="text-volvo-gray mt-2">{message.content}</p>
                <p className="text-sm text-volvo-gray mt-2">Posted by: {message.author}</p>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'contacts' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {importantContacts.map((contact, index) => (
                <div key={index} className="border rounded-md p-4">
                  <h3 className="text-lg font-volvo font-semibold text-volvo-blue">{contact.name}</h3>
                  <p className="text-sm text-volvo-gray mt-2">
                    <span className="font-medium">Phone: </span>
                    {contact.contact}
                  </p>
                  <p className="text-sm text-volvo-gray">
                    <span className="font-medium">Email: </span>
                    <a href={`mailto:${contact.email}`} className="text-volvo-lightblue hover:underline">
                      {contact.email}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Communication;