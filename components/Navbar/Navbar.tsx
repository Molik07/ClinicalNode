'use client';

import Link from 'next/link';
import { navDropdowns } from '@/lib/data';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] z-200 flex items-center px-12 bg-[rgba(26,46,26,0.92)] backdrop-blur-[16px] border-b-[0.5px] border-line-dark">
      {/* Logo */}
      <Link href="/" className="font-playfair text-[1.2rem] font-medium text-beige mr-auto">
        Verdana<em className="text-forest-faint italic">  Health</em>
      </Link>

      {/* Navigation Links */}
      <ul className="flex items-center gap-0">
        {Object.entries(navDropdowns).map(([title, items]) => (
          <li key={title} className="relative px-3.5 group">
            <span className="font-bebas text-[10.5px] tracking-[0.15em] text-[rgba(184,204,176,0.7)] uppercase transition-colors duration-200 flex items-center gap-[5px] cursor-pointer py-5 hover:text-beige">
              {title}
              {/* Chevron */}
              <span className="inline-block w-[5px] h-[5px] border-r-[0.5px] border-b-[0.5px] border-current rotate-45 transition-transform duration-200 group-hover:-rotate-[135deg]" />
            </span>

            {/* Dropdown */}
            <div className="absolute top-full left-0 min-w-[180px] bg-[rgba(22,40,22,0.97)] border-[0.5px] border-line-dark rounded-b-[10px] py-2.5 opacity-0 -translate-y-1.5 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-[18px] py-2 font-bebas text-[10.5px] tracking-[0.12em] text-[rgba(184,204,176,0.6)] uppercase transition-colors duration-150 hover:text-beige"
                  onClick={(e) => e.preventDefault()}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </li>
        ))}

        {/* Contact (no dropdown) */}
        <li className="relative px-3.5">
          <Link
            href="/#contact"
            className="font-bebas text-[10.5px] tracking-[0.15em] text-[rgba(184,204,176,0.7)] uppercase transition-colors duration-200 flex items-center gap-[5px] cursor-pointer py-5 hover:text-beige"
            onClick={(e) => e.preventDefault()}
          >
            Contact
          </Link>
        </li>

        {/* Book Now CTA */}
        <li>
          <Link
            href="/#contact"
            className="bg-beige text-forest font-bebas text-[10.5px] tracking-[0.15em] uppercase px-5 py-2 rounded-full transition-all duration-150 ml-2.5 hover:bg-white hover:-translate-y-px"
          >
            Book Now
          </Link>
        </li>
      </ul>
    </nav>
  );
}
