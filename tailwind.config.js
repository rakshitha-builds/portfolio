/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './data/**/*.js'],
  theme: {
    extend: {
      colors: {
        page: 'rgb(var(--page) / <alpha-value>)',
        paper: 'rgb(var(--paper) / <alpha-value>)',
        mist: 'rgb(var(--mist) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        navy: '#0b1322',
        'navy-2': '#142038',
        'on-dark': '#eaf0fb',
        'on-dark-dim': '#a9b8d0',
        line: 'rgb(var(--ink) / 0.12)',
        'line-strong': 'rgb(var(--ink) / 0.22)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-bright': '#6db1ff',
        good: '#2f9e6b',
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { wrap: '1200px' },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        pulseDot: { '0%,100%': { opacity: 1, transform: 'scale(1)' }, '50%': { opacity: 0.45, transform: 'scale(0.8)' } },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
