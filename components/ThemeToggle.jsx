'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ dark: onDarkSurface = false }) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch (e) {}
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`flex h-10 w-10 items-center justify-center rounded-full border transition hover:-translate-y-0.5 hover:border-accent ${
        onDarkSurface ? 'border-white/25 text-on-dark' : 'border-line-strong text-ink'
      }`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light theme' : 'Dark theme'}
    >
      {mounted && (isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />)}
    </button>
  );
}
