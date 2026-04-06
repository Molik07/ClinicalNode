'use client';

import { useRef, useEffect } from 'react';
import { testimonials } from '@/lib/data';

// Increased to 47 for denser visuals, now that the graphics are optimized
const NUM_CARDS = 45;
const FOV = 850;
const Z_SPAWN = 3000;
const Z_KILL = 40;
const SPREAD_X = 6000;
const SPREAD_Y = 4000;

interface Particle {
  x: number;
  y: number;
  z: number;
  speed: number;
  tIdx: number;
}

function spawn(zStart?: number): Particle {
  const z = zStart ?? Z_SPAWN;
  return {
    x: (Math.random() - 0.5) * SPREAD_X,
    y: (Math.random() - 0.5) * SPREAD_Y,
    z: z,
    speed: 1.0 + Math.random() * 2.5,
    tIdx: Math.floor(Math.random() * testimonials.length),
  };
}

function fillCard(
  i: number,
  tIdx: number,
  quoteRefs: React.MutableRefObject<(HTMLParagraphElement | null)[]>,
  nameRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>,
  sinceRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>,
  initRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>,
) {
  const t = testimonials[tIdx];
  if (quoteRefs.current[i]) quoteRefs.current[i]!.textContent = t.quote;
  if (nameRefs.current[i]) nameRefs.current[i]!.textContent = t.name;
  if (sinceRefs.current[i]) sinceRefs.current[i]!.textContent = t.since;
  if (initRefs.current[i]) initRefs.current[i]!.textContent = t.initials;
}

export default function TestimonialAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  const cardRefs = useRef<(HTMLDivElement | null)[]>(Array(NUM_CARDS).fill(null));
  const quoteRefs = useRef<(HTMLParagraphElement | null)[]>(Array(NUM_CARDS).fill(null));
  const nameRefs = useRef<(HTMLSpanElement | null)[]>(Array(NUM_CARDS).fill(null));
  const sinceRefs = useRef<(HTMLSpanElement | null)[]>(Array(NUM_CARDS).fill(null));
  const initRefs = useRef<(HTMLSpanElement | null)[]>(Array(NUM_CARDS).fill(null));
  const animRef = useRef<number>(0);

  useEffect(() => {
    particlesRef.current = Array.from({ length: NUM_CARDS }, (_, i) => {
      const p = spawn(Z_KILL + ((i + 0.5) / NUM_CARDS) * (Z_SPAWN - Z_KILL));
      fillCard(i, p.tIdx, quoteRefs, nameRefs, sinceRefs, initRefs);
      return p;
    });

    let last = 0;
    let isVisible = false;

    function tick(ts: number) {
      if (!isVisible) return;
      const dt = last ? Math.min(ts - last, 33) : 16;
      last = ts;

      const el = containerRef.current;
      if (!el) { animRef.current = requestAnimationFrame(tick); return; }

      const cx = el.clientWidth / 2;
      const cy = el.clientHeight / 2;

      const len = particlesRef.current.length;
      for (let i = 0; i < len; i++) {
        const p = particlesRef.current[i];
        const card = cardRefs.current[i];
        if (!card) continue;

        p.z -= p.speed * (dt / 16);

        if (p.z <= Z_KILL) {
          const np = spawn();
          particlesRef.current[i] = np;
          fillCard(i, np.tIdx, quoteRefs, nameRefs, sinceRefs, initRefs);
          card.style.opacity = '0';
          continue;
        }

        const scale = FOV / p.z;
        const screenX = cx + p.x * scale;
        const screenY = cy + p.y * scale;

        const fadeIn = Math.min(1, (Z_SPAWN - p.z) / 600);
        const fadeOut = Math.min(1, (p.z - Z_KILL) / 220);
        const opacity = Math.max(0, Math.min(1, fadeIn * fadeOut));

        card.style.opacity = String(opacity);
        card.style.transform = `translate3d(${screenX}px,${screenY}px,0) translate(-50%,-50%) scale(${scale})`;
      }

      animRef.current = requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          last = 0; // Reset last dt
          animRef.current = requestAnimationFrame(tick);
        } else {
          cancelAnimationFrame(animRef.current);
        }
      },
      { threshold: 0.01 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
    >
      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(ellipse 75% 75% at 50% 50%, rgba(74, 48, 24, 0) 40%, var(--color-bg-s5) 100%)
          `,
        }}
      />

      {Array.from({ length: NUM_CARDS }, (_, i) => (
        <div
          key={i}
          ref={(el) => { cardRefs.current[i] = el; }}
          className="absolute top-0 left-0"
          style={{
            width: '400px',
            background: 'rgba(255,255,255,0.07)',
            border: '0.5px solid rgba(212,184,150,0.18)',
            borderRadius: '16px',
            padding: '30px 32px',
            opacity: 0,
            transformOrigin: 'center center',
          }}
        >
          <div
            className="font-playfair italic select-none leading-none mb-2"
            style={{ fontSize: '2.4rem', color: 'rgba(212,184,150,0.22)' }}
          >
            &ldquo;
          </div>

          <p
            ref={(el) => { quoteRefs.current[i] = el; }}
            className="font-playfair italic leading-[1.8]"
            style={{ fontSize: '1rem', color: 'rgba(236,229,216,0.84)' }}
          />

          <div
            className="my-5"
            style={{ borderTop: '0.5px solid rgba(212,184,150,0.1)' }}
          />

          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-center shrink-0 rounded-full"
              style={{
                width: '36px',
                height: '36px',
                background: 'rgba(212,184,150,0.14)',
                border: '0.5px solid rgba(212,184,150,0.22)',
              }}
            >
              <span
                ref={(el) => { initRefs.current[i] = el; }}
                className="font-playfair font-medium"
                style={{ fontSize: '0.8rem', color: 'var(--color-brown-muted)' }}
              />
            </div>
            <div className="flex flex-col gap-[3px]">
              <span
                ref={(el) => { nameRefs.current[i] = el; }}
                className="font-inter uppercase"
                style={{ fontSize: '12px', letterSpacing: '0.12em', color: 'var(--color-brown-muted)' }}
              />
              <span
                ref={(el) => { sinceRefs.current[i] = el; }}
                className="font-inter uppercase"
                style={{ fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(212,184,150,0.32)' }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
