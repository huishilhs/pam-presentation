'use client';

import { useEffect, useState } from 'react';

/**
 * KotterContent renders the content panel for an active roadmap step.
 * The 6-step structure:
 *   1 · The Fit       → strategic vision Pam+ represents
 *   2 · The Analysis  → McKinsey 7-S
 *   3 · The Scope     → Iron Triangle
 *   4 · The Team      → Five tiers + ADKAR
 *   5 · The Risks     → WBS · Gantt · Critical path · Risk list · Matrix · Fragment
 *   6 · The Proof     → Five gated proofs
 */
export default function KotterContent({ activeStep, activeVariant }) {
  const className = activeStep !== null && activeStep > 0
    ? 'kotter-content active'
    : 'kotter-content';

  return (
    <div className={className}>
      {activeStep === 1 && <VisionGrowth />}
      {activeStep === 2 && <UrgencyAnalysis />}
      {activeStep === 3 && <VisionTriangle variant={activeVariant} />}
      {activeStep === 4 && <TeamContent variant={activeVariant} />}
      {activeStep === 5 && <RisksContent variant={activeVariant} />}
      {activeStep === 6 && <ProofContent variant={activeVariant} />}
    </div>
  );
}

function TeamContent({ variant }) {
  if (variant === 'kotter') return <KotterEightSteps />;
  if (variant === 'frameworks') return <KotterAdkarBridge />;
  if (variant === 'adkar') return <EnlistContent />;
  const m = variant && variant.match(/^pyramid-(\d+)$/);
  const visibleCount = m ? Math.min(parseInt(m[1], 10), 5) : 5;
  return <CoalitionPyramid visibleCount={visibleCount} />;
}

const KOTTER_8_STEPS = [
  {
    num: '01',
    title: 'Create urgency',
    tone: 'blue',
    body: <>The post-purchase moment is when P&amp;G goes silent. <strong>80,000 comments</strong> say the gap is real.</>,
    bullets: [
      'CX gap made visible to every team',
      'Tied to the 80K complaint dataset',
      '30% of low-ratings are post-purchase',
    ],
  },
  {
    num: '02',
    title: 'Build a guiding coalition',
    tone: 'teal',
    body: <>Five SBU Integration Leads, plus executive backing under <strong>Seth Cohen</strong>.</>,
    bullets: [
      'COO + CIO mandate above all SBUs',
      'One owner per business unit',
      'Cross-functional, no external deps',
    ],
  },
  {
    num: '03',
    title: 'Form a strategic vision',
    tone: 'yellow',
    body: <>Pam <strong>is</strong> the strategy: brand communication, retail execution, consumer value.</>,
    bullets: [
      'Right info, right person, right moment',
      'Every aisle, every brand, every device',
      'The strategy made tangible',
    ],
  },
  {
    num: '04',
    title: 'Enlist a volunteer army',
    tone: 'orange',
    body: <>ADKAR-driven enrolment: <strong>every employee, one person at a time</strong>.</>,
    bullets: [
      'Awareness through real customer data',
      'Desire grounded in personal benefit',
      'Knowledge → ability → reinforcement',
    ],
  },
  {
    num: '05',
    title: 'Enable action',
    tone: 'coral',
    body: <>Risk register, gated stage reviews, silos removed before they slow the build.</>,
    bullets: [
      'Nine risks scored, shaped into the plan',
      'Single-owner structure replaces silos',
      'Phase gates protect scope and budget',
    ],
  },
  {
    num: '06',
    title: 'Generate easy wins',
    tone: 'pink',
    body: <>Five gated proofs. Before we scale, every assumption is tested.</>,
    bullets: [
      'Week 7: scope locked, board signs off',
      'Month 8: 500+ SKUs live on AR',
      'Month 13: 50 shoppers prove usability',
    ],
  },
  {
    num: '07',
    title: 'Increase the pace',
    tone: 'purple',
    body: <>Phase 1 wins fund Phase 2 scale-up. <strong>Momentum compounds.</strong></>,
    bullets: [
      'UK scale-up: 800 stores after pilot',
      'Boards renew on evidence, not promises',
      'New SBUs onboarded every release',
    ],
  },
  {
    num: '08',
    title: 'Institute change',
    tone: 'sky',
    body: <>Pam becomes a <strong>living system</strong>. Not a project.</>,
    bullets: [
      'Embedded in P&G\'s operating rhythm',
      'Continuous feedback into product teams',
      'The new default for consumer experience',
    ],
  },
];

