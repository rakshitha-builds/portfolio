'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Trophy, Crosshair, Wrench, CheckCircle2 } from 'lucide-react';
import { projects, site } from '@/data/site';
import { GithubIcon } from './SocialIcons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TechIcon from './TechIcon';

function Visual({ visual }) {
  if (visual.type === 'screenshot') {
    return (
      <div className="relative overflow-hidden bg-white">
        <Image
          src={visual.src}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          sizes="(min-width: 1200px) 1136px, 100vw"
          className="h-auto w-full"
        />
      </div>
    );
  }

  if (visual.type === 'architecture') {
    return (
      <div className="on-dark flex min-h-[260px] flex-col items-stretch justify-center gap-3 bg-navy p-5 sm:h-[300px] sm:flex-row sm:items-center sm:gap-2 sm:p-10 lg:h-[320px]">
        {visual.nodes.map((n, i) => (
          <div key={n.label} className="flex flex-1 flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-2">
            <div className="flex flex-1 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.06] p-4 sm:flex-col sm:py-7 sm:text-center">
              <TechIcon name={n.icon} size={30} tile />
              <div>
                <p className="font-display text-[1.2rem] font-bold leading-tight text-on-dark">{n.label}</p>
                <p className="mt-0.5 text-[13px] text-on-dark-dim">{n.note}</p>
              </div>
            </div>
            {i < visual.nodes.length - 1 && (
              <ArrowRight size={20} className="mx-auto shrink-0 rotate-90 text-accent-bright sm:rotate-0" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    );
  }

  return null;
}

function Chrome({ project }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-3 border-b border-line bg-mist/70 px-4 py-3">
      <span className="hidden gap-1.5 sm:flex" aria-hidden="true">
        <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </span>
      <span className="min-w-0 truncate rounded-md border border-line bg-paper px-3 py-1 font-mono text-[12px] text-muted">
        {project.chrome}
      </span>
      <span
        className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] ${
          project.inProgress ? 'border-line-strong text-muted' : 'border-accent/40 bg-accent/10 text-accent'
        }`}
      >
        {project.inProgress ? (
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-good" aria-hidden="true" />
        ) : project.badge.startsWith('Capstone') ? (
          <Trophy size={11} aria-hidden="true" />
        ) : null}
        {project.badge}
      </span>

      <span className="ml-auto flex shrink-0 items-center gap-3.5">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink transition-colors hover:text-accent"
            aria-label={`Live site of ${project.title} (opens in a new tab)`}
          >
            <span className="hidden sm:inline">Live Site</span> <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink transition-colors hover:text-accent"
            aria-label={`GitHub repository of ${project.title} (opens in a new tab)`}
          >
            <GithubIcon width={17} height={17} />
          </a>
        )}
      </span>
    </div>
  );
}

const story = [
  { key: 'problem', label: 'Problem', icon: Crosshair },
  { key: 'approach', label: 'Approach', icon: Wrench },
  { key: 'result', label: 'Result', icon: CheckCircle2 },
];

function ProjectCard({ project }) {
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className="overflow-hidden rounded-2xl border border-accent/35 bg-paper shadow-[0_30px_60px_-34px_rgba(15,26,46,0.45)]"
    >
      <Chrome project={project} />
      <Visual visual={project.visual} />

      <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <h3 id={`${project.id}-title`} className="flex items-center gap-2.5 text-[22px] font-bold tracking-tight">
            <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${project.inProgress ? 'bg-good' : 'bg-accent'}`} aria-hidden="true" />
            {project.title}
          </h3>
          <p className="mt-1 text-[15px] text-muted">{project.tagline}</p>

          <dl className="mt-5 space-y-4 rounded-xl border border-line bg-mist/60 p-5">
            {story.map(({ key, label, icon: Icon }) => (
              <div key={key} className="flex gap-3">
                <Icon size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <dt className="label">{label}</dt>
                  <dd className="mt-1 text-[14px] leading-relaxed text-ink/85">{project[key]}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h4 className="label mb-3">Key highlights</h4>
          <ul className="flex flex-wrap gap-2">
            {project.highlights.map((h) => (
              <li key={h} className="rounded-lg border border-line bg-mist/70 px-3 py-1.5 text-[13px] font-medium">
                {h}
              </li>
            ))}
          </ul>

          <h4 className="label mb-3 mt-7">Technologies</h4>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <li key={t.label} className="chip">
                {t.icon && <TechIcon name={t.icon} size={16} />}
                {t.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-y border-t border-line" aria-labelledby="projects-title">
      <div className="wrap">
        <SectionHeading
          id="projects-title"
          lead="A selection of applications engineered with clear architecture, real backends and a responsive user experience."
        >
          Selected works
        </SectionHeading>

        {/* Cards stack over each other as you scroll (desktop); a normal list on small screens */}
        <div>
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="mb-8 lg:sticky lg:mb-14"
              style={{ top: `calc(88px + ${i * 22}px)` }}
            >
              <Reveal amount={0.08}>
                <ProjectCard project={p} />
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-center gap-5 text-center">
          <p className="text-muted">A selection of my work. Everything else lives on GitHub.</p>
          <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            More on GitHub <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
