'use client';

import Link from 'next/link';
import { useRef } from 'react';
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

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const filterId = 'liquidGlass';

  return (
    <>
      <nav
        ref={navRef}
        id={`${filterId}-target`}
        className="
          fixed top-0 left-0 z-[200]
          flex items-center
          px-12 h-[60px] w-full
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
          Verdana<em className="text-forest-faint italic"> Health</em>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-0">
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
      </nav>
    </>
  );
}
