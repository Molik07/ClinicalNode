'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Cta() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 px-12 border-t-[0.5px] border-[rgba(36,59,36,0.08)]"
      style={{
        background: `
          radial-gradient(ellipse 500px 400px at 5% 50%, rgba(36,59,36,0.10) 0%, transparent 65%),
          radial-gradient(ellipse 500px 400px at 95% 50%, rgba(92,61,30,0.10) 0%, transparent 65%),
          var(--color-bg-s6)
        `,
      }}
    >
      <div className="reveal grid grid-cols-[1fr_auto] gap-16 items-center">
        <div>
          <h2 className="font-playfair text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-[1.15] text-text-on-light mb-4">
            Ready to take the next
            <br />
            step in <em className="text-brown-mid italic">your care?</em>
          </h2>
          <p className="font-bebas text-xs tracking-[0.06em] leading-8 text-muted-light max-w-[440px]">
            Book an appointment online or call us — we&apos;ll find a time that
            works for you.
          </p>
        </div>

        <div className="flex flex-col gap-3 items-end">
          <Link href="/#contact" className="btn-forest">
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
