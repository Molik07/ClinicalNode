'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Services.module.css';

const services = [
  {
    title: 'General Medicine',
    desc: 'Routine checkups, chronic condition management, and preventive screenings for the whole family.',
    icon: (
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20" />
        <rect x="3" y="3" width="18" height="18" rx="4" />
      </svg>
    ),
  },
  {
    title: 'Paediatrics',
    desc: 'Growth milestones, vaccinations, and comprehensive child wellness from newborn to adolescent.',
    icon: (
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
    ),
  },
  {
    title: 'Diagnostics',
    desc: 'In-house lab, imaging, and pathology with same-day results and expert analysis.',
    icon: (
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v6l-2 8a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4l-2-8V2" />
        <line x1="9" y1="2" x2="15" y2="2" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Cardiology',
    desc: 'Heart health assessments, ECG, stress tests, and long-term cardiac care management plans.',
    icon: (
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="#2e4d2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

interface ServicesProps {
  teaser?: boolean;
}

export default function Services({ teaser = false }: ServicesProps) {
  const ref = useScrollReveal();
  const items = teaser ? services.slice(0, 2) : services;

  return (
    <section className={styles.section} ref={ref}>
      <p className={`${styles.tag} reveal`}>What We Offer</p>
      <h2 className={`${styles.heading} reveal`}>
        Care across every <em className={styles.headingEm}>specialty</em>
      </h2>
      <p className={`${styles.subtitle} reveal`}>
        From preventive wellness to advanced diagnostics — all under one roof,
        rooted in compassion.
      </p>

      <div className={`${styles.grid} ${teaser ? styles.gridTeaser : ''} reveal`}>
        {items.map((svc) => (
          <div key={svc.title} className={styles.card}>
            <div className={styles.iconBox}>{svc.icon}</div>
            <h3 className={styles.cardTitle}>{svc.title}</h3>
            <p className={styles.cardDesc}>{svc.desc}</p>
            <span className={styles.learnMore}>
              Learn more <span className={styles.arrow} />
            </span>
          </div>
        ))}
      </div>

      {teaser && (
        <div className={`${styles.viewAll} reveal`}>
          <Link href="/#services" className={styles.viewAllLink}>
            View All Services →
          </Link>
        </div>
      )}
    </section>
  );
}
