/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0e17',
        'bg-soft': '#0d1220',
        surface: '#131a2a',
        'surface-2': '#1a2338',
        border: 'rgba(231,236,245,0.09)',
        'border-strong': 'rgba(231,236,245,0.16)',
        ink: '#e9edf6',
        dim: '#98a4bd',
        faint: '#5c6889',
        accent: '#f5a93f',
        'accent-soft': 'rgba(245,169,63,0.12)',
        accent2: '#54d8c1',
        'accent2-soft': 'rgba(84,216,193,0.12)',
        danger: '#f2637a',
        'danger-soft': 'rgba(242,99,122,0.12)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        logo: ['"Baloo 2"', 'sans-serif'],
      },
      maxWidth: { wrap: '1180px' },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        floatCard: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        pulseDot: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.4 } },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        floatCard: 'floatCard 6s ease-in-out infinite',
        pulseDot: 'pulseDot 2.2s infinite',
      },
    },
  },
  plugins: [],
};
