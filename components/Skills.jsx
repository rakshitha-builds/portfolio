import { skillCards, skillGroups } from '@/data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TechIcon from './TechIcon';

const all = skillGroups.flatMap((g) => g.skills);

export default function Skills() {
  return (
    <section id="skills" className="section-y border-t border-line" aria-labelledby="skills-title">
      <div className="wrap">
        <SectionHeading
          id="skills-title"
          lead="A breakdown of the languages, frameworks and tools I use to build robust applications."
        >
          Engineering toolbox
        </SectionHeading>

        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {skillCards.map((card, i) => {
            const dark = card.dark;
            return (
              <Reveal
                key={card.title}
                delay={i * 0.07}
                className={`relative overflow-hidden rounded-2xl border p-7 sm:p-8 ${
                  dark ? 'on-dark border-white/10 bg-navy-2 text-on-dark' : 'border-line bg-paper text-ink'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute right-5 top-3 font-display text-[5.5rem] font-bold leading-none ${
                    dark ? 'text-white/[0.05]' : 'text-ink/[0.05]'
                  }`}
                >
                  {String(card.count).padStart(2, '0')}
                </span>
                <h3 className="relative font-display text-[1.4rem] font-bold leading-tight tracking-[-0.01em]">
                  {card.title}
                  <span className={dark ? 'text-accent-bright' : 'text-accent'}>.</span>
                </h3>

                <div className="relative mt-7 space-y-7">
                  {card.groups.map((g) => (
                    <div key={g.title}>
                      <h4 className={`mb-2 text-[11.5px] font-bold uppercase tracking-[0.14em] ${dark ? 'text-accent-bright' : 'text-accent'}`}>
                        {g.title}
                      </h4>
                      <ul>
                        {g.skills.map((s) => (
                          <li
                            key={s.label}
                            className={`flex items-center gap-3 border-b py-2.5 text-[14.5px] font-medium last:border-b-0 ${
                              dark ? 'border-white/10' : 'border-line'
                            }`}
                          >
                            <TechIcon name={s.icon} size={18} tile={dark} />
                            {s.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="marquee marquee-mask mt-14 overflow-hidden" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-3">
          {[...all, ...all].map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-paper px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-muted"
            >
              <TechIcon name={s.icon} size={15} />
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
