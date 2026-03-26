'use client';

import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = entry.target.querySelectorAll('.reveal');
            if (targets.length > 0) {
              targets.forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add('vis');
                }, index * 75);
              });
            } else {
              entry.target.classList.add('vis');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (children.length > 0) {
      observer.observe(el);
    } else {
      el.querySelectorAll('.reveal').length === 0 && el.classList.contains('reveal')
        ? observer.observe(el)
        : observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
