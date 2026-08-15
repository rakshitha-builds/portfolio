'use client';

import { motion } from 'framer-motion';
import { Star, Layers, Github, ArrowUpRight, Bot, ShieldCheck, Wallet, ListChecks, Gavel } from 'lucide-react';
import Reveal from './Reveal';
import { StaggerGroup, StaggerItem } from './Stagger';

const smallProjects = [
  {
    icon: Wallet,
    gradient: 'from-[#3a2a12] to-[#5a3f14]',
    title: 'Expense Tracker',
    desc: 'A cross-platform mobile app for tracking personal expenses, with categorized entries, summaries, and real-time data sync.',
    tech: ['Flutter', 'Firebase'],
  },
  {
    icon: ListChecks,
    gradient: 'from-[#0f3a36] to-[#146157]',
    title: 'Student Task Manager',
    desc: 'A web app for task creation, deletion, and priority-based filtering, with a responsive UI designed for everyday usability.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: Gavel,
    gradient: 'from-[#241a3a] to-[#3a2a5c]',
    title: 'E-Procurement',
    desc: 'A bidding web app with a structured layout, built to improve usability and performance for procurement workflows.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

function Tag({ children }) {
  return (
    <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-surface-2 border border-border text-dim text-[13px] font-medium">
      {children}
    </span>
  );
}

function TicketChip({ children, tone = 'default' }) {
  const tones = {
    default: 'text-dim border-border',
    danger: 'text-danger border-danger/40 bg-danger-soft',
    accent2: 'text-accent2 border-accent2/40 bg-accent2-soft',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-[12px] ${tones[tone]}`}>
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-32">
      <div className="max-w-wrap mx-auto px-8">
        <Reveal className="max-w-[640px] mb-14">
          <h2 className="font-display font-bold text-[28px] md:text-[40px] mb-3">Featured Projects</h2>
          <p className="text-dim text-[16.5px]">A look at what I&apos;ve built — from a capstone platform to independent web and mobile apps.</p>
        </Reveal>

        <Reveal className="relative overflow-hidden rounded-[20px] border border-border-strong p-8 md:p-11 mb-6"
          style={{ background: 'linear-gradient(160deg, #131a2a, #1a2338)' }}>
          <div className="absolute -top-28 -right-28 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(245,169,63,0.14), transparent 70%)' }} />
          <span className="relative flex items-center gap-2 font-mono text-[12px] text-accent uppercase tracking-wider">
            <Star size={13} /> MCA Capstone Project
          </span>
          <h3 className="relative font-display font-bold text-[22px] md:text-[28px] max-w-[640px] mt-1.5">
            Campus IQ — Smart Campus Operations Platform
          </h3>
          <p className="relative text-dim max-w-[680px] text-[15.5px] mt-2.5">
            A full-stack campus operations platform with role-based access for Super Admins, trade-scoped admins, and
            users — covering maintenance complaints, asset tracking, room bookings, HRMS, and QR-based facility
            lookup. Incoming complaints are auto-classified by category and priority using a TF-IDF + Logistic
            Regression model trained on 1,000+ samples, deployed as a FastAPI microservice, with granular
            authorization middleware restricting system configuration to Super Admin.
          </p>
          <div className="relative flex flex-wrap gap-2.5 mt-4.5 mt-[18px]">
            {['React + TypeScript', 'Node.js / Express', 'PostgreSQL', 'Python / FastAPI', 'scikit-learn'].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <div className="relative flex flex-wrap gap-2.5 mt-4">
            <TicketChip><span className="text-faint">category:</span> IT</TicketChip>
            <TicketChip tone="danger"><span className="text-faint">priority:</span> High</TicketChip>
            <TicketChip tone="accent2"><Bot size={13} /> auto-classified</TicketChip>
          </div>
          <div className="relative flex flex-wrap gap-3.5 mt-6">
            <motion.a
              whileHover={{ y: -2 }}
              href="https://campus-iq-xi.vercel.app/login?redirect=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[15px]"
              style={{ background: 'linear-gradient(135deg,#f5a93f,#ffcb73)', color: '#1a1206' }}
            >
              <ArrowUpRight size={16} /> Live Demo
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="https://github.com/rakshitha-builds/campus-iq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[15px] bg-surface border border-border-strong"
            >
              <Github size={16} /> View on GitHub
            </motion.a>
          </div>
        </Reveal>

        <Reveal className="relative overflow-hidden rounded-[20px] border border-border-strong p-8 md:p-11 mb-14"
          style={{ background: 'linear-gradient(160deg, #131a2a, #1a2338)' }}>
          <span className="relative flex items-center gap-2 font-mono text-[12px] text-accent uppercase tracking-wider">
            <Layers size={13} /> Independent Project
          </span>
          <h3 className="relative font-display font-bold text-[22px] md:text-[28px] max-w-[640px] mt-1.5">
            Opto — Inventory Management ERP for Retail
          </h3>
          <p className="relative text-dim max-w-[680px] text-[15.5px] mt-2.5">
            A full-stack ERP inventory system for small retail stores, with POS billing, stock management, and
            GST-compliant invoicing including HSN code lookup and PDF generation via Puppeteer. Its natural-language
            business-intelligence feature converts plain-English questions into safe, parameterized SQL using local
            sentence embeddings — avoiding external LLM dependency and eliminating injection/hallucination risk by
            construction. Secured with JWT + bcrypt authentication, rate limiting, and SQL input validation
            middleware, with a Flutter frontend spanning Web, Android, Windows, macOS, and Linux.
          </p>
          <div className="relative flex flex-wrap gap-2.5 mt-[18px]">
            {['Node.js / Express', 'PostgreSQL', 'Flutter', 'JWT', 'Local ML Embeddings'].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <div className="relative flex flex-wrap gap-2.5 mt-4">
            <TicketChip tone="accent2"><ShieldCheck size={13} /> zero external LLM dependency</TicketChip>
            <TicketChip><span className="text-faint">platforms:</span> Web · Android · Windows · macOS · Linux</TicketChip>
          </div>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {smallProjects.map((p) => (
            <StaggerItem key={p.title}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full flex flex-col bg-surface border border-border rounded-2xl p-6 hover:border-border-strong transition-colors"
              >
                <div className={`relative h-[110px] rounded-xl mb-4.5 mb-[18px] flex items-center justify-center bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                  <p.icon size={26} className="text-ink/85 relative z-10" />
                </div>
                <h4 className="font-display font-semibold text-[17px] mb-2">{p.title}</h4>
                <p className="text-dim text-sm flex-grow mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4.5 mb-[18px]">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-surface-2 border border-border text-dim text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/rakshitha-builds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-dim hover:text-accent2 transition-colors"
                >
                  View on GitHub <ArrowUpRight size={14} />
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
