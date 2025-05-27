import React, { useState } from 'react';
import './PlayerProfile.css';

const players = [
  {
    label: 'Player 1',
    content: (
      <div>
        <h2>Player 1</h2>
        <p>Profile details for Player 1.</p>
      </div>
    ),
  },
  {
    label: 'Player 2',
    content: (
      <div>
        <h2>Player 2</h2>
        <p>Profile details for Player 2.</p>
      </div>
    ),
  },
  {
    label: 'Player 3',
    content: (
      <div>
        <h2>Player 3</h2>
        <p>Profile details for Player 3.</p>
      </div>
    ),
  },
  {
    label: 'Player 4',
    content: (
      <div>
        <h2>Player 4</h2>
        <p>Profile details for Player 4.</p>
      </div>
    ),
  },
];

export default function PlayerProfile() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="player-profile">
      <h1>Player Profiles</h1>
      <div className="tabs">
        {players.map((player, idx) => (
          <button
            key={player.label}
            className={activeTab === idx ? 'active' : ''}
            onClick={() => setActiveTab(idx)}
          >
            {player.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {players[activeTab].content}
      </div>
    </div>
  );
} 