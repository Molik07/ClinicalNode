/* ═══════════════════════════════════════
   Shared TypeScript Types
   ═══════════════════════════════════════ */

/** A service offered by the clinic */
export interface ServiceItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

/** A doctor / specialist on the team */
export interface Doctor {
  name: string;
  initials: string;
  role: string;
  experience: string;
  qualification: string;
  languages: string;
  availability: string;
}

/** A patient testimonial */
export interface Testimonial {
  quote: string;
  name: string;
  initials: string;
  since: string;
}

/** Navigation dropdown link */
export interface NavLink {
  label: string;
  href: string;
}

/** Footer link column */
export interface FooterColumn {
  title: string;
  links: NavLink[];
}

/** "Why Us" numbered item */
export interface WhyUsItem {
  num: string;
  title: string;
  sub: string;
}
