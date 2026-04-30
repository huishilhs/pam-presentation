'use client';

import { useEffect, useState } from 'react';

const REVEAL_TIMINGS = [400, 1300, 2200, 3500];

export default function OpeningSlide({ isActive }) {
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

  const cls = (n) => `stats-reveal ${revealed >= n ? 'is-shown' : ''}`;

  return (
    <div className="slide-inner stats-slide">
      <div className="stats-stack">
        <div className={`stats-line ${cls(1)}`}>
          <span className="stats-num">140</span>
          <span className="stats-unit">brands.</span>
        </div>
        <div className={`stats-line ${cls(2)}`}>
          <span className="stats-num">180</span>
          <span className="stats-unit">countries.</span>
        </div>
        <div className={`stats-line ${cls(3)}`}>
          <span className="stats-num">$84B</span>
          <span className="stats-unit">last year &mdash;</span>
        </div>

        <div className={`stats-punchline ${cls(4)}`}>
          and no one to tell this boy
          <br />
          to just use{' '}
          <span className="highlight-yellow-bg">Gillette shaving cream.</span>
        </div>
      </div>
    </div>
  );
}
