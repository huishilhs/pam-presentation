'use client';

import { useEffect, useState } from 'react';

const LINES = [
  { text: 'One Solution.', accent: 'yellow' },
  { text: 'Every device.', accent: 'cyan' },
  { text: 'Every step of the journey.', accent: 'coral' },
];

const REVEAL_TIMINGS = [300, 900, 1500];

export default function WhyKotterSlide({ isActive }) {
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
    <div className="slide-inner one-ai-slide">
      {LINES.map((line, i) => (
        <div
          key={line.text}
          className={`one-ai-line one-ai-line--${line.accent} ${
            revealed > i ? 'is-shown' : ''
          }`}
        >
          {line.text}
        </div>
      ))}
    </div>
  );
}
