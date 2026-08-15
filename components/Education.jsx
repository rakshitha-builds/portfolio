'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Star } from 'lucide-react';
import Reveal from './Reveal';
import { StaggerGroup, StaggerItem } from './Stagger';

const schools = [
  { degree: 'Master of Computer Applications (MCA)', school: "St. Philomena's College, Mysuru", year: '2024 – 2026', gpa: '9.35' },
  { degree: 'Bachelor of Computer Applications (BCA)', school: "Maharani's Science College for Women, Mysore", year: '2021 – 2024', gpa: '9.04' },
];

export default function Education() {
  return (
    <section id="education" className="py-28 md:py-32">
      <div className="max-w-wrap mx-auto px-8">
        <Reveal className="max-w-[640px] mb-14">
          <h2 className="font-display font-bold text-[28px] md:text-[40px]">Education</h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {schools.map((s) => (
            <StaggerItem key={s.degree}>
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full bg-surface border border-border rounded-2xl p-7 hover:border-border-strong transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-[42px] h-[42px] rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                    <GraduationCap size={18} />
                  </div>
                  <span className="font-mono text-[12.5px] text-faint">{s.year}</span>
                </div>
                <h4 className="font-display font-bold text-[18px] mb-1">{s.degree}</h4>
                <div className="text-dim text-[14.5px] mb-3.5">{s.school}</div>
                <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-accent2">
                  <Star size={13} /> CGPA {s.gpa}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
