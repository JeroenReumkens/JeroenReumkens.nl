'use client';

import { useRef } from 'react';
import { Container } from '~/components/container';
import { useMotion } from '~/utils/use-motion';
import { animate, scroll } from 'motion';

export const Early2000s = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useMotion([containerRef], ([container]) => {
    scroll(
      animate(container, {
        y: [0, '-300px'],
      }),
      {
        target: container,
        offset: ['start end', 'end center'],
      }
    );
  });

  return (
    <Container
      ref={containerRef}
      className="my-5 font-mono text-body leading-tight sm:text-2xl"
    >
      <p className="mb-3 sm:mb-5">
        My passion for web started as a hobby back in the early 2000s.
      </p>
      <p className="mb-3 sm:mb-5">
        Back in the days, when the web looked slightly different...
      </p>
      <p className="mb-3 sm:mb-5">
        — when iframes, tables and GIFs were for the cool kids!
      </p>
    </Container>
  );
};
