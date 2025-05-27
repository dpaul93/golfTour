import React, { useState } from 'react';
import './PlayerProfile.css';
import aliImage from './Ali.JPG';
import alexImage from './Alex.PNG';
import domImage from './Dom.JPG';
import jonnyImage from './Jon.JPG';

const players = [
  {
    label: 'Ali',
    image: aliImage,
    content: (
      <div>
        <h2>Ali</h2>
        <p>Ali is the player with the best handicap in the group — on paper, at least. In practice, he rarely plays to that number, often shooting well over his potential. Armed with a set of Cobra Dark Speeds (which he's now outgrown), Ali has poured thousands into his golf game, but with limited return on that investment.
        Strangely, Ali's best golf sometimes shows up when he's hungover, baffling both himself and his playing partners. He's infamous for always going for the hero shot, even when the odds of pulling it off hover around 2%.
        Mentally, Ali is his own worst enemy. Even if he's having a great round, one bad hole can send him into a full-on spiral, derailing the rest of his game. His resilience (or lack thereof) makes him one of the more unpredictable players on the course.
        </p>
        <li>Driving Accuracy: 7/10</li>
        <li>Driving Distance: 8/10</li>
        <li>Iron Accuracy: 7/10</li>
        <li>Putting: 7/10</li>
        <li>Chipping: 8/10</li>
        <li>Headloss Potential: 9/10</li>
      </div>
    ),
  },
  {
    label: 'Alex',
    image: alexImage,
    content: (
      <div>
        <h2>Alex</h2>
        <p>
        Alex is living proof of the saying: "Buy the equipment for the player you want to be, not the player you are" — except, he did the complete opposite. He picked up clubs more suited for a child, and now finds himself in need of an upgrade.
Currently, Alex is the hottest player in the group, riding a wave of great form. The big question is whether this is a true breakthrough or just a peak before the inevitable slump. He's a strong contender for the tour win but, like Ali, struggles mentally when things go south.
When the pressure's on, Alex has been known to lash out, sometimes taking jabs at opponents' family members in an effort to deflect attention. Whether he can rein in his temper will likely determine how far he goes.
</p>
  <li>Driving Accuracy: 9/10</li>
  <li>Driving Distance: 6/10</li>
  <li>Iron Accuracy: 7/10</li>
  <li>Putting: 6/10</li>
  <li>Chipping: 6/10</li>
  <li>Headloss Potential: 7/10</li>
      </div>
    ),
  },
  {
    label: 'Jonny',
    image: jonnyImage,
    content: (
      <div>
        <h2>Jonny</h2>
        <p>
        Jonny enters the tour as a bit of an unknown, but he's the clear "most improved" in the group. Not long ago, he struggled to get past the ladies' tees; now, he's confidently puring 7-irons and adding a cheeky club swirl for flair.
Beyond his game, Jonny is the glue holding the group together. As the main organizer of the trip, he's juggled all the logistics, earning the gratitude of the team — though, if the weather turns bad, you can be sure he'll unfairly get the blame for that too.
Equipment-wise, Jonny made a curious decision: instead of investing in properly fitted clubs, he bought cheap junior clubs and had them extended to fit his 7-foot frame. Whether that choice comes back to bite him remains to be seen.
</p>
  <li>Driving Accuracy: 6/10</li>
  <li>Driving Distance: 5/10</li>
  <li>Iron Accuracy: 6/10</li>
  <li>Putting: 6/10</li>
  <li>Chipping: 6/10</li>
  <li>Headloss Potential: 3/10</li>
      </div>
    ),
  },
  {
    label: 'Dom',
    image: domImage,
    content: (
      <div>
        <h2>Dom</h2>
        <p>
        Dom's handicap has plateaued in recent times, and it's unclear if it's due to lack of play or simply being a "mid-table mediocrity" kind of guy. Interestingly, he owns the clubs everyone else in the group wishes they had — yet consistently posts higher scores. It begs the question: are those clubs really being put to good use?
Off the tee, Dom's driving accuracy is his Achilles' heel. With a violent slice that's hard to compensate for, and a tendency to duck-hook when he tries, his tee shots are often a wild card.
There's also been some quiet debate about the reliability of Dom's scorekeeping — though whether it's intentional or just a side effect of struggling to count and play at the same time is anyone's guess. When all parts of his game align, Dom can be a serious threat. Unfortunately, that alignment almost never happens.
</p>
  <li>Driving Accuracy: 3/10</li>
  <li>Driving Distance: 8/10</li>
  <li>Iron Accuracy: 7/10</li>
  <li>Putting: 8/10</li>
  <li>Chipping: 8/10</li>
  <li>Headloss Potential: 7/10</li>
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
        <img src={players[activeTab].image} alt={`${players[activeTab].label}`} className="player-image" />
        {players[activeTab].content}
      </div>
    </div>
  );
} 