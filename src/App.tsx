import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Menu from './pages/Menu';
import GeneralInformation from './pages/GeneralInformation';
import HolidayRequests from './pages/HolidayRequests';
import Roadmap from './pages/Roadmap';
import MissionOperators from './pages/MissionOperators';
import Training from './pages/Training';
import PerformanceIndicators from './pages/PerformanceIndicators';
import ImprovementProposals from './pages/ImprovementProposals';
import Communication from './pages/Communication';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/general-information" element={<GeneralInformation />} />
          <Route path="/holiday-requests" element={<HolidayRequests />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/mission-operators" element={<MissionOperators />} />
          <Route path="/training" element={<Training />} />
          <Route path="/performance-indicators" element={<PerformanceIndicators />} />
          <Route path="/improvement-proposals" element={<ImprovementProposals />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;