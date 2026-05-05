export default function KotterOverviewSlide() {
  return (
    <div className="slide-inner kotter-overview">
      <div className="kotter-overview-header">
        <h2>
          Our Roadmap to{' '}
          <span className="pam-hero" style={{ fontSize: 'inherit' }}>
            Pam<span className="pam-hero-dot">+</span>
          </span>
          .
        </h2>
      </div>
      <div className="kotter-overview-recap">
        <span className="kotter-overview-recap-line kotter-overview-recap-line--yellow">
          One Solution.
        </span>
        <span className="kotter-overview-recap-line kotter-overview-recap-line--cyan">
          Every device.
        </span>
        <span className="kotter-overview-recap-line kotter-overview-recap-line--coral">
          Every step of the journey.
        </span>
      </div>
      <div className="kotter-overview-caption">
        <p>
          Six steps. Every lever we need to move, from the strategic fit
          to the gated proof that makes Pam+ real inside P&amp;G.
        </p>
      </div>
    </div>
  );
}
