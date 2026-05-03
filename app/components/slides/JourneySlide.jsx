'use client';

import { useState } from 'react';

const STAGES = [
  {
    label: 'Discover',
    headline: 'Scan it. Know it.',
    body: 'Hold your phone over any product. Pam+ tells you what it does, who it’s for, what fits.',
    video: '/phone.mov',
  },
  {
    label: 'Compare',
    headline: 'See every detail.',
    body: 'Side-by-side specs, claims, and ingredients — surfaced the moment you ask.',
    video: '/Compare_details.mov',
  },
  {
    label: 'Decide',
    headline: 'Real reviews, real time.',
    body: 'Community comments from people like you — right there at the shelf.',
    video: '/Review.mov',
  },
  {
    label: 'Use',
    headline: 'Guidance after the buy.',
    body: 'The angle. The pressure. The technique. Same razor — four days later, no cuts.',
    video: '/Laptop.mov',
  },
  {
    label: 'Master',
    headline: 'Hands-free tutorials.',
    body: 'Through your glasses. Step-by-step, exactly when you need it.',
    video: '/Glass_tutorial.mov',
  },
  {
    label: 'Share',
    headline: 'Speak. Pam listens.',
    body: 'No forms. No sliders. Just your voice — straight to the brand.',
    video: '/glasses.mp4',
  },
];

export default function JourneySlide() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];
  const total = STAGES.length;

  const handleEnded = () => setActive((i) => (i + 1) % total);

  return (
    <div className="slide-inner journey-slide">
      <div className="journey-header">
        <h2 className="journey-title">
          <span className="pam-hero" style={{ fontSize: 'inherit' }}>
            Pam<span className="pam-hero-dot">+</span>
          </span>
          {' '}at every step.
        </h2>
        <p className="journey-sub">
          One platform. Six moments. Every consumer touchpoint —
          from discovery to feedback.
        </p>
      </div>

      <div className="journey-roadmap" role="tablist">
        {STAGES.map((s, i) => (
          <button
            key={s.label}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`journey-stop ${i === active ? 'is-active' : ''} ${i < active ? 'is-visited' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="journey-stop-dot" />
            <span className="journey-stop-num">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="journey-stop-label">{s.label}</span>
          </button>
        ))}
      </div>

      <div className="journey-feature">
        <div className="journey-feature-copy">
          <div className="journey-feature-meta">
            <span className="journey-feature-num">
              {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <span className="journey-feature-label">{stage.label}</span>
          </div>
          <div className="journey-feature-headline">{stage.headline}</div>
          <p className="journey-feature-body">{stage.body}</p>
        </div>

        <div className="journey-feature-screen">
          <video
            key={stage.video}
            className="journey-feature-video"
            src={stage.video}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleEnded}
          />
        </div>
      </div>
    </div>
  );
}
