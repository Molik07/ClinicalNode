interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden pt-40 pb-20 px-12"
      style={{
        background: `
          radial-gradient(ellipse 600px 400px at 80% 30%, rgba(92,61,30,0.22) 0%, transparent 70%),
          radial-gradient(ellipse 400px 400px at 20% 80%, rgba(61,99,64,0.20) 0%, transparent 70%),
          var(--color-bg-hero)
        `,
      }}
    >
      <p className="font-bebas text-[9.5px] tracking-[0.25em] text-forest-faint uppercase mb-4">
        {eyebrow}
      </p>
      <h1 className="font-playfair text-[clamp(2.2rem,4vw,3.2rem)] font-medium leading-[1.15] text-text-on-dark max-w-[600px]">
        {title}
      </h1>
      {subtitle && (
        <p className="font-bebas text-xs tracking-[0.06em] leading-8 text-muted-dark max-w-[500px] mt-5">
          {subtitle}
        </p>
      )}
    </section>
  );
}
