'use client';

/**
 * KotterContent renders the content panel for an active Kotter step.
 * All 8 step panels live in this file — scroll to find the one you
 * want to edit. They're labelled with clear section comments.
 */
export default function KotterContent({ activeStep, activeVariant }) {
  const className = activeStep !== null && activeStep > 0
    ? 'kotter-content active'
    : 'kotter-content';

  return (
    <div className={className}>
      {activeStep === 1 && <UrgencyContent />}
      {activeStep === 2 && <CoalitionContent variant={activeVariant} />}
      {activeStep === 3 && <VisionContent variant={activeVariant} />}
      {activeStep === 4 && <EnlistContent />}
      {activeStep === 5 && <EnableContent variant={activeVariant} />}
      {activeStep === 6 && <WinsContent variant={activeVariant} />}
      {activeStep === 7 && <SustainContent variant={activeVariant} />}
      {activeStep === 8 && <InstituteContent />}
    </div>
  );
}

// =====================================================
// STEP 1 · URGENCY
// =====================================================
function UrgencyContent() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-number">Step 01 · Urgency</div>
        <div className="step-intro-heading">
          The gap inside P&amp;G.
        </div>
        <div className="step-intro-tagline">
          McKinsey 7-S reveals where the experience breaks — and why
          it keeps breaking.
        </div>
      </div>

      <div className="pg-scale-strip">
        <div className="pg-scale-stat">
          <div className="pg-scale-value">$84.3B</div>
          <div className="pg-scale-label">Annual revenue</div>
        </div>
        <div className="pg-scale-stat">
          <div className="pg-scale-value">140+</div>
          <div className="pg-scale-label">Brands</div>
        </div>
        <div className="pg-scale-stat">
          <div className="pg-scale-value">180+</div>
          <div className="pg-scale-label">Countries</div>
        </div>
      </div>

      <div className="step-body step-body-cols-3">
        <div className="step-card step-card-flagged">
          <div className="step-card-icon step-card-icon-red">S</div>
          <div className="step-card-content">
            <h5>Strategy</h5>
            <p>
              Integrated Growth Strategy demands superiority in retail
              execution and consumer value. Across 80,000 comments, it
              goes silent at the moment that matters most.
            </p>
          </div>
        </div>
        <div className="step-card step-card-flagged">
          <div className="step-card-icon step-card-icon-red">S</div>
          <div className="step-card-content">
            <h5>Systems</h5>
            <p>
              World-class supply chain, optimised inward. 30% of low-rating
              comments come from post-purchase failures.
            </p>
          </div>
        </div>
        <div className="step-card step-card-flagged">
          <div className="step-card-icon step-card-icon-red">S</div>
          <div className="step-card-content">
            <h5>Structure</h5>
            <p>
              Built to serve categories, not customer journeys. No single
              owner of end-to-end experience.
            </p>
          </div>
        </div>
      </div>

      <div className="inline-stat" style={{ marginTop: '1rem' }}>
        <strong>80,000 customer comments.</strong> Different products.
        Same pain points.
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
  return <CoalitionPyramid />;
}

function CoalitionCulture() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-number">Step 02 · Coalition</div>
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
            operates — and crucially, its employees know it.
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
            Decisions are made by people who can own the outcome — not
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
        <div className="step-intro-number">Step 02 · Coalition</div>
        <div className="step-intro-heading">
          Stakeholder analysis.
        </div>
        <div className="step-intro-tagline">
          Every function, every level, every external party — mapped by
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

