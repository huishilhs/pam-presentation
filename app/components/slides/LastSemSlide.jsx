'use client';

import { useEffect, useState } from 'react';

export default function LastSemSlide({ isActive }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setPhase(0);
      return;
    }
    const timers = [
      setTimeout(() => setPhase(1), 600),    // intro line
      setTimeout(() => setPhase(2), 1500),   // wordmark in
      setTimeout(() => setPhase(3), 5000),   // dot morphs to plus
      setTimeout(() => setPhase(4), 6000),   // tagline + sub
    ];
    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  const cls = (n) => (phase >= n ? 'is-shown' : '');

  return (
    <div className="slide-inner rebrand-slide">
      <div className={`rebrand-eyebrow ${cls(1)}`}>
        Last year, we introduced you to —
      </div>

      <div className={`rebrand-mark ${cls(2)} ${phase >= 3 ? 'is-plus' : ''}`}>
        <span className="rebrand-pam">Pam</span>
        <span className="rebrand-symbol">
          <span className="rebrand-symbol-dot" />
          <span className="rebrand-symbol-bar rebrand-symbol-bar-h" />
          <span className="rebrand-symbol-bar rebrand-symbol-bar-v" />
        </span>
      </div>

      <div className={`rebrand-tagline ${cls(4)}`}>
        This year, Pam does <strong>more.</strong>
      </div>
      <div className={`rebrand-sub ${cls(4)}`}>
        One platform. Every device. Every touchpoint.
      </div>
    </div>
  );
}
