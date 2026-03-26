'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote:
      'The doctors here actually take time to understand you. I never felt rushed. It\u2019s the most human clinic experience I\u2019ve ever had.',
    name: 'Rohit Kapoor',
    initials: 'RK',
    since: 'Patient since 2019',
  },
  {
    quote:
      'Brought my daughter here for her first checkup and never looked back. Dr. Sharma is phenomenal with kids \u2014 calm, thorough, and kind.',
    name: 'Sunita Varma',
    initials: 'SV',
    since: 'Patient since 2021',
  },
  {
    quote:
      'Got same-day results for my bloodwork. The staff is warm, the facilities are spotless, and the whole experience felt very grounded.',
    name: 'Aditya Menon',
    initials: 'AM',
    since: 'Patient since 2022',
  },
];

interface TestimonialsProps {
  teaser?: boolean;
}

export default function Testimonials({ teaser = false }: TestimonialsProps) {
  const ref = useScrollReveal();
  const items = teaser ? testimonials.slice(0, 1) : testimonials;

  return (
    <section className={styles.section} ref={ref}>
      <p className={`${styles.tag} reveal`}>Patient Stories</p>
      <h2 className={`${styles.heading} reveal`}>
        What our patients <em className={styles.headingEm}>say about us</em>
      </h2>

      <div className={`${styles.grid} ${teaser ? styles.gridTeaser : ''} reveal`}>
        {items.map((t) => (
          <div key={t.name} className={styles.card}>
            <div className={styles.openQuote}>&ldquo;</div>
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.author}>
              <div className={styles.authorAvatar}>
                <span className={styles.authorInitials}>{t.initials}</span>
              </div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{t.name}</span>
                <span className={styles.authorSince}>{t.since}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {teaser && (
        <div className={`${styles.viewAll} reveal`}>
          <Link href="/#testimonials" className={styles.viewAllLink}>
            Read All Stories →
          </Link>
        </div>
      )}
    </section>
  );
}
