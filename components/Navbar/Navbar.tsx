'use client';

import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { navDropdowns } from '@/lib/data';
import LiquidGlass from './LiquidGlass';

function DropdownMenu({ title, items }: { title: string, items: { label: string, href: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const safeTitle = title.replace(/\s+/g, '-').toLowerCase();
  const filterId = `liquidGlass-${safeTitle}`;

  return (
    <li className="relative px-3.5 group">
      <span className="font-inter text-[10.5px] tracking-[0.15em] text-[rgba(240,232,216,0.75)] uppercase transition-colors duration-200 flex items-center gap-[5px] cursor-pointer py-5 hover:text-beige">
        {title}
        {/* Animated chevron */}
        <span className="inline-block w-[5px] h-[5px] border-r-[0.5px] border-b-[0.5px] border-current rotate-45 transition-transform duration-200 group-hover:-rotate-[135deg]" />
      </span>

      {/* Dropdown container */}
      <div 
        ref={ref}
        id={`${filterId}-target`}
        className="
          absolute top-full left-0 min-w-[180px] 
          border-[0.5px] border-[rgba(184,204,176,0.15)] 
          rounded-b-[10px] py-2.5 
          opacity-0 -translate-y-1.5 pointer-events-none 
          transition-all duration-200 
          group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
          liquid-glass-backdrop
          shadow-[0_8px_32px_rgba(0,0,0,0.30),_0_1px_0_rgba(255,255,255,0.06)_inset]
        "
        style={{
          background: 'rgba(20, 36, 20, 0.65)',
        }}
      >
        <LiquidGlass targetRef={ref} filterId={filterId} borderRadius={10} />
        
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block px-[18px] py-2 font-inter text-[10.5px] tracking-[0.12em] text-[rgba(184,204,176,0.6)] uppercase transition-colors duration-150 hover:text-beige"
            onClick={(e) => e.preventDefault()}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </li>
  );
}

/* ── Mobile nav link with accordion ── */
function MobileNavGroup({ title, items, onClose }: { title: string, items: { label: string, href: string }[], onClose: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-[0.5px] border-[rgba(184,204,176,0.1)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-inter text-[13px] tracking-[0.15em] text-[rgba(240,232,216,0.8)] uppercase"
      >
        {title}
        <span className={`inline-block w-[6px] h-[6px] border-r-[1px] border-b-[1px] border-current transition-transform duration-300 ${open ? '-rotate-[135deg]' : 'rotate-45'}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[300px] pb-3' : 'max-h-0'}`}>
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block py-2 pl-4 font-inter text-[11px] tracking-[0.12em] text-[rgba(184,204,176,0.5)] uppercase transition-colors duration-150 hover:text-beige"
            onClick={() => onClose()}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const filterId = 'liquidGlass';
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        ref={navRef}
        id={`${filterId}-target`}
        className="
          fixed top-0 left-0 z-[200]
          flex items-center
          px-5 md:px-12 h-[60px] w-full
          rounded-b-[20px]
          border-[0.5px] border-t-0 border-[rgba(255,255,255,0.14)]
          shadow-[0_8px_32px_rgba(0,0,0,0.20),_0_1px_0_rgba(255,255,255,0.06)_inset]
          liquid-glass-backdrop
        "
        style={{ background: 'rgba(20, 36, 20, 0.65)' }}
      >
        <LiquidGlass targetRef={navRef} filterId={filterId} borderRadius={20} />

        {/* Logo */}
        <Link href="/" className="font-playfair text-[1.2rem] font-medium text-beige mr-auto shrink-0">
          Verdana<em className="text-forest-faint italic">Health</em>
        </Link>

        {/* Desktop Navigation Links — hidden on mobile */}
        <ul className="hidden lg:flex items-center gap-0">
          {Object.entries(navDropdowns).map(([title, items]) => (
            <DropdownMenu key={title} title={title} items={items} />
          ))}

          {/* Contact (no dropdown) */}
          <li className="relative px-3.5">
            <Link
              href="/#contact"
              className="font-inter text-[10.5px] tracking-[0.15em] text-[rgba(240,232,216,0.75)] uppercase transition-colors duration-200 flex items-center gap-[5px] cursor-pointer py-5 hover:text-beige"
              onClick={(e) => e.preventDefault()}
            >
              Contact
            </Link>
          </li>

          {/* Book Now CTA */}
          <li>
            <Link
              href="/#contact"
              className="
                bg-[rgba(240,232,216,0.9)] text-forest
                font-inter text-[10.5px] tracking-[0.15em] uppercase
                px-5 py-2 rounded-full ml-2.5
                border-[0.5px] border-[rgba(255,255,255,0.4)]
                transition-all duration-200
                hover:bg-white hover:-translate-y-px
                shadow-[0_2px_12px_rgba(0,0,0,0.12)]
              "
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile: Book Now + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/#contact"
            className="
              bg-[rgba(240,232,216,0.9)] text-forest
              font-inter text-[9px] tracking-[0.12em] uppercase
              px-4 py-1.5 rounded-full
              border-[0.5px] border-[rgba(255,255,255,0.4)]
              shadow-[0_2px_12px_rgba(0,0,0,0.12)]
            "
          >
            Book Now
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] bg-beige rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-beige rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-beige rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Full-Screen Menu Overlay ── */}
      <div
        className={`
          fixed inset-0 z-[199] lg:hidden
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        style={{
          background: 'rgba(20, 36, 20, 0.97)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        <div className={`
          pt-24 px-8 pb-12 h-full overflow-y-auto
          transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${mobileOpen ? 'translate-y-0' : '-translate-y-8'}
        `}>
          {/* Nav groups with accordion */}
          {Object.entries(navDropdowns).map(([title, items]) => (
            <MobileNavGroup key={title} title={title} items={items} onClose={() => setMobileOpen(false)} />
          ))}

          {/* Contact link */}
          <div className="border-b-[0.5px] border-[rgba(184,204,176,0.1)]">
            <Link
              href="/#contact"
              className="block py-4 font-inter text-[13px] tracking-[0.15em] text-[rgba(240,232,216,0.8)] uppercase"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* Mobile CTA */}
          <div className="mt-10 flex flex-col gap-4">
            <Link
              href="/#contact"
              className="btn-beige text-center"
              onClick={() => setMobileOpen(false)}
            >
              Book Appointment
            </Link>
            <Link
              href="tel:+911234567890"
              className="btn-ghost-light text-center"
              onClick={() => setMobileOpen(false)}
            >
              Call Us
            </Link>
          </div>

          {/* Brand footer in mobile menu */}
          <div className="mt-auto pt-12">
            <p className="font-inter text-[9px] tracking-[0.15em] text-[rgba(184,204,176,0.25)] uppercase">
              © 2026 Verdana Health
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
