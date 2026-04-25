export default function Navigation({ onPrev, onNext, canGoPrev, canGoNext }) {
  return (
    <div className="nav">
      <button onClick={onPrev} disabled={!canGoPrev} aria-label="Previous slide">
        <svg viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button onClick={onNext} disabled={!canGoNext} aria-label="Next slide">
        <svg viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
