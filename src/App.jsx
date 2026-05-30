import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DataTable from './pages/DataTable';
import Settings from './pages/Settings';
import { LayoutDashboard, Table, Settings as SettingsIcon } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <aside className="sidebar">
          <div style={{ marginBottom: '2rem', padding: '0 1rem' }}>
            <h2 style={{ margin: 0, color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--accent)' }}></div>
              Analytics
            </h2>
          </div>
          <nav>
            <NavLink to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <LayoutDashboard size={20} /> Dashboard
            </NavLink>
            <NavLink to="/data" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Table size={20} /> Data Table
            </NavLink>
            <NavLink to="/settings" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SettingsIcon size={20} /> Settings
            </NavLink>
          </nav>
        </aside>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/data" element={<DataTable />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
