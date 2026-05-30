import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { mockChartData } from '../mockData';

const Dashboard = () => {
  const [dateRange, setDateRange] = useState('7d');
  
  const handleRefresh = () => {
    // Mock refresh action
    console.log('Refreshing data...');
  };

  const handleExport = () => {
    // Mock export action
    console.log('Exporting data...');
  };

  return (
    <div data-testid="dashboard-container" className="glass" style={{ padding: '2rem' }}>
      <div className="dashboard-header">
        <div>
          <h1 style={{ margin: '0 0 0.5rem 0' }}>Dashboard Overview</h1>
          <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Welcome back to your analytics dashboard.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <select 
            data-testid="date-range-filter" 
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            style={{ width: 'auto' }}
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          
          <button data-testid="refresh-button" className="btn btn-secondary" onClick={handleRefresh}>
            Refresh
          </button>
          
          <button data-testid="export-button" className="btn" onClick={handleExport}>
            Export
          </button>
        </div>
      </div>

      <div className="metrics-grid">
        <div data-testid="metric-card-users" className="glass metric-card">
          <h3>Total Users</h3>
          <p className="value">24,592</p>
          <p style={{ color: 'var(--success)', margin: '0', fontSize: '0.875rem' }}>+12% from last period</p>
        </div>
        
        <div data-testid="metric-card-revenue" className="glass metric-card">
          <h3>Total Revenue</h3>
          <p className="value">$84,392</p>
          <p style={{ color: 'var(--success)', margin: '0', fontSize: '0.875rem' }}>+8% from last period</p>
        </div>
        
        <div data-testid="metric-card-conversion" className="glass metric-card">
          <h3>Conversion Rate</h3>
          <p className="value">3.24%</p>
          <p style={{ color: 'var(--danger)', margin: '0', fontSize: '0.875rem' }}>-1.2% from last period</p>
        </div>
      </div>

      <div className="charts-grid">
        <div className="glass chart-container" data-testid="chart-revenue">
          <h3>Revenue Overview</h3>
          <ResponsiveContainer width="100%" height="100%" minHeight={300}>
            <BarChart data={mockChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--text-secondary)" />
              <YAxis stroke="var(--text-secondary)" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}
                itemStyle={{ color: 'var(--text-primary)' }}
              />
              <Bar dataKey="revenue" fill="var(--accent)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="glass chart-container" data-testid="chart-users">
          <h3>User Growth</h3>
          <ResponsiveContainer width="100%" height="100%" minHeight={300}>
            <LineChart data={mockChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="name" stroke="var(--text-secondary)" />
              <YAxis stroke="var(--text-secondary)" />
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}
                itemStyle={{ color: 'var(--text-primary)' }}
              />
              <Line type="monotone" dataKey="users" stroke="var(--success)" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
