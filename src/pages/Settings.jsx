import React, { useState } from 'react';

const Settings = () => {
  const defaultSettings = {
    currency: 'USD',
    timezone: 'UTC',
    notifications: true,
    theme: 'dark'
  };

  const [settings, setSettings] = useState(defaultSettings);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Settings saved:', settings);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleReset = () => {
    setSettings(defaultSettings);
  };

  return (
    <div className="glass" style={{ padding: '2rem' }}>
      <h1 style={{ marginTop: 0, marginBottom: '2rem' }}>Application Settings</h1>
      
      {saveSuccess && (
        <div style={{ padding: '1rem', marginBottom: '1.5rem', backgroundColor: 'rgba(16, 185, 129, 0.2)', border: '1px solid var(--success)', color: 'var(--success)', borderRadius: '8px' }}>
          Settings saved successfully!
        </div>
      )}

      <form data-testid="settings-form" className="settings-form" onSubmit={handleSave}>
        
        <div className="form-group">
          <label htmlFor="currency-select">Display Currency</label>
          <select 
            id="currency-select"
            data-testid="currency-select"
            value={settings.currency}
            onChange={(e) => handleChange('currency', e.target.value)}
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="JPY">JPY (¥)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="timezone-select">Timezone</label>
          <select 
            id="timezone-select"
            data-testid="timezone-select"
            value={settings.timezone}
            onChange={(e) => handleChange('timezone', e.target.value)}
          >
            <option value="UTC">UTC (Universal Coordinated Time)</option>
            <option value="EST">EST (Eastern Standard Time)</option>
            <option value="PST">PST (Pacific Standard Time)</option>
            <option value="CET">CET (Central European Time)</option>
          </select>
        </div>

        <div className="form-group">
          <div className="toggle-wrapper">
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                data-testid="notifications-toggle"
                checked={settings.notifications}
                onChange={(e) => handleChange('notifications', e.target.checked)}
              />
              <span className="slider"></span>
            </label>
            <span style={{ color: 'var(--text-secondary)' }}>Enable Email Notifications</span>
          </div>
        </div>

        <div className="form-group">
          <div className="toggle-wrapper">
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                data-testid="theme-toggle"
                checked={settings.theme === 'dark'}
                onChange={(e) => handleChange('theme', e.target.checked ? 'dark' : 'light')}
              />
              <span className="slider"></span>
            </label>
            <span style={{ color: 'var(--text-secondary)' }}>Dark Mode</span>
          </div>
        </div>

        <div className="form-actions" style={{ paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
          <button 
            type="submit" 
            data-testid="save-settings-button" 
            className="btn"
          >
            Save Changes
          </button>
          
          <button 
            type="button" 
            data-testid="reset-settings-button" 
            className="btn btn-secondary"
            onClick={handleReset}
          >
            Reset to Defaults
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default Settings;
