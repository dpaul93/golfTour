import React, { useState } from 'react';
import './GolfTourRules.css';

const rules = [
  {
    label: 'Round 1',
    content: (
      <ul>
        <li>Rule 1 for Round 1</li>
        <li>Rule 2 for Round 1</li>
        <li>Rule 3 for Round 1</li>
      </ul>
    ),
  },
  {
    label: 'Round 2',
    content: (
      <ul>
        <li>Rule 1 for Round 2</li>
        <li>Rule 2 for Round 2</li>
        <li>Rule 3 for Round 2</li>
      </ul>
    ),
  },
  {
    label: 'Round 3',
    content: (
      <ul>
        <li>Rule 1 for Round 3</li>
        <li>Rule 2 for Round 3</li>
        <li>Rule 3 for Round 3</li>
      </ul>
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