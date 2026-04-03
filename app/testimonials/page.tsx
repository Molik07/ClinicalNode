import Link from 'next/link';
import type { Metadata } from 'next';
import { testimonials } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Patient Stories — Verdana Health',
  description:
    'Read every patient testimonial and review from Verdana Health. Real stories from real people who trust us with their care.',
};

export default function TestimonialsPage() {
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
      {/* ── inline CSS for card hover (server-safe) ── */}
      <style>{`
        .t-card {
          background: rgba(255,255,255,0.04);
          border: 0.5px solid rgba(212,184,150,0.13);
          border-radius: 16px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
        .t-card:hover {
          background: rgba(255,255,255,0.075);
          border-color: rgba(212,184,150,0.28);
          transform: translateY(-4px);
        }
      `}</style>

      {/* ── Page Hero ── */}
      <div className="relative overflow-hidden pt-40 pb-20 px-12">
        {/* Decorative rings */}
        <div className="absolute rounded-full border-[0.5px] border-[rgba(212,184,150,0.07)] pointer-events-none w-[500px] h-[500px] -top-[160px] -left-[160px]" />
        <div className="absolute rounded-full border-[0.5px] border-[rgba(212,184,150,0.04)] pointer-events-none w-[700px] h-[700px] -top-[240px] -left-[240px]" />

        <div className="max-w-[720px]">
          <Link
            href="/#testimonials"
            className="inline-flex items-center gap-2 font-inter text-[9.5px] tracking-[0.25em] text-brown-muted/50 uppercase mb-8 hover:opacity-100 transition-opacity"
          >
            ← Back to home
          </Link>
          <p className="font-inter text-[9.5px] tracking-[0.25em] text-brown-muted/60 uppercase mb-4">
            Every story matters
          </p>
          <h1 className="font-playfair text-[clamp(2.4rem,5vw,3.8rem)] font-medium leading-[1.1] text-text-on-dark mb-6">
            Patient{' '}
            <em className="text-forest-faint italic">stories &amp; reviews</em>
          </h1>
          <p className="font-inter text-xs tracking-[0.06em] leading-8 text-[rgba(236,229,216,0.65)] max-w-[520px]">
            Every review here is from a real patient who trusted us with their health. We are proud of each one — and humbled by them.
          </p>
        </div>

        {/* Horizontal rule */}
        <div className="mt-16 border-t-[0.5px] border-[rgba(212,184,150,0.12)]" />
      </div>

      {/* ── Testimonials Grid ── */}
      <div className="px-12 pb-32">
        {/* Count badge */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-inter text-[9px] tracking-[0.22em] text-brown-muted/40 uppercase">
            {testimonials.length} Reviews
          </span>
          <div className="flex-1 border-t-[0.5px] border-[rgba(212,184,150,0.08)]" />
        </div>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}
        >
          {testimonials.map((t, i) => (
            <div key={t.name} className="t-card relative">
              {/* Review number */}
              <span className="absolute top-6 right-7 font-inter text-[9px] tracking-[0.2em] text-[rgba(212,184,150,0.18)] uppercase select-none">
                #{String(i + 1).padStart(2, '0')}
              </span>

              {/* Open quote */}
              <div className="font-playfair italic text-[2.4rem] text-[rgba(212,184,150,0.18)] leading-none mb-3 select-none">
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="font-playfair italic text-[0.9rem] text-[rgba(236,229,216,0.82)] leading-[1.85] flex-1 mb-7">
                {t.quote}
              </p>

              {/* Divider */}
              <div className="border-t-[0.5px] border-[rgba(212,184,150,0.1)] mb-6" />

              {/* Author row */}
              <div className="flex items-center gap-3.5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(212,184,150,0.12)',
                    border: '0.5px solid rgba(212,184,150,0.22)',
                  }}
                >
                  <span className="font-playfair text-[0.78rem] font-medium text-brown-muted">
                    {t.initials}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-inter text-[11px] tracking-[0.12em] text-brown-muted uppercase">
                    {t.name}
                  </span>
                  <span className="font-inter text-[9.5px] tracking-[0.1em] text-[rgba(212,184,150,0.35)] uppercase">
                    {t.since}
                  </span>
                </div>

                {/* Star rating */}
                <div className="ml-auto flex gap-[3px]">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <svg key={s} className="w-3 h-3" viewBox="0 0 12 12" fill="rgba(212,184,150,0.55)">
                      <path d="M6 0l1.5 4.5H12L8.3 7.3l1.4 4.4L6 9.1l-3.7 2.6 1.4-4.4L0 4.5h4.5z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA strip ── */}
      <div className="border-t-[0.5px] border-[rgba(212,184,150,0.12)] mx-12 pb-24 pt-16">
        <p className="font-inter text-[9.5px] tracking-[0.22em] text-brown-muted/50 uppercase mb-4">
          Your story could be next
        </p>
        <h2 className="font-playfair text-[clamp(1.6rem,2.5vw,2.2rem)] font-medium text-text-on-dark mb-8">
          Ready to experience care that listens?
        </h2>
        <Link href="/#contact" className="btn-beige inline-flex">
          Book an appointment
        </Link>
      </div>
    </main>
  );
}
