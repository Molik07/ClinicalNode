'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { testimonials } from '@/lib/data';

interface TestimonialsProps {
  teaser?: boolean;
}

export default function Testimonials({ teaser = false }: TestimonialsProps) {
  const ref = useScrollReveal();
  const items = teaser ? testimonials.slice(0, 1) : testimonials;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 px-12"
      style={{
        background: `
          radial-gradient(ellipse 600px 500px at 5% 40%, rgba(30,51,32,0.25) 0%, transparent 65%),
          radial-gradient(ellipse 500px 400px at 90% 85%, rgba(61,99,64,0.20) 0%, transparent 65%),
          var(--color-bg-s5)
        `,
      }}
    >
      <p className="reveal font-bebas text-[9.5px] tracking-[0.25em] text-brown-muted/60 uppercase mb-4">
        Patient Stories
      </p>
      <h2 className="reveal font-playfair text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-[1.15] text-text-on-dark mb-0">
        What our patients <em className="text-forest-faint italic">say about us</em>
      </h2>

      <div className={`reveal grid gap-3.5 mt-12 ${teaser ? 'grid-cols-1 max-w-[33%]' : 'grid-cols-3'}`}>
        {items.map((t) => (
          <div
            key={t.name}
            className="bg-[rgba(255,255,255,0.05)] border-[0.5px] border-[rgba(212,184,150,0.15)] rounded-[14px] p-8"
          >
            {/* Open quote */}
            <div className="font-playfair italic text-[2.2rem] text-[rgba(212,184,150,0.2)] leading-none mb-2 select-none">
              &ldquo;
            </div>

            <p className="font-playfair italic text-[0.92rem] text-[rgba(236,229,216,0.82)] leading-[1.8] mb-6">
              {t.quote}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[rgba(212,184,150,0.15)] border-[0.5px] border-[rgba(212,184,150,0.2)] flex items-center justify-center">
                <span className="font-playfair text-[0.7rem] font-medium text-brown-muted">
                  {t.initials}
                </span>
              </div>
              <div className="flex flex-col gap-[2px]">
                <span className="font-bebas text-[10.5px] tracking-[0.1em] text-brown-muted uppercase">
                  {t.name}
                </span>
                <span className="font-bebas text-[9px] tracking-[0.1em] text-[rgba(212,184,150,0.3)] uppercase">
                  {t.since}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {teaser && (
        <div className="reveal mt-10">
          <Link
            href="/#testimonials"
            className="font-bebas text-[11px] tracking-[0.14em] uppercase text-brown-muted border-b-[0.5px] border-brown-muted pb-[2px]"
          >
            Read All Stories →
          </Link>
        </div>
      )}
    </section>
  );
}
