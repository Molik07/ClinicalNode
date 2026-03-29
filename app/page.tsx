import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import WhyUs from '@/components/WhyUs/WhyUs';
import Team from '@/components/Team/Team';
import Testimonials from '@/components/Testimonials/Testimonials';
import Cta from '@/components/Cta/Cta';

export default function Home() {
  return (
    <>
      <Hero />
      <div id="services"><Services teaser /></div>
      <div id="about"><WhyUs /></div>
      <div id="team"><Team teaser /></div>
      <div id="testimonials"><Testimonials teaser /></div>
      <div id="contact"><Cta /></div>
    </>
  );
}


