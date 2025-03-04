import React from 'react';
import Layout from '../components/Layout';
import { useUser } from '../context/UserContext';

const Training: React.FC = () => {
  const { user } = useUser();

  // Mock data for training courses
  const trainingCourses = [
    {
      id: 1,
      title: 'Safety Fundamentals',
      description: 'Essential safety protocols and procedures for manufacturing environments.',
      duration: '4 hours',
      type: 'Mandatory',
      nextSession: '2025-06-15',
      location: 'Training Room A',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Quality Control Basics',
      description: 'Introduction to quality control methods and inspection techniques.',
      duration: '8 hours',
      type: 'Mandatory',
      nextSession: '2025-06-22',
      location: 'Training Room B',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Advanced Assembly Techniques',
      description: 'Specialized training for complex assembly operations.',
      duration: '16 hours',
      type: 'Optional',
      nextSession: '2025-07-10',
      location: 'Production Floor',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Equipment Maintenance',
      description: 'Preventive maintenance procedures for production equipment.',
      duration: '8 hours',
      type: 'Recommended',
      nextSession: '2025-07-18',
      location: 'Maintenance Workshop',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Leadership Skills',
      description: 'Developing effective leadership and team management skills.',
      duration: '16 hours',
      type: 'Optional',
      nextSession: '2025-08-05',
      location: 'Conference Room',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Digital Tools Training',
      description: 'Training on new digital systems for production monitoring.',
      duration: '4 hours',
      type: 'Mandatory',
      nextSession: '2025-06-30',
      location: 'Computer Lab',
      status: 'upcoming'
    }
  ];

  // Mock data for completed trainings
  const completedTrainings = [
    {
      id: 101,
      title: 'Onboarding Program',
      completionDate: '2025-01-15',
      validUntil: '2026-01-15',
      certificate: true
    },
    {
      id: 102,
      title: 'Basic Safety Training',
      completionDate: '2025-02-20',
      validUntil: '2026-02-20',
      certificate: true
    },
    {
      id: 103,
      title: 'Quality Awareness',
      completionDate: '2025-03-10',
      validUntil: '2026-03-10',
      certificate: false
    },
    {
      id: 104,
      title: 'Environmental Procedures',
      completionDate: '2025-04-05',
      validUntil: '2026-04-05',
      certificate: true
    }
  ];

  const getStatusBadge = (type: string) => {
    const typeColors: Record<string, string> = {
      'Mandatory': 'bg-red-100 text-red-800',
      'Recommended': 'bg-yellow-100 text-yellow-800',
      'Optional': 'bg-blue-100 text-blue-800'
    };

    return (
      <span className={`px-2 py-1 text-xs rounded-full ${typeColors[type]}`}>
        {type}
      </span>
    );
  };

  return (
    <Layout title="Training">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-volvo font-bold text-volvo-blue mb-6">
          Training Programs for {user?.area.name} - {user?.team.name}
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-volvo font-semibold text-volvo-blue mb-4">Upcoming Training Sessions</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-volvo-lightgray">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                    Next Session
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {trainingCourses.map((course) => (
                  <tr key={course.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-volvo-gray">{course.title}</div>
                      <div className="text-xs text-volvo-gray">{course.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(course.type)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-volvo-gray">
                      {course.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-volvo-gray">
                      {new Date(course.nextSession).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-volvo-gray">
                      {course.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="bg-volvo-blue text-white px-3 py-1 rounded-md hover:bg-volvo-lightblue transition-colors">
                        Register
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-volvo font-semibold text-volvo-blue mb-4">Completed Trainings</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-volvo-lightgray">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                    Completion Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                    Valid Until
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                    Certificate
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {completedTrainings.map((training) => (
                  <tr key={training.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-volvo-gray">
                      {training.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-volvo-gray">
                      {new Date(training.completionDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-volvo-gray">
                      {new Date(training.validUntil).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {training.certificate ? (
                        <button className="text-volvo-lightblue hover:underline">
                          View Certificate
                        </button>
                      ) : (
                        <span className="text-volvo-gray">N/A</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Training;