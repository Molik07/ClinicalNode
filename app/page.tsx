import Hero from '@/components/Hero/Hero';
import dynamic from 'next/dynamic';

const Services = dynamic(() => import('@/components/Services/Services'), { ssr: true });
const WhyUs = dynamic(() => import('@/components/WhyUs/WhyUs'), { ssr: true });
const Team = dynamic(() => import('@/components/Team/Team'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/Testimonials/Testimonials'), { ssr: true });
const Cta = dynamic(() => import('@/components/Cta/Cta'), { ssr: true });

export default function Home() {
  return (
    <>
      <Hero />
      <div id="services"><Services teaser /></div>
      <div id="about"><WhyUs /></div>
      <div id="team"><Team teaser /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><Cta /></div>
    </>
  );
}


