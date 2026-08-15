'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { GithubIcon, LinkedinIcon, EmailIcon } from './SocialIcons';

const links = [
  { icon: EmailIcon, label: 'EMAIL', value: 'rakshitharrakshitha91@gmail.com', href: 'mailto:rakshitharrakshitha91@gmail.com' },
  { icon: LinkedinIcon, label: 'LINKEDIN', value: 'linkedin.com/in/rakshithar1', href: 'https://linkedin.com/in/rakshithar1' },
  { icon: GithubIcon, label: 'GITHUB', value: 'github.com/rakshitha-builds', href: 'https://github.com/rakshitha-builds' },
];

export default function Contact() {
  const formRef = useRef(null);
  const [note, setNote] = useState('Sent directly to my inbox.');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailjs = (await import('@emailjs/browser')).default;
    setNote('Sending...');
    try {
      emailjs.init('-nY8mia3y3pGUp_-K');
      await emailjs.sendForm('service_qaygaiq', 'template_r8wdu3m', formRef.current);
      setNote('Message sent successfully — thank you!');
      formRef.current.reset();
    } catch (err) {
      console.log(err);
      setNote('Something went wrong. Please email me directly.');
    }
  };

  return (
    <section id="contact" className="py-28 md:py-32 bg-bg-soft">
      <div className="max-w-wrap mx-auto px-8 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
        <Reveal>
          <h2 className="font-display font-bold text-[28px] md:text-[38px] mb-4">Let&apos;s build something meaningful.</h2>
          <p className="text-dim text-base mb-8 max-w-[420px]">
            I&apos;m open to software development opportunities, internships, and projects where I can learn,
            contribute, and grow.
          </p>
          <div className="flex flex-col gap-3.5">
            {links.map((l) => (
              <motion.a
                key={l.label}
                whileHover={{ x: 4 }}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3.5 px-4.5 px-[18px] py-3.5 bg-surface border border-border rounded-2xl hover:border-accent2 transition-colors"
              >
                <span className="w-[38px] h-[38px] rounded-[10px] bg-accent2-soft text-accent2 flex items-center justify-center flex-shrink-0">
                  <l.icon />
                </span>
                <span>
                  <span className="block font-mono text-[12px] text-faint">{l.label}</span>
                  <span className="block text-[14.5px] font-semibold">{l.value}</span>
                </span>
              </motion.a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-surface border border-border rounded-[20px] p-8 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[13px] text-dim font-medium">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="px-[15px] py-3.5 rounded-[9px] border border-border-strong bg-bg-soft text-ink text-[14.5px] focus:outline-none focus:border-accent2 focus:ring-[3px] focus:ring-accent2/20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[13px] text-dim font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="px-[15px] py-3.5 rounded-[9px] border border-border-strong bg-bg-soft text-ink text-[14.5px] focus:outline-none focus:border-accent2 focus:ring-[3px] focus:ring-accent2/20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[13px] text-dim font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me a bit about the opportunity..."
                rows={5}
                className="px-[15px] py-3.5 rounded-[9px] border border-border-strong bg-bg-soft text-ink text-[14.5px] resize-y min-h-[120px] focus:outline-none focus:border-accent2 focus:ring-[3px] focus:ring-accent2/20"
              />
            </div>
            <motion.button
              whileHover={{ y: -2 }}
              type="submit"
              className="w-full flex justify-center items-center px-6 py-3.5 rounded-full font-semibold text-[15px] mt-1"
              style={{ background: 'linear-gradient(135deg,#f5a93f,#ffcb73)', color: '#1a1206' }}
            >
              Send Message
            </motion.button>
            <p className="text-xs text-faint text-center">{note}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
