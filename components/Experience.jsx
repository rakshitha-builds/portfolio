'use client';

import Reveal from './Reveal';

const jobs = [
  {
    role: 'Mobile Application Developer Intern',
    org: 'Pormenant Innovation Labs, Kochi (Remote)',
    date: 'May 2026 – Jul 2026',
    points: [
      'Developed features for a cross-platform Flutter/Dart mobile app with Firebase integration for real-time data sync across distributed clients',
      'Resolved data-consistency issues in the Firebase Firestore real-time sync layer and wrote automated tests, collaborating within a remote, agile team',
    ],
  },
  {
    role: 'Front-End Developer Intern',
    org: 'Cognifyz Technologies',
    date: 'Dec 2024 – Jan 2025',
    points: [
      'Built responsive UI components with HTML, CSS, and JavaScript, contributing to a shared, reusable component library',
      'Standardized UI/UX patterns across screens through peer code review, improving consistency across the codebase',
    ],
  },
  {
    role: 'Web Development Intern',
    org: 'Jay Blues Technologies',
    date: 'Mar 2024 – May 2024',
    points: ['Built responsive web applications', 'Profiled and optimized page load performance and usability'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-32 bg-bg-soft">
      <div className="max-w-wrap mx-auto px-8">
        <Reveal className="max-w-[640px] mb-14">
          <h2 className="font-display font-bold text-[28px] md:text-[40px]">Experience</h2>
        </Reveal>

        <div className="max-w-[760px] relative pl-9">
          <div className="absolute left-[6px] top-1.5 bottom-1.5 w-px bg-border-strong" />
          {jobs.map((j, i) => (
            <Reveal key={j.role} delay={i * 0.08} className="relative pb-11 last:pb-0">
              <span className="absolute -left-9 top-1 w-[13px] h-[13px] rounded-full bg-bg border-2 border-accent2" />
              <div className="font-display font-bold text-[18px]">{j.role}</div>
              <div className="text-accent2 font-semibold text-[14.5px] mt-0.5">{j.org}</div>
              <span className="font-mono text-[12.5px] text-faint mt-1.5 inline-block">{j.date}</span>
              <ul className="mt-3 flex flex-col gap-1.5">
                {j.points.map((pt) => (
                  <li key={pt} className="text-dim text-[14.5px] pl-4.5 pl-[18px] relative before:content-['—'] before:absolute before:left-0 before:text-faint">
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
