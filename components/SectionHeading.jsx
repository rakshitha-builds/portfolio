import Reveal from './Reveal';

// Heavy condensed uppercase heading with an accent closing period.
export default function SectionHeading({ id, children, lead, className = '' }) {
  return (
    <Reveal className={`mb-12 md:mb-16 ${className}`}>
      <h2
        id={id}
        className="font-display text-[clamp(2.3rem,5.8vw,4.25rem)] font-bold uppercase leading-[1.0] tracking-[-0.025em] text-ink"
      >
        {children}
        <span className="text-accent">.</span>
      </h2>
      {lead && <p className="mt-5 max-w-[540px] text-[17px] leading-relaxed text-muted">{lead}</p>}
    </Reveal>
  );
}
