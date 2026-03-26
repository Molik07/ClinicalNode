'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

const dropdowns: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: 'General Medicine', href: '/#services' },
    { label: 'Paediatrics', href: '/#services' },
    { label: 'Dermatology', href: '/#services' },
    { label: 'Cardiology', href: '/#services' },
    { label: 'Diagnostics & Lab', href: '/#services' },
  ],
  Specialists: [
    { label: 'Our Doctors', href: '/#team' },
    { label: 'Nursing Staff', href: '/#team' },
    { label: 'Allied Health', href: '/#team' },
  ],
  Patients: [
    { label: 'Book Appointment', href: '/#contact' },
    { label: 'Patient Portal', href: '/#contact' },
    { label: 'Health Records', href: '/#contact' },
    { label: 'Insurance & Billing', href: '/#contact' },
    { label: 'FAQs', href: '/#contact' },
  ],
  About: [
    { label: 'Our Story', href: '/#about' },
    { label: 'Values & Mission', href: '/#about' },
    { label: 'Accreditations', href: '/#about' },
    { label: 'Careers', href: '/#about' },
  ],
};

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        Verdana<em className={styles.logoEm}> Health</em>
      </Link>

      <ul className={styles.links}>
        {Object.entries(dropdowns).map(([title, items]) => (
          <li key={title} className={styles.navItem}>
            <span className={styles.navLink}>
              {title}
              <span className={styles.chevron} />
            </span>
            <div className={styles.dropdown}>
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={styles.dropdownLink}
                  onClick={(e) => e.preventDefault()}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </li>
        ))}

        <li className={styles.navItem}>
          <Link href="/#contact" className={styles.navLink} onClick={(e) => e.preventDefault()}>
            Contact
          </Link>
        </li>

        <li>
          <Link href="/#contact" className={styles.bookNow}>
            Book Now
          </Link>
        </li>
      </ul>
    </nav>
  );
}