function CoalitionPyramid() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-number">Step 02 · Coalition</div>
        <div className="step-intro-heading">
          Five tiers. One owner of CX.
        </div>
        <div className="step-intro-tagline">
          Cross-functional, empowered, accountable. Zero external
          dependencies.
        </div>
      </div>

      <div className="coalition-pyramid">
        <div className="pyramid-tier pyramid-tier-1">
          <div className="pyramid-tier-num">01</div>
          <div className="pyramid-tier-content">
            <div className="pyramid-tier-label">Executive</div>
            <div className="pyramid-tier-title">COO + CIO</div>
            <div className="pyramid-tier-detail">
              Seth Cohen — the only mandate above all five SBUs.
            </div>
          </div>
        </div>
        <div className="pyramid-tier pyramid-tier-2">
          <div className="pyramid-tier-num">02</div>
          <div className="pyramid-tier-content">
            <div className="pyramid-tier-label">Technical</div>
            <div className="pyramid-tier-title">CEIT &amp; Digital Experiences</div>
            <div className="pyramid-tier-detail">
              Integrated with Consumer 360, Connected Experiences, Project Genie.
            </div>
          </div>
        </div>
        <div className="pyramid-tier pyramid-tier-3">
          <div className="pyramid-tier-num">03</div>
          <div className="pyramid-tier-content">
            <div className="pyramid-tier-label">Business</div>
            <div className="pyramid-tier-title">Five SBU Integration Leads</div>
            <div className="pyramid-tier-detail">
              Decision-makers, not observers — adapting Pam to each category.
            </div>
          </div>
        </div>
        <div className="pyramid-tier pyramid-tier-4">
          <div className="pyramid-tier-num">04</div>
          <div className="pyramid-tier-content">
            <div className="pyramid-tier-label">Operational</div>
            <div className="pyramid-tier-title">Global Business Services</div>
            <div className="pyramid-tier-detail">
              Consumer contact and data governance — the exact layer where 30%
              of low-rating comments originated.
            </div>
          </div>
        </div>
        <div className="pyramid-tier pyramid-tier-5">
          <div className="pyramid-tier-num">05</div>
          <div className="pyramid-tier-content">
            <div className="pyramid-tier-label">Implementation</div>
            <div className="pyramid-tier-title">Pam Core Team</div>
            <div className="pyramid-tier-detail">
              Programme Manager, Consumer Intelligence Analysts, and Change
              Agents embedded across every SBU.
            </div>
          </div>
        </div>
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
        <div className="step-intro-number">Step 03 · Strategic vision</div>
        <div className="step-intro-heading">
          The strategic vision Pam represents.
        </div>
        <div className="step-intro-tagline">
          Pam is the fullest expression of P&amp;G&apos;s Integrated
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

      <div className="growth-strategy-grid">
        <div className="growth-strategy-card">
          <div className="growth-strategy-num">01</div>
          <div className="growth-strategy-title">Brand communication</div>
          <div className="growth-strategy-detail">
            The right message, in front of the right consumer, at the
            right moment — across every product and every aisle.
          </div>
        </div>
        <div className="growth-strategy-card">
          <div className="growth-strategy-num">02</div>
          <div className="growth-strategy-title">Retail execution</div>
          <div className="growth-strategy-detail">
            Shelf-level support that turns hesitation into confident
            purchase. Superiority where the strategy used to go silent.
          </div>
        </div>
        <div className="growth-strategy-card">
          <div className="growth-strategy-num">03</div>
          <div className="growth-strategy-title">Consumer value</div>
          <div className="growth-strategy-detail">
            Every interaction — at the shelf, at home, after the sale —
            builds trust rather than eroding it.
          </div>
        </div>
      </div>

      <div className="inline-stat" style={{ marginTop: '1rem' }}>
        Pam is the experience layer that{' '}
        <strong>finally closes the gap</strong> between P&amp;G&apos;s
        investment and the consumer who is supposed to feel it.
      </div>
    </>
  );
}

