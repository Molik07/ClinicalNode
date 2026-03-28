import Link from 'next/link';
import { footerColumns } from '@/lib/data';

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t-[0.5px] border-line-dark px-12 pt-16 pb-8"
      style={{
        background: `
          radial-gradient(ellipse 600px 400px at 90% 10%, rgba(92,61,30,0.20) 0%, transparent 70%),
          var(--color-bg-footer)
        `,
      }}
    >
      {/* Main Grid */}
      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-12">
        {/* Brand column */}
        <div>
          <div className="font-playfair text-[1.15rem] font-medium text-text-on-dark mb-4">
            Verdana<em className="text-forest-faint italic"> Health</em>
          </div>
          <p className="font-bebas text-[11px] tracking-[0.06em] leading-8 text-muted-dark max-w-[220px]">
            Compassionate, evidence-based care rooted in nature and science since 2004.
          </p>
        </div>

        {/* Link columns */}
        {footerColumns.map((col) => (
          <div key={col.title}>
            <div className="font-bebas text-[9px] tracking-[0.22em] text-[rgba(184,204,176,0.35)] uppercase mb-5">
              {col.title}
            </div>
            <div className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-bebas text-[11px] tracking-[0.06em] text-[rgba(184,204,176,0.48)] uppercase transition-colors duration-150 hover:text-text-on-dark"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t-[0.5px] border-line-dark pt-6 flex justify-between items-center">
        <span className="font-bebas text-[9.5px] tracking-[0.08em] text-[rgba(184,204,176,0.25)] uppercase">
          © 2026 Verdana Health. All rights reserved.
        </span>
        <div className="flex gap-[18px]">
          {['Privacy Policy', 'Terms of Use', 'Accessibility'].map((text) => (
            <span
              key={text}
              className="font-bebas text-[9.5px] tracking-[0.08em] text-[rgba(184,204,176,0.25)] uppercase transition-colors duration-150 hover:text-[rgba(184,204,176,0.5)] cursor-pointer"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
