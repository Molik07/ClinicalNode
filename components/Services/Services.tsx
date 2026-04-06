'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { servicesMeta } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';

/* SVG icons for each service — kept here because they are JSX */
const serviceIcons: Record<string, React.ReactNode> = {
  'General Medicine': (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M2 12h20" />
      <rect x="3" y="3" width="18" height="18" rx="4" />
    </svg>
  ),
  Paediatrics: (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    </svg>
  ),
  Diagnostics: (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2v6l-2 8a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4l-2-8V2" />
      <line x1="9" y1="2" x2="15" y2="2" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  ),
  Cardiology: (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  Dermatology: (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2z" />
      <path d="M12 8c2 0 3 1.5 3 3s-1 3-3 3-3-1.5-3-3 1-3 3-3z" />
    </svg>
  ),
  Orthopaedics: (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6l1 4-4 2-4-2 1-4z" />
      <path d="M8 7v14M16 7v14" />
      <path d="M8 14h8" />
    </svg>
  ),
  Gynaecology: (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="5" />
      <path d="M12 14v7M9 18h6" />
    </svg>
  ),
  Neurology: (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2a4.5 4.5 0 0 1 4.5 4.5c0 1.5-.8 2.8-2 3.6" />
      <path d="M14.5 2a4.5 4.5 0 0 0-4.5 4.5c0 1.5.8 2.8 2 3.6" />
      <path d="M12 10v12" />
      <path d="M8 14c-2 0-3-1-3-2.5S6 9 8 9" />
      <path d="M16 14c2 0 3-1 3-2.5S18 9 16 9" />
    </svg>
  ),
  Ophthalmology: (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Pulmonology: (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v10" />
      <path d="M12 13C8 13 5 16 5 19c0 1.1.9 2 2 2h4" />
      <path d="M12 13c4 0 7 3 7 6 0 1.1-.9 2-2 2h-4" />
    </svg>
  ),
  Physiotherapy: (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <path d="M6 8h12l-2 6H8L6 8z" />
      <path d="M9 14l-1 6M15 14l1 6" />
    </svg>
  ),
  'Mental Wellness': (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C7 2 3 6 3 11c0 3 1.5 5.5 4 7l1 4h8l1-4c2.5-1.5 4-4 4-7 0-5-4-9-9-9z" />
      <line x1="9" y1="11" x2="9" y2="11" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="11" x2="15" y2="11" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

interface ServicesProps {
  teaser?: boolean;
}

export default function Services({ teaser = false }: ServicesProps) {
  const ref = useScrollReveal();
  /* On the home page (teaser) show 4 cards; full section shows all */
  const items = teaser ? servicesMeta.slice(0, 4) : servicesMeta;

  return (
    <section
      ref={ref}
      id="services"
      className="relative overflow-hidden min-h-screen py-28 px-12 border-t-[0.5px] border-[rgba(36,59,36,0.08)] flex flex-col justify-center selection:bg-[#9e6b3a] selection:text-[#faf6ef]"
      style={{
        background: `
          radial-gradient(ellipse 600px 500px at 5% 50%, rgba(36,59,36,0.07) 0%, transparent 65%),
          radial-gradient(ellipse 500px 400px at 90% 85%, rgba(92,61,30,0.09) 0%, transparent 65%),
          var(--color-bg-s2)
        `,
      }}
    >
      {/* Decorative rings */}
      <div className="absolute rounded-full border-[0.5px] border-[rgba(61,99,64,0.16)] pointer-events-none w-[320px] h-[320px] -top-[80px] -right-[60px]" />
      <div className="absolute rounded-full border-[0.5px] border-[rgba(61,99,64,0.11)] pointer-events-none w-[520px] h-[520px] -top-[140px] -right-[130px]" />
      <div className="absolute rounded-full border-[0.5px] border-[rgba(92,61,30,0.14)] pointer-events-none w-[160px] h-[160px] bottom-[100px] left-[60px]" />
      <div className="absolute rounded-full border-[0.5px] border-[rgba(92,61,30,0.11)] pointer-events-none w-[260px] h-[260px] bottom-[60px] left-[20px]" />
      <div className="absolute rounded-full border-[0.5px] border-[rgba(61,99,64,0.13)] pointer-events-none w-[120px] h-[120px] top-[30%] left-[45%]" />

      {/* Morphing blobs */}
      <div
        className="absolute pointer-events-none opacity-[0.10] w-[220px] h-[220px] right-[8%] bottom-[15%] animate-morph"
        style={{
          background: 'rgba(92,61,30,0.3)',
          animationDuration: '12s',
          borderRadius: '55% 45% 60% 40% / 40% 60% 45% 55%',
        }}
      />
      <div
        className="absolute pointer-events-none opacity-[0.08] w-[150px] h-[150px] left-[5%] top-[20%] animate-morph"
        style={{
          background: 'rgba(61,99,64,0.35)',
          animationDuration: '15s',
          borderRadius: '40% 60% 45% 55% / 55% 45% 60% 40%',
        }}
      />

      <SectionHeader
        tag="What We Offer"
        heading={<>Care across every <em className="text-brown-mid italic">specialty</em></>}
        subtitle="From preventive wellness to advanced diagnostics — all under one roof, rooted in compassion. Our state-of-the-art facilities ensure that you receive precise, timely, and holistic care for any condition."
        variant="light"
      />

      {/* ── Scrollable card grid ── */}
      <div
        className="reveal w-full"
        style={{
          maxHeight: teaser ? 'none' : '520px',
          overflowY: teaser ? 'visible' : 'auto',
          paddingRight: teaser ? '0' : '6px',
          /* thin custom scrollbar */
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(46,77,46,0.25) transparent',
        }}
      >
        <div className={`grid gap-3.5 ${teaser ? 'grid-cols-4' : 'grid-cols-4'}`}>
          {items.map((svc, i) => (
            <div
              key={svc.title}
              className="bg-linear-to-br from-[rgba(255,255,255,0.7)] to-[rgba(240,232,216,0.5)] border-[0.5px] border-line-light rounded-[14px] px-6 py-7 animate-float transition-transform duration-300 hover:-translate-y-[9px]"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              <div className="w-10 h-10 rounded-[10px] bg-[rgba(61,99,64,0.08)] border-[0.5px] border-[rgba(61,99,64,0.15)] flex items-center justify-center mb-5">
                {serviceIcons[svc.title] ?? (
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                  </svg>
                )}
              </div>
              <h3 className="font-playfair text-[1.05rem] font-medium text-text-on-light mb-3">
                {svc.title}
              </h3>
              <p className="font-inter text-[11px] tracking-[0.06em] leading-8 text-muted-light mb-5">
                {svc.desc}
              </p>
              <span className="group/arrow inline-flex items-center gap-1.5 font-inter text-[10px] tracking-[0.14em] text-forest-mid uppercase">
                Learn more
                <span className="relative inline-block w-4 h-0 border-t-[0.5px] border-forest-mid transition-[width] duration-[250ms] group-hover/arrow:w-6 after:content-[''] after:absolute after:right-0 after:-top-[3px] after:w-[5px] after:h-[5px] after:border-r-[0.5px] after:border-t-[0.5px] after:border-forest-mid after:rotate-45" />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Count + scroll hint shown in home-page teaser */}
      {teaser && (
        <div className="reveal mt-4 flex items-center gap-3">
          <span className="font-inter text-[9px] tracking-[0.22em] text-muted-light uppercase">
            {servicesMeta.length} specialties available
          </span>
          <div className="flex-1 border-t-[0.5px] border-line-light" />
        </div>
      )}

      {/* CTA */}
      <div className="reveal mt-10">
        <Link
          href="/services"
          className="btn-forest shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
