'use client';

import { useEffect, useState, RefObject } from 'react';

// ─── Parameters ───────────────────────────────────────────────────────────────
const BEZEL_WIDTH      = 24;    // px — the curved edge region of the glass
const N1               = 1.0;   // air refractive index
const N2               = 1.8;   // glass refractive index
const SAMPLES          = 127;   // displacement samples per half-edge
const SPECULAR_OPACITY = 0.08;
const MAX_DISPLACEMENT = 48;    // px — feDisplacementMap scale value

// ─── Surface Function — Convex Squircle ───────────────────────────────────────
function surfaceFn(x: number): number {
  const c = Math.min(Math.max(x, 0), 1);
  return Math.pow(1 - Math.pow(1 - c, 4), 0.25);
}

// ─── Numerical Normal ─────────────────────────────────────────────────────────
function computeNormal(d: number): { x: number; y: number } {
  const delta = 0.001;
  const deriv = (surfaceFn(d + delta) - surfaceFn(d - delta)) / (2 * delta);
  const len   = Math.sqrt(deriv * deriv + 1);
  return { x: -deriv / len, y: 1 / len };
}

// ─── Snell's Law Refraction ───────────────────────────────────────────────────
function snellRefract(normal: { x: number; y: number }, n1: number, n2: number) {
  const cosI  = -(normal.x * 0 + normal.y * 1); // incident ray (0,1)
  const sinT2 = (n1 / n2) ** 2 * (1 - cosI * cosI);
  if (sinT2 > 1) return { dx: 0, dy: 0 };
  const cosT  = Math.sqrt(1 - sinT2);
  const ratio = n1 / n2;
  return {
    dx: ratio * 0 + (ratio * cosI - cosT) * normal.x - 0,
    dy: ratio * 1 + (ratio * cosI - cosT) * normal.y - 1,
  };
}

// ─── Pre-computed 1-D displacement profile ────────────────────────────────────
function computeDisplacementProfile(): Float32Array {
  const p = new Float32Array(SAMPLES);
  for (let i = 0; i < SAMPLES; i++) {
    const d = 1 - i / (SAMPLES - 1);
    const n = computeNormal(d);
    const { dx, dy } = snellRefract(n, N1, N2);
    p[i] = Math.sqrt(dx * dx + dy * dy);
  }
  return p;
}

// ─── Build Displacement Map ───────────────────────────────────────────────────
function buildDisplacementMap(width: number, height: number, borderRadius: number): string {
  const canvas = document.createElement('canvas');
  canvas.width  = width;
  canvas.height = height;
  const ctx  = canvas.getContext('2d')!;
  const data = ctx.createImageData(width, height);
  const buf  = data.data;
  const prof = computeDisplacementProfile();
  const r    = borderRadius;

  for (let py = 0; py < height; py++) {
    for (let px = 0; px < width; px++) {
      const idx = (py * width + px) * 4;
      let dx = 0, dy = 0;

      const dL = px, dR = width - 1 - px, dT = py, dB = height - 1 - py;

      const inTL = px < r && py < r;
      const inTR = px > width - r - 1 && py < r;
      const inBL = px < r && py > height - r - 1;
      const inBR = px > width - r - 1 && py > height - r - 1;

      if (inTL || inTR || inBL || inBR) {
        const cx      = inTL || inBL ? r : width - r - 1;
        const cy      = inTL || inTR ? r : height - r - 1;
        const radDist = Math.sqrt((px - cx) ** 2 + (py - cy) ** 2);
        const dEdge   = r - radDist;
        if (dEdge >= 0 && dEdge < BEZEL_WIDTH) {
          const t    = Math.max(0, Math.min(1, dEdge / BEZEL_WIDTH));
          const mag  = prof[Math.round((1 - t) * (SAMPLES - 1))];
          const nx   = (px - cx) / (radDist || 1);
          const ny   = (py - cy) / (radDist || 1);
          dx = -nx * mag;
          dy = -ny * mag;
        }
      } else {
        const edgeDist = Math.min(dL, dR, dT, dB);
        if (edgeDist < BEZEL_WIDTH) {
          const t   = edgeDist / BEZEL_WIDTH;
          const mag = prof[Math.round((1 - t) * (SAMPLES - 1))];
          if      (edgeDist === dL) { dx =  mag; dy = 0;    }
          else if (edgeDist === dR) { dx = -mag; dy = 0;    }
          else if (edgeDist === dT) { dx = 0;    dy =  mag; }
          else                      { dx = 0;    dy = -mag; }
        }
      }

      buf[idx]     = Math.round(Math.min(255, Math.max(1, 128 + dx * 127)));
      buf[idx + 1] = Math.round(Math.min(255, Math.max(1, 128 + dy * 127)));
      buf[idx + 2] = 128;
      buf[idx + 3] = 255;
    }
  }

  ctx.putImageData(data, 0, 0);
  return canvas.toDataURL('image/png');
}

