'use client';

import { useEffect, useState } from 'react';

/* ----------------------------------------------------------
 * SLIDE 2 · "Four days ago. I cut myself a lot."
 * Photo placeholder + caption.
 * -------------------------------------------------------- */
export function PersonaMeetSlide() {
  return (
    <div className="slide-inner cut-slide">
      <div className="cut-photo-frame cut-photo-frame--filled">
        <img
          src="/razor_cut.png"
          alt="Speaker, cut on chin, four days ago"
          className="cut-photo-img"
        />
      </div>
      <p className="cut-caption">
        Four days ago. Not staged. I cut myself a lot.
      </p>
    </div>
  );
}

/* ----------------------------------------------------------
 * SLIDE 3 · iOS Recents stack
 * iPhone-style dark Recents screen — call entries appear
 * one at a time as the speaker counts.
 * -------------------------------------------------------- */
const RECENTS = [
  { name: 'P&G Customer Service', type: 'phone', dir: 'out', time: '9:42 AM',  initial: 'P' },
  { name: 'P&G Customer Service', type: 'phone', dir: 'out', time: '9:51 AM',  initial: 'P' },
  { name: 'P&G Customer Service', type: 'phone', dir: 'out', time: '10:08 AM', initial: 'P' },
  { name: 'P&G Customer Service', type: 'phone', dir: 'out', time: '10:20 AM', initial: 'P' },
  { name: 'P&G Customer Service', type: 'phone', dir: 'out', time: '10:34 AM', initial: 'P' },
  { name: 'P&G Customer Service', type: 'phone', dir: 'out', time: '10:49 AM', initial: 'P' },
  { name: 'Mom',                  type: 'WhatsApp Audio', dir: 'in', time: '11:02 AM', initial: 'M' },
];

const REVEAL_TIMINGS = [600, 1500, 2400, 2900, 3300, 3700, 4100];

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

  return (
    <div className="slide-inner voicemail-slide">
      <div className="phone-frame phone-frame--dark">
        <div className="phone-notch" />
        <div className="phone-screen phone-screen--dark">
          <div className="phone-status-bar phone-status-bar--dark">
            <span>11:32</span>
            <span className="phone-status-icons">
              <span className="phone-status-bars" />
              <span className="phone-status-4g">4G</span>
              <span className="phone-status-battery" />
            </span>
          </div>

          <div className="recents-toolbar">
            <span className="recents-pill">Edit</span>
            <span className="recents-segmented">
              <span className="recents-segment is-active">All</span>
              <span className="recents-segment">Missed</span>
            </span>
            <span className="recents-pill recents-pill-icon">
              <span className="recents-menu" />
            </span>
          </div>

          <div className="recents-title">Recents</div>

          <div className="recents-search">
            <span className="recents-search-icon" />
            <span className="recents-search-text">Search</span>
            <span className="recents-search-mic" />
          </div>

          <ul className="recents-list">
            {RECENTS.map((c, i) => (
              <li
                key={i}
                className={`recents-item ${revealed > i ? 'is-shown' : ''}`}
              >
                <div className="recents-avatar">{c.initial}</div>
                <div className="recents-meta">
                  <div className="recents-name">{c.name}</div>
                  <div className="recents-sub">
                    <span className={`recents-arrow recents-arrow--${c.dir}`}>
                      {c.dir === 'in' ? '↙' : '↗'}
                    </span>
                    {c.type}
                  </div>
                </div>
                <div className="recents-time">{c.time}</div>
                <div className="recents-info">i</div>
              </li>
            ))}
          </ul>

          <div className="recents-tabbar">
            <div className="recents-tab">
              <span className="recents-tab-icon">★</span>
              <span className="recents-tab-label">Favorites</span>
            </div>
            <div className="recents-tab is-active">
              <span className="recents-tab-icon">⏱</span>
              <span className="recents-tab-label">Recents</span>
            </div>
            <div className="recents-tab">
              <span className="recents-tab-icon">◉</span>
              <span className="recents-tab-label">Contacts</span>
            </div>
            <div className="recents-tab">
              <span className="recents-tab-icon">⋮⋮⋮</span>
              <span className="recents-tab-label">Keypad</span>
            </div>
            <div className="recents-tab">
              <span className="recents-tab-icon">
                ◐
                <span className="recents-tab-badge">12</span>
              </span>
              <span className="recents-tab-label">Voicemail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
