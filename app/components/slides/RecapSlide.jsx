export default function RecapSlide() {
  return (
    <div className="slide-inner">
      {/* LEFT COLUMN — text + devices + personas */}
      <div className="recap-text">
        <div className="eyebrow">Last semester</div>
        <h2>We introduced Pam.</h2>
        <p>
          An AI-powered AR assistant designed to guide consumers before
          purchase, support them during purchase, and help them after
          purchase.
        </p>
        <p>One experience. Three surfaces.</p>

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
          <div className="device-chip">
            <svg viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span className="device-chip-label">Website</span>
          </div>
        </div>

        <div className="persona-line">
          Designed for <strong>three personas</strong> drawn from 80,000
          customer comments: the <strong>Overwhelmed Chooser</strong>, the{' '}
          <strong>Frustrated Buyer</strong>, and the{' '}
          <strong>Abandoned Owner</strong>.
        </div>
      </div>

      {/* RIGHT COLUMN — video
          To use your own video, replace the <div className="video-placeholder">
          below with:
              <video autoPlay muted loop playsInline>
                <source src="/your-video.mp4" type="video/mp4" />
              </video>
          (Put the file in the /public folder.)
      */}
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
