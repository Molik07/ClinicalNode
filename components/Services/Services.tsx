'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { servicesMeta } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';

/* SVG icons for each service — kept here because they're JSX */
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
};

interface ServicesProps {
  teaser?: boolean;
}

export default function Services({ teaser = false }: ServicesProps) {
  const ref = useScrollReveal();
  const items = teaser ? servicesMeta.slice(0, 2) : servicesMeta;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 px-12 border-t-[0.5px] border-[rgba(36,59,36,0.08)]"
      style={{
        background: `
          radial-gradient(ellipse 600px 500px at 5% 50%, rgba(36,59,36,0.07) 0%, transparent 65%),
          radial-gradient(ellipse 500px 400px at 90% 85%, rgba(92,61,30,0.09) 0%, transparent 65%),
          var(--color-bg-s2)
        `,
      }}
    >
      <SectionHeader
        tag="What We Offer"
        heading={<>Care across every <em className="text-brown-mid italic">specialty</em></>}
        subtitle="From preventive wellness to advanced diagnostics — all under one roof, rooted in compassion."
        variant="light"
      />

      <div className={`reveal grid gap-3.5 ${teaser ? 'grid-cols-2 max-w-[50%]' : 'grid-cols-4'}`}>
        {items.map((svc, i) => (
          <div
            key={svc.title}
            className="bg-linear-to-br from-[rgba(255,255,255,0.7)] to-[rgba(240,232,216,0.5)] border-[0.5px] border-line-light rounded-[14px] px-6 py-7 animate-float transition-transform duration-300 hover:-translate-y-[9px]"
            style={{ animationDelay: `${i * 0.8}s` }}
          >
            <div className="w-10 h-10 rounded-[10px] bg-[rgba(61,99,64,0.08)] border-[0.5px] border-[rgba(61,99,64,0.15)] flex items-center justify-center mb-5">
              {serviceIcons[svc.title]}
            </div>
            <h3 className="font-playfair text-[1.05rem] font-medium text-text-on-light mb-3">
              {svc.title}
            </h3>
            <p className="font-bebas text-[11px] tracking-[0.06em] leading-8 text-muted-light mb-5">
              {svc.desc}
            </p>
            <span className="group/arrow inline-flex items-center gap-1.5 font-bebas text-[10px] tracking-[0.14em] text-forest-mid uppercase">
              Learn more
              <span className="relative inline-block w-4 h-0 border-t-[0.5px] border-forest-mid transition-[width] duration-[250ms] group-hover/arrow:w-6 after:content-[''] after:absolute after:right-0 after:-top-[3px] after:w-[5px] after:h-[5px] after:border-r-[0.5px] after:border-t-[0.5px] after:border-forest-mid after:rotate-45" />
            </span>
          </div>
        ))}
      </div>

      {teaser && (
        <div className="reveal mt-10">
          <Link
            href="/#services"
            className="font-bebas text-[11px] tracking-[0.14em] uppercase text-forest-mid border-b-[0.5px] border-forest-mid pb-[2px]"
          >
            View All Services →
          </Link>
        </div>
      )}
    </section>
  );
}
