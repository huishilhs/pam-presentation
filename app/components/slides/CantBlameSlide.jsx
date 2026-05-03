'use client';

import { useEffect, useState } from 'react';

const REVEAL_TIMINGS = [400, 1500, 2400, 3300, 4400, 5400, 6500];

export default function CantBlameSlide({ isActive }) {
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

  const cls = (n) => `cantblame-reveal ${revealed >= n ? 'is-shown' : ''}`;

  return (
    <div className="slide-inner cantblame-slide">
      <div className={`cantblame-eyebrow ${cls(1)}`}>
        We can&apos;t blame them.
      </div>

      <div className="cantblame-stack">
        <div className={`cantblame-line ${cls(2)}`}>
          <span className="cantblame-num">Billions</span>
          <span className="cantblame-unit">of consumers.</span>
        </div>
        <div className={`cantblame-row ${cls(3)}`}>
          <span className="cantblame-chip">Every timezone.</span>
          <span className="cantblame-chip">Every brand.</span>
        </div>

        <div className={`cantblame-statement ${cls(4)}`}>
          No human network on Earth can carry that anymore.
        </div>

        <ul className="cantblame-fails">
          <li className={cls(5)}>
            <span className="cantblame-strike">Hiring more people</span>
            <span className="cantblame-fails-tail">doesn&apos;t fix it.</span>
          </li>
          <li className={cls(6)}>
            <span className="cantblame-strike">Outsourcing</span>
            <span className="cantblame-fails-tail">doesn&apos;t fix it.</span>
          </li>
        </ul>

        <div className={`cantblame-coda ${cls(7)}`}>
          Twenty years ago you could brute-force customer support with a big enough call centre.
          <br />
          <span className="cantblame-coda-em">Today, you can&apos;t.</span>
        </div>
      </div>
    </div>
  );
}
