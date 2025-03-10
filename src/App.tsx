import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from './msalConfig';

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
import { useState, useEffect } from 'react';

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('/api/message');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMessage(data.text);
      } catch (error) {
        console.error("Could not fetch message", error);
        setMessage("Error fetching message");
      }
    };

    fetchMessage();
  }, []);

  return (
    <MsalProvider instance={msalInstance}>
      <UserProvider>
        
        <Router>
          {message && <div>Message from API: {message}</div>}
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
    </MsalProvider>
  );
}

export default App;