export default function TestimonialsLoading() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: `
          radial-gradient(ellipse 800px 600px at 10% 20%, rgba(30,51,32,0.35) 0%, transparent 60%),
          radial-gradient(ellipse 600px 500px at 85% 80%, rgba(61,99,64,0.25) 0%, transparent 60%),
          var(--color-bg-s5)
        `,
      }}
    >
      <style>{`
        @keyframes sk-shimmer-dark {
          0%   { background-position: -800px 0; }
          100% { background-position:  800px 0; }
        }
        .sk-d {
          border-radius: 6px;
          background: linear-gradient(
            90deg,
            rgba(212,184,150,0.06) 25%,
            rgba(212,184,150,0.14) 50%,
            rgba(212,184,150,0.06) 75%
          );
          background-size: 800px 100%;
          animation: sk-shimmer-dark 1.6s ease-in-out infinite;
        }
        .sk-d-card {
          background: rgba(255,255,255,0.03);
          border: 0.5px solid rgba(212,184,150,0.1);
          border-radius: 16px;
          padding: 32px;
        }
        .sk-d-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(212,184,150,0.08);
          border: 0.5px solid rgba(212,184,150,0.15);
          flex-shrink: 0;
        }
      `}</style>

      {/* ── Hero skeleton ── */}
      <div className="relative overflow-hidden pt-40 pb-20 px-12">
        {/* Back link */}
        <div className="sk-d mb-8" style={{ width: 100, height: 10 }} />
        {/* Eyebrow */}
        <div className="sk-d mb-4" style={{ width: 140, height: 10 }} />
        {/* h1 line 1 */}
        <div className="sk-d mb-3" style={{ width: 380, height: 48 }} />
        {/* h1 line 2 */}
        <div className="sk-d mb-7" style={{ width: 300, height: 48 }} />
        {/* Subtitle */}
        <div className="sk-d mb-2" style={{ width: 520, height: 12 }} />
        <div className="sk-d" style={{ width: 400, height: 12 }} />

        <div className="mt-16" style={{ borderTop: '0.5px solid rgba(212,184,150,0.1)' }} />
      </div>

      {/* ── Grid skeleton ── */}
      <div className="px-12 pb-32">
        {/* Count badge */}
        <div className="flex items-center gap-3 mb-10">
          <div className="sk-d" style={{ width: 80, height: 10 }} />
          <div className="flex-1" style={{ borderTop: '0.5px solid rgba(212,184,150,0.07)' }} />
        </div>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="sk-d-card">
              {/* Open quote placeholder */}
              <div className="sk-d mb-4" style={{ width: 30, height: 36 }} />
              {/* Quote lines */}
              <div className="sk-d mb-2" style={{ width: '100%', height: 13 }} />
              <div className="sk-d mb-2" style={{ width: '94%', height: 13 }} />
              <div className="sk-d mb-2" style={{ width: '88%', height: 13 }} />
              <div className="sk-d mb-7" style={{ width: '60%', height: 13 }} />
              {/* Divider */}
              <div className="mb-6" style={{ borderTop: '0.5px solid rgba(212,184,150,0.08)' }} />
              {/* Author row */}
              <div className="flex items-center gap-3">
                <div className="sk-d-avatar" />
                <div className="flex flex-col gap-2">
                  <div className="sk-d" style={{ width: 100, height: 10 }} />
                  <div className="sk-d" style={{ width: 80, height: 9 }} />
                </div>
                {/* Stars */}
                <div className="ml-auto flex gap-[3px]">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <div
                      key={s}
                      className="sk-d"
                      style={{ width: 12, height: 12, borderRadius: 2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA skeleton ── */}
      <div className="mx-12 pb-24 pt-16" style={{ borderTop: '0.5px solid rgba(212,184,150,0.1)' }}>
        <div className="sk-d mb-4" style={{ width: 140, height: 10 }} />
        <div className="sk-d mb-3" style={{ width: 400, height: 32 }} />
        <div className="sk-d mb-8" style={{ width: 260, height: 32 }} />
        <div className="sk-d" style={{ width: 160, height: 44, borderRadius: 999 }} />
      </div>
    </main>
  );
}