function KotterEightSteps() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          Top-down. The whole organisation, in step.
        </div>
        <div className="step-intro-tagline">
          Kotter&apos;s eight steps tell us how leadership authorises Pam,
          removes the barriers, and keeps the change moving.
        </div>
      </div>

      <div className="kotter-detail-row adkar-zoom-in">
        {KOTTER_8_STEPS.map((s) => (
          <div
            key={s.num}
            className={`adkar-detail-card kotter-tone-${s.tone}`}
          >
            <div className="adkar-detail-stage">Step {s.num}</div>
            <div className="adkar-detail-letter">{s.num}</div>
            <div className="adkar-detail-title">{s.title}</div>
            <div className="adkar-detail-body">{s.body}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function KotterAdkarBridge() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          Two frameworks. One coalition.
        </div>
        <div className="step-intro-tagline">
          Kotter moves the organisation top-down. ADKAR moves each
          person bottom-up. Together they meet in the middle.
        </div>
      </div>

      <div className="bridge-grid">
        <div className="bridge-card bridge-card-kotter">
          <div className="bridge-card-tag">Kotter</div>
          <div className="bridge-card-title">Top-down</div>
          <div className="bridge-card-arrow" aria-hidden="true">
            <svg viewBox="0 0 40 80" preserveAspectRatio="xMidYMid meet">
              <path
                d="M 18,4 L 18,58 L 8,58 L 20,76 L 32,58 L 22,58 L 22,4 Z"
                fill="#dc2626"
              />
            </svg>
          </div>
          <div className="bridge-card-detail">
            Vision. Coalition. Empowerment. The leadership signal that
            authorises the change to happen at all.
          </div>
        </div>

        <div className="bridge-meet">
          <span className="bridge-meet-label">meet in the middle</span>
        </div>

        <div className="bridge-card bridge-card-adkar">
          <div className="bridge-card-tag">ADKAR</div>
          <div className="bridge-card-title">Bottom-up</div>
          <div className="bridge-card-arrow" aria-hidden="true">
            <svg viewBox="0 0 40 80" preserveAspectRatio="xMidYMid meet">
              <path
                d="M 18,76 L 18,22 L 8,22 L 20,4 L 32,22 L 22,22 L 22,76 Z"
                fill="#dc2626"
              />
            </svg>
          </div>
          <div className="bridge-card-detail">
            Awareness. Desire. Knowledge. Ability. Reinforcement. The
            individual journey every employee actually walks.
          </div>
        </div>
      </div>
    </>
  );
}

function RisksContent({ variant }) {
  if (variant === 'wbs-full') return <WbsFull />;
  if (variant === 'wbs') return <WinsWbs />;
  if (variant === 'gantt') return <WinsGantt />;
  if (variant === 'network') return <WinsNetwork />;
  if (variant === 'matrix') return <EnableMatrix />;
  if (variant === 'fragment') return <EnableFragment />;
  return <EnableSources />;
}

function WbsFull() {
  return (
    <div className="wbs-full">
      <img src="/full_wbs.png" alt="Full Work Breakdown Structure" />
    </div>
  );
}

function ProofContent({ variant }) {
  const m = variant && variant.match(/^wins-(\d+)$/);
  const visibleCount = m ? Math.min(parseInt(m[1], 10), 5) : 5;
  return <WinsList visibleCount={visibleCount} />;
}

// =====================================================
// 7-S DIAGRAM (used by Step 1)
// =====================================================
const SEVEN_S_NODES = [
  { id: 'strategy', label: 'Strategy', cx: 200, cy: 50,  flagged: true },
  { id: 'structure', label: 'Structure', cx: 330, cy: 130, flagged: true },
  { id: 'systems', label: 'Systems', cx: 330, cy: 270, flagged: true },
  { id: 'staff', label: 'Staff', cx: 200, cy: 350, flagged: false },
  { id: 'style', label: 'Style', cx: 70,  cy: 270, flagged: false },
  { id: 'skills', label: 'Skills', cx: 70,  cy: 130, flagged: false },
  { id: 'shared', label: 'Shared Values', cx: 200, cy: 200, flagged: false, center: true },
];

function SevenSDiagram() {
  const lines = [];
  for (let i = 0; i < SEVEN_S_NODES.length; i++) {
    for (let j = i + 1; j < SEVEN_S_NODES.length; j++) {
      const a = SEVEN_S_NODES[i];
      const b = SEVEN_S_NODES[j];
      lines.push({ key: `${a.id}-${b.id}`, x1: a.cx, y1: a.cy, x2: b.cx, y2: b.cy });
    }
  }

  return (
    <svg viewBox="-20 -20 480 420" className="seven-s-svg">
      {lines.map((l) => (
        <line
          key={l.key}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke="rgba(0, 46, 145, 0.25)"
          strokeWidth="1.5"
        />
      ))}
      {SEVEN_S_NODES.map((n) => {
        const r = n.center ? 56 : 48;
        return (
          <g key={n.id}>
            {n.flagged && (
              <circle
                cx={n.cx}
                cy={n.cy}
                r={r + 6}
                fill="none"
                stroke="#dc2626"
                strokeWidth="4"
              />
            )}
            <circle
              cx={n.cx}
              cy={n.cy}
              r={r}
              fill={n.center ? '#001F66' : '#3a6ea5'}
              stroke={n.center ? '#001F66' : '#3a6ea5'}
            />
            {n.center ? (
              <>
                <text
                  x={n.cx}
                  y={n.cy - 6}
                  textAnchor="middle"
                  className="seven-s-node-label seven-s-node-label-center"
                >
                  Shared
                </text>
                <text
                  x={n.cx}
                  y={n.cy + 14}
                  textAnchor="middle"
                  className="seven-s-node-label seven-s-node-label-center"
                >
                  Values
                </text>
              </>
            ) : (
              <text
                x={n.cx}
                y={n.cy + 5}
                textAnchor="middle"
                className="seven-s-node-label"
              >
                {n.label}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// =====================================================
// STEP 1 · URGENCY
// =====================================================
function UrgencyContent({ variant }) {
  if (variant === 'conclusion') return <UrgencyConclusion />;
  return <UrgencyAnalysis />;
}

function UrgencyAnalysis() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          The gap inside P&amp;G.
        </div>
        <div className="step-intro-tagline">
          McKinsey 7-S reveals where the experience breaks, and why
          it keeps breaking.
        </div>
      </div>

      <div className="seven-s-layout">
        <div className="seven-s-diagram">
          <SevenSDiagram />
        </div>

        <ul className="seven-s-lines">
          <li className="seven-s-line">
            <span className="seven-s-line-key"><span className="seven-s-letter">S</span>trategy</span>
            <span className="seven-s-line-dash">·</span>
            <span className="seven-s-line-text">Unprepared integrated growth strategy.</span>
          </li>
          <li className="seven-s-line">
            <span className="seven-s-line-key"><span className="seven-s-letter">S</span>ystems</span>
            <span className="seven-s-line-dash">·</span>
            <span className="seven-s-line-text">Optimising everything before purchase.</span>
          </li>
          <li className="seven-s-line">
            <span className="seven-s-line-key"><span className="seven-s-letter">S</span>tructure</span>
            <span className="seven-s-line-dash">·</span>
            <span className="seven-s-line-text">Decentralised. No one owns post-purchase.</span>
          </li>
        </ul>
      </div>
    </>
  );
}

function UrgencyConclusion() {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    const timings = [400, 1700, 3000, 4400, 6000];
    const timers = timings.map((d, i) =>
      setTimeout(() => setRevealed(i + 1), d)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const cls = (n) => `urgency-reveal ${revealed >= n ? 'is-shown' : ''}`;

  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">A pattern, not an outlier.</div>
        <div className="step-intro-tagline">
          The strategy is right. The talent is right. The customer still
          isn&apos;t reached.
        </div>
      </div>

      <div className="urgency-conclusion">
        <div className={`urgency-line ${cls(1)}`}>
          Different <strong>products</strong>, different{' '}
          <strong>brands</strong>, different <strong>regions</strong>.
        </div>
        <div className={`urgency-line urgency-line-emphasis ${cls(2)}`}>
          the very same{' '}
          <span className="highlight-yellow-bg">pain points</span>{' '}
          experienced by customers.
        </div>

        <div className={`urgency-bridge ${cls(3)}`}>
          <span>The strategy is right.</span>
          <span className="urgency-bridge-sep">·</span>
          <span>The talent is right.</span>
        </div>

        <div className={`urgency-bridge-strong ${cls(4)}`}>
          But James is still standing in that aisle.
        </div>

        <div className={`urgency-payoff ${cls(5)}`}>
          <span className="urgency-payoff-text">
            So we built someone to stand next to him.
          </span>
          <span className="urgency-payoff-mark">
            Pam<span className="urgency-payoff-plus">+</span>
          </span>
        </div>
      </div>
    </>
  );
}

// =====================================================
// STEP 2 · COALITION
// =====================================================
function CoalitionContent({ variant }) {
  if (variant === 'culture') return <CoalitionCulture />;
  if (variant === 'stakeholder') return <CoalitionStakeholder />;
  const m = variant && variant.match(/^pyramid-(\d+)$/);
  const visibleCount = m ? Math.min(parseInt(m[1], 10), 5) : 5;
  return <CoalitionPyramid visibleCount={visibleCount} />;
}

function CoalitionCulture() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          P&amp;G&apos;s people are the engine.
        </div>
        <div className="step-intro-tagline">
          People-first. Accountable. Built to lead innovation from the
          ground up.
        </div>
      </div>

      <div className="culture-grid">
        <div className="culture-card">
          <div className="culture-card-num">01</div>
          <div className="culture-card-title">People at the centre</div>
          <div className="culture-card-detail">
            P&amp;G has always put its people at the heart of how it
            operates, and crucially, its employees know it.
          </div>
        </div>
        <div className="culture-card">
          <div className="culture-card-num">02</div>
          <div className="culture-card-title">Innovation from the ground up</div>
          <div className="culture-card-detail">
            The best ideas don&apos;t wait for a top-down mandate. The
            mindset is already there.
          </div>
        </div>
        <div className="culture-card">
          <div className="culture-card-num">03</div>
          <div className="culture-card-title">Accountability by design</div>
          <div className="culture-card-detail">
            Decisions are made by people who can own the outcome, not
            observers.
          </div>
        </div>
      </div>

      <div className="inline-stat" style={{ marginTop: '1.2rem' }}>
        The question was never <strong>whether</strong> P&amp;G&apos;s
        people could drive this.{' '}
        <strong>It was who, specifically, should own it.</strong>
      </div>
    </>
  );
}

function CoalitionStakeholder() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          Stakeholder analysis.
        </div>
        <div className="step-intro-tagline">
          Every function, every level, every external party, mapped by
          influence and interest.
        </div>
      </div>

      <div className="stakeholder-matrix">
        <div className="stakeholder-axis-y">High influence →</div>
        <div className="stakeholder-grid">
          <div className="stakeholder-cell stakeholder-cell-tl">
            <div className="stakeholder-cell-label">Keep satisfied</div>
            <div className="stakeholder-tag stakeholder-tag-blue">Retailers · Boots, Tesco</div>
            <div className="stakeholder-tag stakeholder-tag-blue">Regulators · ICO</div>
          </div>
          <div className="stakeholder-cell stakeholder-cell-tr">
            <div className="stakeholder-cell-label">Manage closely</div>
            <div className="stakeholder-tag stakeholder-tag-yellow">COO + CIO</div>
            <div className="stakeholder-tag stakeholder-tag-yellow">SBU Leadership</div>
            <div className="stakeholder-tag stakeholder-tag-yellow">CEIT</div>
          </div>
          <div className="stakeholder-cell stakeholder-cell-bl">
            <div className="stakeholder-cell-label">Monitor</div>
            <div className="stakeholder-tag stakeholder-tag-grey">Competitors</div>
            <div className="stakeholder-tag stakeholder-tag-grey">Media</div>
          </div>
          <div className="stakeholder-cell stakeholder-cell-br">
            <div className="stakeholder-cell-label">Keep informed</div>
            <div className="stakeholder-tag stakeholder-tag-cyan">Brand teams</div>
            <div className="stakeholder-tag stakeholder-tag-cyan">Support agents</div>
            <div className="stakeholder-tag stakeholder-tag-cyan">Consumers</div>
          </div>
        </div>
        <div className="stakeholder-axis-x">High interest →</div>
      </div>

      <div className="inline-stat" style={{ marginTop: '1rem' }}>
        The analysis told us exactly{' '}
        <strong>where authority needed to sit</strong> and{' '}
        <strong>which relationships to manage from day one.</strong>
      </div>
    </>
  );
}

const PYRAMID_TIERS = [
  {
    num: '01',
    label: 'Executive',
    title: 'COO + CIO',
    detail: 'Seth Cohen, the only mandate above all five SBUs.',
    citations: [
      { text: 'P&G, 2026', href: 'https://us.pg.com/leadership-team/seth-cohen/' },
    ],
  },
  {
    num: '02',
    label: 'Technical',
    title: 'CEIT & Digital Experiences',
    detail: 'Integrated with Consumer 360, Connected Experiences, Project Genie.',
    citations: [
      { text: 'P&G, 2024', href: 'https://us.pg.com/blogs/keys-to-successful-digital-transformation/' },
      { text: 'P&G, 2025', href: 'https://www.pgcareers.com/eu/en/ce-it-where-you-can-meet-us' },
    ],
  },
  {
    num: '03',
    label: 'Business',
    title: 'Five SBU Integration Leads',
    detail: 'Decision-makers, not observers, adapting Pam to each category.',
    citations: [
      { text: 'P&G, 2025' },
    ],
  },
  {
    num: '04',
    label: 'Operational',
    title: 'Global Business Services',
    detail:
      'Consumer contact and data governance, the exact layer where 30% of low-rating comments originated.',
    citations: [
      {
        text: 'Bloch and Lempres, 2008',
        href: 'https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/from-internal-service-provider-to-strategic-partner-an-interview-with-the-head-of-global-business-services-at-p-and-g',
      },
    ],
  },
  {
    num: '05',
    label: 'Implementation',
    title: 'Pam Core Team',
    detail:
      'Programme Manager, Consumer Intelligence Analysts, and Change Agents embedded across every SBU.',
  },
];

function CoalitionPyramid({ visibleCount = 5 }) {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          Five tiers. One owner of CX.
        </div>
        <div className="step-intro-tagline">
          Cross-functional, empowered, accountable. Zero external
          dependencies.
        </div>
      </div>

      <div className="coalition-pyramid">
        {PYRAMID_TIERS.slice(0, visibleCount).map((t, i) => (
          <div key={t.num} className={`pyramid-tier pyramid-tier-${i + 1}`}>
            <div className="pyramid-tier-num">{t.num}</div>
            <div className="pyramid-tier-content">
              <div className="pyramid-tier-label">{t.label}</div>
              <div className="pyramid-tier-title">{t.title}</div>
              <div className="pyramid-tier-detail-col">
                <div className="pyramid-tier-detail">{t.detail}</div>
                {t.citations && t.citations.length > 0 && (
                  <div className="pyramid-tier-citations">
                    {t.citations.map((c, ci) => (
                      <span key={c.text}>
                        {ci === 0 ? '(' : '; '}
                        {c.href ? (
                          <a
                            href={c.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="pyramid-tier-citation"
                          >
                            {c.text}
                          </a>
                        ) : (
                          <span className="pyramid-tier-citation">{c.text}</span>
                        )}
                        {ci === t.citations.length - 1 ? ')' : ''}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// =====================================================
// STEP 3 · VISION + IRON TRIANGLE
// =====================================================
function VisionContent({ variant }) {
  if (variant === 'triangle') return <VisionTriangle />;
  return <VisionGrowth />;
}

function VisionGrowth() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          The strategic vision Pam+ represents.
        </div>
        <div className="step-intro-tagline">
          Pam+ is the fullest expression of P&amp;G&apos;s Integrated
          Growth Strategy.
        </div>
      </div>

      <div className="vision-callout">
        <div className="vision-callout-headline">
          A world where{' '}
          <span className="highlight-yellow-bg">no P&amp;G consumer</span>{' '}
          is ever left without support.
        </div>
        <div className="vision-callout-sub">
          Where the moment of purchase is no longer a moment of confusion.
          Where every interaction builds trust.
        </div>
      </div>

      <div className="growth-flow">
        <div className="growth-pillar growth-pillar-blue">
          <span className="growth-pillar-step">01</span>
          <span className="growth-pillar-title">Brand<br />communication</span>
        </div>
        <div className="growth-flow-arrow" aria-hidden="true">
          <svg viewBox="0 0 64 40" preserveAspectRatio="xMidYMid meet">
            <path
              d="M 0,14 L 32,14 L 32,4 L 60,20 L 32,36 L 32,26 L 0,26 Z"
              fill="#dc2626"
            />
          </svg>
        </div>
        <div className="growth-pillar growth-pillar-cyan">
          <span className="growth-pillar-step">02</span>
          <span className="growth-pillar-title">Retail<br />execution</span>
        </div>
        <div className="growth-flow-arrow" aria-hidden="true">
          <svg viewBox="0 0 64 40" preserveAspectRatio="xMidYMid meet">
            <path
              d="M 0,14 L 32,14 L 32,4 L 60,20 L 32,36 L 32,26 L 0,26 Z"
              fill="#dc2626"
            />
          </svg>
        </div>
        <div className="growth-pillar growth-pillar-yellow">
          <span className="growth-pillar-step">03</span>
          <span className="growth-pillar-title">Consumer<br />value</span>
        </div>
      </div>

      <div className="inline-stat" style={{ marginTop: '1rem' }}>
        Pam is the experience layer that{' '}
        <strong>finally closes the gap </strong> between P&amp;G&apos;s
        investment and the consumer who is supposed to feel it.
      </div>
    </>
  );
}

const TRIANGLE_PHASES = ['budget', 'timeline', 'scope'];

const TRIANGLE_CONSTRAINTS = {
  budget: {
    label: 'Budget',
    value: '£1M',
    sub: 'Total project cost: £900K',
  },
  timeline: {
    label: 'Timeline',
    value: '36 mo',
    sub: 'Gated stage reviews',
  },
  scope: {
    label: 'Scope',
    value: 'Software',
    sub: 'No hardware build',
  },
};

// For each phase, which constraint key sits at top / bottom-left / bottom-right.
// Cyclic shift so the next phase brings the next constraint up to the top.
const TRIANGLE_ARRANGEMENT = [
  { top: 'budget',   left: 'timeline', right: 'scope'    },
  { top: 'timeline', left: 'scope',    right: 'budget'   },
  { top: 'scope',    left: 'budget',   right: 'timeline' },
];

function VisionTriangle({ variant }) {
  const phase = Math.max(0, TRIANGLE_PHASES.indexOf(variant));
  const arr = TRIANGLE_ARRANGEMENT[phase];
  const top = TRIANGLE_CONSTRAINTS[arr.top];
  const left = TRIANGLE_CONSTRAINTS[arr.left];
  const right = TRIANGLE_CONSTRAINTS[arr.right];

  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          Disciplined delivery.
        </div>
        <div className="step-intro-tagline">
          Fixed budget. Fixed timeline. Tight scope, protected by formal
          stage reviews.
        </div>
      </div>

      <div className="triangle-layout">
        <div className="triangle-visual">
          <svg viewBox="0 0 400 360" className="triangle-svg">
            <polygon
              points="200,30 30,330 370,330"
              fill="rgba(255, 220, 0, 0.08)"
              stroke="var(--blue)"
              strokeWidth="2.5"
            />
          </svg>

          <div className="triangle-vertex triangle-vertex-top is-active">
            <div className="triangle-vertex-label">{top.label}</div>
            <div className="triangle-vertex-value">{top.value}</div>
            <div className="triangle-vertex-sub">{top.sub}</div>
          </div>
          <div className="triangle-vertex triangle-vertex-left">
            <div className="triangle-vertex-label">{left.label}</div>
            <div className="triangle-vertex-value">{left.value}</div>
            <div className="triangle-vertex-sub">{left.sub}</div>
          </div>
          <div className="triangle-vertex triangle-vertex-right">
            <div className="triangle-vertex-label">{right.label}</div>
            <div className="triangle-vertex-value">{right.value}</div>
            <div className="triangle-vertex-sub">{right.sub}</div>
          </div>
        </div>

        <div className="triangle-side">
          <div className={`triangle-panel ${phase === 0 ? 'is-shown' : ''}`}>
            <BudgetBreakdownPanel />
          </div>
          <div className={`triangle-panel ${phase === 1 ? 'is-shown' : ''}`}>
            <ProjectedReturnPanel />
          </div>
          <div className={`triangle-panel ${phase === 2 ? 'is-shown' : ''}`}>
            <ScopeLockedPanel />
          </div>
        </div>
      </div>
    </>
  );
}

function BudgetBreakdownPanel() {
  const items = [
    { name: 'AI & AR development', sum: '£230,000' },
    { name: 'Platform integration', sum: '£135,000' },
    { name: 'Pilot & rollout operations', sum: '£120,000' },
    { name: 'Change management', sum: '£100,000' },
    { name: 'Research & discovery', sum: '£55,000' },
    { name: 'Project management', sum: '£45,000' },
    { name: 'Contingency reserve', sum: '£100,000' },
  ];
  return (
    <>
      <div className="triangle-roi-eyebrow">Budget breakdown</div>
      <ul className="budget-breakdown">
        {items.map((it) => (
          <li key={it.name} className="budget-row">
            <span className="budget-name">{it.name}</span>
            <span className="budget-sum">{it.sum}</span>
          </li>
        ))}
      </ul>
      <div className="triangle-roi-headline">
        <div className="triangle-roi-amount">£1.0M</div>
        <div className="triangle-roi-meta">Total · 10% contingency</div>
      </div>
    </>
  );
}

function ProjectedReturnPanel() {
  return (
    <>
      <div className="triangle-roi-eyebrow">Projected return</div>
      <div className="triangle-roi-list">
        <div className="triangle-roi-row">
          <div className="triangle-roi-pct">+33%</div>
          <div className="triangle-roi-label">
            Conversion uplift
            <span className="triangle-roi-source"> (Sculpt, 2025)</span>
          </div>
        </div>
        <div className="triangle-roi-row">
          <div className="triangle-roi-pct">–50%</div>
          <div className="triangle-roi-label">
            Complaint-handling cost
            <span className="triangle-roi-source"> (McKinsey, 2014)</span>
          </div>
        </div>
        <div className="triangle-roi-row">
          <div className="triangle-roi-pct">–25%</div>
          <div className="triangle-roi-label">
            Product returns
            <span className="triangle-roi-source"> (Celestin et al., 2024)</span>
          </div>
        </div>
      </div>
      <div className="triangle-roi-headline">
        <div className="triangle-roi-amount">£18.2M</div>
        <div className="triangle-roi-meta">3-year revenue uplift</div>
      </div>
      <div className="triangle-roi-multiplier">
        <span className="highlight-yellow-bg">18× return</span> on a £1M investment.
      </div>
    </>
  );
}

function ScopeLockedPanel() {
  return (
    <>
      <div className="triangle-roi-eyebrow">Scope locked</div>
      <ul className="scope-list">
        <li className="scope-list-item">
          <div className="scope-list-label">Deliverables</div>
          <div className="scope-list-text">
            AI/AR software platform, covering the full consumer journey.
          </div>
        </li>
        <li className="scope-list-item">
          <div className="scope-list-label">Boundaries</div>
          <div className="scope-list-text">
            Software only. No hardware, no device procurement.
          </div>
        </li>
        <li className="scope-list-item">
          <div className="scope-list-label">Requirements</div>
          <div className="scope-list-text">
            AR product recognition, guided usage support, community
            integration, systems integration.
          </div>
        </li>
      </ul>
    </>
  );
}

// =====================================================
// STEP 4 · ENLIST (ADKAR)
// =====================================================
function EnlistContent() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          Bottom-up. One person at a time.
        </div>
        <div className="step-intro-tagline">
          Where Kotter tells us what the organisation does, ADKAR tells
          us how each individual gets there.
        </div>
      </div>

      <div className="adkar-detail-row adkar-zoom-in">
        <div className="adkar-detail-card adkar-tone-red">
          <div className="adkar-detail-stage">Stage 01</div>
          <div className="adkar-detail-letter">A</div>
          <div className="adkar-detail-title">Awareness</div>
          <div className="adkar-detail-body">
            Every affected employee understands{' '}
            <strong>why Pam is happening</strong>,grounded in real
            data, not corporate messaging.
          </div>
          <ul className="adkar-detail-list">
            <li>Internal comms tied to the 80K complaint dataset</li>
            <li>The CX gap made visible to every team</li>
            <li>Led by SBU Change Agents, not top-down mandates</li>
          </ul>
        </div>

        <div className="adkar-arrow">→</div>

        <div className="adkar-detail-card adkar-tone-pink">
          <div className="adkar-detail-stage">Stage 02</div>
          <div className="adkar-detail-letter">D</div>
          <div className="adkar-detail-title">Desire</div>
          <div className="adkar-detail-body">
            Employees need a personal reason to{' '}
            <strong>want Pam to succeed.</strong>
          </div>
          <ul className="adkar-detail-list">
            <li>Brand teams: real-time consumer feedback they&apos;ve never had</li>
            <li>Support teams: fewer frustrated customers, faster resolution</li>
            <li>Everyone: P&amp;G finally delivering the promise it already makes</li>
          </ul>
        </div>

        <div className="adkar-arrow">→</div>

        <div className="adkar-detail-card adkar-tone-green">
          <div className="adkar-detail-stage">Stage 03</div>
          <div className="adkar-detail-letter">K</div>
          <div className="adkar-detail-title">Knowledge</div>
          <div className="adkar-detail-body">
            Desire without capability stalls. Employees need to know{' '}
            <strong>exactly how to work with Pam.</strong>
          </div>
          <ul className="adkar-detail-list">
            <li>New workflow training per role and SBU</li>
            <li>Consumer 360 dashboard interpretation</li>
            <li>Escalation paths and support protocols</li>
          </ul>
        </div>

        <div className="adkar-arrow">→</div>

        <div className="adkar-detail-card adkar-tone-purple">
          <div className="adkar-detail-stage">Stage 04</div>
          <div className="adkar-detail-letter">A</div>
          <div className="adkar-detail-title">Ability</div>
          <div className="adkar-detail-body">
            Knowledge without practice doesn&apos;t stick.{' '}
            <strong>Hands-on capability</strong> before Pam goes live.
          </div>
          <ul className="adkar-detail-list">
            <li>Pilot simulations and AR coaching sessions</li>
            <li>SBU Change Agents run guided walkthroughs</li>
            <li>Role and team specific practice before Phase 1 rollout</li>
          </ul>
        </div>

        <div className="adkar-arrow">→</div>

        <div className="adkar-detail-card adkar-tone-amber">
          <div className="adkar-detail-stage">Stage 05</div>
          <div className="adkar-detail-letter">R</div>
          <div className="adkar-detail-title">Reinforcement</div>
          <div className="adkar-detail-body">
            The most overlooked stage.{' '}
            <strong>Change doesn&apos;t hold without it.</strong> Make
            going back feel harder than moving forward.
          </div>
          <ul className="adkar-detail-list">
            <li>KPI dashboards showing Pam&apos;s live impact</li>
            <li>Recognition programmes for early champions</li>
            <li>Ongoing support structures beyond launch</li>
          </ul>
        </div>
      </div>
    </>
  );
}

// =====================================================
// STEP 5 · ENABLE (Risk register)
// =====================================================
function EnableContent({ variant }) {
  if (variant === 'fragment') return <EnableFragment />;
  if (variant === 'matrix') return <EnableMatrix />;
  return <EnableSources />;
}

function EnableSources() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          A systematic risk identification process.
        </div>
        <div className="step-intro-tagline">
          Five sources. Nine risks. Six categories. Every one scored by
          likelihood × consequence.
        </div>
      </div>

      <div className="risk-sources-grid">
        <div className="risk-source-card">
          <div className="risk-source-num">01</div>
          <div className="risk-source-name">McKinsey 7-S analysis</div>
          <div className="risk-source-detail">
            Structural risks rooted in strategy, systems, and structure
            misalignment.
          </div>
        </div>
        <div className="risk-source-card">
          <div className="risk-source-num">02</div>
          <div className="risk-source-name">Work Breakdown Structure</div>
          <div className="risk-source-detail">
            Phase-level risks across all 36 months of delivery.
          </div>
        </div>
        <div className="risk-source-card">
          <div className="risk-source-num">03</div>
          <div className="risk-source-name">Network diagram · critical path</div>
          <div className="risk-source-detail">
            Dependencies whose delay would slip the entire programme.
          </div>
        </div>
        <div className="risk-source-card">
          <div className="risk-source-num">04</div>
          <div className="risk-source-name">Stakeholder analysis</div>
          <div className="risk-source-detail">
            Adoption and political risks across every function and
            external party.
          </div>
        </div>
        <div className="risk-source-card">
          <div className="risk-source-num">05</div>
          <div className="risk-source-name">GDPR &amp; legal scan</div>
          <div className="risk-source-detail">
            Data, consent, and compliance risks, including ICO
            consultation.
          </div>
        </div>
      </div>

      <div className="risk-summary-row">
        <div className="risk-summary-stat">
          <div className="risk-summary-num">9</div>
          <div className="risk-summary-label">Risks identified</div>
        </div>
        <div className="risk-summary-stat">
          <div className="risk-summary-num">6</div>
          <div className="risk-summary-label">Categories</div>
        </div>
        <div className="risk-summary-stat">
          <div className="risk-summary-num">5</div>
          <div className="risk-summary-label">Source frameworks</div>
        </div>
        <div className="risk-summary-stat">
          <div className="risk-summary-num">14d</div>
          <div className="risk-summary-label">PMO review cadence</div>
        </div>
      </div>
    </>
  );
}

function EnableMatrix() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          9 risks. All accounted for.
        </div>
        <div className="step-intro-tagline">
          Structural. Regulatory. Human. Scored, plotted, and shaped
          into the plan.
        </div>
      </div>

      <div className="risk-layout">
        <div className="risk-matrix-block">
          <div className="risk-matrix-title">Risk assessment matrix</div>
          <div className="risk-grid">
            <div className="risk-corner" />
            <div className="risk-x-label">1 Rare</div>
            <div className="risk-x-label">2 Unlikely</div>
            <div className="risk-x-label">3 Possible</div>
            <div className="risk-x-label">4 Likely</div>
            <div className="risk-x-label">5 Certain</div>

            <div className="risk-y-label"><span>5</span> Catastrophic</div>
            <div className="risk-cell risk-mod"><span className="risk-cell-num">5</span><span className="risk-cell-tier">Moderate</span></div>
            <div className="risk-cell risk-hi"><span className="risk-cell-num">10</span><span className="risk-cell-tier">High</span></div>
            <div className="risk-cell risk-ext">
              <span className="risk-cell-num">15</span><span className="risk-cell-tier">Extreme</span>
              <span className="risk-marker risk-marker-pink" style={{ top: '14%', left: '20%' }}>R02</span>
              <span className="risk-marker risk-marker-purple" style={{ top: '14%', right: '14%' }}>R01</span>
            </div>
            <div className="risk-cell risk-ext"><span className="risk-cell-num">20</span><span className="risk-cell-tier">Extreme</span></div>
            <div className="risk-cell risk-ext"><span className="risk-cell-num">25</span><span className="risk-cell-tier">Extreme</span></div>

            <div className="risk-y-label"><span>4</span> Major</div>
            <div className="risk-cell risk-mod"><span className="risk-cell-num">4</span><span className="risk-cell-tier">Moderate</span></div>
            <div className="risk-cell risk-hi">
              <span className="risk-cell-num">8</span><span className="risk-cell-tier">High</span>
              <span className="risk-marker risk-marker-orange" style={{ bottom: '14%', right: '14%' }}>R07</span>
            </div>
            <div className="risk-cell risk-hi">
              <span className="risk-cell-num">12</span><span className="risk-cell-tier">High</span>
              <span className="risk-marker risk-marker-cyan" style={{ top: '20%', right: '18%' }}>R05</span>
            </div>
            <div className="risk-cell risk-ext">
              <span className="risk-cell-num">16</span><span className="risk-cell-tier">Extreme</span>
              <span className="risk-marker risk-marker-pink" style={{ top: '50%', left: '14%', transform: 'translateY(-50%)' }}>R03</span>
            </div>
            <div className="risk-cell risk-ext"><span className="risk-cell-num">20</span><span className="risk-cell-tier">Extreme</span></div>

            <div className="risk-y-label"><span>3</span> Moderate</div>
            <div className="risk-cell risk-low"><span className="risk-cell-num">3</span><span className="risk-cell-tier">Low</span></div>
            <div className="risk-cell risk-mod">
              <span className="risk-cell-num">6</span><span className="risk-cell-tier">Moderate</span>
              <span className="risk-marker risk-marker-cyan" style={{ bottom: '14%', left: '50%', transform: 'translateX(-50%)' }}>R09</span>
            </div>
            <div className="risk-cell risk-hi">
              <span className="risk-cell-num">9</span><span className="risk-cell-tier">High</span>
              <span className="risk-marker risk-marker-orange" style={{ bottom: '14%', left: '14%' }}>R06</span>
              <span className="risk-marker risk-marker-green" style={{ top: '14%', right: '14%' }}>R08</span>
            </div>
            <div className="risk-cell risk-hi">
              <span className="risk-cell-num">12</span><span className="risk-cell-tier">High</span>
              <span className="risk-marker risk-marker-pink" style={{ bottom: '14%', right: '14%' }}>R04</span>
            </div>
            <div className="risk-cell risk-ext"><span className="risk-cell-num">15</span><span className="risk-cell-tier">Extreme</span></div>

            <div className="risk-y-label"><span>2</span> Minor</div>
            <div className="risk-cell risk-low"><span className="risk-cell-num">2</span><span className="risk-cell-tier">Low</span></div>
            <div className="risk-cell risk-low"><span className="risk-cell-num">2</span><span className="risk-cell-tier">Low</span></div>
            <div className="risk-cell risk-mod"><span className="risk-cell-num">6</span><span className="risk-cell-tier">Moderate</span></div>
            <div className="risk-cell risk-hi"><span className="risk-cell-num">8</span><span className="risk-cell-tier">High</span></div>
            <div className="risk-cell risk-hi"><span className="risk-cell-num">10</span><span className="risk-cell-tier">High</span></div>

            <div className="risk-y-label"><span>1</span> Negligible</div>
            <div className="risk-cell risk-low"><span className="risk-cell-num">1</span><span className="risk-cell-tier">Low</span></div>
            <div className="risk-cell risk-low"><span className="risk-cell-num">2</span><span className="risk-cell-tier">Low</span></div>
            <div className="risk-cell risk-low"><span className="risk-cell-num">3</span><span className="risk-cell-tier">Low</span></div>
            <div className="risk-cell risk-mod"><span className="risk-cell-num">4</span><span className="risk-cell-tier">Moderate</span></div>
            <div className="risk-cell risk-mod"><span className="risk-cell-num">5</span><span className="risk-cell-tier">Moderate</span></div>
          </div>
          <div className="risk-axis-x">← Likelihood</div>
          <div className="risk-axis-y">← Consequences</div>
        </div>

        <div className="risk-list-block">
          <div className="risk-matrix-title">Priority risks &amp; response</div>
          <ul className="risk-list">
            <li><span className="risk-tag risk-tag-purple">R01</span><div><strong>AI Recommendation Error</strong>,Extreme. Mitigate via human-override layer and phased rollout starting with low-sensitivity categories.</div></li>
            <li><span className="risk-tag risk-tag-pink">R02</span><div><strong>GDPR Non-Compliance</strong>,Extreme. Avoided via DPIA, ICO consultation, and opt-in design baked into Month 2-4.</div></li>
            <li><span className="risk-tag risk-tag-pink">R03</span><div><strong>Fragmented SBU Adoption</strong>,Extreme. Structurally addressed by the coalition design in Step 2.</div></li>
            <li><span className="risk-tag risk-tag-pink">R04</span><div><strong>Critical Path Delay</strong>,High. Limited via phase gates and bi-weekly risk reviews.</div></li>
            <li><span className="risk-tag risk-tag-cyan">R05</span><div><strong>Consumer Adoption Resistance</strong>,High. Mitigated by smartphone fallback and beta testing before go-live.</div></li>
            <li><span className="risk-tag risk-tag-orange">R06</span><div><strong>Budget Overrun</strong>,High. Controlled by EVM tracking and strict scope gates between phases.</div></li>
            <li><span className="risk-tag risk-tag-orange">R07</span><div><strong>Retailer Resistance</strong>,High. Mitigated by joint business planning and revenue share from Month 3.</div></li>
            <li><span className="risk-tag risk-tag-green">R08</span><div><strong>Staff Digital Fluency Gap</strong>,High. Addressed by ADKAR plan and SBU-embedded Change Agents.</div></li>
            <li><span className="risk-tag risk-tag-cyan">R09</span><div><strong>Competitor Replication</strong>,Moderate. Accepted. Pam&apos;s moat is proprietary AI and network effects.</div></li>
          </ul>
        </div>
      </div>

      <div className="inline-stat" style={{ marginTop: '1.2rem' }}>
        The risks didn&apos;t follow the plan.{' '}
        <strong>The plan was built around the risks.</strong>
      </div>
    </>
  );
}

function EnableFragment() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          Fragmented SBU adoption.
        </div>
        <div className="step-intro-tagline">
          P&amp;G&apos;s decentralised structure could mean Pam is
          adopted five different ways, or ignored entirely.
        </div>
      </div>

      <div className="fragment-flow">
        <div className="fragment-source">
          <div className="fragment-source-tag">R03 · Extreme</div>
          <div className="fragment-source-title">Fragmented SBU Adoption</div>
          <div className="fragment-source-detail">
            Five SBUs. Five interpretations. Without a structural
            response, the transformation splinters before it scales.
          </div>
        </div>

        <div className="fragment-arrow">
          <span>shaped</span>
          <svg viewBox="0 0 80 24" fill="none">
            <path
              d="M2 12 L74 12 M62 4 L74 12 L62 20"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="fragment-targets">
          <div className="fragment-target">
            <div className="fragment-target-title">Coalition design</div>
            <div className="fragment-target-detail">
              The five-tier pyramid, and the dedicated SBU Integration
              Lead in every business unit, exists because of this risk.
            </div>
          </div>
          <div className="fragment-target">
            <div className="fragment-target-title">ADKAR adoption plan</div>
            <div className="fragment-target-detail">
              Bottom-up enlistment, role-specific knowledge, and
              SBU-embedded Change Agents counter divergent adoption.
            </div>
          </div>
        </div>
      </div>

      <div className="inline-stat" style={{ marginTop: '1.2rem' }}>
        The risk didn&apos;t go on a register.{' '}
        <strong>It told us how to design the plan.</strong> We shaped
        the entire project to account for every risk we could find.
      </div>
    </>
  );
}

// =====================================================
// STEP 6 · WINS TIMELINE
// =====================================================
function WinsContent({ variant }) {
  if (variant === 'wbs') return <WinsWbs />;
  if (variant === 'network') return <WinsNetwork />;
  if (variant === 'gantt') return <WinsGantt />;
  if (variant === 'momentum') return <WinsMomentum />;
  const m = variant && variant.match(/^wins-(\d+)$/);
  const visibleCount = m ? Math.min(parseInt(m[1], 10), 5) : 5;
  return <WinsList visibleCount={visibleCount} />;
}

function WinsMomentum() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          Winning early. Winning visibly.
        </div>
        <div className="step-intro-tagline">
          The single force that keeps a transformation alive at rollout.
        </div>
      </div>

      <div className="momentum-callout">
        <div className="momentum-quote">
          What actually keeps a transformation this size{' '}
          <span className="highlight-yellow-bg">alive, funded, and moving</span>{' '}
          (especially at rollout) is <strong>momentum</strong>.
        </div>
        <div className="momentum-quote-sub">
          And momentum in change management comes from one thing and one
          thing only: <strong>winning early, and winning visibly.</strong>
        </div>
      </div>

      <div className="momentum-pillars">
        <div className="momentum-pillar">
          <div className="momentum-pillar-num">01</div>
          <div className="momentum-pillar-title">Alive</div>
          <div className="momentum-pillar-detail">
            Stakeholders stay engaged when proof arrives in months, not
            years.
          </div>
        </div>
        <div className="momentum-pillar">
          <div className="momentum-pillar-num">02</div>
          <div className="momentum-pillar-title">Funded</div>
          <div className="momentum-pillar-detail">
            Boards renew budget on evidence, not promises. Wins
            unlock the next tranche.
          </div>
        </div>
        <div className="momentum-pillar">
          <div className="momentum-pillar-num">03</div>
          <div className="momentum-pillar-title">Moving</div>
          <div className="momentum-pillar-detail">
            Visible progress pulls sceptics in. Each gate proven makes
            the next one easier to clear.
          </div>
        </div>
      </div>
    </>
  );
}

