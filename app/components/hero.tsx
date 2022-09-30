import { useRef } from 'react';
import { GrainSection } from '~/components/grain-section';
import { animate, scroll } from 'motion';
import { useMotion } from '~/utils/use-motion';
import classNames from 'classnames';

if (
  typeof window !== 'undefined' &&
  typeof window?.CSS?.registerProperty !== 'undefined'
) {
  window.CSS.registerProperty({
    name: '--grain-movement',
    inherits: true,
    initialValue: '0',
    syntax: '<length>',
  });
}

interface HeroProps {
  children: React.ReactNode;
  bgTitle: string;
}

export const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    className="mb-2 font-mono text-xl font-medium leading-[0.9] md:mb-3 md:text-2xl lg:text-humongous"
    lang="nl-NL"
  >
    {children}
  </h1>
);

export const Intro = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-full flex-col justify-center space-y-3 sm:mr-4 sm:w-1/2 md:w-[60%] md:max-w-[80rem]">
    <div className="mb-2 space-y-3 text-small md:mb-3 md:text-body">
      {children}
    </div>
  </div>
);

export const Hero = ({ children, bgTitle }: HeroProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useMotion([sectionRef], ([section]) => {
    scroll(
      animate(section, {
        borderRadius: ['var(--responsive-massive-radius)', 0],
      }),
      {
        target: section,
        offset: ['start start', 'center start'],
      }
    );

    // Modern day internet explorer (Safari..) doesn't support registerProperty..
    if (typeof window?.CSS?.registerProperty !== 'undefined') {
      scroll(
        animate(section, {
          '--grain-movement': ['0', '100vw'],
        }),
        {
          target: section,
          offset: ['start start', 'end start'],
        }
      );
    }
  });

  return (
    <>
      <GrainSection
        ref={sectionRef}
        className={classNames(
          'before:pointer-none flex items-center overflow-hidden rounded-b-massive pt-5 before:absolute before:left-[0] before:bottom-[0] before:z-0 before:flex before:h-6 before:w-full before:translate-x-[var(--grain-movement)] before:font-mono before:text-[32rem] before:leading-[0.68] before:tracking-[-3rem] before:opacity-[0.07] after:rounded-b-[inherit]',
          `before:content-['${bgTitle}']`
        )}
      >
        <div className="flex h-full flex-col items-center justify-start sm:flex-row">
          {children}
        </div>
      </GrainSection>
    </>
  );
};
