'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { site, heroStats } from '@/data/site';
import CountUp from './CountUp';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } };
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 0.7, 0.2, 1] } },
};

function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <div aria-hidden="true" className="absolute inset-[8%] -z-10 rounded-full bg-accent-bright/25 blur-3xl" />
      <Image
        src="/images/hero-illustration.webp"
        alt="Illustration of a laptop with code on screen, surrounded by programming language names, a notebook, a coffee mug and a plant"
        width={1212}
        height={1197}
        priority
        sizes="(min-width: 1024px) 540px, 90vw"
        className="h-auto w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)]"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="on-dark relative isolate overflow-hidden bg-navy text-on-dark">
      {/* Decorative circles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-[18%] top-1/2 h-[min(92vw,820px)] w-[min(92vw,820px)] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#6db1ff_0%,#2f6fe0_40%,#14357a_100%)] opacity-95" />
        <div className="absolute -right-[26%] top-1/2 h-[min(110vw,980px)] w-[min(110vw,980px)] -translate-y-1/2 rounded-full border border-accent-bright/25" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b1322_0%,#0b1322_38%,rgba(11,19,34,0.55)_62%,rgba(11,19,34,0)_100%)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="wrap grid min-h-[100svh] items-center gap-14 pb-16 pt-28 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pt-24"
      >
        <div>
          <motion.p
            variants={item}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13.5px] font-medium text-on-dark"
          >
            <span className="h-[7px] w-[7px] animate-pulseDot rounded-full bg-[#4ade80]" aria-hidden="true" />
            Open to opportunities
          </motion.p>

          <motion.p variants={item} className="mb-3 text-[18px] font-medium text-on-dark-dim">
            Hi, I&apos;m {site.name}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.4rem,4.8vw,4rem)] font-bold uppercase leading-[1.02] tracking-[-0.02em]"
          >
            Building practical web and mobile software<span className="text-accent-bright">.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[16px] font-semibold md:text-[17px]"
          >
            {site.headline.map((h) => (
              <span
                key={h}
                className="after:ml-3 after:font-normal after:text-white/30 after:content-['|'] last:after:hidden max-sm:after:hidden"
              >
                {h}
              </span>
            ))}
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-[500px] text-[17px] leading-relaxed text-on-dark-dim">
            MCA graduate building full-stack and mobile applications, from an AI-assisted campus operations platform
            to an offline-capable retail inventory system.
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3.5">
            <a href="#projects" className="btn btn-primary">
              View selected work <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href={site.resume} download className="btn btn-outline-dark">
              <Download size={16} aria-hidden="true" /> Download resume
            </a>
          </motion.div>

          <motion.dl variants={item} className="mt-9 flex flex-wrap gap-x-12 gap-y-6">
            {heroStats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-1">
                <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-on-dark-dim">{s.label}</dt>
                <dd className="font-display font-bold tracking-tight text-[clamp(2.2rem,4vw,3rem)] leading-none">
                  <CountUp value={s.value} decimals={s.decimals} />
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div variants={item} className="lg:pl-6">
          <HeroArt />
        </motion.div>
      </motion.div>
    </section>
  );
}
