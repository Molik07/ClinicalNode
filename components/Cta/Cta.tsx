'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Cta() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-screen md:min-h-[120vh] py-16 md:py-28 px-5 md:px-12 border-t-[0.5px] border-[rgba(36,59,36,0.08)] flex items-center justify-center selection:bg-[#9e6b3a] selection:text-[#faf6ef]"
      style={{
        background: `
          radial-gradient(ellipse 500px 400px at 5% 50%, rgba(36,59,36,0.10) 0%, transparent 65%),
          radial-gradient(ellipse 500px 400px at 95% 50%, rgba(92,61,30,0.10) 0%, transparent 65%),
          var(--color-bg-s6)
        `,
      }}
    >
      {/* Decorative rings — neutral light tones, larger & more visible */}
      {/* Top-right cluster */}
      <div className="absolute rounded-full border-[0.5px] border-[rgba(61,99,64,0.20)] pointer-events-none w-[380px] h-[380px] -top-[100px] -right-[80px]" />
      <div className="hidden sm:block absolute rounded-full border-[0.5px] border-[rgba(61,99,64,0.14)] pointer-events-none w-[580px] h-[580px] -top-[180px] -right-[160px]" />
      <div className="hidden md:block absolute rounded-full border-[0.5px] border-[rgba(61,99,64,0.08)] pointer-events-none w-[780px] h-[780px] -top-[260px] -right-[240px]" />

      {/* Bottom-left cluster */}
      <div className="absolute rounded-full border-[0.5px] border-[rgba(92,61,30,0.20)] pointer-events-none w-[300px] h-[300px] -bottom-[80px] -left-[80px]" />
      <div className="hidden sm:block absolute rounded-full border-[0.5px] border-[rgba(92,61,30,0.14)] pointer-events-none w-[480px] h-[480px] -bottom-[140px] -left-[150px]" />

      {/* Floating accent ring */}
      <div className="hidden md:block absolute rounded-full border-[0.5px] border-[rgba(92,61,30,0.14)] pointer-events-none w-[140px] h-[140px] top-[42%] left-[38%]" />

      {/* Morphing blobs */}
      <div
        className="absolute pointer-events-none opacity-[0.12] w-[150px] md:w-[240px] h-[150px] md:h-[240px] right-[5%] bottom-[18%] animate-morph"
        style={{
          background: 'rgba(92,61,30,0.28)',
          animationDuration: '13s',
          borderRadius: '50% 50% 40% 60% / 60% 40% 50% 50%',
        }}
      />
      <div
        className="absolute pointer-events-none opacity-[0.10] w-[100px] md:w-[170px] h-[100px] md:h-[170px] left-[8%] top-[25%] animate-morph"
        style={{
          background: 'rgba(61,99,64,0.3)',
          animationDuration: '10s',
          borderRadius: '60% 40% 45% 55% / 45% 55% 60% 40%',
        }}
      />

      {/* Phone Receiver Graphic — smaller on mobile to avoid text collision */}
      <div className="absolute top-[10%] right-0 translate-x-[30%] sm:translate-x-[22%] lg:translate-x-[22%] w-[200px] sm:w-[350px] md:w-[450px] lg:w-[600px] xl:w-[750px] pointer-events-none select-none z-0 mix-blend-multiply opacity-50 sm:opacity-70 md:opacity-90">
        <img 
          src="/receiver_clean.webp" 
          alt="Vintage Telephone Receiver" 
          className="w-full h-auto object-contain select-none pointer-events-none"
        />
      </div>

      <div className="relative z-10 reveal flex flex-col items-center text-center max-w-[800px]">
        <h2 className="font-playfair text-[clamp(1.8rem,5vw,3.8rem)] font-medium leading-[1.1] text-text-on-light mb-6 md:mb-8">
          Ready to take the next
          <br />
          step in <em className="text-brown-mid italic">your care?</em>
        </h2>
        <p className="font-inter text-[11px] md:text-xs tracking-[0.06em] leading-7 md:leading-8 text-muted-light max-w-[620px] mb-10 md:mb-14">
          Book an appointment online or call us — we&apos;ll find a time that
          works for you. Over the years, we&apos;ve helped thousands of patients achieve their health goals. Join our community and experience care that puts you first.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center">
          <Link 
            href="/#contact" 
            className="btn-forest"
            style={{ padding: '16px 36px', fontSize: '13px', letterSpacing: '0.18em' }}
          >
            Book Appointment
          </Link>
          <Link href="/#contact" className="btn-ghost-mid">
            Call Us
          </Link>
        </div>
      </div>
    </section>
  );
}
