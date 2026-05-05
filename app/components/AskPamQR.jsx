'use client';

const QR_PIXELS = 220;
const CHAT_URL =
  process.env.NEXT_PUBLIC_CHAT_URL || 'https://pam-presentation.vercel.app/chat';

export default function AskPamQR() {
  const url = CHAT_URL;

  const qrSrc =
    `https://api.qrserver.com/v1/create-qr-code/?size=${QR_PIXELS}x${QR_PIXELS}` +
    `&data=${encodeURIComponent(url)}` +
    `&color=002E91&bgcolor=ffffff&qzone=1&margin=0`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="ask-pam-qr"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="ask-pam-qr-copy">
        <div className="ask-pam-qr-eyebrow">Ask anything</div>
        <div className="ask-pam-qr-title">
          Chat with Pam<span className="ask-pam-qr-plus">+</span>
        </div>
        <div className="ask-pam-qr-hint">Scan to open</div>
      </div>
      <div className="ask-pam-qr-image">
        <img src={qrSrc} alt="QR code — scan to ask the Pam+ AI anything" />
      </div>
    </a>
  );
}
