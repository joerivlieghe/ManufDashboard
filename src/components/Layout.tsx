import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, LogOut } from 'lucide-react';
import { useUser } from '../context/UserContext';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  showBackButton?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, title, showBackButton = true }) => {
  const navigate = useNavigate();
  const { user, clearUser } = useUser();

  const handleLogout = () => {
    clearUser();
    navigate('/');
  };

  const handleHome = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-volvo-lightgray flex flex-col">
      <header className="bg-volvo-blue text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <button 
                onClick={handleHome}
                className="p-2 rounded-full hover:bg-volvo-lightblue transition-colors"
              >
                <Home size={24} />
              </button>
            )}
            <h1 className="text-2xl font-volvo font-bold">{title}</h1>
          </div>
          {user && (
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span className="block">{user.area.name}</span>
                <span className="block">{user.team.name}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="p-2 rounded-full hover:bg-volvo-lightblue transition-colors"
                title="Logout"
              >
                <LogOut size={24} />
              </button>
            </div>
          )}
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-volvo-blue text-white p-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© {new Date().getFullYear()} Volvo Group Manufacturing Dashboard</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;