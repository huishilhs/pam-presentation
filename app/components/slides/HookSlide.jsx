'use client';

import { useEffect, useState } from 'react';

const PERSONAS = [
  {
    n: '01',
    first: 'James',
    role: 'Graduate Software Developer',
    status: 'At Risk',
    friction: 'Voucher Failed',
    traits: ['Budget-conscious', 'Savvy'],
    quote: 'Nobody could tell me why. I just left.',
    recommendation: 'Recovery plan needed',
    image: '/personas/james.jpg',
    initials: 'JD',
  },
  {
    n: '02',
    first: 'Jack',
    role: 'Retired Administrator',
    status: 'At Risk',
    friction: 'Three Weeks of Silence',
    traits: ['Loyal', 'Low tech confidence'],
    quote: 'Twenty years a customer. Three weeks for a response.',
    recommendation: 'High churn probability',
    image: '/personas/jack.jpg',
    initials: 'JO',
  },
  {
    n: '03',
    first: 'Jessica',
    role: 'Marketing Manager',
    status: 'Active',
    friction: 'Too Much Choice',
    traits: ['Research-driven', 'Time-poor'],
    quote: '20 razors on the shelf. I have no idea which is which.',
    recommendation: 'UX streamlining',
    image: '/personas/jessica.jpg',
    initials: 'JM',
  },
  {
    n: '04',
    first: 'Samantha',
    role: 'NHS Nurse',
    status: 'Churned',
    friction: 'Brand Silence',
    traits: ['Vocal', 'Brand-loyal'],
    quote: 'Wrote a detailed complaint. Complete silence.',
    recommendation: 'Brand advocacy',
    image: '/personas/samantha.jpg',
    initials: 'SS',
  },
];

const REVEAL_TIMINGS = [600, 2400, 3000, 3600];

export default function HookSlide({ isActive }) {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setRevealed(0);
      return;
    }
    const timers = REVEAL_TIMINGS.map((delay, i) =>
      setTimeout(() => setRevealed(i + 1), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <div className="slide-inner hook-personas">
      <div className="hook-personas-grid">
        {PERSONAS.map((p, i) => (
          <article
            key={p.first}
            className={`hook-persona ${revealed > i ? 'is-shown' : ''}`}
            data-status={p.status.toLowerCase().replace(/\s+/g, '-')}
          >
            <div className="hook-persona-photo">
              <span className="hook-persona-initials">{p.initials}</span>
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.first}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : null}
            </div>

            <div className="hook-persona-body">
              <h3 className="hook-persona-name">{p.first}</h3>
              <div className="hook-persona-role">{p.role}</div>

              <div className="hook-persona-friction">
                <span className="hook-persona-friction-label">Primary Friction</span>
                <span className="hook-persona-friction-headline">{p.friction}</span>
              </div>

              <ul className="hook-persona-traits">
                {p.traits.map((t) => (
                  <li key={t} className="hook-persona-trait">{t}</li>
                ))}
              </ul>

              <hr className="hook-persona-rule" />

              <blockquote className="hook-persona-quote">
                “{p.quote}”
              </blockquote>

              <div className="hook-persona-recommendation">
                {p.recommendation}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
