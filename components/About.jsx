'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Code2, Globe, Brain, Check } from 'lucide-react';
import Reveal from './Reveal';
import { StaggerGroup, StaggerItem } from './Stagger';

const highlights = [
  { icon: GraduationCap, title: 'MCA Graduate', desc: "St. Philomena's College, Mysuru · CGPA 9.35" },
  { icon: Code2, title: 'Software Development', desc: 'Python, Java, JavaScript, Dart' },
  { icon: Globe, title: 'Web & Mobile Development', desc: 'Shipped across three internships' },
  { icon: Brain, title: 'AI/ML Projects', desc: 'ML-based classification in Campus IQ' },
];

const certs = ['Machine Learning — Coursera', 'Python for Data Science — NPTEL (Elite)', 'Ethical Hacking — Tech By Heart'];
const langs = ['English — Professional', 'Kannada — Fluent', 'Hindi — Conversational'];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-32">
      <div className="max-w-wrap mx-auto px-8">
        <Reveal className="max-w-[640px] mb-14">
          <h2 className="font-display font-bold text-[28px] md:text-[40px]">About Me</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-11 md:gap-16 items-start">
          <Reveal>
            <div className="space-y-4 text-dim text-[16.5px]">
              <p>
                I&apos;m an MCA graduate specializing in full-stack and mobile development, with three internships
                spanning Flutter/Firebase real-time apps, React component work, and backend systems.
              </p>
              <p>
                My capstone project, Campus IQ, is a role-based campus operations platform built around a trained
                machine-learning microservice for complaint classification. I&apos;m also the builder behind Opto, a
                full-stack retail inventory ERP.
              </p>
              <p>
                Proficient in Python, Java, JavaScript, and Dart, I&apos;m currently looking for a full-time Software
                Development Engineer role where I can keep solving real problems with practical, working software.
              </p>
            </div>

            <div className="mt-7 pt-7 border-t border-border">
              <div className="font-mono text-[12px] text-faint uppercase tracking-wide mb-3">Certifications</div>
              <div className="flex flex-wrap gap-2.5">
                {certs.map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-2 border border-border text-dim text-[13px] font-medium">
                    <Check size={13} className="text-accent2" /> {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-border">
              <div className="font-mono text-[12px] text-faint uppercase tracking-wide mb-3">Languages</div>
              <div className="flex flex-wrap gap-2.5">
                {langs.map((l) => (
                  <span key={l} className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-surface-2 border border-border text-dim text-[13px] font-medium">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <StaggerItem key={h.title}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full bg-surface border border-border rounded-2xl p-5 hover:bg-surface-2 hover:border-border-strong transition-colors"
                >
                  <h.icon size={19} className="text-accent mb-3" />
                  <h4 className="font-display font-semibold text-[15.5px] mb-1">{h.title}</h4>
                  <p className="text-faint text-[13.5px]">{h.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
