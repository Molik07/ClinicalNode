'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { whyUsItems } from '@/lib/data';

export default function WhyUs() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 px-12"
      style={{
        background: `
          radial-gradient(ellipse 600px 500px at 85% 15%, rgba(92,61,30,0.22) 0%, transparent 65%),
          radial-gradient(ellipse 500px 500px at 15% 85%, rgba(61,99,64,0.20) 0%, transparent 65%),
          var(--color-bg-s3)
        `,
      }}
    >
      <div className="grid grid-cols-2 gap-20 items-center">
        {/* Left — Heading & CTA */}
        <div>
          <p className="reveal font-bebas text-[9.5px] tracking-[0.25em] text-forest-faint/60 uppercase mb-4">
            Why Patients Choose Us
          </p>
          <h2 className="reveal font-playfair text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-[1.15] text-text-on-dark mb-5">
            A clinic built on
            <br />
            <em className="text-brown-muted italic">trust &amp; transparency</em>
          </h2>
          <p className="reveal font-bebas text-xs tracking-[0.06em] leading-8 text-muted-dark max-w-[440px] mb-8">
            We believe great healthcare begins with listening. Every decision we
            make is rooted in your wellbeing — not just your symptoms.
          </p>
          <div className="reveal">
            <Link href="/#contact" className="btn-beige">
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Right — 2×2 Numbered Grid */}
        <div className="reveal border-[0.5px] border-[rgba(184,204,176,0.12)] rounded-[16px] overflow-hidden grid grid-cols-2">
          {whyUsItems.map((item, i) => (
            <div
              key={item.num}
              className={`p-8 bg-[rgba(255,255,255,0.03)] ${
                i === 0 ? 'border-r-[0.5px] border-b-[0.5px] border-line-dark' :
                i === 1 ? 'border-b-[0.5px] border-line-dark' :
                i === 2 ? 'border-r-[0.5px] border-line-dark' : ''
              }`}
            >
              <div className="font-playfair text-[2.2rem] font-medium text-brown-muted leading-none mb-3">
                {item.num}
              </div>
              <div className="font-bebas text-[11.5px] tracking-[0.08em] text-text-on-dark uppercase mb-2">
                {item.title}
              </div>
              <div className="font-bebas text-[10px] tracking-[0.06em] leading-8 text-muted-dark">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
