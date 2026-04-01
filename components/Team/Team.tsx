'use client';

import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

// 8 Team Members
const teamMembers = [
  { name: 'Dr. Sarah Jenkins', initials: 'SJ', role: 'Head of Surgery', experience: '15 Years', qualification: 'MD, FACS', languages: 'English, Spanish', availability: 'Mon - Fri', age: 45, degree: 'Doctor of Medicine', bio: 'Expert in minimally invasive procedures with over a decade of leadership.' },
  { name: 'Dr. Michael Chen', initials: 'MC', role: 'Cardiologist', experience: '12 Years', qualification: 'MD, FACC', languages: 'English, Mandarin', availability: 'Tue - Sat', age: 41, degree: 'Doctor of Medicine', bio: 'Specializes in structural heart diseases and cardiac care.' },
  { name: 'Dr. Emily Brooks', initials: 'EB', role: 'Pediatrician', experience: '8 Years', qualification: 'MD, FAAP', languages: 'English', availability: 'Mon - Thu', age: 34, degree: 'Doctor of Medicine', bio: 'Dedicated to newborn care and early childhood developmental milestones.' },
  { name: 'Dr. James Wilson', initials: 'JW', role: 'Neurologist', experience: '20 Years', qualification: 'MD, PhD', languages: 'English, German', availability: 'Wed - Fri', age: 52, degree: 'MD, PhD in Neuroscience', bio: 'Renowned researcher and clinician focusing on neurodegenerative disorders.' },
  { name: 'Dr. Olivia Martinez', initials: 'OM', role: 'Dermatologist', experience: '10 Years', qualification: 'MD, FAAD', languages: 'English, Spanish', availability: 'Mon - Wed', age: 38, degree: 'Doctor of Medicine', bio: 'Passionate about medical and cosmetic dermatology with a holistic approach.' },
  { name: 'Dr. Daniel Kim', initials: 'DK', role: 'Orthopedic Surgeon', experience: '14 Years', qualification: 'MD, FAAOS', languages: 'English, Korean', availability: 'Thu - Sat', age: 44, degree: 'Doctor of Medicine', bio: 'Focuses on sports medicine and advanced joint replacement techniques.' },
  { name: 'Dr. Sophia Patel', initials: 'SP', role: 'Psychiatrist', experience: '9 Years', qualification: 'MD, APA', languages: 'English, Hindi', availability: 'Mon - Fri', age: 36, degree: 'Doctor of Medicine', bio: 'Provides comprehensive mental health care with an emphasis on CBT.' },
  { name: 'Dr. Robert Fox', initials: 'RF', role: 'General Practitioner', experience: '18 Years', qualification: 'MD, FAAFP', languages: 'English, French', availability: 'Mon - Sat', age: 49, degree: 'Doctor of Medicine', bio: 'Committed to preventative care, family medicine, and community health.' }
];

interface TeamProps {
  teaser?: boolean;
}

