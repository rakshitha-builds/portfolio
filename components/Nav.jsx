'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { navLinks, site } from '@/data/site';
import ScrollProgress from './ScrollProgress';
import ThemeToggle from './ThemeToggle';

// The pill holds the section links; Contact is reached through the "Let's Talk" button.
const pillLinks = navLinks.filter((l) => l.href !== '#contact');

function Logo({ dark, onClick }) {
  return (
    <a href="#home" onClick={onClick} className="group flex items-center gap-2.5" aria-label={`${site.name}, home`}>
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full border font-display text-[17px] font-bold leading-none transition ${
          dark ? 'border-white/40 text-on-dark' : 'border-ink/40 text-ink'
        } group-hover:border-accent group-hover:text-accent`}
      >
        R
      </span>
      <span className={`text-[16px] font-semibold tracking-tight ${dark ? 'text-on-dark' : 'text-ink'}`}>
        {site.name}
      </span>
    </a>
  );
}

export default function Nav() {
  const [onDark, setOnDark] = useState(true); // true while the dark hero is behind the header
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('home');
      setOnDark(window.scrollY < (hero ? hero.offsetHeight - 80 : 40));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const dark = onDark || open;

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed inset-x-0 top-0 z-[1000] py-3 transition-colors duration-300 ${
          dark ? 'on-dark border-b border-transparent' : 'border-b border-line bg-paper/90 backdrop-blur-xl'
        }`}
      >
        <div className="wrap flex items-center justify-between gap-4">
          <Logo dark={dark} onClick={() => setOpen(false)} />

          <nav
            aria-label="Primary"
            className={`hidden items-center gap-1 rounded-full border p-1 lg:flex ${
              dark ? 'border-white/15 bg-white/10' : 'border-line bg-ink/[0.04]'
            }`}
          >
            {pillLinks.map((l) => {
              const on = active === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={on ? 'true' : undefined}
                  className={`relative rounded-full px-4 py-1.5 text-[14px] font-medium transition-colors ${
                    on ? 'text-on-dark' : dark ? 'text-on-dark-dim hover:text-white' : 'text-muted hover:text-ink'
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full ${dark ? 'bg-black/60 ring-1 ring-white/25' : 'bg-ink'}`}
                      transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle dark={dark} />
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.08em] text-ink dark:bg-paper transition hover:-translate-y-0.5 hover:border-accent sm:inline-flex"
            >
              <FileText size={14} aria-hidden="true" /> Resume
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href="#contact"
              className="hidden items-center rounded-full bg-accent px-5 py-2 text-[12.5px] font-bold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#1747a3] sm:inline-flex"
            >
              Let&apos;s Talk
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden ${
                dark ? 'border-white/25 text-on-dark' : 'border-line-strong text-ink'
              }`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="on-dark fixed inset-0 z-[999] flex flex-col overflow-y-auto bg-navy px-5 pb-10 pt-24 sm:px-8 lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className="border-b border-white/10 py-3.5 font-display text-[2rem] font-bold uppercase leading-none tracking-[-0.01em] text-on-dark"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary">
                Let&apos;s Talk
              </a>
              <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