const WBS_PACKAGES = [
  { num: '2.0', name: 'Project Management', months: '36 mo', owner: 'PMO Lead', fte: '3 FTE', tone: 'green' },
  { num: '3.0', name: 'Research & Discovery', months: 'M 1–4', owner: 'Insights Lead', fte: '4 FTE', tone: 'red' },
  { num: '4.0', name: 'Product Development', months: 'M 3–18', owner: 'CTO / Tech Lead', fte: '18 FTE', tone: 'blue' },
  { num: '5.0', name: 'UX Design & Testing', months: 'M 2–16', owner: 'UX Director', fte: '5 FTE', tone: 'purple' },
  { num: '6.0', name: 'Retailer Integration', months: 'M 3–18', owner: 'Partnerships Dir.', fte: '4 FTE + vendors', tone: 'pink' },
  { num: '7.0', name: 'Change Management', months: 'M 1–24', owner: 'Change Lead', fte: '3 FTE', tone: 'teal' },
  { num: '8.0', name: 'Pilot Launch', months: 'M 12–18', owner: 'Programme Dir.', fte: '6 FTE', tone: 'amber' },
  { num: '9.0', name: 'Full Rollout', months: 'M 19–36', owner: 'CEO / C-Suite', fte: '12 FTE + agency', tone: 'red' },
];

