export default function LastSemSlide() {
  return (
    <div className="slide-inner">
      <div className="recap-text">
        <div className="eyebrow">Last semester</div>
        <h2 className="pam-hero">Pam<span className="pam-hero-dot">.</span></h2>
        <p className="pam-tagline">P&amp;G&apos;s AI-powered AR shopping assistant.</p>

        <p>
          An AR assistant that walks the consumer through every step of
          the journey — from the aisle, to the shelf, to the moment they
          throw the empty bottle away.
        </p>
        <p>
          <strong>One platform. Every device. Every touchpoint.</strong>
        </p>

        <div className="devices-strip">
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
        </div>

        <div className="persona-line">
          Built for three personas drawn from 80,000 customer comments —
          the phone in James&apos;s pocket, the glasses on his face, the
          laptop on his desk.
        </div>
      </div>

      <div className="video-frame">
        <div className="video-placeholder">
          <div className="play-btn">
            <svg viewBox="0 0 24 24">
              <polygon points="6 3 22 12 6 21 6 3" />
            </svg>
          </div>
          <div className="video-label">Customer Journey</div>
          <div className="video-title-text">
            Pam at every stage — glasses, mobile, web
          </div>
        </div>
      </div>
    </div>
  );
}
