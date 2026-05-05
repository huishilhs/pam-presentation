'use client';

const QR_PIXELS = 600;
const CHAT_URL =
  process.env.NEXT_PUBLIC_CHAT_URL || 'https://pam-presentation.vercel.app/chat';

export default function QRSlide() {
  const url = CHAT_URL;
  const qrSrc =
    `https://api.qrserver.com/v1/create-qr-code/?size=${QR_PIXELS}x${QR_PIXELS}` +
    `&data=${encodeURIComponent(url)}` +
    `&color=002E91&bgcolor=ffffff&qzone=1&margin=0`;

  return (
    <div className="slide-inner qr-slide">
      <div className="qr-slide-eyebrow">Ask anything</div>
      <h2 className="qr-slide-title">
        Chat with Pam<span className="qr-slide-plus">+</span>
      </h2>
      <p className="qr-slide-sub">
        Scan to talk to the Pam+ AI. Ask anything about a product, an
        ingredient, or the journey we just walked through.
      </p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="qr-slide-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="qr-slide-image">
          <img src={qrSrc} alt="QR code — scan to chat with Pam+" />
        </div>
      </a>

      <div className="qr-slide-hint">Point your camera. Scan. Chat.</div>
    </div>
  );
}
