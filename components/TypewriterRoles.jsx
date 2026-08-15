'use client';

import { useEffect, useState } from 'react';

const DEFAULT_ROLES = ['Software Developer', 'Mobile App Developer', 'Problem Solver'];

export default function TypewriterRoles({
  roles = DEFAULT_ROLES,
  typingSpeed = 70,
  deletingSpeed = 40,
  pause = 1400,
}) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="inline-flex items-center font-display font-semibold text-accent2 text-[19px] md:text-[21px]">
      {text}
      <span className="ml-1 w-[2px] h-[1.1em] bg-accent2 animate-pulseDot" aria-hidden="true" />
      <span className="sr-only">Software Developer, Mobile App Developer, Problem Solver</span>
    </span>
  );
}
