'use client';

import { useEffect, useRef, useState } from 'react';

export default function HookSlide({ isActive }) {
  const ctxRef = useRef(null);
  const gainRef = useRef(null);
  const oscsRef = useRef([]);
  const intervalRef = useRef(null);
  const mutedRef = useRef(false);
  const [muted, setMuted] = useState(false);
  const [needsUnlock, setNeedsUnlock] = useState(false);

  // Keep mutedRef in sync so the ring callback reads the latest value.
  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);

  // One-time setup of the audio context + oscillators.
  useEffect(() => {
    const Ctor = typeof window !== 'undefined'
      ? (window.AudioContext || window['webkitAudioContext'])
      : null;
    if (!Ctor) return;

    const ctx = new Ctor();
    ctxRef.current = ctx;

    const gain = ctx.createGain();
    gain.gain.value = 0;
    gain.connect(ctx.destination);
    gainRef.current = gain;

    const make = (freq) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.connect(gain);
      osc.start();
      return osc;
    };
    oscsRef.current = [make(440), make(480)];

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      oscsRef.current.forEach((o) => {
        try { o.stop(); } catch (_) { /* already stopped */ }
      });
      oscsRef.current = [];
      if (ctxRef.current) {
        try { ctxRef.current.close(); } catch (_) { /* ignore */ }
      }
      ctxRef.current = null;
      gainRef.current = null;
    };
  }, []);

  // Start/stop the ring whenever the slide becomes active or inactive.
  useEffect(() => {
    const ctx = ctxRef.current;
    const gain = gainRef.current;
    if (!ctx || !gain) return;

    const silence = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      const t = ctx.currentTime;
      gain.gain.cancelScheduledValues(t);
      gain.gain.setValueAtTime(0, t);
    };

    if (!isActive) {
      silence();
      return;
    }

    const ring = () => {
      const t = ctx.currentTime;
      const target = mutedRef.current ? 0 : 0.08;
      gain.gain.cancelScheduledValues(t);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(target, t + 0.04);
      gain.gain.setValueAtTime(target, t + 1.96);
      gain.gain.linearRampToValueAtTime(0, t + 2);
    };

    const begin = () => {
      ring();
      intervalRef.current = setInterval(ring, 6000); // 2s on, 4s off
    };

    let unlock;
    if (ctx.state === 'suspended') {
      setNeedsUnlock(true);
      unlock = () => {
        ctx.resume().then(() => {
          setNeedsUnlock(false);
          if (!intervalRef.current) begin();
        }).catch(() => {});
      };
      window.addEventListener('click', unlock, { once: true });
      window.addEventListener('keydown', unlock, { once: true });
    } else {
      begin();
    }

    return () => {
      if (unlock) {
        window.removeEventListener('click', unlock);
        window.removeEventListener('keydown', unlock);
      }
      silence();
    };
  }, [isActive]);

  const toggleMute = () => setMuted((m) => !m);

  return (
    <div className="slide-inner">
      <div className="hotline-visual">
        <div className="hotline-rings">
          <div className="ring" />
          <div className="ring" />
          <div className="ring" />
        </div>
        <svg
          className="hotline-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>
      <div className="hotline-label">P&amp;G Customer Service</div>
      <div className="hotline-dots">
        <span />
        <span />
        <span />
      </div>

      <button
        type="button"
        className={`audio-toggle ${muted ? 'is-muted' : ''}`}
        onClick={toggleMute}
        aria-label={muted ? 'Unmute ringtone' : 'Mute ringtone'}
      >
        {muted ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9"  x2="17" y2="15" />
            <line x1="17" y1="9"  x2="23" y2="15" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
        <span className="audio-toggle-label">
          {muted ? 'Sound off' : needsUnlock ? 'Tap to play' : 'Sound on'}
        </span>
      </button>
    </div>
  );
}
