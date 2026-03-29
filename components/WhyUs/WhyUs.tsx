'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { whyUsItems } from '@/lib/data';

export default function WhyUs() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-[120vh] py-28 px-12 flex items-center justify-center"
      style={{
        background: `
          radial-gradient(ellipse 600px 500px at 85% 15%, rgba(92,61,30,0.22) 0%, transparent 65%),
          radial-gradient(ellipse 500px 500px at 15% 85%, rgba(61,99,64,0.20) 0%, transparent 65%),
          var(--color-bg-s3)
        `,
      }}
    >
      {/* Decorative rings — dark forest/brown tones */}
      <div className="absolute rounded-full border-[0.5px] border-[rgba(184,204,176,0.05)] pointer-events-none w-[300px] h-[300px] top-[10%] -right-[80px]" />
      <div className="absolute rounded-full border-[0.5px] border-[rgba(184,204,176,0.04)] pointer-events-none w-[480px] h-[480px] top-[5%] -right-[150px]" />
      <div className="absolute rounded-full border-[0.5px] border-[rgba(212,184,150,0.06)] pointer-events-none w-[180px] h-[180px] bottom-[80px] right-[30%]" />
      <div className="absolute rounded-full border-[0.5px] border-[rgba(184,204,176,0.04)] pointer-events-none w-[100px] h-[100px] top-[40%] left-[2%]" />
      <div className="absolute rounded-full border-[0.5px] border-[rgba(212,184,150,0.05)] pointer-events-none w-[200px] h-[200px] -bottom-[60px] left-[10%]" />

      {/* Morphing blobs */}
      <div
        className="absolute pointer-events-none opacity-[0.12] w-[200px] h-[200px] right-[3%] top-[25%] animate-morph"
        style={{
          background: 'rgba(158,107,58,0.3)',
          animationDuration: '14s',
          borderRadius: '50% 50% 60% 40% / 40% 60% 50% 50%',
        }}
      />
      <div
        className="absolute pointer-events-none opacity-[0.10] w-[140px] h-[140px] left-[3%] bottom-[20%] animate-morph"
        style={{
          background: 'rgba(61,99,64,0.35)',
          animationDuration: '11s',
          borderRadius: '60% 40% 50% 50% / 50% 50% 40% 60%',
        }}
      />

      <div className="grid grid-cols-2 gap-20 items-center w-full">
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
            make is rooted in your wellbeing — not just your symptoms. Our dedicated team of professionals ensures you receive the most advanced and compassionate care available, tailored to your unique lifestyle and needs.
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