function VisionTriangle() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-number">Step 03 · Iron triangle</div>
        <div className="step-intro-heading">
          Disciplined delivery.
        </div>
        <div className="step-intro-tagline">
          Fixed budget. Fixed timeline. Tight scope — protected by formal
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
          <div className="triangle-vertex triangle-vertex-top">
            <div className="triangle-vertex-label">Budget</div>
            <div className="triangle-vertex-value">£1M</div>
            <div className="triangle-vertex-sub">Cost breakdown: £940K</div>
          </div>
          <div className="triangle-vertex triangle-vertex-left">
            <div className="triangle-vertex-label">Timeline</div>
            <div className="triangle-vertex-value">36 mo</div>
            <div className="triangle-vertex-sub">Gated stage reviews</div>
          </div>
          <div className="triangle-vertex triangle-vertex-right">
            <div className="triangle-vertex-label">Scope</div>
            <div className="triangle-vertex-value">Software</div>
            <div className="triangle-vertex-sub">No hardware build</div>
          </div>
        </div>

        <div className="triangle-roi">
          <div className="triangle-roi-eyebrow">Projected return</div>
          <div className="triangle-roi-list">
            <div className="triangle-roi-row">
              <div className="triangle-roi-pct">+33%</div>
              <div className="triangle-roi-label">Conversion uplift</div>
            </div>
            <div className="triangle-roi-row">
              <div className="triangle-roi-pct">–50%</div>
              <div className="triangle-roi-label">Complaint-handling cost</div>
            </div>
            <div className="triangle-roi-row">
              <div className="triangle-roi-pct">–25%</div>
              <div className="triangle-roi-label">Product returns</div>
            </div>
          </div>
          <div className="triangle-roi-headline">
            <div className="triangle-roi-amount">£18.2M</div>
            <div className="triangle-roi-meta">3-year revenue uplift</div>
          </div>
          <div className="triangle-roi-multiplier">
            <span className="highlight-yellow-bg">18× return</span> on a
            £1M investment.
          </div>
        </div>
      </div>

      <div className="inline-stat" style={{ marginTop: '1rem' }}>
        A return far too significant to{' '}
        <strong>leave to chance.</strong>
      </div>
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
        <div className="step-intro-number">Step 04 · Enlist the army</div>
        <div className="step-intro-heading">
          Bottom-up. One person at a time.
        </div>
        <div className="step-intro-tagline">
          Where Kotter tells us what the organisation does, ADKAR tells
          us how each individual gets there.
        </div>
      </div>

      <div className="adkar-detail-row">
        <div className="adkar-detail-card adkar-tone-red">
          <div className="adkar-detail-stage">Stage 01</div>
          <div className="adkar-detail-letter">A</div>
          <div className="adkar-detail-title">Awareness</div>
          <div className="adkar-detail-body">
            Every affected employee understands{' '}
            <strong>why Pam is happening</strong> — grounded in real
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
        <div className="step-intro-number">Step 05 · Remove barriers</div>
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
            Data, consent, and compliance risks — including ICO
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
        <div className="step-intro-number">Step 05 · Remove barriers</div>
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
            <li><span className="risk-tag risk-tag-purple">R01</span><div><strong>AI Recommendation Error</strong> — Extreme. Mitigate via human-override layer and phased rollout starting with low-sensitivity categories.</div></li>
            <li><span className="risk-tag risk-tag-pink">R02</span><div><strong>GDPR Non-Compliance</strong> — Extreme. Avoided via DPIA, ICO consultation, and opt-in design baked into Month 2-4.</div></li>
            <li><span className="risk-tag risk-tag-pink">R03</span><div><strong>Fragmented SBU Adoption</strong> — Extreme. Structurally addressed by the coalition design in Step 2.</div></li>
            <li><span className="risk-tag risk-tag-pink">R04</span><div><strong>Critical Path Delay</strong> — High. Limited via phase gates and bi-weekly risk reviews.</div></li>
            <li><span className="risk-tag risk-tag-cyan">R05</span><div><strong>Consumer Adoption Resistance</strong> — High. Mitigated by smartphone fallback and beta testing before go-live.</div></li>
            <li><span className="risk-tag risk-tag-orange">R06</span><div><strong>Budget Overrun</strong> — High. Controlled by EVM tracking and strict scope gates between phases.</div></li>
            <li><span className="risk-tag risk-tag-orange">R07</span><div><strong>Retailer Resistance</strong> — High. Mitigated by joint business planning and revenue share from Month 3.</div></li>
            <li><span className="risk-tag risk-tag-green">R08</span><div><strong>Staff Digital Fluency Gap</strong> — High. Addressed by ADKAR plan and SBU-embedded Change Agents.</div></li>
            <li><span className="risk-tag risk-tag-cyan">R09</span><div><strong>Competitor Replication</strong> — Moderate. Accepted. Pam&apos;s moat is proprietary AI and network effects.</div></li>
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
        <div className="step-intro-number">Step 05 · Risk in focus</div>
        <div className="step-intro-heading">
          Fragmented SBU adoption.
        </div>
        <div className="step-intro-tagline">
          P&amp;G&apos;s decentralised structure could mean Pam is
          adopted five different ways — or ignored entirely.
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
            <div className="fragment-target-step">Step 02</div>
            <div className="fragment-target-title">Coalition design</div>
            <div className="fragment-target-detail">
              The five-tier pyramid — and the dedicated SBU Integration
              Lead in every business unit — exists because of this risk.
            </div>
          </div>
          <div className="fragment-target">
            <div className="fragment-target-step">Step 04</div>
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
  if (variant === 'critical') return <WinsCritical />;
  if (variant === 'gantt') return <WinsGantt />;
  return <WinsList />;
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
        <div className="step-intro-number">Step 06 · Foundations</div>
        <div className="step-intro-heading">
          Work Breakdown Structure.
        </div>
        <div className="step-intro-tagline">
          Pam&apos;s delivery decomposed into eight work packages — each
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
  const path = [
    { id: 'A', name: 'Research & Discovery', dur: '4w' },
    { id: 'C', name: 'UX Personas & Journeys', dur: '4w' },
    { id: 'G', name: 'Wireframing & Prototyping', dur: '4w' },
    { id: 'I', name: 'Core Feature Development', dur: '16w' },
    { id: 'L', name: 'UX Internal Testing', dur: '4w' },
    { id: 'O', name: 'External Beta Testing', dur: '4w' },
    { id: 'P', name: 'Pilot Launch', dur: '4w' },
    { id: 'R', name: 'Full National Rollout', dur: '12w' },
  ];

  return (
    <>
      <div className="step-intro">
        <div className="step-intro-number">Step 06 · Network diagram</div>
        <div className="step-intro-heading">
          Every dependency mapped.
        </div>
        <div className="step-intro-tagline">
          18 activities. Eight on the critical path. Zero float on the
          chain that decides the timeline.
        </div>
      </div>

      <div className="network-path">
        {path.map((node, i) => (
          <div key={node.id} className="network-node-wrap">
            <div className="network-node">
              <div className="network-node-id">{node.id}</div>
              <div className="network-node-name">{node.name}</div>
              <div className="network-node-dur">{node.dur}</div>
            </div>
            {i < path.length - 1 && <div className="network-edge">→</div>}
          </div>
        ))}
      </div>

      <div className="inline-stat" style={{ marginTop: '1.2rem' }}>
        Slip any one of these eight, and the launch slips.{' '}
        <strong>That is exactly why we monitor them weekly.</strong>
      </div>
    </>
  );
}

