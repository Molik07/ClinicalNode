'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Cta.module.css';

export default function Cta() {
  const ref = useScrollReveal();

  return (
    <section className={styles.section} ref={ref}>
      <div className={`${styles.grid} reveal`}>
        <div>
          <h2 className={styles.heading}>
            Ready to take the next
            <br />
            step in <em className={styles.headingEm}>your care?</em>
          </h2>
          <p className={styles.subtitle}>
            Book an appointment online or call us — we&apos;ll find a time that
            works for you.
          </p>
        </div>

        <div className={styles.buttons}>
          <Link href="/#contact" className="btn-forest">
            Book Appointment
          </Link>
          <Link href="/#contact" className="btn-ghost-mid">
            Call Us
          </Link>
        </div>
      </div>
    </section>
  );
}
