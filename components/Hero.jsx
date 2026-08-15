'use client';

import { motion } from 'framer-motion';
import { Download, Github, ArrowRight } from 'lucide-react';
import TypewriterRoles from './TypewriterRoles';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

const codeLines = [
  { n: 1, jsx: <><span className="text-[#c792ea]">const</span> <span className="text-[#89ddff]">developer</span> <span className="text-faint">=</span> <span className="text-faint">{'{'}</span></> },
  { n: 2, jsx: <>&nbsp;&nbsp;<span className="text-ink">name</span><span className="text-faint">:</span> <span className="text-accent">&quot;Rakshitha R&quot;</span><span className="text-faint">,</span></> },
  { n: 3, jsx: <>&nbsp;&nbsp;<span className="text-ink">role</span><span className="text-faint">:</span> <span className="text-accent">&quot;Software Developer&quot;</span><span className="text-faint">,</span></> },
  { n: 4, jsx: <>&nbsp;&nbsp;<span className="text-ink">focus</span><span className="text-faint">:</span> <span className="text-accent">&quot;Full-Stack &amp; Mobile&quot;</span><span className="text-faint">,</span></> },
  { n: 5, jsx: <>&nbsp;&nbsp;<span className="text-ink">learning</span><span className="text-faint">:</span> <span className="text-accent">&quot;AI-powered systems&quot;</span><span className="text-faint">,</span></> },
  { n: 6, jsx: <>&nbsp;&nbsp;<span className="text-ink">available</span><span className="text-faint">:</span> <span className="text-accent2">true</span><span className="text-faint">,</span></> },
  { n: 7, jsx: <><span className="text-faint">{'};'}</span></> },
];

const stats = [
  { num: '9.35', label: 'MCA CGPA' },
  { num: '3', label: 'Internships' },
  { num: '2', label: 'Featured Projects' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[170px] pb-28">
      <div className="absolute -top-56 -right-40 w-[640px] h-[640px] rounded-full pointer-events-none blur-[10px]"
        style={{ background: 'radial-gradient(circle, rgba(245,169,63,0.20), transparent 68%)' }} />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative z-10 max-w-wrap mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[13.5px] font-medium mb-6"
            style={{ background: 'rgba(84,216,193,0.12)', border: '1px solid rgba(84,216,193,0.35)', color: '#54d8c1' }}
          >
            <span className="w-[7px] h-[7px] rounded-full bg-accent2 animate-pulseDot" />
            Open to Software Development Opportunities
          </motion.span>

          <motion.h1 variants={item} className="font-display font-bold leading-[1.1] mb-4">
            <span className="block text-dim font-body font-medium text-[18px] md:text-[20px] mb-2.5">
              Hi, I&apos;m Rakshitha R
            </span>
            <span className="text-[38px] md:text-[52px] lg:text-[58px]">
              Building thoughtful <span className="headline-accent">digital experiences</span> with code.
            </span>
          </motion.h1>

          <motion.div variants={item} className="mb-3">
            <TypewriterRoles />
          </motion.div>

          <motion.p variants={item} className="text-dim text-[17.5px] max-w-[480px] mb-8">
            MCA graduate passionate about software development, web applications, backend systems, and AI-powered solutions.
          </motion.p>

          <motion.div variants={item} className="flex flex-col gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <motion.a
                whileHover={{ y: -2 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[15px]"
                style={{ background: 'linear-gradient(135deg,#f5a93f,#ffcb73)', color: '#1a1206' }}
              >
                View My Projects <ArrowRight size={16} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[15px] bg-surface border border-border-strong"
              >
                <Download size={16} /> Download Resume
              </motion.a>
            </div>
            <a
              href="https://github.com/rakshitha-builds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-dim hover:text-accent2 transition-colors text-[15px] font-medium w-fit"
            >
              <Github size={16} /> GitHub
            </a>
          </motion.div>

          <motion.div variants={item} className="flex gap-9 mt-12 pt-8 border-t border-border flex-wrap">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-display font-bold text-[28px]">{s.num}</span>
                <span className="font-mono text-[11.5px] text-faint uppercase tracking-wide">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          className="animate-floatCard"
        >
          <div className="rounded-[20px] overflow-hidden border border-border-strong bg-surface shadow-[0_30px_70px_-30px_rgba(0,0,0,0.65)]">
            <div className="flex items-center gap-2 px-[18px] py-3.5 bg-surface-2 border-b border-border">
              <span className="w-[11px] h-[11px] rounded-full bg-[#f2637a]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#f5a93f]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[#54d8c1]" />
              <span className="ml-3.5 font-mono text-[12.5px] text-dim bg-surface px-3 py-1 rounded-t-md">
                rakshitha.ts
              </span>
            </div>
            <div className="px-6 py-6 font-mono text-[14.5px] leading-[1.85]">
              {codeLines.map((l) => (
                <div key={l.n}>
                  <span className="text-faint inline-block w-[22px] select-none">{l.n}</span>
                  {l.jsx}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2.5 px-6 py-3.5 border-t border-border font-mono text-[12.5px] text-dim">
              <span className="w-[7px] h-[7px] rounded-full bg-accent2" />
              status: available_for_hire
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
