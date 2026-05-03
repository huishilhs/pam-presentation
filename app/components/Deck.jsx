'use client';

import { useState, useEffect, useRef } from 'react';
import Navigation from './Navigation';
import KotterRow from './KotterRow';
import KotterContent from './KotterContent';
// import TitleSlide from './slides/TitleSlide';
import HookSlide from './slides/HookSlide';
import PersonaSlide, { PersonaMeetSlide } from './slides/PersonaSlide';
// import TeamSlide from './slides/TeamSlide';
import OpeningSlide from './slides/OpeningSlide';
import CantBlameSlide from './slides/CantBlameSlide';
import LastSemSlide from './slides/LastSemSlide';
import TodaySlide from './slides/TodaySlide';
// import WhySlide from './slides/WhySlide';
import WhyKotterSlide from './slides/WhyKotterSlide';
import KotterOverviewSlide from './slides/KotterOverviewSlide';
import ClosingSlide from './slides/ClosingSlide';
import ThanksSlide from './slides/ThanksSlide';
import JourneySlide from './slides/JourneySlide';

// =====================================================
// SLIDE ORDER — edit here to add / remove / reorder
// =====================================================
// `kotterStep` is:
//   • undefined → normal slide
//   • 0         → Kotter overview (wheel centered, no step active)
//   • 1-8       → Kotter step slide (wheel zoomed into that step)
const SLIDES = [
  // { id: 'title',   className: 'slide-title',   Component: TitleSlide },
  { id: 'hook',    className: 'slide-hook',    Component: HookSlide },
  { id: 'persona-meet', className: 'slide-cut', Component: PersonaMeetSlide },
  { id: 'persona',      className: 'slide-voicemail', Component: PersonaSlide },
  // { id: 'team',    className: 'slide-team',    Component: TeamSlide },
  { id: 'opening', className: 'slide-stats', Component: OpeningSlide },
  { id: 'cant-blame', className: 'slide-cantblame', Component: CantBlameSlide },
  { id: 'last-sem', className: 'slide-rebrand', Component: LastSemSlide },
  { id: 'today',    className: 'slide-pamplus',    Component: TodaySlide },
  { id: 'why-kotter', className: 'slide-why-kotter', Component: WhyKotterSlide },
  // { id: 'why',     className: 'slide-why',     Component: WhySlide },

  { id: 'roadmap-overview', className: 'slide-kotter', Component: KotterOverviewSlide, kotterStep: 0 },

  // Step 1 · The Fit
  { id: 'step-1-fit',       className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 1, kotterVariant: 'fit' },

  // Step 2 · The Analysis
  { id: 'step-2-analysis',  className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 2, kotterVariant: 'analysis' },

  // Step 3 · The Scope (rotating triangle — Budget → Timeline → Scope)
  { id: 'step-3-budget',    className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 3, kotterVariant: 'budget' },
  { id: 'step-3-timeline',  className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 3, kotterVariant: 'timeline' },
  { id: 'step-3-scope',     className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 3, kotterVariant: 'scope' },

  // Step 4 · The Team
  { id: 'step-4-team-1',    className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 4, kotterVariant: 'pyramid-1' },
  { id: 'step-4-team-2',    className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 4, kotterVariant: 'pyramid-2' },
  { id: 'step-4-team-3',    className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 4, kotterVariant: 'pyramid-3' },
  { id: 'step-4-team-4',    className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 4, kotterVariant: 'pyramid-4' },
  { id: 'step-4-team-5',    className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 4, kotterVariant: 'pyramid-5' },
  { id: 'step-4-adkar',     className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 4, kotterVariant: 'adkar' },

  // Step 5 · The Risks
  { id: 'step-5-wbs',       className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 5, kotterVariant: 'wbs' },
  { id: 'step-5-gantt',     className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 5, kotterVariant: 'gantt' },
  { id: 'step-5-network',   className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 5, kotterVariant: 'network' },
  { id: 'step-5-matrix',    className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 5, kotterVariant: 'matrix' },
  { id: 'step-5-fragment',  className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 5, kotterVariant: 'fragment' },

  // Step 6 · The Proof
  { id: 'step-6-proof-1',   className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 6, kotterVariant: 'wins-1' },
  { id: 'step-6-proof-2',   className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 6, kotterVariant: 'wins-2' },
  { id: 'step-6-proof-3',   className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 6, kotterVariant: 'wins-3' },
  { id: 'step-6-proof-4',   className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 6, kotterVariant: 'wins-4' },
  { id: 'step-6-proof-5',   className: 'slide-kotter', Component: EmptyKotterSlide, kotterStep: 6, kotterVariant: 'wins-5' },

  { id: 'closing', className: 'slide-close',  Component: ClosingSlide },
  { id: 'thanks-1', className: 'slide-thanks', Component: ThanksSlide, stage: 1 },
  { id: 'thanks-2', className: 'slide-thanks', Component: ThanksSlide, stage: 2 },
  { id: 'thanks-3', className: 'slide-thanks', Component: ThanksSlide, stage: 3 },

  { id: 'journey', className: 'slide-journey', Component: JourneySlide },
];

