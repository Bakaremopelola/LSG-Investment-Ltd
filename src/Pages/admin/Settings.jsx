import { useState } from 'react';

const Settings = () => {
  // Example state variables for settings
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [language, setLanguage] = useState('en');

  // Example function to handle toggling notifications
  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  // Example function to handle toggling dark mode
  const toggleDarkMode = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  // Example function to handle changing language
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="settings">
      <h1>Settings</h1>

      <div className="settings-section">
        <h2>Notifications</h2>
        <label>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={toggleNotifications}
          />
          Enable notifications
        </label>
      </div>

      <div className="settings-section">
        <h2>Appearance</h2>
        <label>
          <input
            type="checkbox"
            checked={darkModeEnabled}
            onChange={toggleDarkMode}
          />
          Dark mode
        </label>
      </div>

      <div className="settings-section">
        <h2>Language</h2>
        <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>

      <div className="settings-section">
        <h2>Data Management</h2>
        <button onClick={() => alert('Clear data')}>Clear Data</button>
      </div>
    </div>
  );
};

export default Settings;
