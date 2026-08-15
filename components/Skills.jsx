'use client';

import { motion } from 'framer-motion';
import { CodeXml, Database, Wrench } from 'lucide-react';
import Reveal from './Reveal';
import { StaggerGroup, StaggerItem } from './Stagger';
import { BrandIcon } from './SocialIcons';

const categories = [
  {
    key: 'frontend',
    title: 'Frontend',
    icon: CodeXml,
    skills: [
      { label: 'React.js', icon: 'react/react-original.svg' },
      { label: 'TypeScript', icon: 'typescript/typescript-original.svg' },
      { label: 'JavaScript', icon: 'javascript/javascript-original.svg' },
      { label: 'Flutter', icon: 'flutter/flutter-original.svg' },
      { label: 'Dart', icon: 'dart/dart-original.svg' },
      { label: 'HTML', icon: 'html5/html5-original.svg' },
      { label: 'CSS', icon: 'css3/css3-original.svg' },
      { label: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    key: 'backend',
    title: 'Backend',
    icon: Database,
    skills: [
      { label: 'Python', icon: 'python/python-original.svg' },
      { label: 'Java', icon: 'java/java-original.svg' },
      { label: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
      { label: 'Express.js', icon: 'express/express-original.svg' },
      { label: 'FastAPI', icon: 'fastapi/fastapi-original.svg' },
      { label: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
      { label: 'MySQL', icon: 'mysql/mysql-original.svg' },
      { label: 'Firebase', icon: 'firebase/firebase-plain.svg' },
    ],
  },
  {
    key: 'tools',
    title: 'Tools',
    icon: Wrench,
    skills: [
      { label: 'Git', icon: 'git/git-original.svg' },
      { label: 'GitHub', icon: 'github/github-original.svg', invert: true },
      { label: 'VS Code', icon: 'vscode/vscode-original.svg' },
      { label: 'Jira', icon: 'jira/jira-original.svg' },
    ],
  },
];

const marqueeIcons = [
  'react/react-original.svg',
  'flutter/flutter-original.svg',
  'nodejs/nodejs-original.svg',
  'python/python-original.svg',
  'postgresql/postgresql-original.svg',
  'typescript/typescript-original.svg',
  'firebase/firebase-plain.svg',
  'java/java-original.svg',
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-32 bg-bg-soft">
      <div className="max-w-wrap mx-auto px-8">
        <Reveal className="max-w-[640px] mb-14">
          <h2 className="font-display font-bold text-[28px] md:text-[40px] mb-3">Skills &amp; Tools</h2>
          <p className="text-dim text-[16.5px]">The languages, frameworks, and tools I actually build with.</p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <StaggerItem key={cat.key}>
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full bg-surface border border-border rounded-2xl p-7 hover:border-accent2 transition-colors"
              >
                <div className="w-[52px] h-[52px] rounded-xl border border-border-strong flex items-center justify-center mb-5">
                  <cat.icon size={22} className="text-ink" strokeWidth={1.8} />
                </div>
                <h4 className="font-display font-bold text-[19px] mb-1.5">{cat.title}</h4>
                <div className="w-9 h-[3px] rounded-full bg-accent2 mb-6" />

                <div className="grid grid-cols-2 gap-2.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s.label}
                      className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-border-strong bg-surface-2/40 text-[13px] font-medium text-ink/90"
                    >
                      <BrandIcon name={s.icon} className={`w-4 h-4 object-contain flex-shrink-0 ${s.invert ? 'invert' : ''}`} />
                      {s.label}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-10 overflow-hidden marquee-mask">
          <div className="flex gap-3.5 w-max animate-marquee">
            {[...marqueeIcons, ...marqueeIcons].map((icon, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2.5 px-[18px] py-2.5 rounded-full bg-surface border border-border text-dim text-[13px] font-mono whitespace-nowrap"
              >
                <BrandIcon name={icon} className="w-4 h-4 object-contain" />
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
