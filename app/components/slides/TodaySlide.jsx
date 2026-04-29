export default function TodaySlide() {
  return (
    <div className="slide-inner">
      <div className="recap-text">
        <div className="eyebrow">Today</div>
        <h2 className="today-headline">
          <span className="pam-hero">
            Pam<span className="pam-hero-dot">+</span>
          </span>
        </h2>
        <p>
          Today we&apos;re not just showing you that Pam works.
          We&apos;re showing you that{' '}
          <strong>Pam does more.</strong>
        </p>
        <p>
          A <strong>fully costed</strong>, <strong>fully governed</strong>,&nbsp;
          <strong>fully structured</strong>&nbsp;plan
        </p>

        <div className="today-pillars">
          <div className="today-pillar">
            <div className="today-pillar-num">01</div>
            <div className="today-pillar-text">Built for P&amp;G&apos;s culture</div>
          </div>
          <div className="today-pillar">
            <div className="today-pillar-num">02</div>
            <div className="today-pillar-text">Aligned to P&amp;G&apos;s strategy</div>
          </div>
          <div className="today-pillar">
            <div className="today-pillar-num">03</div>
            <div className="today-pillar-text">Ready to deliver</div>
          </div>
        </div>
      </div>

      <div className="today-video-column">
        <div className="video-frame">
          <div className="video-placeholder">
            <div className="play-btn">
              <svg viewBox="0 0 24 24">
                <polygon points="6 3 22 12 6 21 6 3" />
              </svg>
            </div>
            <div className="video-label">Pam+ in action</div>
            <div className="video-title-text">
              From concept to programme — fully governed, fully delivered
            </div>
          </div>
        </div>

        <div className="devices-strip devices-strip-centered">
          <div className="device-chip">
            <svg viewBox="0 0 24 24">
              <path d="M3 12h3l3-9 4 18 3-9h5" />
            </svg>
            <span className="device-chip-label">AR Glasses</span>
          </div>
          <div className="device-chip">
            <svg viewBox="0 0 24 24">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <line x1="12" y1="18" x2="12" y2="18" />
            </svg>
            <span className="device-chip-label">Mobile</span>
          </div>
          <div className="device-chip">
            <svg viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span className="device-chip-label">Website</span>
          </div>
        </div>
      </div>
    </div>
  );
}