function WinsWbs() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          Work Breakdown Structure.
        </div>
        <div className="step-intro-tagline">
          Pam&apos;s delivery decomposed into eight work packages, each
          owned, scoped, and resourced.
        </div>
      </div>

      <div className="wbs-root">
        1.0 · Project Pam · P&amp;G AI-AR Shopping Assistant · 36 months
      </div>

      <div className="wbs-grid">
        {WBS_PACKAGES.map((p) => (
          <div key={p.num} className={`wbs-card wbs-tone-${p.tone}`}>
            <div className="wbs-card-num">{p.num}</div>
            <div className="wbs-card-name">{p.name}</div>
            <div className="wbs-card-meta">
              <div><span className="wbs-card-key">Duration</span><span>{p.months}</span></div>
              <div><span className="wbs-card-key">Owner</span><span>{p.owner}</span></div>
              <div><span className="wbs-card-key">Team</span><span>{p.fte}</span></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function WinsNetwork() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          Every dependency mapped.
        </div>
        <div className="step-intro-tagline">
          18 activities. Ten on the critical path. Zero float on the
          chain that decides the timeline.
        </div>
      </div>

      <div className="network-image-wrap">
        <img
          src="/Network_Diagram.png"
          alt="CPM network diagram showing all 18 activities, dependencies, ES/EF/LS/LF, float, and the critical path in red."
          className="network-image"
        />
      </div>

      <div className="inline-stat" style={{ marginTop: '1rem' }}>
        Slip any activity on the red chain, and the launch slips.{' '}
        <strong>That is exactly why we monitor them weekly.</strong>
      </div>
    </>
  );
}

function WinsGantt() {
  const phases = [
    { name: 'Research & Discovery', tone: 'red',    start: 0,  end: 12 },
    { name: 'UX Design & Testing',  tone: 'purple', start: 6,  end: 50 },
    { name: 'Product Development',  tone: 'blue',   start: 12, end: 60 },
    { name: 'Retailer Integration', tone: 'pink',   start: 12, end: 60 },
    { name: 'Change Management',    tone: 'teal',   start: 0,  end: 75 },
    { name: 'Pilot Launch',         tone: 'amber',  start: 38, end: 60 },
    { name: 'Full Rollout',         tone: 'green',  start: 60, end: 100 },
  ];

  const gates = [
    { pos: 6,  label: 'G1 · Wk 7',  title: 'Programme live' },
    { pos: 16, label: 'G2 · M 5',   title: 'Market signals' },
    { pos: 24, label: 'G3 · M 8',   title: 'Product live' },
    { pos: 38, label: 'G4 · M 13',  title: 'UX validated' },
    { pos: 53, label: 'G5 · M 18',  title: 'Go / No-Go' },
  ];

  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          Wins are milestones. Milestones are gates.
        </div>
        <div className="step-intro-tagline">
          Every short-term win is a formally documented project
          milestone, sequenced, tracked, gated.
        </div>
      </div>

      <div className="gantt-block">
        <div className="gantt-axis">
          <span>Month 0</span>
          <span>Month 9</span>
          <span>Month 18</span>
          <span>Month 27</span>
          <span>Month 36</span>
        </div>

        <div className="gantt-rows">
          {phases.map((p) => (
            <div key={p.name} className="gantt-row">
              <div className="gantt-row-label">{p.name}</div>
              <div className="gantt-row-track">
                <div
                  className={`gantt-bar gantt-tone-${p.tone}`}
                  style={{ left: `${p.start}%`, width: `${p.end - p.start}%` }}
                />
                {gates.map((g) => (
                  <div
                    key={g.label}
                    className="gantt-gate-line"
                    style={{ left: `${g.pos}%` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="gantt-gates">
          {gates.map((g) => (
            <div
              key={g.label}
              className="gantt-gate-marker"
              style={{ left: `${g.pos}%` }}
            >
              <div className="gantt-gate-dot" />
              <div className="gantt-gate-label">{g.label}</div>
              <div className="gantt-gate-title">{g.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const WIN_CARDS = [
  {
    when: 'Week 7 · Gate 1',
    title: 'Pam becomes a programme',
    detail:
      'Research complete. Scope locked. Governance live. Board signs off the build budget. Proof the coalition works.',
  },
  {
    when: 'Month 5 · Gate 2',
    title: 'The market says yes',
    detail:
      'MOUs signed. Five pilot stores selected. Retailers at the table. Real-world commercial support secured.',
  },
  {
    when: 'Month 8 · Gate 3',
    title: 'The product works',
    detail:
      'AR platform built. 500+ P&G SKUs live. A shopper holds up a Gillette. Pam knows exactly what it is.',
  },
  {
    when: 'Month 13 · Gate 4',
    title: 'Real consumers say it works',
    detail:
      '50 shoppers. Real stores. Think-aloud testing. SUS score ≥ 75. Not just impressive, genuinely easy to use.',
  },
  {
    when: 'Month 18 · Go / No-Go',
    title: 'The numbers say it works',
    lines: [
      '+33% conversion',
      '–50% complaint cost',
      '–25% returns',
      '+15 NPS',
    ],
  },
];

function WinsList({ visibleCount = 5 }) {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          Five gated proofs. Before we scale.
        </div>
        <div className="step-intro-tagline">
          We don&apos;t scale a problem. We scale proof.
        </div>
      </div>

      <div className="wins-horizontal">
        {WIN_CARDS.map((w, i) => (
          <div
            key={w.when}
            className={`win-card ${i < visibleCount ? 'win-card-visible' : 'win-card-hidden'}`}
          >
            <div className="win-when">{w.when}</div>
            <div className="win-title">{w.title}</div>
            {w.lines ? (
              <ul className="win-detail-list">
                {w.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            ) : (
              <div className="win-detail">{w.detail}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

// =====================================================
// STEP 7 · SUSTAIN ACCELERATION
// =====================================================
function SustainContent({ variant }) {
  if (variant === 'feedback') return <SustainFeedback />;
  return <SustainScale />;
}

function SustainScale() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          More than CX. An organisation tool.
        </div>
        <div className="step-intro-tagline">
          Pam stops being a tool. Becomes a data source.
        </div>
      </div>

      <div className="living-inputs">
        <div className="living-input living-input-1">
          <span className="living-input-tag">Every</span>
          <span className="living-input-key">product picked up</span>
        </div>
        <div className="living-input living-input-2">
          <span className="living-input-tag">Every</span>
          <span className="living-input-key">comparison</span>
        </div>
        <div className="living-input living-input-3">
          <span className="living-input-tag">Every</span>
          <span className="living-input-key">purchase</span>
        </div>
        <div className="living-input living-input-4">
          <span className="living-input-tag">Every</span>
          <span className="living-input-key">question</span>
        </div>
      </div>

      <div className="living-arrow">↓</div>

      <div className="living-loop">
        <div className="living-loop-item living-loop-1">Model retrains</div>
        <div className="living-loop-sep">·</div>
        <div className="living-loop-item living-loop-2">Recommendations sharpen</div>
        <div className="living-loop-sep">·</div>
        <div className="living-loop-item living-loop-3">Shelf visibility, in real time</div>
      </div>

      <div className="living-headline">
        Pam becomes a{' '}
        <span className="highlight-yellow-bg">living system</span>,
        compounding value and information over time.
      </div>
    </>
  );
}

function SustainFeedback() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          The network effect is the moat.
        </div>
        <div className="step-intro-tagline">
          Defensibility no competitor can buy.
        </div>
      </div>

      <div className="moat-stack">
        <div className="moat-line moat-line-1">
          <span className="moat-key">Each interaction</span>
          <span className="moat-arrow">→</span>
          <span className="moat-result">
            the next one is <strong>better</strong>
          </span>
        </div>
        <div className="moat-line moat-line-2">
          <span className="moat-key">Each market</span>
          <span className="moat-arrow">→</span>
          <span className="moat-result">
            the next one is <strong>faster</strong>
          </span>
        </div>
        <div className="moat-line moat-line-3">
          <span className="moat-key">Each brand</span>
          <span className="moat-arrow">→</span>
          <span className="moat-result">
            every other brand becomes <strong>more valuable</strong>
          </span>
        </div>
      </div>

      <div className="moat-finale">
        By <strong>Month 36</strong>, the flywheel isn&apos;t a metaphor.
        <br />
        <span className="highlight-yellow-bg moat-finale-spin">
          It&apos;s spinning.
        </span>
      </div>
    </>
  );
}

// =====================================================
// STEP 8 · INSTITUTE CHANGE
// =====================================================
const VALUE_CARDS = [
  {
    name: 'Integrity',
    text: 'In every recommendation, backed by data, never a sales pitch.',
  },
  {
    name: 'Leadership',
    text: 'In every market it enters, first-mover at the shelf, not the spec sheet.',
  },
  {
    name: 'Ownership',
    text: 'Across every team it touches, five SBUs, one experience.',
  },
  {
    name: 'Trust',
    text: 'Earned at every single consumer interaction, never assumed.',
  },
  {
    name: 'Passion for winning',
    text: 'At the shelf. In the data. In the experience.',
  },
];

function InstituteContent({ variant }) {
  const m = variant && variant.match(/^values-(\d+)$/);
  const visibleCount = m ? Math.min(parseInt(m[1], 10), 5) : 5;

  return (
    <>
      <div className="step-intro">
        <div className="step-intro-heading">
          Month 36. Pam+ is how P&amp;G works.
        </div>
        <div className="step-intro-tagline">
          No longer a programme. Embedded in consumer support, brand
          execution, and the data loop.
        </div>
      </div>

      <div className="institute-banner">
        <div className="institute-banner-pg">P&amp;G</div>
        <div className="institute-banner-link">
          <span className="institute-banner-link-text">becomes inseparable from</span>
          <svg viewBox="0 0 100 14" className="institute-banner-link-svg">
            <path d="M2 7 H94 M82 1 L94 7 L82 13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="institute-banner-pam">Pam+</div>
      </div>

      <div className="values-link-grid">
        {VALUE_CARDS.map((v, i) => (
          <div
            key={v.name}
            className={`value-link-card value-link-tone-${i + 1} ${i < visibleCount ? 'value-link-visible' : 'value-link-hidden'}`}
          >
            <div className="value-link-pg">
              <div className="value-link-eyebrow">P&amp;G value</div>
              <div className="value-link-name">{v.name}</div>
            </div>
            <div className="value-link-divider">expressed as</div>
            <div className="value-link-pam">
              <div className="value-link-pam-eyebrow">Pam delivers it</div>
              <div className="value-link-pam-text">{v.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={`institute-close ${visibleCount >= 5 ? 'institute-close-visible' : 'institute-close-hidden'}`}>
        Not a system that was adopted.{' '}
        <strong>A system that became inseparable from the company that built it.</strong>
      </div>
    </>
  );
}
