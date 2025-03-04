import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { areas, teams } from '../data/mockData';
import { Area, Team } from '../types';
import Layout from '../components/Layout';

const Login: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [filteredTeams, setFilteredTeams] = useState<Team[]>([]);
  const { setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedArea) {
      const teamsInArea = teams.filter(team => team.areaId === selectedArea.id);
      setFilteredTeams(teamsInArea);
      setSelectedTeam(null);
    } else {
      setFilteredTeams([]);
      setSelectedTeam(null);
    }
  }, [selectedArea]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedArea && selectedTeam) {
      setUser({
        area: selectedArea,
        team: selectedTeam
      });
      navigate('/dashboard');
    }
  };

  return (
    <Layout title="Manufacturing Facility Dashboard" showBackButton={false}>
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="flex justify-center mb-8">
            <img 
              src="https://www.volvogroup.com/content/dam/volvo-group/markets/master/home/news/press-releases/2021/apr/3938860-volvo-group-logo.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg" 
              alt="Volvo Group Logo" 
              className="h-16"
            />
          </div>
          <h2 className="text-2xl font-volvo font-bold text-volvo-blue mb-6 text-center">
            Welcome to the Manufacturing Dashboard
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="area" className="block text-sm font-medium text-volvo-gray mb-1">
                Select your area
              </label>
              <select
                id="area"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-volvo-blue"
                value={selectedArea?.id || ''}
                onChange={(e) => {
                  const areaId = parseInt(e.target.value);
                  const area = areas.find(a => a.id === areaId) || null;
                  setSelectedArea(area);
                }}
                required
              >
                <option value="">Select an area</option>
                {areas.map(area => (
                  <option key={area.id} value={area.id}>
                    {area.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="team" className="block text-sm font-medium text-volvo-gray mb-1">
                Select your team
              </label>
              <select
                id="team"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-volvo-blue"
                value={selectedTeam?.id || ''}
                onChange={(e) => {
                  const teamId = parseInt(e.target.value);
                  const team = filteredTeams.find(t => t.id === teamId) || null;
                  setSelectedTeam(team);
                }}
                disabled={!selectedArea}
                required
              >
                <option value="">Select a team</option>
                {filteredTeams.map(team => (
                  <option key={team.id} value={team.id}>
                    {team.name}
                  </option>
                ))}
              </select>
            </div>
            
            <button
              type="submit"
              disabled={!selectedArea || !selectedTeam}
              className="w-full bg-volvo-blue text-white py-3 px-4 rounded-md font-medium hover:bg-volvo-lightblue transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;