'use client';

import { useEffect, useState } from 'react';

export default function LastSemSlide({ stage = 1, isActive }) {
  // The two slide entries (stage 1 and stage 2) cross-fade. To make the
  // dot→plus morph and tagline reveal feel smooth (using the existing CSS
  // transitions on .rebrand-symbol-* and .rebrand-tagline), the stage-2
  // instance briefly renders the stage-1 visual on mount and then upgrades
  // to stage 2 — that way the class flip plays the morph instead of
  // appearing already-morphed.
  const [animatedStage, setAnimatedStage] = useState(1);

  useEffect(() => {
    if (!isActive) {
      setAnimatedStage(1);
      return;
    }
    if (stage >= 2) {
      const t = setTimeout(() => setAnimatedStage(2), 120);
      return () => clearTimeout(t);
    }
    setAnimatedStage(1);
  }, [isActive, stage]);

  const isPlus = animatedStage >= 2;

  return (
    <div className="slide-inner rebrand-slide">
      <div className="rebrand-eyebrow is-shown">
        Last year, we introduced you to
      </div>

      <div className={`rebrand-mark is-shown ${isPlus ? 'is-plus' : ''}`}>
        <span className="rebrand-pam">Pam</span>
        <span className="rebrand-symbol">
          <span className="rebrand-symbol-dot" />
          <span className="rebrand-symbol-bar rebrand-symbol-bar-h" />
          <span className="rebrand-symbol-bar rebrand-symbol-bar-v" />
        </span>
      </div>

      <div className={`rebrand-tagline ${isPlus ? 'is-shown' : ''}`}>
        This year, Pam does <strong>more.</strong>
      </div>
      <div className={`rebrand-sub ${isPlus ? 'is-shown' : ''}`}>
        One platform. Every device. Every touchpoint.
      </div>
    </div>
  );
}
