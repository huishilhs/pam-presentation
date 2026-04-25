export default function PersonaSlide() {
  return (
    <div className="slide-inner">
      <div className="persona-grid">
        <div className="persona-card">
          <div className="persona-avatar">
            <svg viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="30" r="14" stroke="currentColor" strokeWidth="2" />
              <path
                d="M14 70c0-14 12-22 26-22s26 8 26 22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="persona-meta">
            <div className="persona-name">James</div>
            <div className="persona-tags">
              <span>22 years old</span>
              <span>Final-year student</span>
              <span>Tight budget</span>
            </div>
          </div>
        </div>

        <div className="persona-story">
          <div className="eyebrow">Meet our consumer</div>
          <h2 className="persona-headline">
            Ten minutes in the aisle.{' '}
            <span className="highlight-yellow-bg">Two identical razors.</span>{' '}
            Nobody to help.
          </h2>
          <p className="persona-body">
            High expectations, no time to get a purchase wrong — and no
            one in P&amp;G&apos;s ecosystem positioned to help him decide.
          </p>
          <div className="persona-trio">
            <div className="persona-trio-item">
              <div className="persona-trio-label">Persona 1</div>
              <div className="persona-trio-name">Overwhelmed Chooser</div>
            </div>
            <div className="persona-trio-item is-active">
              <div className="persona-trio-label">Persona 2</div>
              <div className="persona-trio-name">Frustrated Buyer</div>
            </div>
            <div className="persona-trio-item">
              <div className="persona-trio-label">Persona 3</div>
              <div className="persona-trio-name">Abandoned Owner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
