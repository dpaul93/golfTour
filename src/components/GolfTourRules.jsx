import React, { useState } from 'react';
import './GolfTourRules.css';

const rules = [
    {
        label: 'General Rules',
        content: (
          <div>
            <p>These rules are general for all normal rounds through out the tour</p>
            <li>Breakfast is always served.</li>
            <li>Lunch and dinner will not be served.</li>
            <li>Local rules will be followed.</li>
            <li>We will have the power to implement lift, clean and place if seen fit.</li>
            <li>Tee flip at start of the round to decide scorer.</li>
            <li>Each round will be scored with both stroke play and stableford.</li>
          </div>
        ),
      },
    
  {
    label: 'Round 1',
    content: (
      <div>
        <p>PGA Arran day</p>
        <p>Subject to local rules, we may play lift and place.</p>
        <li>No mulligans, no gimmies — every shot counts.</li>
        <li>Play it as it lies — no improving your lie, no fluffing it up, in a divot? Play it as it lies.</li>
        <li>All drops follow official PGA rules — stroke and distance, proper relief procedures.</li>
        <li>No touching hazards — club or hand cannot ground in a bunker or penalty area.</li>
        <li>Strict pace of play — 40 seconds per shot, no endless lining up putts! (Looking at you JonBoy)</li>
      </div>
    ),
  },
  {
    label: 'Round 2',
    content: (
      <div>
        <p>Reverse Scramble format (Pairs)</p>
        <li>Both players tee off.</li>
        <li>Instead of choosing the best ball, you must play from the worst ball each time.</li>
        <li>The definition of worst ball is to the discretion of the opponent.</li>
        <li>Continue this pattern for all shots, including on the green.</li>
        <li>If both balls are identical (e.g., both in the fairway, both on the green), you may choose either.</li>
      </div>
    ),
  },
  {
    label: 'Round 3',
    content: (
        <div>
        <li>Rule 1 for Round 3</li>
        <li>Rule 2 for Round 3</li>
        <li>Rule 3 for Round 3</li>
        </div>
    ),
  },
];

export default function GolfTourRules() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="golf-tour-rules">
      <h1>Golf Tour Rules</h1>
      <div className="tabs">
        {rules.map((rule, idx) => (
          <button
            key={rule.label}
            className={activeTab === idx ? 'active' : ''}
            onClick={() => setActiveTab(idx)}
          >
            {rule.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {rules[activeTab].content}
      </div>
    </div>
  );
}