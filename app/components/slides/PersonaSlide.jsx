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
          alt="Speaker — cut on chin, four days ago"
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
 * SLIDE 3 · Voicemail stack
 * iPhone-style screen — 7 voicemails appear one at a time
 * as the speaker counts. Replaceable with a real screenshot.
 * -------------------------------------------------------- */
const VOICEMAILS = [
  { time: '9:42 AM',  duration: '0:14', preview: 'Hi, calling about a razor —' },
  { time: '9:51 AM',  duration: '0:09', preview: 'Hello? Trying again — razor —' },
  { time: '10:08 AM', duration: '0:07', preview: 'Sorry, me again. Can someone —' },
  { time: '10:20 AM', duration: '0:05', preview: 'Still trying. Just a quick —' },
  { time: '10:34 AM', duration: '0:04', preview: 'Anyone there?' },
  { time: '10:49 AM', duration: '0:03', preview: 'Hello??' },
  { time: '11:02 AM', duration: '0:02', preview: '...' },
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
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-status-bar">
            <span>11:02</span>
            <span className="phone-status-icons">
              <span className="phone-status-bars" />
              <span className="phone-status-wifi" />
              <span className="phone-status-battery" />
            </span>
          </div>

          <div className="phone-section-title">
            <span>Voicemail</span>
            <span className="phone-section-edit">Edit</span>
          </div>

          <div className="phone-contact-strip">
            <div className="phone-avatar">P&amp;G</div>
            <div className="phone-contact-meta">
              <div className="phone-contact-name">P&amp;G Customer Service</div>
              <div className="phone-contact-sub">Recents · 7 missed today</div>
            </div>
          </div>

          <ul className="voicemail-list">
            {VOICEMAILS.map((vm, i) => (
              <li
                key={i}
                className={`voicemail-item ${revealed > i ? 'is-shown' : ''}`}
              >
                <span className="voicemail-bullet" />
                <div className="voicemail-body">
                  <div className="voicemail-row">
                    <span className="voicemail-caller">P&amp;G Customer Service</span>
                    <span className="voicemail-time">{vm.time}</span>
                  </div>
                  <div className="voicemail-row voicemail-row-sub">
                    <span className="voicemail-preview">{vm.preview}</span>
                    <span className="voicemail-duration">{vm.duration}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
