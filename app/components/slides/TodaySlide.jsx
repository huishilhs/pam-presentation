'use client';

const PANELS = [
  {
    label: 'Phone',
    headline: 'AR overlays in your hand.',
    body: 'Hold your phone over two products. Pam+ tells you what each one does, who it’s for, which one fits.',
    cue: 'The aisle stops being a guess.',
    video: '/phone.mov',
  },
  {
    label: 'Laptop',
    headline: 'After the purchase.',
    body: 'Watching the angle. The pressure. The technique. Same razor. Four days later. No cuts.',
    cue: 'Pam+ keeps showing up, every step.',
    video: '/laptop.mov',
  },
  {
    label: 'Smart Glasses',
    headline: 'Leave your comment.',
    body: 'You become part of a wider community of support, advocates for the same brands and products you use every day. Your voice joins theirs.',
    cue: 'Every voice, straight to the brand team.',
    video: '/glasses.mp4',
  },
];

export default function TodaySlide({ panel }) {
  if (typeof panel === 'number' && PANELS[panel]) {
    const p = PANELS[panel];
    return (
      <div className="slide-inner pamplus-slide pamplus-single">
        <div className="pamplus-single-screen">
          <video
            className="pamplus-video"
            src={p.video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>
        <div className="pamplus-single-copy">
          <span className="pamplus-single-label">{p.label}</span>
          <h2 className="pamplus-single-headline">{p.headline}</h2>
          <p className="pamplus-single-body">{p.body}</p>
          <p className="pamplus-single-cue">{p.cue}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="slide-inner pamplus-slide">
      <div className="pamplus-header">
        <span className="pam-hero">
          Pam<span className="pam-hero-dot">+</span>
        </span>
        <p className="pamplus-sub">
          One platform. Every device. Every touchpoint.
        </p>
      </div>

      <div className="pamplus-grid">
        {PANELS.map((p) => (
          <div key={p.label} className="pamplus-panel is-lit">
            <div className="pamplus-screen">
              <video
                className="pamplus-video"
                src={p.video}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
              <div className="pamplus-screen-inner">
                <span className="pamplus-screen-label">{p.label}</span>
                <span className="pamplus-screen-headline">{p.headline}</span>
              </div>
            </div>
            <p className="pamplus-panel-body">{p.body}</p>
            <p className="pamplus-panel-cue">{p.cue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