export default function Team({ teaser = false }: TeamProps) {
  const ref = useScrollReveal();

  // Duplicate the array for a seamless loop
  const duplicatedTeam = [...teamMembers, ...teamMembers];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-[100vh] pt-8 pb-24 px-4 md:px-12 border-t-[0.5px] border-[rgba(36,59,36,0.07)] flex flex-col justify-start selection:bg-[#9e6b3a] selection:text-[#faf6ef]"
      style={{
        background: `
          radial-gradient(ellipse 500px 400px at 85% 15%, rgba(36,59,36,0.10) 0%, transparent 65%),
          radial-gradient(ellipse 500px 400px at 10% 85%, rgba(92,61,30,0.10) 0%, transparent 65%),
          var(--color-bg-s4)
        `,
      }}
    >
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Adjust half the width plus exactly half the 24px gap (gap-6) */
            transform: translateX(calc(-50% - 12px)); 
          }
        }
        .scroller-track {
          animation: scroll 35s linear infinite;
        }
        .scroller-container:hover .scroller-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative rings */}
      <div className="absolute rounded-full border-[0.5px] border-[rgba(92,61,30,0.16)] pointer-events-none w-[280px] h-[280px] -top-[60px] -left-[80px]" />
      <div className="absolute rounded-full border-[0.5px] border-[rgba(92,61,30,0.11)] pointer-events-none w-[450px] h-[450px] -top-[120px] -left-[160px]" />
      <div className="absolute rounded-full border-[0.5px] border-[rgba(61,99,64,0.15)] pointer-events-none w-[150px] h-[150px] bottom-[120px] right-[5%]" />
      <div className="absolute rounded-full border-[0.5px] border-[rgba(61,99,64,0.11)] pointer-events-none w-[240px] h-[240px] bottom-[70px] right-[3%]" />
      <div className="absolute rounded-full border-[0.5px] border-[rgba(92,61,30,0.12)] pointer-events-none w-[110px] h-[110px] top-[45%] right-[40%]" />

      {/* Morphing blobs */}
      <div
        className="absolute pointer-events-none opacity-[0.09] w-[200px] h-[200px] left-[4%] top-[30%] animate-morph"
        style={{
          background: 'rgba(92,61,30,0.25)',
          animationDuration: '13s',
          borderRadius: '45% 55% 50% 50% / 60% 40% 55% 45%',
        }}
      />
      <div
        className="absolute pointer-events-none opacity-[0.08] w-[130px] h-[130px] right-[10%] top-[15%] animate-morph"
        style={{
          background: 'rgba(61,99,64,0.3)',
          animationDuration: '16s',
          borderRadius: '55% 45% 40% 60% / 45% 55% 60% 40%',
        }}
      />

      <SectionHeader
        tag="Our Specialists"
        heading={<>Doctors who <em className="text-brown-mid italic">listen first</em></>}
        subtitle="Our team brings expertise, warmth, and a genuine commitment to every patient's journey. With specialists across fields, we collaborate to provide comprehensive, personalized care."
        variant="light"
      />

      {/* The scrolling carousel */}
      <div
        className="scroller-container w-full max-w-[1400px] mx-auto overflow-hidden mt-4"
        style={{
          maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="scroller-track flex gap-6 w-max pb-8 pt-4 px-10">
          {duplicatedTeam.map((doc, i) => (
            <div
              key={`${doc.name}-${i}`}
              className="group perspective-[1000px] w-[280px] md:w-[320px] h-[460px] flex-shrink-0 cursor-pointer"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* Front of Card */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-linear-to-br from-[rgba(255,255,255,0.65)] to-[rgba(232,222,205,0.5)] border-[0.5px] border-line-light rounded-[14px] px-7 py-8 shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex flex-col items-start transition-all duration-300 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                  {/* Avatar - Enlarge to w-20 h-20 for future photo */}
                  <div className="w-[80px] h-[80px] rounded-full bg-[rgba(61,99,64,0.1)] border-[0.5px] border-[rgba(61,99,64,0.15)] flex items-center justify-center mb-5 shrink-0">
                    <span className="font-playfair text-2xl font-medium text-forest-mid">
                      {doc.initials}
                    </span>
                  </div>

                  <div className="font-playfair text-[1.05rem] font-medium text-text-on-light mb-1">
                    {doc.name}
                  </div>
                  <div className="font-inter text-[9.5px] tracking-[0.1em] text-muted-light uppercase mb-4">
                    {doc.role}
                  </div>

                  <hr className="w-full h-0 border-none border-t-[0.5px] border-line-light my-4" />

                  {/* Meta rows */}
                  <div className="w-full space-y-1.5 mt-auto mb-4">
                    {[
                      { label: 'Experience', value: doc.experience },
                      { label: 'Qualification', value: doc.qualification },
                      { label: 'Languages', value: doc.languages },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-1.5">
                        <span className="font-inter text-[9px] tracking-[0.12em] text-[rgba(30,42,30,0.3)] uppercase">
                          {row.label}
                        </span>
                        <span className="font-inter text-[10.5px] tracking-[0.06em] text-text-on-light uppercase">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Availability badge */}
                  <div className="inline-flex items-center px-3.5 py-1.5 rounded-[20px] bg-[rgba(61,99,64,0.08)] border-[0.5px] border-[rgba(61,99,64,0.12)] mt-2">
                    <span className="font-inter text-[9px] tracking-[0.14em] text-forest-mid uppercase">
                      {doc.availability}
                    </span>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-linear-to-bl from-[rgba(255,255,255,0.95)] to-[rgba(232,222,205,0.85)] border-[0.5px] border-line-light rounded-[14px] px-7 py-8 shadow-[0_8px_24px_rgba(0,0,0,0.1)] flex flex-col justify-center items-center text-center">
                  <div className="w-[60px] h-[60px] rounded-full bg-[rgba(61,99,64,0.1)] border-[0.5px] border-[rgba(61,99,64,0.2)] flex items-center justify-center mb-6 shrink-0">
                    <span className="font-playfair text-xl font-medium text-forest-mid">
                      {doc.initials}
                    </span>
                  </div>

                  <h3 className="font-playfair text-xl font-medium text-text-on-light mb-1">
                    {doc.name}
                  </h3>
                  <p className="font-inter text-[11px] tracking-[0.1em] text-forest-mid uppercase mb-6">
                    {doc.role}
                  </p>

                  <div className="w-full space-y-4 text-sm font-light text-muted-dark flex-1 flex flex-col justify-center">
                    <div className="flex flex-col items-center">
                      <span className="font-inter text-[9px] tracking-[0.12em] text-[rgba(30,42,30,0.4)] uppercase mb-1">
                        Age
                      </span>
                      <span className="font-playfair font-medium text-text-on-light">{doc.age} Years Old</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="font-inter text-[9px] tracking-[0.12em] text-[rgba(30,42,30,0.4)] uppercase mb-1">
                        Degree
                      </span>
                      <span className="font-playfair font-medium text-text-on-light text-sm">{doc.degree}</span>
                    </div>

                    <div className="w-full flex justify-center">
                      <hr className="w-12 border-t-[0.5px] border-line-light my-2" />
                    </div>

                    <p className="italic text-[12.5px] leading-relaxed text-text-on-light/80">
                      "{doc.bio}"
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {teaser && (
        <div className="reveal mt-10 mx-auto">
          <Link
            href="/#team"
            className="font-inter text-[11px] tracking-[0.14em] uppercase text-forest-mid border-b-[0.5px] border-forest-mid pb-[2px]"
          >
            Meet the Team →
          </Link>
        </div>
      )}
    </section>
  );
}
