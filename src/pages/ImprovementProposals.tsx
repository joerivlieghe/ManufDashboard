import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { improvementProposals } from '../data/mockData';
import { ImprovementProposal } from '../types';
import { useUser } from '../context/UserContext';

const ImprovementProposals: React.FC = () => {
  const { user } = useUser();
  const [teamProposals, setTeamProposals] = useState<ImprovementProposal[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    submittedBy: ''
  });

  useEffect(() => {
    if (user) {
      const filteredProposals = improvementProposals.filter(
        proposal => proposal.teamId === user.team.id
      );
      setTeamProposals(filteredProposals);
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const newProposal: ImprovementProposal = {
      id: Math.max(...improvementProposals.map(p => p.id)) + 1,
      teamId: user.team.id,
      title: formData.title,
      description: formData.description,
      submittedBy: formData.submittedBy,
      submittedDate: new Date().toISOString().split('T')[0],
      status: 'new'
    };

    // In a real application, this would be an API call
    improvementProposals.push(newProposal);
    setTeamProposals([...teamProposals, newProposal]);
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      submittedBy: ''
    });
    setShowForm(false);
  };

  const getStatusBadge = (status: string) => {
    const statusColors: Record<string, string> = {
      'new': 'bg-blue-100 text-blue-800',
      'in-review': 'bg-yellow-100 text-yellow-800',
      'approved': 'bg-green-100 text-green-800',
      'implemented': 'bg-purple-100 text-purple-800',
      'rejected': 'bg-red-100 text-red-800'
    };

    return (
      <span className={`px-2 py-1 text-xs rounded-full ${statusColors[status]}`}>
        {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
      </span>
    );
  };

  return (
    <Layout title="Improvement Proposals">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-volvo font-bold text-volvo-blue">Team Improvement Proposals</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-volvo-blue text-white px-4 py-2 rounded-md hover:bg-volvo-lightblue transition-colors"
          >
            {showForm ? 'Cancel' : 'New Proposal'}
          </button>
        </div>

        {showForm && (
          <div className="mb-8 p-4 border border-volvo-lightblue rounded-md bg-volvo-lightgray">
            <h3 className="text-lg font-volvo font-semibold text-volvo-blue mb-4">Submit New Improvement Proposal</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-volvo-gray mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-volvo-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-volvo-gray mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-volvo-blue"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="submittedBy" className="block text-sm font-medium text-volvo-gray mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="submittedBy"
                  name="submittedBy"
                  value={formData.submittedBy}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-volvo-blue"
                  required
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-volvo-blue text-white px-4 py-2 rounded-md hover:bg-volvo-lightblue transition-colors"
                >
                  Submit Proposal
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-volvo-lightgray">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                  Submitted By
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-volvo-gray uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teamProposals.map((proposal) => (
                <tr key={proposal.id} className="cursor-pointer hover:bg-volvo-lightgray">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-volvo-gray">
                    {proposal.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-volvo-gray">
                    {proposal.submittedBy}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-volvo-gray">
                    {new Date(proposal.submittedDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(proposal.status)}
                  </td>
                </tr>
              ))}
              {teamProposals.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-sm text-volvo-gray">
                    No improvement proposals found for your team.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default ImprovementProposals;