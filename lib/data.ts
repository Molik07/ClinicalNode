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
  {
    title: 'Dermatology',
    desc: 'Skin consultations, acne treatment, mole checks, and cosmetic dermatology services for all ages.',
  },
  {
    title: 'Orthopaedics',
    desc: 'Bone, joint, and muscle care — from sports injuries and fractures to spine and hip conditions.',
  },
  {
    title: 'Gynaecology',
    desc: 'Women\'s health across all life stages: prenatal care, fertility support, and menopause management.',
  },
  {
    title: 'Neurology',
    desc: 'Expert assessment of headaches, epilepsy, stroke risk, and neurological conditions with compassionate follow-up.',
  },
  {
    title: 'Ophthalmology',
    desc: 'Complete eye care — vision screenings, cataract evaluation, glaucoma monitoring, and retinal assessments.',
  },
  {
    title: 'Pulmonology',
    desc: 'Assessment and management of asthma, COPD, sleep apnoea, and respiratory infections.',
  },
  {
    title: 'Physiotherapy',
    desc: 'Targeted rehabilitation programmes for post-surgical recovery, chronic pain, and sports performance.',
  },
  {
    title: 'Mental Wellness',
    desc: 'Counselling, stress management, and holistic psychiatric support in a confidential, judgment-free space.',
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
  {
    quote:
      'My chronic back issues had me seeing three different specialists with no relief. Here they coordinated everything under one roof and I finally have answers.',
    name: 'Kavitha Rajan',
    initials: 'KR',
    since: 'Patient since 2020',
  },
  {
    quote:
      'I appreciate how they explain every test and every result in plain language. No medical jargon, just genuine conversation.',
    name: 'Farhan Sheikh',
    initials: 'FS',
    since: 'Patient since 2018',
  },
  {
    quote:
      'The waiting room actually feels calm and welcoming. That alone sets this place apart from every other clinic I\u2019ve visited.',
    name: 'Preethi Nambiar',
    initials: 'PN',
    since: 'Patient since 2023',
  },
  {
    quote:
      'Called at 8 AM and had an appointment by 10 AM the same day. The speed without sacrificing quality is genuinely impressive.',
    name: 'Jayesh Patel',
    initials: 'JP',
    since: 'Patient since 2021',
  },
  {
    quote:
      'Dr. Iyer caught something in my skin checkup that three other dermatologists had missed. I\u2019m so grateful I switched to Verdana.',
    name: 'Meghna Rao',
    initials: 'MR',
    since: 'Patient since 2022',
  },
  {
    quote:
      'The follow-up calls after my procedure showed me they genuinely care beyond the appointment. That kind of attention is rare.',
    name: 'Suresh Balaji',
    initials: 'SB',
    since: 'Patient since 2017',
  },
  {
    quote:
      'I\u2019ve been bringing my elderly mother here for two years. The patience and respect they show her makes a world of difference to our family.',
    name: 'Ananya Krishnan',
    initials: 'AK',
    since: 'Patient since 2024',
  },
  {
    quote:
      'Clean, modern, and the online booking portal is flawless. Finally a clinic that respects your time from start to finish.',
    name: 'Vikram Sood',
    initials: 'VS',
    since: 'Patient since 2023',
  },
  {
    quote:
      'My cardiac evaluation was handled with precision and empathy. The cardiologist spent over an hour with me going through every detail.',
    name: 'Leela Menon',
    initials: 'LM',
    since: 'Patient since 2020',
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
