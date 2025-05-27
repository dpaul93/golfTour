import React, { useState } from 'react';
import './App.css';
import GolfTourRules from './components/GolfTourRules';
import PlayerProfile from './components/PlayerProfile';
import logo from './Arran1.png';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [activeTab, setActiveTab] = useState('rules');

  if (!showContent) {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setShowContent(true)}>Enter Site</button>
      </div>
    );
  }

  return (
    <div className="App">
      <button onClick={() => setShowContent(false)}>Back to Landing Page</button>
      <div className="tabs">
        <button
          className={activeTab === 'rules' ? 'active' : ''}
          onClick={() => setActiveTab('rules')}
        >
          Rules
        </button>
        <button
          className={activeTab === 'profiles' ? 'active' : ''}
          onClick={() => setActiveTab('profiles')}
        >
          Player Profiles
        </button>
      </div>
      {activeTab === 'rules' ? <GolfTourRules /> : <PlayerProfile />}
    </div>
  );
}

export default App;