// ─── Build Edge Mask ──────────────────────────────────────────────────────────
function buildEdgeMask(width: number, height: number, borderRadius: number): string {
  const canvas = document.createElement('canvas');
  canvas.width  = width;
  canvas.height = height;
  const ctx  = canvas.getContext('2d')!;
  const data = ctx.createImageData(width, height);
  const buf  = data.data;
  const r    = borderRadius;

  for (let py = 0; py < height; py++) {
    for (let px = 0; px < width; px++) {
      const idx = (py * width + px) * 4;

      const dL = px, dR = width - 1 - px, dT = py, dB = height - 1 - py;

      const inTL = px < r && py < r;
      const inTR = px > width - r - 1 && py < r;
      const inBL = px < r && py > height - r - 1;
      const inBR = px > width - r - 1 && py > height - r - 1;

      let alpha = 0;

      if (inTL || inTR || inBL || inBR) {
        const cx      = inTL || inBL ? r : width - r - 1;
        const cy      = inTL || inTR ? r : height - r - 1;
        const radDist = Math.sqrt((px - cx) ** 2 + (py - cy) ** 2);
        const dEdge   = r - radDist;
        if (dEdge >= 0 && dEdge < BEZEL_WIDTH) {
          const t = dEdge / BEZEL_WIDTH;
          alpha = Math.round((1 - t) * 255);
        }
      } else {
        const edgeDist = Math.min(dL, dR, dT, dB);
        if (edgeDist < BEZEL_WIDTH) {
          const t = edgeDist / BEZEL_WIDTH;
          alpha = Math.round((1 - t) * 255);
        }
      }

      buf[idx]     = 255;
      buf[idx + 1] = 255;
      buf[idx + 2] = 255;
      buf[idx + 3] = alpha;
    }
  }

  ctx.putImageData(data, 0, 0);
  return canvas.toDataURL('image/png');
}

// ─── Build Specular Highlight Map ─────────────────────────────────────────────
function buildSpecularMap(width: number, height: number): string {
  const canvas = document.createElement('canvas');
  canvas.width  = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  const lx  = width * 0.15;
  const rad = ctx.createRadialGradient(lx, 0, 0, lx, 0, Math.max(width, height) * 0.8);
  rad.addColorStop(0,    `rgba(255,255,255,${SPECULAR_OPACITY})`);
  rad.addColorStop(0.25, `rgba(255,255,255,${SPECULAR_OPACITY * 0.5})`);
  rad.addColorStop(0.6,  'rgba(255,255,255,0.02)');
  rad.addColorStop(1,    'rgba(255,255,255,0)');
  ctx.fillStyle = rad;
  ctx.fillRect(0, 0, width, height);
  return canvas.toDataURL('image/png');
}

// ─── React Component ──────────────────────────────────────────────────────────
interface LiquidGlassProps {
  targetRef: RefObject<HTMLElement | null>;
  filterId?: string;
  borderRadius?: number;
}

export default function LiquidGlass({ 
  targetRef, 
  filterId = 'liquidGlass', 
  borderRadius = 20 
}: LiquidGlassProps) {
  const [urls, setUrls] = useState<{ dispUrl: string; maskUrl: string; specUrl: string; w: number; h: number } | null>(null);

  useEffect(() => {
    function init() {
      const el = targetRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const w    = Math.round(rect.width);
      const h    = Math.round(rect.height);
      if (w === 0 || h === 0) return;

      const dispUrl = buildDisplacementMap(w, h, borderRadius);
      const maskUrl = buildEdgeMask(w, h, borderRadius);
      const specUrl = buildSpecularMap(w, h);
      setUrls({ dispUrl, maskUrl, specUrl, w, h });
    }

    init();
    
    // We strictly attach ResizeObserver to ensure map respects resizing
    const observer = new ResizeObserver(() => init());
    if (targetRef.current) observer.observe(targetRef.current);
    
    return () => observer.disconnect();
  }, [targetRef, borderRadius]);

  if (!urls) return null;

  return (
    <>
      <svg id={`${filterId}-svg`} style={{ position: 'fixed', width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: -1 }}>
        <defs>
            <filter
              id={filterId}
              x="0%" y="0%" width="100%" height="100%"
              colorInterpolationFilters="sRGB"
            >
              {/* 1. Load displacement map (edge physics encoded as RGBA) */}
              <feImage href={urls.dispUrl} x="0" y="0" width={urls.w} height={urls.h} result="dispMap" />

              {/* 2. Refract the entire backdrop through the displacement field */}
              <feDisplacementMap
                in="SourceGraphic"
                in2="dispMap"
                scale={MAX_DISPLACEMENT}
                xChannelSelector="R"
                yChannelSelector="G"
                result="displaced"
              />

              {/* 3. Load the edge-only alpha mask */}
              <feImage href={urls.maskUrl} x="0" y="0" width={urls.w} height={urls.h} result="edgeMask" />

              {/* 4. Clip the displaced image to only the edge bezel region */}
              <feComposite in="displaced" in2="edgeMask" operator="in" result="displacedEdges" />

              {/* 5. Clip the original (clear) source to the interior */}
              <feComposite in="SourceGraphic" in2="edgeMask" operator="out" result="clearInterior" />

              {/* 6. Combine: clear interior + refracted edges */}
              <feBlend in="clearInterior" in2="displacedEdges" mode="normal" result="combined" />

              {/* 7. Subtle specular rim highlight on top */}
              <feImage href={urls.specUrl} x="0" y="0" width={urls.w} height={urls.h} result="specular" />
              <feBlend in="combined" in2="specular" mode="screen" />
            </filter>
        </defs>
      </svg>
      {/* 
        Dynamically inject @supports specifically for this filter ID.
        We bind the dynamic URL to the ID, so the backdrop-filter falls back gracefully.
      */}
      <style>{`
        @supports (backdrop-filter: url(#${filterId})) {
          #${filterId}-target {
            backdrop-filter: url(#${filterId}) !important;
          }
        }
      `}</style>
    </>
  );
}
