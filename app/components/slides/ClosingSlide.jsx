export default function ClosingSlide() {
  return (
    <div className="slide-inner closing-roadmap">
      <div className="closing-eyebrow">James&apos;s journey</div>

      <div className="closing-track">
        <div className="closing-stop">
          <div className="closing-stop-dot" />
          <div className="closing-stop-when">Today</div>
          <div className="closing-stop-label">Alone at the shelf.</div>
        </div>
        <div className="closing-stop">
          <div className="closing-stop-dot" />
          <div className="closing-stop-when">Month 18</div>
          <div className="closing-stop-label">Pam goes live.</div>
        </div>
        <div className="closing-stop closing-stop-final">
          <div className="closing-stop-dot" />
          <div className="closing-stop-when">Month 36</div>
          <div className="closing-stop-label">Gap closed.</div>
        </div>
      </div>

      <div className="closing-video">
        <video
          className="closing-video-el"
          src="/closing.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/closing-poster.jpg"
        />
      </div>

      <div className="closing-finale">
        He picks up a razor.{' '}
        <span className="highlight-yellow">
          The company picks him up too.
        </span>
      </div>
    </div>
  );
}
