import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Utensils, 
  Info, 
  Calendar, 
  Map, 
  Users, 
  GraduationCap, 
  BarChart, 
  Lightbulb, 
  MessageSquare 
} from 'lucide-react';
import Layout from '../components/Layout';
import DashboardCard from '../components/DashboardCard';
import { useUser } from '../context/UserContext';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  if (!user) {
    navigate('/');
    return null;
  }

  const dashboardItems = [
    {
      title: 'Menu (Food)',
      icon: Utensils,
      path: '/menu',
      color: 'bg-volvo-blue'
    },
    {
      title: 'General Information',
      icon: Info,
      path: '/general-information',
      color: 'bg-volvo-blue'
    },
    {
      title: 'Holiday Requests',
      icon: Calendar,
      path: '/holiday-requests',
      color: 'bg-volvo-blue'
    },
    {
      title: 'Roadmap',
      icon: Map,
      path: '/roadmap',
      color: 'bg-volvo-lightblue'
    },
    {
      title: 'Mission Operators',
      icon: Users,
      path: '/mission-operators',
      color: 'bg-volvo-lightblue'
    },
    {
      title: 'Training',
      icon: GraduationCap,
      path: '/training',
      color: 'bg-volvo-lightblue'
    },
    {
      title: 'Performance Indicators',
      icon: BarChart,
      path: '/performance-indicators',
      color: 'bg-volvo-lightblue'
    },
    {
      title: 'Improvement Proposals',
      icon: Lightbulb,
      path: '/improvement-proposals',
      color: 'bg-volvo-lightblue'
    },
    {
      title: 'Communication',
      icon: MessageSquare,
      path: '/communication',
      color: 'bg-volvo-lightblue'
    }
  ];

  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardItems.map((item, index) => (
          <DashboardCard
            key={index}
            title={item.title}
            icon={item.icon}
            color={item.color}
            onClick={() => navigate(item.path)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;