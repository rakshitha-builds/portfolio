import { Trophy, Medal, Award } from 'lucide-react';
import { education, achievements } from '@/data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const icons = { trophy: Trophy, medal: Medal, award: Award };

export default function Education() {
  return (
    <section id="education" className="section-y border-t border-line" aria-labelledby="education-title">
      <div className="wrap">
        <SectionHeading id="education-title">Education</SectionHeading>

        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ul className="space-y-4">
            {education.map((e, i) => (
              <Reveal
                as="li"
                key={e.degree}
                delay={i * 0.06}
                className="flex items-start justify-between gap-6 rounded-2xl border border-line bg-paper p-6 sm:p-8"
              >
                <div>
                  <p className="font-mono text-[13px] text-muted">{e.year}</p>
                  <h3 className="mt-2 font-display text-[clamp(1.35rem,2.3vw,1.75rem)] font-bold leading-[1.15] tracking-[-0.01em]">
                    {e.degree}
                  </h3>
                  <p className="mt-2 text-muted">{e.school}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-display text-[3rem] font-bold leading-none tracking-tight text-accent">{e.cgpa}</p>
                  <p className="mt-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-muted">CGPA</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <h3 className="mb-6 border-b border-line-strong pb-4 font-display text-[1.6rem] font-bold uppercase leading-none tracking-[-0.01em]">
              Achievements<span className="text-accent">.</span>
            </h3>
            <ul className="space-y-6">
              {achievements.map((a) => {
                const Icon = icons[a.icon];
                return (
                  <li key={a.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold leading-snug">{a.title}</p>
                      {a.detail && <p className="mt-1 text-sm text-muted">{a.detail}</p>}
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
