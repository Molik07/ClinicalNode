'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Team.module.css';

const doctors = [
  {
    name: 'Dr. Meera Nair',
    initials: 'MN',
    role: 'Internal Medicine',
    experience: '15 Years',
    qualification: 'MBBS, MD',
    languages: 'English, Hindi',
    availability: 'Accepting Patients',
  },
  {
    name: 'Dr. Arjun Sharma',
    initials: 'AS',
    role: 'Paediatrics',
    experience: '11 Years',
    qualification: 'MBBS, DCH',
    languages: 'English, Tamil',
    availability: 'Accepting Patients',
  },
  {
    name: 'Dr. Priya Iyer',
    initials: 'PI',
    role: 'Dermatology',
    experience: '9 Years',
    qualification: 'MBBS, DVD',
    languages: 'English, Telugu',
    availability: 'Limited Availability',
  },
];

interface TeamProps {
  teaser?: boolean;
}

export default function Team({ teaser = false }: TeamProps) {
  const ref = useScrollReveal();
  const items = teaser ? doctors.slice(0, 2) : doctors;

  return (
    <section className={styles.section} ref={ref}>
      <p className={`${styles.tag} reveal`}>Our Specialists</p>
      <h2 className={`${styles.heading} reveal`}>
        Doctors who <em className={styles.headingEm}>listen first</em>
      </h2>
      <p className={`${styles.subtitle} reveal`}>
        Our team brings expertise, warmth, and a genuine commitment to every
        patient&apos;s journey.
      </p>

      <div className={`${styles.grid} ${teaser ? styles.gridTeaser : ''} reveal`}>
        {items.map((doc) => (
          <div key={doc.name} className={styles.card}>
            <div className={styles.avatar}>
              <span className={styles.initials}>{doc.initials}</span>
            </div>
            <div className={styles.name}>{doc.name}</div>
            <div className={styles.role}>{doc.role}</div>
            <hr className={styles.divider} />
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Experience</span>
              <span className={styles.metaValue}>{doc.experience}</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Qualification</span>
              <span className={styles.metaValue}>{doc.qualification}</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Languages</span>
              <span className={styles.metaValue}>{doc.languages}</span>
            </div>
            <div className={styles.availability}>
              <span className={styles.availText}>{doc.availability}</span>
            </div>
          </div>
        ))}
      </div>

      {teaser && (
        <div className={`${styles.viewAll} reveal`}>
          <Link href="/#team" className={styles.viewAllLink}>
            Meet the Team →
          </Link>
        </div>
      )}
    </section>
  );
}
