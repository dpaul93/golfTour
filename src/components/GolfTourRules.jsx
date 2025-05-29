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
            <li>Gimmees on the green will be within a putters length</li>
            <li>We will have the power to implement lift, clean and place if seen fit.</li>
            <li>Tee flip at start of the round to decide scorer.</li>
            <li>Each round will be scored with both stroke play and stableford.</li>
          </div>
        ),
      },
    
  {
    label: 'PGA Day',
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
    label: 'Reverse Scramble',
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
    label: 'Ryder Cup',
    content: (
        <div>
          <p>Ryder Cup Format</p>
        <li>The Ryder Cup will span over 3 rounds</li>
        <li>Players will be split into either team Europe or team America</li>
        <li>First round will be pairs match play</li>
        <li>Second round will be pairs best ball scramble</li>
        <li>Third round will be a 1 on 1 match play format. Will still be a 4 ball but you will be playing against 1 specific player</li>
        <li>For all these round normal scoring will still be taking place for grint</li>
        <li>At the end of the 3rd round team with the most points will win the Ryder cup</li>
        <li>Losing team will have to do something yet to be determinded for winning team</li>
        </div>
    ),
  },
  {
    label: 'Mix it up',
    content: (
        <div>
          <p>Mix it up day</p>
        <li>Mulligan or Reverse Mulligan in play. Once each for the round</li>
        <li>Fairway robbery. One for the round (you can not reverse mulligan a robbery)</li>
        <li>Big Gimmee. 2 putt from anywhere on the green</li>
        <li>String theory. Players will each pull a string at the start of the round</li>
        <li>Joker. Called at the start of the hole for double points</li>
        <li>Mulligans are available for purchase with a shot</li>
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