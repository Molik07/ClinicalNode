export default function ServicesLoading() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: `
          radial-gradient(ellipse 600px 500px at 5% 30%, rgba(36,59,36,0.07) 0%, transparent 65%),
          radial-gradient(ellipse 500px 400px at 90% 85%, rgba(92,61,30,0.09) 0%, transparent 65%),
          var(--color-bg-s2)
        `,
      }}
    >
      <style>{`
        @keyframes sk-shimmer {
          0%   { background-position: -800px 0; }
          100% { background-position:  800px 0; }
        }
        .sk {
          border-radius: 6px;
          background: linear-gradient(
            90deg,
            rgba(36,59,36,0.06) 25%,
            rgba(36,59,36,0.12) 50%,
            rgba(36,59,36,0.06) 75%
          );
          background-size: 800px 100%;
          animation: sk-shimmer 1.6s ease-in-out infinite;
        }
        .sk-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(240,232,216,0.35) 100%);
          border: 0.5px solid rgba(36,59,36,0.1);
          border-radius: 14px;
          padding: 28px;
        }
      `}</style>

      {/* ── Hero skeleton ── */}
      <div className="relative overflow-hidden pt-28 md:pt-40 pb-16 md:pb-20 px-5 md:px-12">
        {/* Back link */}
        <div className="sk mb-8" style={{ width: 100, height: 10 }} />
        {/* Eyebrow */}
        <div className="sk mb-4" style={{ width: 160, height: 10 }} />
        {/* h1 line 1 */}
        <div className="sk mb-3" style={{ width: 'min(420px, 80%)', height: 48 }} />
        {/* h1 line 2 */}
        <div className="sk mb-7" style={{ width: 280, height: 48 }} />
        {/* Subtitle lines */}
        <div className="sk mb-2" style={{ width: 'min(520px, 90%)', height: 12 }} />
        <div className="sk mb-2" style={{ width: 460, height: 12 }} />
        <div className="sk" style={{ width: 320, height: 12 }} />

        <div className="mt-16 border-t-[0.5px] border-[rgba(36,59,36,0.08)]" />
      </div>

      {/* ── Grid skeleton ── */}
      <div className="px-5 md:px-12 pb-20 md:pb-32">
        {/* Count badge row */}
        <div className="flex items-center gap-3 mb-10">
          <div className="sk" style={{ width: 90, height: 10 }} />
          <div className="flex-1 border-t-[0.5px] border-[rgba(36,59,36,0.08)]" />
        </div>

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))' }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="sk-card">
              {/* Icon placeholder */}
              <div className="sk mb-[18px]" style={{ width: 40, height: 40, borderRadius: 10 }} />
              {/* Title */}
              <div className="sk mb-3" style={{ width: '60%', height: 18 }} />
              {/* Divider */}
              <div style={{ borderTop: '0.5px solid rgba(36,59,36,0.08)', marginBottom: 16 }} />
              {/* Description lines */}
              <div className="sk mb-2" style={{ width: '100%', height: 11 }} />
              <div className="sk mb-2" style={{ width: '90%', height: 11 }} />
              <div className="sk mb-5" style={{ width: '70%', height: 11 }} />
              {/* Learn more */}
              <div className="sk" style={{ width: 80, height: 10 }} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
