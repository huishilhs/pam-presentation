export default function WhySlide() {
  return (
    <div className="slide-inner">
      <div className="eyebrow" style={{ textAlign: 'center' }}>
        Why has this problem never been solved?
      </div>
      <div className="why-question">A great product isn&apos;t enough.</div>

      <div className="why-stat-container">
        <div className="why-stat">70%</div>
        <div className="why-stat-highlight" />
      </div>

      <div className="why-caption">of digital transformations fail.</div>
      <div className="why-source">McKinsey · 2023</div>

      <div className="why-footer">
        Which is why we built Pam{' '}
        <strong>around Kotter.</strong>
      </div>
    </div>
  );
}
