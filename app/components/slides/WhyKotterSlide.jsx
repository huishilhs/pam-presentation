'use client';

import { useEffect, useState } from 'react';

export default function WhyKotterSlide({ isActive }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setPhase(0);
      return;
    }
    const timers = [
      setTimeout(() => setPhase(1), 700),   // strike first sentence
      setTimeout(() => setPhase(2), 1700),  // strike second sentence
      setTimeout(() => setPhase(3), 2700),  // reveal "One plan"
      setTimeout(() => setPhase(4), 3500),  // reveal stamp
    ];
    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  const struck = (n) => `one-plan-row is-struck ${phase >= n ? 'is-cancelled' : ''}`;
  const reveal = (n) => `one-plan-reveal ${phase >= n ? 'is-shown' : ''}`;

  return (
    <div className="slide-inner">
      <div className="why-kotter-grid">
        <div className="why-kotter-left">
          <div className="eyebrow">Our approach</div>
          <h2 className="why-kotter-heading">
            Pam isn&apos;t a tool being introduced.
          </h2>
          <div className="why-kotter-sub">
            <span className="highlight-yellow-bg">Pam is the change.</span>
          </div>
          <p className="why-kotter-body">
            Organisational change was never an afterthought. Pam is the
            transformation of P&amp;G&apos;s consumer experience —
            enterprise-wide, from the ground up.
          </p>
        </div>

        <div className="why-kotter-right">
          <div className={struck(1)}>
            <span className="one-plan-mark">✕</span>
            <span className="one-plan-text">A project plan on one side.</span>
          </div>
          <div className={struck(2)}>
            <span className="one-plan-mark">✕</span>
            <span className="one-plan-text">
              A change-management plan on the other.
            </span>
          </div>

          <div className={`one-plan-divider ${reveal(3)}`}>
            held together by Kotter&apos;s 8 Steps
          </div>

          <div className={`one-plan-row is-correct ${reveal(3)}`}>
            <span className="one-plan-mark">→</span>
            <span className="one-plan-text">
              <strong>One plan.</strong>
            </span>
          </div>

          <div className={`one-plan-stamp ${reveal(4)}`}>
            And this is it.
          </div>
        </div>
      </div>
    </div>
  );
}
