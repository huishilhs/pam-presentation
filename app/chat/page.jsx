'use client';

import { useEffect, useRef, useState } from 'react';

const SUGGESTIONS = [
  'What is Pam+ in one paragraph?',
  'Why did you pick Kotter’s framework?',
  'How does the AR glasses experience work?',
  'What’s the budget and projected ROI?',
  'Who is on the team?',
];

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function send(text) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError(null);
    const userMsg = { role: 'user', content: trimmed };
    const next = [...messages, userMsg, { role: 'assistant', content: '' }];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      if (!res.ok || !res.body) {
        const errText = await res.text().catch(() => '');
        throw new Error(errText || `Request failed (${res.status})`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let acc = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const events = buffer.split('\n\n');
        buffer = events.pop() ?? '';

        for (const evt of events) {
          for (const line of evt.split('\n')) {
            if (!line.startsWith('data:')) continue;
            const data = line.slice(5).trim();
            if (!data || data === '[DONE]') continue;
            try {
              const parsed = JSON.parse(data);
              if (
                parsed.type === 'content_block_delta' &&
                parsed.delta?.type === 'text_delta'
              ) {
                acc += parsed.delta.text;
                setMessages((prev) => {
                  const copy = prev.slice();
                  copy[copy.length - 1] = {
                    role: 'assistant',
                    content: acc,
                  };
                  return copy;
                });
              }
            } catch {
              // ignore malformed event
            }
          }
        }
      }
    } catch (err) {
      setError(err.message || 'Something went wrong.');
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    send(input);
  }

  const hasMessages = messages.length > 0;

  return (
    <div className="chat-shell">
      <header className="chat-header">
        <div className="chat-brand">
          <span className="chat-brand-logo">
            Pam<span className="chat-brand-plus">+</span>
          </span>
          <span className="chat-brand-tag">Ask the project</span>
        </div>
        <div className="chat-byline">Group 2 · Cecilia · Huishi · Eklavya</div>
      </header>

      <main className="chat-main" ref={scrollRef}>
        {!hasMessages && (
          <div className="chat-welcome">
            <div className="chat-welcome-eyebrow">Ask anything</div>
            <h1 className="chat-welcome-title">
              How does Pam<span className="chat-brand-plus">+</span> work?
            </h1>
            <p className="chat-welcome-body">
              Ask about the product, the personas, the 6-step Kotter roadmap,
              the budget, the risks, or how the team built the plan.
            </p>
            <div className="chat-suggestions">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="chat-suggestion"
                  onClick={() => send(s)}
                  disabled={loading}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`chat-msg chat-msg-${m.role}`}>
            {m.role === 'assistant' && (
              <div className="chat-msg-avatar">P+</div>
            )}
            <div className="chat-msg-bubble">
              {m.content || (
                <span className="chat-typing">
                  <span />
                  <span />
                  <span />
                </span>
              )}
            </div>
          </div>
        ))}

        {error && <div className="chat-error">{error}</div>}
      </main>

      <form className="chat-composer" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className="chat-input"
          type="text"
          placeholder="Ask about Pam+…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
          autoFocus
        />
        <button
          className="chat-send"
          type="submit"
          disabled={loading || !input.trim()}
          aria-label="Send"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              d="M3 11.5L21 3l-8.5 18-2.5-8L3 11.5z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
