interface SectionHeaderProps {
  tag: string;
  heading: React.ReactNode;
  subtitle?: string;
  /** Use 'dark' for sections with dark backgrounds, 'light' for cream/beige backgrounds */
  variant?: 'light' | 'dark';
}

/**
 * Reusable section header with tag line, heading, and optional subtitle.
 * Used across Services, Team, Testimonials, WhyUs, and CTA sections.
 */
export default function SectionHeader({
  tag,
  heading,
  subtitle,
  variant = 'light',
}: SectionHeaderProps) {
  const tagColor = variant === 'dark' ? 'text-forest-faint/60' : 'text-muted-light';
  const headingColor = variant === 'dark' ? 'text-text-on-dark' : 'text-text-on-light';
  const subtitleColor = variant === 'dark' ? 'text-muted-dark' : 'text-muted-light';

  return (
    <div>
      <p
        className={`reveal font-bebas text-[9.5px] tracking-[0.25em] uppercase mb-4 ${tagColor}`}
      >
        {tag}
      </p>
      <h2
        className={`reveal font-playfair text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-[1.15] mb-4 ${headingColor}`}
      >
        {heading}
      </h2>
      {subtitle && (
        <p
          className={`reveal font-bebas text-xs tracking-[0.06em] leading-8 max-w-[520px] mb-12 ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
