import { ArrowUp } from 'lucide-react';
import { navLinks, site } from '@/data/site';
import { GithubIcon, LinkedinIcon, EmailIcon } from './SocialIcons';

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: site.links.github },
  { icon: LinkedinIcon, label: 'LinkedIn', href: site.links.linkedin },
  { icon: EmailIcon, label: 'Email', href: `mailto:${site.email}` },
];

export default function Footer() {
  return (
    <footer className="bg-page">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#home" className="flex w-fit items-center gap-2.5" aria-label={`${site.name}, back to top`}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/40 font-display text-[17px] font-bold leading-none">
              R
            </span>
            <span className="text-[16px] font-semibold tracking-tight">{site.name}</span>
          </a>
          <p className="mt-5 max-w-[340px] text-[15px] leading-relaxed text-muted">
            Software developer building full-stack and mobile applications, from campus operations platforms to retail
            inventory systems.
          </p>
          <p className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-line-strong px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
            <span className="h-[7px] w-[7px] rounded-full bg-good" aria-hidden="true" />
            Open for opportunities
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="label mb-4 !text-muted">Navigation</h2>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[15px] transition-colors hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label mb-4 !text-muted">Connect</h2>
          <ul className="space-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2.5 text-[15px] transition-colors hover:text-accent"
                >
                  <s.icon /> {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 py-6">
          <p className="text-[13px] text-muted">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper px-4 py-2 text-[13px] font-semibold transition duration-200 hover:border-accent hover:text-accent"
          >
            Back to top <ArrowUp size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
