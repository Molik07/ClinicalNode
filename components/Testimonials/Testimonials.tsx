'use client';

import Link from 'next/link';
import TestimonialAnimation from './TestimonialAnimation';

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center px-5 py-12 md:p-12"
      style={{
        minHeight: '100vh',
        backgroundColor: '#1c1108',
        background: `
          radial-gradient(ellipse 700px 600px at 5% 40%, rgba(30,51,32,0.28) 0%, transparent 65%),
          radial-gradient(ellipse 600px 500px at 90% 85%, rgba(61,99,64,0.22) 0%, transparent 65%),
          var(--color-bg-s5, #1c1108)
        `,
      }}
    >
      {/* ── Decorative rings ── */}
      <div className="absolute z-0 rounded-full border-[0.5px] border-[rgba(212,184,150,0.06)] pointer-events-none w-[340px] h-[340px] -top-[70px] -left-[100px]" />
      <div className="absolute z-0 rounded-full border-[0.5px] border-[rgba(212,184,150,0.04)] pointer-events-none w-[560px] h-[560px] -top-[150px] -left-[180px]" />
      <div className="absolute z-0 rounded-full border-[0.5px] border-[rgba(184,204,176,0.04)] pointer-events-none w-[280px] h-[280px] bottom-[50px] right-[4%]" />

      {/* ── Morphing blobs ── */}
      <div
        className="absolute z-0 pointer-events-none opacity-[0.10] w-[200px] h-[200px] left-[8%] bottom-[18%] animate-morph"
        style={{
          background: 'rgba(212,184,150,0.22)',
          animationDuration: '12s',
          borderRadius: '55% 45% 60% 40% / 40% 60% 45% 55%',
        }}
      />
      <div
        className="absolute z-0 pointer-events-none opacity-[0.08] w-[150px] h-[150px] right-[8%] top-[22%] animate-morph"
        style={{
          background: 'rgba(61,99,64,0.4)',
          animationDuration: '15s',
          borderRadius: '40% 60% 55% 45% / 55% 45% 60% 40%',
        }}
      />

      {/* ── 3-D depth field extracted to its own component ── */}
      <TestimonialAnimation />

      {/* ── Section header — Centered in the section ── */}
      {/* Removed pointer-events-none so users can highlight text */}
      <div className="relative z-20 text-center flex flex-col items-center">

        <h2 className="font-playfair text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.1] text-text-on-dark mb-5">
          What our patients<br />
          <em className="text-forest-faint italic">say about us</em>
        </h2>
        <p className="font-inter text-xs tracking-[0.06em] leading-8 text-[rgba(236,229,216,0.65)] max-w-[500px]">
          Real stories from real people — flying toward you, just like their trust in us.
        </p>
      </div>

      {/* ── CTA ── */}
      <div className="absolute bottom-16 z-20">
        <Link
          href="/testimonials"
          className="pointer-events-auto inline-flex items-center justify-center rounded-full border-[0.5px] border-text-on-dark/40 bg-transparent px-[32px] py-[14px] font-inter text-[12px] uppercase tracking-[0.14em] text-text-on-dark transition-all duration-300 hover:border-text-on-dark hover:bg-text-on-dark/10"
        >
          Read All Stories
        </Link>
      </div>
    </section>
  );
}
