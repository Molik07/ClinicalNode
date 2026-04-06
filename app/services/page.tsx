import Link from 'next/link';
import type { Metadata } from 'next';
import { servicesMeta } from '@/lib/data';

export const metadata: Metadata = {
  title: 'All Services — Verdana Health',
  description:
    'Explore the full range of medical specialties at Verdana Health — from General Medicine and Cardiology to Mental Wellness and Physiotherapy, all under one roof.',
};

/* ── Inline SVG icons (server-safe, no 'use client' needed) ── */
function ServiceIcon({ title }: { title: string }) {
  const stroke = '#2e4d2e';
  const props = {
    className: 'w-[18px] h-[18px]',
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    stroke,
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  const icons: Record<string, React.ReactNode> = {
    'General Medicine': (
      <svg {...props}>
        <path d="M12 2v20M2 12h20" />
        <rect x="3" y="3" width="18" height="18" rx="4" />
      </svg>
    ),
    Paediatrics: (
      <svg {...props}>
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
    ),
    Diagnostics: (
      <svg {...props}>
        <path d="M9 2v6l-2 8a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4l-2-8V2" />
        <line x1="9" y1="2" x2="15" y2="2" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
    Cardiology: (
      <svg {...props}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    Dermatology: (
      <svg {...props}>
        <path d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2z" />
        <path d="M12 8c2 0 3 1.5 3 3s-1 3-3 3-3-1.5-3-3 1-3 3-3z" />
      </svg>
    ),
    Orthopaedics: (
      <svg {...props}>
        <path d="M9 3h6l1 4-4 2-4-2 1-4z" />
        <path d="M8 7v14M16 7v14" />
        <path d="M8 14h8" />
      </svg>
    ),
    Gynaecology: (
      <svg {...props}>
        <circle cx="12" cy="9" r="5" />
        <path d="M12 14v7M9 18h6" />
      </svg>
    ),
    Neurology: (
      <svg {...props}>
        <path d="M9.5 2a4.5 4.5 0 0 1 4.5 4.5c0 1.5-.8 2.8-2 3.6" />
        <path d="M14.5 2a4.5 4.5 0 0 0-4.5 4.5c0 1.5.8 2.8 2 3.6" />
        <path d="M12 10v12" />
        <path d="M8 14c-2 0-3-1-3-2.5S6 9 8 9" />
        <path d="M16 14c2 0 3-1 3-2.5S18 9 16 9" />
      </svg>
    ),
    Ophthalmology: (
      <svg {...props}>
        <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    Pulmonology: (
      <svg {...props}>
        <path d="M12 3v10" />
        <path d="M12 13C8 13 5 16 5 19c0 1.1.9 2 2 2h4" />
        <path d="M12 13c4 0 7 3 7 6 0 1.1-.9 2-2 2h-4" />
      </svg>
    ),
    Physiotherapy: (
      <svg {...props}>
        <circle cx="12" cy="5" r="2" />
        <path d="M6 8h12l-2 6H8L6 8z" />
        <path d="M9 14l-1 6M15 14l1 6" />
      </svg>
    ),
    'Mental Wellness': (
      <svg {...props}>
        <path d="M12 2C7 2 3 6 3 11c0 3 1.5 5.5 4 7l1 4h8l1-4c2.5-1.5 4-4 4-7 0-5-4-9-9-9z" />
        <line x1="9" y1="11" x2="9" y2="11" strokeWidth={2} strokeLinecap="round" />
        <line x1="15" y1="11" x2="15" y2="11" strokeWidth={2} strokeLinecap="round" />
      </svg>
    ),
  };

  return (
    <>
      {icons[title] ?? (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      )}
    </>
  );
}

// Simulates async data fetching — replace with real DB/API call in production
async function getServices() {
  return servicesMeta;
}

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <main
      className="min-h-screen selection:bg-[#9e6b3a] selection:text-[#faf6ef]"
      style={{
        background: `
          radial-gradient(ellipse 600px 500px at 5% 30%, rgba(36,59,36,0.07) 0%, transparent 65%),
          radial-gradient(ellipse 500px 400px at 90% 85%, rgba(92,61,30,0.09) 0%, transparent 65%),
          var(--color-bg-s2)
        `,
      }}
    >
      {/* ── inline CSS for card hover (server-safe) ── */}
      <style>{`
        .s-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(240,232,216,0.5) 100%);
          border: 0.5px solid rgba(36,59,36,0.12);
          border-radius: 14px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
        .s-card:hover {
          background: linear-gradient(135deg, rgba(255,255,255,0.88) 0%, rgba(240,232,216,0.7) 100%);
          border-color: rgba(36,59,36,0.22);
          transform: translateY(-6px);
        }
        .s-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(61,99,64,0.08);
          border: 0.5px solid rgba(61,99,64,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          flex-shrink: 0;
        }
        .s-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          letter-spacing: 0.14em;
          color: var(--color-forest-mid);
          text-transform: uppercase;
          font-family: var(--font-inter);
          margin-top: auto;
        }
        .s-learn-more:hover {
          opacity: 0.75;
        }
      `}</style>

      {/* ── Page Hero ── */}
      <div className="relative overflow-hidden pt-40 pb-20 px-12">
        {/* Decorative rings — light green tones */}
        <div className="absolute rounded-full border-[0.5px] border-[rgba(61,99,64,0.1)] pointer-events-none w-[500px] h-[500px] -top-[160px] -right-[160px]" />
        <div className="absolute rounded-full border-[0.5px] border-[rgba(61,99,64,0.06)] pointer-events-none w-[700px] h-[700px] -top-[240px] -right-[240px]" />

        <div className="max-w-[720px]">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 font-inter text-[9.5px] tracking-[0.25em] text-muted-light uppercase mb-8 hover:opacity-100 transition-opacity"
          >
            ← Back to home
          </Link>
          <p className="font-inter text-[9.5px] tracking-[0.25em] text-muted-light uppercase mb-4">
            Everything under one roof
          </p>
          <h1 className="font-playfair text-[clamp(2.4rem,5vw,3.8rem)] font-medium leading-[1.1] text-text-on-light mb-6">
            Our{' '}
            <em className="text-brown-mid italic">medical specialties</em>
          </h1>
          <p className="font-inter text-xs tracking-[0.06em] leading-8 text-muted-light max-w-[520px]">
            From routine checkups to complex conditions — every specialty you need is available at Verdana Health, staffed by board-certified doctors who genuinely care.
          </p>
        </div>

        {/* Horizontal rule */}
        <div className="mt-16 border-t-[0.5px] border-line-light" />
      </div>

      {/* ── Services Grid ── */}
      <div className="px-12 pb-32">
        {/* Count badge */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-inter text-[9px] tracking-[0.22em] text-muted-light uppercase">
            {services.length} Specialties
          </span>
          <div className="flex-1 border-t-[0.5px] border-line-light" />
        </div>

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
        >
          {services.map((svc, i) => (
            <div key={svc.title} className="s-card relative">
              {/* Number badge */}
              <span className="absolute top-5 right-6 font-inter text-[9px] tracking-[0.2em] text-muted-light/40 uppercase select-none">
                #{String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="s-icon-wrap">
                <ServiceIcon title={svc.title} />
              </div>

              {/* Service name */}
              <h2 className="font-playfair text-[1.05rem] font-medium text-text-on-light mb-3">
                {svc.title}
              </h2>

              {/* Divider */}
              <div className="border-t-[0.5px] border-line-light mb-4" />

              {/* Description */}
              <p className="font-inter text-[11px] tracking-[0.06em] leading-[1.9] text-muted-light flex-1 mb-5">
                {svc.desc}
              </p>

              {/* CTA arrow */}
              <span className="s-learn-more">
                Learn more
                <span
                  style={{
                    display: 'inline-block',
                    width: '16px',
                    height: 0,
                    borderTop: '0.5px solid currentColor',
                    position: 'relative',
                  }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
