'use client';

import { useEffect, useState } from 'react';

function JamesCard() {
  return (
    <div className="persona-card">
      <div className="persona-avatar">
        <svg viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="30" r="14" stroke="currentColor" strokeWidth="2" />
          <path
            d="M14 70c0-14 12-22 26-22s26 8 26 22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="persona-meta">
        <div className="persona-name">James</div>
        <div className="persona-tags">
          <span>22 years old</span>
          <span>Final-year student</span>
          <span>Tight budget</span>
        </div>
        <div className="persona-pill">Frustrated Buyer</div>
      </div>
    </div>
  );
}

export function PersonaMeetSlide() {
  return (
    <div className="slide-inner">
      <div className="persona-grid">
        <JamesCard />
        <div className="persona-story">
          <div className="eyebrow">Meet our consumer</div>
          <h2 className="persona-headline">
            Ten minutes in the aisle.{' '}
            <span className="highlight-yellow-bg">Two identical razors.</span>{' '}
            Nobody to help.
          </h2>
          <p className="persona-body">
            High expectations, no time to get a purchase wrong — and no one
            in P&amp;G&apos;s ecosystem positioned to help him decide.
          </p>
        </div>
      </div>
    </div>
  );
}

const REVEAL_TIMINGS = [
  300,   // line 1 · packaging
  1100,  // line 2 · shelf
  1900,  // line 3 · website
  2700,  // line 4 · hotline
  3700,  // connector · "And the company that made these razors —"
  4500,  // stat 1 · 140 brands
  5100,  // stat 2 · 180 countries
  5700,  // stat 3 · 84.3B
  6700,  // punchline
];

export default function PersonaSlide({ isActive }) {
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

  const cls = (n) => `persona-reveal ${revealed >= n ? 'is-shown' : ''}`;

  return (
    <div className="slide-inner">
      <div className="persona-grid">
        <JamesCard />

        <div className="persona-narrative">
          <div className="eyebrow">Right now</div>

          <ul className="persona-fails">
            <li className={cls(1)}>
              The <strong>packaging</strong>&nbsp;won&apos;t tell him.
            </li>
            <li className={cls(2)}>
              The <strong>shelf</strong>&nbsp;won&apos;t tell him.
            </li>
            <li className={cls(3)}>
              The <strong>website</strong> is a maze.
            </li>
            <li className={cls(4)}>
              The <strong>hotline</strong>&nbsp;doesn&apos;t pick up.
            </li>
          </ul>

          <div className={`persona-connector ${cls(5)}`}>
            And the company that made these razors —
          </div>

          <div className="persona-stats">
            <div className={`persona-stat ${cls(6)}`}>
              <span className="persona-stat-num">140</span>
              <span className="persona-stat-label">brands —</span>
            </div>
            <div className={`persona-stat ${cls(7)}`}>
              <span className="persona-stat-num">180</span>
              <span className="persona-stat-label">countries —</span>
            </div>
            <div className={`persona-stat ${cls(8)}`}>
              <span className="persona-stat-num">$84.3B</span>
              <span className="persona-stat-label">last year —</span>
            </div>
          </div>

          <div className={`persona-punchline ${cls(9)}`}>
            has no way of reaching{' '}
            <span className="highlight-yellow-bg">James</span>.
            <br />
            Right now. When he actually needs them.
          </div>
        </div>
      </div>
    </div>
  );
}
