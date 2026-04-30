'use client';

import { useEffect, useState } from 'react';

const PANELS = [
  {
    label: 'Phone',
    headline: 'AR overlays in your hand.',
    body: 'Hold your phone over two products. Pam+ tells you what each one does, who it’s for, which one fits.',
    cue: 'The aisle stops being a guess.',
    video: '/phone.mov',
  },
  {
    label: 'Smart Glasses',
    headline: 'Leave your comment.',
    body: 'Captures what you actually used, when, and how. No forms. No five-star sliders. Just your voice.',
    cue: 'EVERY VOICE - STRAIGHT TO THE BRAND TEAM.',
    video: '/glasses.mp4',
  },
  {
    label: 'Laptop',
    headline: 'After the purchase.',
    body: 'Watching the angle. The pressure. The technique. Same razor. Four days later. No cuts.',
    cue: 'Pam+ keeps showing up — every step.',
    video: '/laptop.mov',
  },
];

const REVEAL_TIMINGS = [600, 4500, 9000];

export default function TodaySlide({ isActive }) {
  const [lit, setLit] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setLit(0);
      return;
    }
    const timers = REVEAL_TIMINGS.map((delay, i) =>
      setTimeout(() => setLit(i + 1), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <div className="slide-inner pamplus-slide">
      <div className="pamplus-header">
        <span className="pam-hero">
          Pam<span className="pam-hero-dot">+</span>
        </span>
        <p className="pamplus-sub">
          One platform. Every device. Every touchpoint.
        </p>
      </div>

      <div className="pamplus-grid">
        {PANELS.map((p, i) => (
          <div
            key={p.label}
            className={`pamplus-panel ${lit > i ? 'is-lit' : ''}`}
          >
            <div className="pamplus-screen">
              <video
                className="pamplus-video"
                src={p.video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
              <div className="pamplus-screen-glow" />
              <div className="pamplus-screen-inner">
                <span className="pamplus-screen-label">{p.label}</span>
                <span className="pamplus-screen-headline">{p.headline}</span>
              </div>
            </div>
            <p className="pamplus-panel-body">{p.body}</p>
            <p className="pamplus-panel-cue">{p.cue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