function WinsCritical() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-number">Step 06 · Critical path</div>
        <div className="step-intro-heading">
          44 weeks. Zero float.
        </div>
        <div className="step-intro-tagline">
          The exact sequence that, if delayed, slips the entire
          programme — monitored continuously.
        </div>
      </div>

      <div className="critical-stats">
        <div className="critical-stat">
          <div className="critical-stat-value">44<span>w</span></div>
          <div className="critical-stat-label">Critical-path duration</div>
        </div>
        <div className="critical-stat">
          <div className="critical-stat-value">8</div>
          <div className="critical-stat-label">Critical activities</div>
        </div>
        <div className="critical-stat">
          <div className="critical-stat-value">0<span>w</span></div>
          <div className="critical-stat-label">Float on critical chain</div>
        </div>
        <div className="critical-stat">
          <div className="critical-stat-value">14<span>d</span></div>
          <div className="critical-stat-label">PMO review cadence</div>
        </div>
      </div>

      <div className="critical-implications">
        <div className="critical-implication">
          <div className="critical-implication-num">01</div>
          <div className="critical-implication-text">
            <strong>Every gate is enforceable.</strong> No phase begins
            until its predecessor passes its review.
          </div>
        </div>
        <div className="critical-implication">
          <div className="critical-implication-num">02</div>
          <div className="critical-implication-text">
            <strong>Float buys safety where we have it.</strong>{' '}
            Non-critical work packages have 2–10w of slack — risk
            absorbed without slipping launch.
          </div>
        </div>
        <div className="critical-implication">
          <div className="critical-implication-num">03</div>
          <div className="critical-implication-text">
            <strong>Pressure points are known in advance.</strong> Core
            Feature Development (16w) is the longest critical
            activity — staffed and de-risked accordingly.
          </div>
        </div>
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
        <div className="step-intro-number">Step 06 · Gantt &amp; gates</div>
        <div className="step-intro-heading">
          Wins are milestones. Milestones are gates.
        </div>
        <div className="step-intro-tagline">
          Every short-term win is a formally documented project
          milestone — sequenced, tracked, gated.
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