// Blank placeholder for Kotter step slides — the visual content is
// rendered by the persistent KotterRow and KotterContent components.
function EmptyKotterSlide() {
  return <div className="slide-inner" />;
}

export default function Deck() {
  const [index, setIndex] = useState(0);
  // displayStep is the Kotter state CURRENTLY shown on screen.
  // It's independent of the current slide because the zoom-out-zoom-in
  // transition briefly shows a different state (0 = overview) between steps.
  const [displayStep, setDisplayStep] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const lastKotterStepRef = useRef(null);
  const timeoutsRef = useRef([]);

  const current = SLIDES[index];
  const targetKotter = current.kotterStep ?? null;
  const targetVariant = current.kotterVariant ?? null;

  // --- Kotter transition logic (zoom-out-then-zoom-in between steps) ---
  useEffect(() => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];

    if (targetKotter === null) {
      setDisplayStep(null);
      setShowContent(false);
      lastKotterStepRef.current = null;
      return;
    }

    const lastStep = lastKotterStepRef.current;

    // If we're staying within the same Kotter step (just switching
    // variants), don't hide/re-show the content panel — let the new
    // variant prop pass through so only the inner content updates.
    if (lastStep === targetKotter && targetKotter > 0) {
      return;
    }

    setShowContent(false);

    const isBetweenSteps =
      lastStep !== null &&
      lastStep > 0 &&
      targetKotter > 0 &&
      lastStep !== targetKotter;

    if (isBetweenSteps) {
      // Phase 1 · zoom OUT to overview
      setDisplayStep(0);

      // Phase 2 · after pause, zoom IN to new step
      const t1 = setTimeout(() => {
        setDisplayStep(targetKotter);
        lastKotterStepRef.current = targetKotter;

        // Phase 3 · show content after zoom-in completes
        const t2 = setTimeout(() => setShowContent(true), 700);
        timeoutsRef.current.push(t2);
      }, 500);
      timeoutsRef.current.push(t1);
    } else {
      // Direct transition
      setDisplayStep(targetKotter);
      lastKotterStepRef.current = targetKotter;
      if (targetKotter > 0) {
        const t = setTimeout(() => setShowContent(true), 800);
        timeoutsRef.current.push(t);
      }
    }

    return () => {
      timeoutsRef.current.forEach((t) => clearTimeout(t));
      timeoutsRef.current = [];
    };
  }, [targetKotter, index]);

  // --- Keyboard navigation ---
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        setIndex((i) => Math.min(i + 1, SLIDES.length - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Home') {
        setIndex(0);
      } else if (e.key === 'End') {
        setIndex(SLIDES.length - 1);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((index + 1) / SLIDES.length) * 100}%` }}
        />
      </div>
      <div className="brand-mark">Pam · Group 2</div>

      <div className="deck">
        {SLIDES.map((slide, i) => {
          const { Component, className, stage } = slide;
          return (
            <div
              key={slide.id}
              className={`slide ${className || ''} ${i === index ? 'active' : ''}`}
            >
              <Component isActive={i === index} stage={stage} />
            </div>
          );
        })}
      </div>

      <KotterRow
        activeStep={displayStep}
        onStepClick={(step) => {
          const target = SLIDES.findIndex((s) => s.kotterStep === step);
          if (target >= 0) setIndex(target);
        }}
      />
      <KotterContent
        activeStep={showContent ? displayStep : null}
        activeVariant={showContent ? targetVariant : null}
      />

      <div className="slide-counter">
        {String(index + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
      </div>

      <Navigation
        onPrev={() => setIndex((i) => Math.max(i - 1, 0))}
        onNext={() => setIndex((i) => Math.min(i + 1, SLIDES.length - 1))}
        canGoPrev={index > 0}
        canGoNext={index < SLIDES.length - 1}
      />
    </>
  );
}
