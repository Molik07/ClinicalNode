import type { Doctor, Testimonial, NavLink, FooterColumn, WhyUsItem } from './types';

/* ═══════════════════════════════════════
   Shared Data Constants
   ═══════════════════════════════════════ */

/* ── Navigation Dropdowns ── */
export const navDropdowns: Record<string, NavLink[]> = {
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

/* ── Services ── */
// Note: icons are defined inline in the Services component because they are JSX
export const servicesMeta = [
  {
    title: 'General Medicine',
    desc: 'Routine checkups, chronic condition management, and preventive screenings for the whole family.',
  },
  {
    title: 'Paediatrics',
    desc: 'Growth milestones, vaccinations, and comprehensive child wellness from newborn to adolescent.',
  },
  {
    title: 'Diagnostics',
    desc: 'In-house lab, imaging, and pathology with same-day results and expert analysis.',
  },
  {
    title: 'Cardiology',
    desc: 'Heart health assessments, ECG, stress tests, and long-term cardiac care management plans.',
  },
];

/* ── Doctors / Team ── */
export const doctors: Doctor[] = [
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

/* ── Testimonials ── */
export const testimonials: Testimonial[] = [
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

/* ── Why Us Items ── */
export const whyUsItems: WhyUsItem[] = [
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

/* ── Footer Columns ── */
export const footerColumns: FooterColumn[] = [
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
