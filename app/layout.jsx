import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';
import './globals.css';
import Providers from '@/components/Providers';
import { site } from '@/data/site';

const title = `${site.name} | Software Developer`;
const description =
  'Rakshitha R — MCA graduate and Software, Full Stack & Python Developer building web and mobile applications with React, Node.js, FastAPI and Flutter.';

export const metadata = {
  title,
  description,
  authors: [{ name: site.name, url: site.links.github }],
  keywords: [
    'Rakshitha R',
    'Software Developer',
    'Full Stack Developer',
    'Python Developer',
    'React',
    'Node.js',
    'FastAPI',
    'Flutter',
    'Mysuru',
  ],
  openGraph: { title, description, type: 'website', siteName: site.name, locale: 'en_IN' },
  twitter: { card: 'summary', title, description },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b1322',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: 'Software Developer',
  address: { '@type': 'PostalAddress', addressLocality: 'Mysuru', addressRegion: 'Karnataka', addressCountry: 'IN' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: "St. Philomena's College, Mysuru" },
    { '@type': 'CollegeOrUniversity', name: "Maharani's Science College for Women" },
  ],
  sameAs: [site.links.github, site.links.linkedin],
};

const themeInit = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="font-body antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
