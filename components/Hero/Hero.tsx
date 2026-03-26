'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Decorative rings */}
      <div className={`${styles.ring} ${styles.ring1}`} />
      <div className={`${styles.ring} ${styles.ring2}`} />
      <div className={`${styles.ring} ${styles.ring3}`} />
      <div className={`${styles.ring} ${styles.ring4}`} />

      {/* Morphing blobs */}
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />

      {/* Left column — Content */}
      <div className={styles.content}>
        <div className={styles.pill}>
          <span className={styles.pillDot} />
          <span className={styles.pillText}>Trusted Clinic · Est. 2004</span>
        </div>

        <h1 className={styles.title}>
          Healing
          <br />
          rooted in
          <br />
          <em className={styles.titleEm}>nature &amp; science</em>
        </h1>

        <p className={styles.body}>
          Compassionate, evidence-based care for every stage of life — from
          routine checkups to complex diagnoses.
        </p>

        <div className={styles.buttons}>
          <Link href="/#contact" className="btn-beige">
            Book Appointment
          </Link>
          <Link href="/#services" className="btn-ghost-light">
            Our Services
          </Link>
        </div>

        <div className={styles.statsBar}>
          <div className={styles.stat}>
            <span className={styles.statValue}>14k+</span>
            <span className={styles.statLabel}>Patients Treated</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>98%</span>
            <span className={styles.statLabel}>Satisfaction Rate</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>20yr</span>
            <span className={styles.statLabel}>Of Excellence</span>
          </div>
        </div>
      </div>

      {/* Right column — Card Stack */}
      <div className={styles.cardArea}>
        {/* 
        <div className={styles.cardStack}>
          <div className={styles.apptBack} />
          <div className={styles.apptMain}>
            <div className={styles.apptLabel}>Next Appointment</div>
            <div className={styles.apptDoctor}>Dr. Meera Nair</div>
            <div className={styles.apptRole}>Internal Medicine · MBBS, MD</div>
            <hr className={styles.apptDivider} />
            <div className={styles.apptRow}>
              <span className={styles.apptRowLabel}>Date</span>
              <span className={styles.apptRowValue}>Thursday, 27 March</span>
            </div>
            <div className={styles.apptRow}>
              <span className={styles.apptRowLabel}>Time</span>
              <span className={styles.apptRowValue}>10:30 AM</span>
            </div>
            <div className={styles.apptRow}>
              <span className={styles.apptRowLabel}>Room</span>
              <span className={styles.apptRowValue}>Consultation 04</span>
            </div>
            <div className={styles.apptBadge}>
              <span className={styles.apptBadgeText}>Confirmed</span>
            </div>
          </div>
        </div> 
        */}
      </div>
    </section>
  );
}
