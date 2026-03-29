'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[120vh] grid grid-cols-2 items-center px-12"
      style={{
        background: `
          radial-gradient(ellipse 700px 600px at 85% 40%, rgba(92,61,30,0.28) 0%, transparent 70%),
          radial-gradient(ellipse 500px 500px at 15% 85%, rgba(61,99,64,0.25) 0%, transparent 70%),
          var(--color-bg-hero)
        `,
      }}
    >
      {/* Decorative rings */}
      <div className="absolute rounded-full border-[0.5px] border-[rgba(184,204,176,0.06)] pointer-events-none w-[560px] h-[560px] -top-[120px] -right-[100px]" />
      <div className="absolute rounded-full border-[0.5px] border-[rgba(184,204,176,0.06)] pointer-events-none w-[860px] h-[860px] -top-[200px] -right-[200px]" />
      <div className="absolute rounded-full border-[0.5px] border-[rgba(184,204,176,0.06)] pointer-events-none w-[200px] h-[200px] bottom-[80px] left-[40px]" />
      <div className="absolute rounded-full border-[0.5px] border-[rgba(212,184,150,0.08)] pointer-events-none w-[180px] h-[180px] bottom-[60px] right-[120px]" />

      {/* Morphing blobs */}
      <div
        className="absolute pointer-events-none opacity-[0.18] w-[380px] h-[380px] right-[5%] top-[30%] animate-morph"
        style={{
          background: 'rgba(158,107,58,0.35)',
          animationDuration: '10s',
          borderRadius: '60% 40% 55% 45% / 45% 55% 40% 60%',
        }}
      />
      <div
        className="absolute pointer-events-none opacity-[0.18] w-[200px] h-[200px] left-[8%] bottom-[10%] animate-morph"
        style={{
          background: 'rgba(61,99,64,0.3)',
          animationDuration: '13s',
          borderRadius: '60% 40% 55% 45% / 45% 55% 40% 60%',
        }}
      />

      {/* Left column — Content */}
      <div className="relative z-[2] pt-[60px]">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 border-[0.5px] border-[rgba(184,204,176,0.25)] rounded-[20px] px-[18px] py-2 mb-8 animate-fade-up">
          <span className="w-[5px] h-[5px] rounded-full bg-forest-faint" />
          <span className="font-bebas text-[9.5px] tracking-[0.22em] text-forest-faint uppercase">
            Trusted Clinic · Est. 2004
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-playfair text-[clamp(2.8rem,4.8vw,3.8rem)] font-medium leading-[1.1] text-text-on-dark mb-6 animate-fade-up [animation-delay:0.1s]">
          Healing
          <br />
          rooted in
          <br />
          <em className="text-brown-muted italic">nature &amp; science</em>
        </h1>

        {/* Description */}
        <p className="font-bebas text-xs tracking-[0.06em] leading-8 text-muted-dark max-w-[400px] mb-8 animate-fade-up [animation-delay:0.2s]">
          Compassionate, evidence-based care for every stage of life — from
          routine checkups to complex diagnoses.
        </p>

        {/* Buttons */}
        <div className="flex gap-3.5 mb-0 animate-fade-up [animation-delay:0.3s]">
          <Link href="/#contact" className="btn-beige">
            Book Appointment
          </Link>
          <Link href="/#services" className="btn-ghost-light">
            Our Services
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="border-t-[0.5px] border-line-dark pt-8 mt-14 flex animate-fade-up [animation-delay:0.4s]">
          {[
            { value: '14k+', label: 'Patients Treated' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '20yr', label: 'Of Excellence' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 flex flex-col items-start ${i > 0 ? 'border-l-[0.5px] border-line-dark pl-6' : ''}`}
            >
              <span className="font-playfair text-[2rem] font-medium text-beige leading-[1.2]">
                {stat.value}
              </span>
              <span className="font-bebas text-[9px] tracking-[0.2em] text-muted-dark uppercase mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right column — Card Area (placeholder) */}
      <div className="relative z-[2] flex justify-center items-center pt-[60px]" />
    </section>
  );
}
