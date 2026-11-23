import { LayoutDashboard, Server, Smartphone, Brain, Check } from 'lucide-react';
import { about } from '@/data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const icons = { layout: LayoutDashboard, server: Server, smartphone: Smartphone, brain: Brain };

export default function About() {
  return (
    <section id="about" className="section-y" aria-labelledby="about-title">
      <div className="wrap">
        <SectionHeading id="about-title">About me</SectionHeading>

        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <p className="font-display text-[clamp(1.6rem,3vw,2.3rem)] font-bold leading-[1.15] tracking-[-0.02em]">
              {about.statement}
            </p>
            <p className="mt-7 max-w-[560px] text-[17px] leading-relaxed text-muted">{about.body}</p>

            <div className="mt-10 border-t border-line pt-7">
              <h3 className="label mb-4">Certifications</h3>
              <ul className="flex flex-wrap gap-2.5">
                {about.certifications.map((c) => (
                  <li key={c} className="chip">
                    <Check size={14} className="text-accent" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-7 border-t border-line pt-7">
              <h3 className="label mb-4">Languages</h3>
              <ul className="flex flex-wrap gap-2.5">
                {about.languages.map((l) => (
                  <li key={l} className="chip">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2 lg:self-start">
            {about.pillars.map((p, i) => {
              const Icon = icons[p.icon];
              return (
                <Reveal
                  as="li"
                  key={p.title}
                  delay={i * 0.06}
                  className="rounded-2xl border border-line bg-paper p-6 transition duration-200 hover:-translate-y-1 hover:border-accent/50"
                >
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <h3 className="text-[17px] font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{p.desc}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
