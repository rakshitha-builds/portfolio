import { experience } from '@/data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-y border-t border-line bg-mist/50" aria-labelledby="experience-title">
      <div className="wrap">
        <SectionHeading id="experience-title" lead="Three internships across mobile, frontend and web development.">
          Experience
        </SectionHeading>

        <ol className="border-t border-line-strong">
          {experience.map((job, i) => (
            <Reveal
              as="li"
              key={job.role}
              delay={i * 0.05}
              className="grid gap-4 border-b border-line py-9 md:grid-cols-[220px_1fr] md:gap-12 md:py-11"
            >
              <p className="font-mono text-[13px] text-muted md:pt-2">{job.date}</p>
              <div>
                <h3 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-[1.15] tracking-[-0.01em]">
                  {job.role}
                </h3>
                <p className="mt-2 font-semibold text-accent">{job.org}</p>
                <ul className="mt-5 max-w-[680px] space-y-2.5">
                  {job.points.map((pt) => (
                    <li
                      key={pt}
                      className="relative pl-5 text-[15.5px] leading-relaxed text-ink/80 before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-2.5 before:bg-accent"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
