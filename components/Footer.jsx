'use client';

import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, EmailIcon } from './SocialIcons';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/rakshitha-builds' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/rakshithar1' },
  { icon: EmailIcon, label: 'Email', href: 'mailto:rakshitharrakshitha91@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-wrap mx-auto px-8 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-8 md:gap-12 py-16 md:py-16 pb-11">
        <div>
          <span className="font-logo font-extrabold text-2xl" style={{ color: '#39c1ff' }}>Rakshitha R</span>
          <p className="text-dim text-sm mt-4 mb-5 max-w-[320px] leading-relaxed">
            MCA graduate building full-stack &amp; mobile software — from campus operations platforms to retail ERPs.
          </p>
          <span
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[13.5px] font-medium"
            style={{ background: 'rgba(84,216,193,0.12)', border: '1px solid rgba(84,216,193,0.35)', color: '#54d8c1' }}
          >
            <span className="w-[7px] h-[7px] rounded-full bg-accent2" />
            Open to Software Development Opportunities
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="font-mono text-[11.5px] text-faint uppercase tracking-wide mb-2">Navigation</div>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-dim text-[14.5px] hover:text-accent2 transition-colors w-fit">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <div className="font-mono text-[11.5px] text-faint uppercase tracking-wide mb-2">Social</div>
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2.5 text-dim text-[14.5px] hover:text-accent2 transition-colors w-fit"
            >
              <s.icon />
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-wrap mx-auto px-8 flex items-center justify-between flex-wrap gap-4 py-6 border-t border-border">
        <p className="text-faint text-[13px]">© 2026 Rakshitha R.</p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-dim hover:text-accent2 border border-border-strong hover:border-accent2 rounded-full px-4 py-2 transition-colors"
        >
          Back to top <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
