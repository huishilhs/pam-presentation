'use client';

import { useEffect, useRef } from 'react';

const STEPS = [
  { num: 1, label: 'Urgency' },
  { num: 2, label: 'Coalition' },
  { num: 3, label: 'Vision' },
  { num: 4, label: 'Enlist' },
  { num: 5, label: 'Enable' },
  { num: 6, label: 'Wins' },
  { num: 7, label: 'Sustain' },
  { num: 8, label: 'Institute' },
];

// Visual layout constants (must match CSS `.kotter-step` width)
const STEP_WIDTH = 140;
const ZOOM_SCALE = 1.9;

function getStepOffset(step) {
  // Row center sits between step 4 and step 5.
  // Offset of step N from center = (N - 4.5) * STEP_WIDTH.
  return (step - 4.5) * STEP_WIDTH;
}

export default function KotterRow({ activeStep }) {
  const rowRef = useRef(null);

  useEffect(() => {
    if (!rowRef.current) return;

    if (activeStep === null) {
      // Hidden — reset to overview transform
      rowRef.current.style.transform = 'translate(0, 0) scale(1)';
      return;
    }

    if (activeStep === 0) {
      // Overview mode — all 8 steps visible, no zoom
      rowRef.current.style.transform = 'translate(0, 0) scale(1)';
      return;
    }

    // Zoom into the active step: translate + scale so it centers
    const offset = getStepOffset(activeStep);
    const tx = -offset * ZOOM_SCALE;
    rowRef.current.style.transform = `translate(${tx}px, 0) scale(${ZOOM_SCALE})`;
  }, [activeStep]);

  const stageClass = activeStep !== null ? 'kotter-row-stage active' : 'kotter-row-stage';

  return (
    <div className={stageClass}>
      <div className="kotter-row" ref={rowRef}>
        <div className="kotter-row-line" />
        {STEPS.map(({ num, label }) => {
          let stateClass = '';
          if (activeStep !== null && activeStep > 0) {
            if (num === activeStep) stateClass = 'is-active';
            else if (num < activeStep) stateClass = 'is-visited';
          }
          return (
            <div key={num} className={`kotter-step ${stateClass}`}>
              <div className="step-circle">
                {String(num).padStart(2, '0')}
              </div>
              <div className="step-name">{label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
