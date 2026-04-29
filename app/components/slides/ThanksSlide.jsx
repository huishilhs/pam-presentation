'use client';

import { useEffect, useState } from 'react';

const TEAM = [
  { first: 'Cecilia', last: 'Urrutia Martinez', tone: 'blue',  img: '/team/cecilia.jpg', initials: 'CU' },
  { first: 'Huishi',  last: 'Li',               tone: 'green', img: '/team/huishi.jpg',  initials: 'HL' },
  { first: 'Eklavya', last: 'Gupta',            tone: 'red',   img: '/team/eklavya.jpg', initials: 'EG' },
];

export default function ThanksSlide({ stage = 1, isActive = false }) {
  const [showTeam, setShowTeam] = useState(false);

  useEffect(() => {
    if (stage !== 3 || !isActive) {
      setShowTeam(false);
      return;
    }
    const t = setTimeout(() => setShowTeam(true), 1000);
    return () => clearTimeout(t);
  }, [stage, isActive]);

  const wrapperCls = `slide-inner thanks-narrative thanks-stage-${stage}${
    showTeam ? ' thanks-team-shown' : ''
  }`;

  return (
    <div className={wrapperCls}>
      <div className="thanks-line thanks-line-1">
        P&amp;G doesn&apos;t sell to consumers.
      </div>
      <div className="thanks-line thanks-line-2">
        With <span className="thanks-pam">Pam+</span>, P&amp;G stands{' '}
        <span className="highlight-yellow-bg">with them.</span>
      </div>
      <div className="thanks-line thanks-line-3">
        Thank you<span className="dot">.</span>
      </div>

      <div className="thanks-team">
        {TEAM.map((m) => (
          <div key={m.first} className={`team-member team-tone-${m.tone}`}>
            <div className="team-avatar">
              <div className="team-avatar-fallback">{m.initials}</div>
              <img
                src={m.img}
                alt=""
                onLoad={(e) => { e.currentTarget.style.opacity = 1; }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="team-name">
              <span className="team-first">{m.first}</span>
              <span className="team-last">{m.last}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
