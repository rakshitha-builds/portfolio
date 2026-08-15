'use client';

import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import Reveal from './Reveal';

export default function ResumeCta() {
  return (
    <section id="resume" className="pb-28 md:pb-32">
      <div className="max-w-wrap mx-auto px-8">
        <Reveal className="relative overflow-hidden rounded-[20px] border border-border-strong text-center p-9 md:p-14"
          style={{ background: 'linear-gradient(135deg, #131a2a, #1a2338)' }}>
          <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(245,169,63,0.14), transparent 70%)' }} />
          <h2 className="relative font-display font-bold text-[24px] md:text-[32px] mb-6">
            Want to know more about my journey?
          </h2>
          <div className="relative flex justify-center gap-4 flex-wrap">
            <motion.a
              whileHover={{ y: -2 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[15px] bg-surface border border-border-strong"
            >
              <FileText size={16} /> View Resume
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[15px]"
              style={{ background: 'linear-gradient(135deg,#f5a93f,#ffcb73)', color: '#1a1206' }}
            >
              <Download size={16} /> Download Resume
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
