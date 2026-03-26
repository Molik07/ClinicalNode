'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './WhyUs.module.css';

const items = [
  {
    num: '01',
    title: 'Same-Day Appointments',
    sub: 'No long queues. Walk in or book online for same-day slots.',
  },
  {
    num: '02',
    title: 'Board-Certified Doctors',
    sub: '15+ on-site specialists with decades of combined experience.',
  },
  {
    num: '03',
    title: 'Holistic Approach',
    sub: 'Mind, body, and lifestyle — we treat the whole person.',
  },
  {
    num: '04',
    title: 'Private & Confidential',
    sub: 'Your records, protected. HIPAA-compliant systems always.',
  },
];

export default function WhyUs() {
  const ref = useScrollReveal();

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.grid}>
        <div>
          <p className={`${styles.tag} reveal`}>Why Patients Choose Us</p>
          <h2 className={`${styles.heading} reveal`}>
            A clinic built on
            <br />
            <em className={styles.headingEm}>trust &amp; transparency</em>
          </h2>
          <p className={`${styles.subtitle} reveal`}>
            We believe great healthcare begins with listening. Every decision we
            make is rooted in your wellbeing — not just your symptoms.
          </p>
          <div className="reveal">
            <Link href="/#contact" className="btn-beige">
              Book Appointment
            </Link>
          </div>
        </div>

        <div className={`${styles.numberedGrid} reveal`}>
          {items.map((item) => (
            <div key={item.num} className={styles.cell}>
              <div className={styles.cellNum}>{item.num}</div>
              <div className={styles.cellTitle}>{item.title}</div>
              <div className={styles.cellSub}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