function WinsList() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-number">Step 06 · Short-term wins</div>
        <div className="step-intro-heading">
          Five gated proofs. Before we scale.
        </div>
        <div className="step-intro-tagline">
          We don&apos;t scale a problem. We scale proof.
        </div>
      </div>

      <div className="wins-horizontal">
        <div className="win-card">
          <div className="win-when">Week 7 · Gate 1</div>
          <div className="win-title">Pam becomes a programme</div>
          <div className="win-detail">
            Research complete. Scope locked. Governance live. Board
            signs off the build budget — proof the coalition works.
          </div>
        </div>
        <div className="win-card">
          <div className="win-when">Month 5 · Gate 2</div>
          <div className="win-title">The market says yes</div>
          <div className="win-detail">
            MOUs signed. Five pilot stores selected. Retailers at the
            table — real-world commercial support secured.
          </div>
        </div>
        <div className="win-card">
          <div className="win-when">Month 8 · Gate 3</div>
          <div className="win-title">The product works</div>
          <div className="win-detail">
            AR platform built. 500+ P&amp;G SKUs live. A shopper holds
            up a Gillette — and Pam knows exactly what it is.
          </div>
        </div>
        <div className="win-card">
          <div className="win-when">Month 13 · Gate 4</div>
          <div className="win-title">Real consumers say it works</div>
          <div className="win-detail">
            50 shoppers. Real stores. Think-aloud testing. SUS score
            ≥ 75 — not just impressive, genuinely easy to use.
          </div>
        </div>
        <div className="win-card">
          <div className="win-when">Month 18 · Go / No-Go</div>
          <div className="win-title">The numbers say it works</div>
          <div className="win-detail">
            +33% conversion · –50% complaint cost · –25% returns ·
            +15 NPS. Hit all four — and we scale.
          </div>
        </div>
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
        <div className="step-intro-number">Step 07 · Sustain acceleration</div>
        <div className="step-intro-heading">
          Scale carefully. One direction only.
        </div>
        <div className="step-intro-tagline">
          Test · learn · refine · scale · repeat. Every wave informed
          by the one before it.
        </div>
      </div>

      <div className="scale-grid">
        <div className="scale-card">
          <div className="scale-card-eyebrow">Stores</div>
          <div className="scale-arrow">
            <span className="scale-arrow-from">5 stores</span>
            <span className="scale-arrow-sep">→</span>
            <span className="scale-arrow-to">800</span>
          </div>
          <div className="scale-desc">
            Phased activation, region by region, store by store. Every
            new wave is informed by the data from the wave before.
          </div>
          <ul className="scale-list">
            <li>Pilot · 5 Boots stores · UK</li>
            <li>Wave 2 · 300 Boots · 500 Tesco</li>
            <li>Wave 3 · 800+ flagship retailers</li>
          </ul>
        </div>
        <div className="scale-card">
          <div className="scale-card-eyebrow">Brands</div>
          <div className="scale-arrow">
            <span className="scale-arrow-from">1 brand</span>
            <span className="scale-arrow-sep">→</span>
            <span className="scale-arrow-to">5</span>
          </div>
          <div className="scale-desc">
            Phase 1 proves the model on Gillette. Each new brand is a
            new learning loop — Pam gets smarter with every one.
          </div>
          <ul className="scale-list">
            <li>Phase 1 · Gillette</li>
            <li>Phase 3 · Pampers · Oral-B</li>
            <li>Phase 5 · Braun · further SBUs</li>
          </ul>
        </div>
        <div className="scale-card">
          <div className="scale-card-eyebrow">Markets</div>
          <div className="scale-arrow">
            <span className="scale-arrow-from">UK</span>
            <span className="scale-arrow-sep">→</span>
            <span className="scale-arrow-to">EU · US</span>
          </div>
          <div className="scale-desc">
            New regulation. New consumer behaviours. New retail
            partners. Our coalition adapts each rollout seamlessly.
          </div>
          <ul className="scale-list">
            <li>UK · ICO-aligned launch</li>
            <li>EU · GDPR-native expansion</li>
            <li>US · retail-partner co-design</li>
          </ul>
        </div>
      </div>

      <div className="inline-stat" style={{ marginTop: '1.2rem' }}>
        We never move faster than{' '}
        <strong>our evidence allows.</strong> We don&apos;t scale to
        scale — we scale a proof of success.
      </div>
    </>
  );
}

