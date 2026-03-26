import Link from 'next/link';
import styles from './Footer.module.css';

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'General Medicine', href: '/#services' },
      { label: 'Paediatrics', href: '/#services' },
      { label: 'Cardiology', href: '/#services' },
      { label: 'Diagnostics', href: '/#services' },
      { label: 'Dermatology', href: '/#services' },
    ],
  },
  {
    title: 'Patients',
    links: [
      { label: 'Book Appointment', href: '/#contact' },
      { label: 'Patient Portal', href: '/#contact' },
      { label: 'Health Records', href: '/#contact' },
      { label: 'Insurance', href: '/#contact' },
      { label: 'FAQs', href: '/#contact' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story', href: '/#about' },
      { label: 'Team', href: '/#team' },
      { label: 'Careers', href: '/#about' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.brand}>
            Verdana<em className={styles.brandEm}> Health</em>
          </div>
          <p className={styles.tagline}>
            Compassionate, evidence-based care rooted in nature and science since 2004.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <div className={styles.colTitle}>{col.title}</div>
            <div className={styles.colLinks}>
              {col.links.map((link) => (
                <Link key={link.label} href={link.href} className={styles.colLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>© 2026 Verdana Health. All rights reserved.</span>
        <div className={styles.legal}>
          <span className={styles.legalLink}>Privacy Policy</span>
          <span className={styles.legalLink}>Terms of Use</span>
          <span className={styles.legalLink}>Accessibility</span>
        </div>
      </div>
    </footer>
  );
}
