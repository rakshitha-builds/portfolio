'use client';

import { useRef, useState } from 'react';
import { ArrowRight, Send, Download } from 'lucide-react';
import { site } from '@/data/site';
import Reveal from './Reveal';
import { GithubIcon, LinkedinIcon, EmailIcon } from './SocialIcons';

const links = [
  { icon: EmailIcon, label: 'Email', value: site.email, href: `mailto:${site.email}`, action: 'Send direct email', primary: true },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'Rakshitha R', href: site.links.linkedin, action: 'Connect on LinkedIn' },
  { icon: GithubIcon, label: 'GitHub', value: 'rakshitha-builds', href: site.links.github, action: 'Explore repositories' },
];

const field =
  'w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3.5 text-[15px] text-on-dark placeholder:text-on-dark-dim/70 transition focus:border-accent-bright focus:outline-none focus:ring-[3px] focus:ring-accent-bright/20';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const emailjs = (await import('@emailjs/browser')).default;
      emailjs.init(site.emailjs.publicKey);
      await emailjs.sendForm(site.emailjs.serviceId, site.emailjs.templateId, formRef.current);
      setStatus('sent');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const note = {
    idle: 'Sent straight to my inbox.',
    sending: 'Sending…',
    sent: 'Message sent. Thank you, I will get back to you soon.',
    error: `Could not send your message. Please email ${site.email} directly.`,
  }[status];

  return (
    <section
      id="contact"
      className="on-dark section-y border-t border-white/10 bg-navy text-on-dark"
      aria-labelledby="contact-title"
    >
      <div className="wrap">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.07] px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-on-dark">
            <span className="h-[7px] w-[7px] animate-pulseDot rounded-full bg-[#4ade80]" aria-hidden="true" />
            Open to software engineering roles
          </p>
          <h2
            id="contact-title"
            className="font-display text-[clamp(2.4rem,6.6vw,4.75rem)] font-bold uppercase leading-[1.0] tracking-[-0.025em]"
          >
            Let&apos;s build something<span className="text-accent-bright">.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[540px] text-[17px] leading-relaxed text-on-dark-dim">
            I am looking for full-time Software Development Engineer roles. If you have an opportunity or a project in
            mind, send a message or reach out on any channel below.
          </p>
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-[980px] gap-4 md:grid-cols-3">
          {links.map((l, i) => {
            const external = l.href.startsWith('http');
            return (
              <Reveal as="li" key={l.label} delay={i * 0.06} className="relative">
                {l.primary && (
                  <span className="absolute -top-2.5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-accent-bright/50 bg-navy px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-accent-bright">
                    Primary contact
                  </span>
                )}
                <a
                  href={l.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center transition duration-200 hover:-translate-y-1 hover:border-accent-bright/50"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-on-dark">
                    <l.icon />
                  </span>
                  <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-on-dark-dim">{l.label}</span>
                  <span className="mt-1.5 max-w-full break-all text-[15px] font-semibold">{l.value}</span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em] text-accent-bright">
                    {l.action}
                    <ArrowRight size={13} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                    {external && <span className="sr-only"> (opens in a new tab)</span>}
                  </span>
                </a>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={0.08} className="mx-auto mt-14 max-w-[720px]">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:p-8"
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-on-dark-dim">
                  Name
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={field} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-on-dark-dim">
                  Email
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-on-dark-dim">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about the role or project…"
                className={`${field} min-h-[130px] resize-y`}
              />
            </div>
            <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full disabled:opacity-60">
              {status === 'sending' ? (
                'Sending…'
              ) : (
                <>
                  Send message <Send size={16} aria-hidden="true" />
                </>
              )}
            </button>
            <p
              role="status"
              aria-live="polite"
              className={`text-center text-[13px] ${status === 'error' ? 'text-[#ff9aa8]' : status === 'sent' ? 'text-[#4ade80]' : 'text-on-dark-dim'}`}
            >
              {note}
            </p>
          </form>
          <div className="mt-6 text-center">
            <a href={site.resume} download className="btn btn-outline-dark">
              <Download size={16} aria-hidden="true" /> Download resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
