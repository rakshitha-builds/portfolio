'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const pos = window.scrollY + 140;
      let current = 'home';
      document.querySelectorAll('main section[id]').forEach((sec) => {
        if (pos >= sec.offsetTop) current = sec.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled ? 'bg-bg/75 backdrop-blur-xl border-b border-border py-3.5' : 'py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-wrap mx-auto px-8 flex items-center justify-between">
          <a href="#home" className="font-logo font-extrabold text-[28px] tracking-tight" style={{ color: '#39c1ff' }}>
            Rakshitha R
          </a>
          <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-[14.5px] font-medium py-1 transition-colors ${
                  active === l.href.slice(1) ? 'text-ink' : 'text-dim hover:text-ink'
                }`}
              >
                {l.label}
                {active === l.href.slice(1) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-accent2"
                  />
                )}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex text-sm font-semibold px-5 py-2 rounded-full border border-border-strong hover:border-accent2 hover:text-accent2 transition-colors"
            >
              Resume
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden text-ink text-2xl"
              aria-label="Open menu"
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-[#080b12] flex flex-col gap-1 px-8 pt-28 pb-10 md:hidden"
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="font-display font-semibold text-2xl py-3.5 border-b border-border"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: LINKS.length * 0.05 }}
              className="mt-6 inline-flex justify-center items-center rounded-full bg-gradient-to-br from-accent to-[#ffcb73] text-[#1a1206] font-semibold px-6 py-3.5"
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
