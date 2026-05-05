'use client';

import { useEffect, useRef } from 'react';

const STEPS = [
  { num: 1, label: 'The Fit' },
  { num: 2, label: 'The Analysis' },
  { num: 3, label: 'The Scope' },
  { num: 4, label: 'The Team' },
  { num: 5, label: 'The Plan' },
  { num: 6, label: 'The Proof' },
];

// Visual layout constants (must match CSS `.kotter-step` width)
const STEP_WIDTH = 150;
const ZOOM_SCALE = 1.45;

function getStepOffset(step) {
  // Row center sits between step 3 and step 4 (six-step layout).
  return (step - 3.5) * STEP_WIDTH;
}

export default function KotterRow({ activeStep, onStepClick }) {
  const rowRef = useRef(null);

  useEffect(() => {
    if (!rowRef.current) return;

    if (activeStep === null) {
      rowRef.current.style.transform = 'translate(0, 0) scale(1)';
      return;
    }

    if (activeStep === 0) {
      rowRef.current.style.transform = 'translate(0, 0) scale(1)';
      return;
    }

    const offset = getStepOffset(activeStep);
    const tx = -offset * ZOOM_SCALE;
    rowRef.current.style.transform = `translate(${tx}px, 0) scale(${ZOOM_SCALE})`;
  }, [activeStep]);

  let stageClass = 'kotter-row-stage';
  if (activeStep !== null) stageClass += ' active';
  if (activeStep === 0) stageClass += ' is-overview';

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
            <button
              key={num}
              type="button"
              className={`kotter-step ${stateClass}`}
              onClick={() => onStepClick && onStepClick(num)}
              aria-label={`Jump to step ${num}: ${label}`}
            >
              <div className="step-name">{label}</div>
              <div className="step-circle">
                {String(num).padStart(2, '0')}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