function SustainFeedback() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-number">Step 07 · Feedback architecture</div>
        <div className="step-intro-heading">
          Pam becomes a living system.
        </div>
        <div className="step-intro-tagline">
          Compounding value and information over time. The network
          effect is the moat.
        </div>
      </div>

      <div className="flywheel-grid">
        <div className="flywheel-stage">
          <div className="flywheel-stage-num">01</div>
          <div className="flywheel-stage-title">Capture</div>
          <div className="flywheel-stage-detail">
            Every product picked up, every comparison made, every
            purchase completed — feeds back into Pam&apos;s model.
          </div>
        </div>
        <div className="flywheel-arrow">→</div>
        <div className="flywheel-stage">
          <div className="flywheel-stage-num">02</div>
          <div className="flywheel-stage-title">Retrain</div>
          <div className="flywheel-stage-detail">
            The model is retrained on a regular cadence — sharper
            recommendations, better recognition, fewer dead ends.
          </div>
        </div>
        <div className="flywheel-arrow">→</div>
        <div className="flywheel-stage">
          <div className="flywheel-stage-num">03</div>
          <div className="flywheel-stage-title">Surface</div>
          <div className="flywheel-stage-detail">
            Brand teams and the guiding coalition get real-time
            visibility of consumer behaviour at the shelf — in a way
            that has never existed before.
          </div>
        </div>
        <div className="flywheel-arrow">→</div>
        <div className="flywheel-stage">
          <div className="flywheel-stage-num">04</div>
          <div className="flywheel-stage-title">Compound</div>
          <div className="flywheel-stage-detail">
            Each interaction makes the next one better. Each market
            faster. Each brand stronger — for every brand already in.
          </div>
        </div>
      </div>

      <div className="moat-callout">
        <div className="moat-callout-eyebrow">The moat</div>
        <div className="moat-callout-text">
          Pam&apos;s defensibility isn&apos;t the AI on day one — it
          is the <strong>compounding data and network effects</strong>{' '}
          no competitor can replicate by spending alone.
        </div>
      </div>

      <div className="inline-stat" style={{ marginTop: '1.2rem' }}>
        This is not a rollout. <strong>It is a flywheel.</strong> And
        by Month 36, it is already spinning.
      </div>
    </>
  );
}

// =====================================================
// STEP 8 · INSTITUTE CHANGE
// =====================================================
function InstituteContent() {
  return (
    <>
      <div className="step-intro">
        <div className="step-intro-number">Step 08 · Institute change</div>
        <div className="step-intro-heading">
          Month 36. Pam is how P&amp;G works.
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
        <div className="institute-banner-pam">Pam</div>
      </div>

      <div className="values-link-grid">
        <div className="value-link-card value-link-tone-1">
          <div className="value-link-pg">
            <div className="value-link-eyebrow">P&amp;G value</div>
            <div className="value-link-name">Integrity</div>
          </div>
          <div className="value-link-divider">expressed as</div>
          <div className="value-link-pam">
            <div className="value-link-pam-eyebrow">Pam delivers it</div>
            <div className="value-link-pam-text">
              In every recommendation — backed by data, never a sales pitch.
            </div>
          </div>
        </div>

        <div className="value-link-card value-link-tone-2">
          <div className="value-link-pg">
            <div className="value-link-eyebrow">P&amp;G value</div>
            <div className="value-link-name">Leadership</div>
          </div>
          <div className="value-link-divider">expressed as</div>
          <div className="value-link-pam">
            <div className="value-link-pam-eyebrow">Pam delivers it</div>
            <div className="value-link-pam-text">
              In every market it enters — first-mover at the shelf, not the spec sheet.
            </div>
          </div>
        </div>

        <div className="value-link-card value-link-tone-3">
          <div className="value-link-pg">
            <div className="value-link-eyebrow">P&amp;G value</div>
            <div className="value-link-name">Ownership</div>
          </div>
          <div className="value-link-divider">expressed as</div>
          <div className="value-link-pam">
            <div className="value-link-pam-eyebrow">Pam delivers it</div>
            <div className="value-link-pam-text">
              Across every team it touches — five SBUs, one experience.
            </div>
          </div>
        </div>

        <div className="value-link-card value-link-tone-4">
          <div className="value-link-pg">
            <div className="value-link-eyebrow">P&amp;G value</div>
            <div className="value-link-name">Trust</div>
          </div>
          <div className="value-link-divider">expressed as</div>
          <div className="value-link-pam">
            <div className="value-link-pam-eyebrow">Pam delivers it</div>
            <div className="value-link-pam-text">
              Earned at every single consumer interaction — never assumed.
            </div>
          </div>
        </div>

        <div className="value-link-card value-link-tone-5">
          <div className="value-link-pg">
            <div className="value-link-eyebrow">P&amp;G value</div>
            <div className="value-link-name">Passion for winning</div>
          </div>
          <div className="value-link-divider">expressed as</div>
          <div className="value-link-pam">
            <div className="value-link-pam-eyebrow">Pam delivers it</div>
            <div className="value-link-pam-text">
              At the shelf. In the data. In the experience.
            </div>
          </div>
        </div>
      </div>

      <div className="institute-close">
        Not a system that was adopted.{' '}
        <strong>A system that became inseparable from the company that built it.</strong>
      </div>
    </>
  );
}
