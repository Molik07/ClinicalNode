'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { doctors } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';

interface TeamProps {
  teaser?: boolean;
}

export default function Team({ teaser = false }: TeamProps) {
  const ref = useScrollReveal();
  const items = teaser ? doctors.slice(0, 2) : doctors;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 px-12 border-t-[0.5px] border-[rgba(36,59,36,0.07)]"
      style={{
        background: `
          radial-gradient(ellipse 500px 400px at 85% 15%, rgba(36,59,36,0.10) 0%, transparent 65%),
          radial-gradient(ellipse 500px 400px at 10% 85%, rgba(92,61,30,0.10) 0%, transparent 65%),
          var(--color-bg-s4)
        `,
      }}
    >
      <SectionHeader
        tag="Our Specialists"
        heading={<>Doctors who <em className="text-brown-mid italic">listen first</em></>}
        subtitle="Our team brings expertise, warmth, and a genuine commitment to every patient&apos;s journey."
        variant="light"
      />

      <div className={`reveal grid gap-4 ${teaser ? 'grid-cols-2 max-w-[66%]' : 'grid-cols-3'}`}>
        {items.map((doc, i) => (
          <div
            key={doc.name}
            className="bg-linear-to-br from-[rgba(255,255,255,0.65)] to-[rgba(232,222,205,0.5)] border-[0.5px] border-line-light rounded-[14px] px-7 py-8 animate-float transition-transform duration-300 hover:-translate-y-[9px]"
            style={{ animationDelay: `${i * 0.8}s` }}
          >
            {/* Avatar */}
            <div className="w-[50px] h-[50px] rounded-full bg-[rgba(61,99,64,0.1)] border-[0.5px] border-[rgba(61,99,64,0.15)] flex items-center justify-center mb-5">
              <span className="font-playfair text-base font-medium text-forest-mid">
                {doc.initials}
              </span>
            </div>

            <div className="font-playfair text-[1.05rem] font-medium text-text-on-light mb-1">
              {doc.name}
            </div>
            <div className="font-bebas text-[9.5px] tracking-[0.1em] text-muted-light uppercase mb-4">
              {doc.role}
            </div>

            <hr className="h-0 border-none border-t-[0.5px] border-line-light my-4" />

            {/* Meta rows */}
            {[
              { label: 'Experience', value: doc.experience },
              { label: 'Qualification', value: doc.qualification },
              { label: 'Languages', value: doc.languages },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-center py-1.5">
                <span className="font-bebas text-[9px] tracking-[0.12em] text-[rgba(30,42,30,0.3)] uppercase">
                  {row.label}
                </span>
                <span className="font-bebas text-[10.5px] tracking-[0.06em] text-text-on-light uppercase">
                  {row.value}
                </span>
              </div>
            ))}

            {/* Availability badge */}
            <div className="inline-flex items-center mt-4 px-3.5 py-1.5 rounded-[20px] bg-[rgba(61,99,64,0.08)] border-[0.5px] border-[rgba(61,99,64,0.12)]">
              <span className="font-bebas text-[9px] tracking-[0.14em] text-forest-mid uppercase">
                {doc.availability}
              </span>
            </div>
          </div>
        ))}
      </div>

      {teaser && (
        <div className="reveal mt-10">
          <Link
            href="/#team"
            className="font-bebas text-[11px] tracking-[0.14em] uppercase text-forest-mid border-b-[0.5px] border-forest-mid pb-[2px]"
          >
            Meet the Team →
          </Link>
        </div>
      )}
    </section>
  );
}
