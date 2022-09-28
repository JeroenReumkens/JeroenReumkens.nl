import { useRef } from 'react';
import { GrainSection } from '~/components/grain-section';
import { animate, scroll } from 'motion';
import { GooglyPicture } from '~/components/googly-picture';
import { useMotion } from '~/utils/use-motion';
import { CtaButton } from '~/components/cta-button';

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

export const Intro = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useMotion([imageRef, sectionRef], ([image, section]) => {
    scroll(
      animate(image, {
        opacity: [1, 0],
        y: [0, 100],
        borderBottomLeftRadius: ['var(--responsive-massive-radius)', 0],
        borderBottomRightRadius: ['var(--responsive-massive-radius)', 0],
      }),
      {
        target: image,
        offset: ['start start', 'end start'],
      }
    );

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
        className="before:pointer-none flex items-center overflow-hidden rounded-b-massive pt-5 before:absolute before:left-[0] before:bottom-[0] before:z-0 before:flex before:w-full before:translate-x-[var(--grain-movement)] before:overflow-hidden before:font-mono before:text-[32rem] before:leading-[0.68] before:tracking-[-3rem] before:opacity-[0.07] before:content-['Jeroen_Reumkens'] after:rounded-b-[inherit]"
      >
        <div className="flex h-full flex-col items-center justify-center sm:flex-row">
          <div className="flex h-full flex-col justify-center sm:mr-4 sm:w-1/2 md:w-[60%] md:max-w-[80rem]">
            <h1
              className="mb-2 font-mono text-xl font-medium leading-[0.9] md:mb-3 md:text-2xl lg:text-humongous"
              lang="nl-NL"
            >
              Jeroen
              <span
                className="font-mono text-[2rem] font-regular sm:text-body md:text-xl"
                aria-hidden
              >
                [yuh&lsquo;roon]
              </span>{' '}
              Reumkens
            </h1>

            <div className="md:ml-col">
              <p className="mb-2 text-small md:mb-3 md:text-body">
                is a passionate frontend engineer with over a decade of
                professional experience hand crafting the best experiences on
                the web.
              </p>
            </div>

            <p className="mt-5 text-small">
              <CtaButton
                variant="small"
                className="mr-2"
                to="/mentoring"
                subtitle="for teams and individuals"
              >
                I also do mentoring
              </CtaButton>
              or read on... 👇
            </p>
          </div>
          <div className="mb:mt-5 relatie mt-2 md:ml-auto md:mt-[0]">
            <GooglyPicture ref={imageRef} />
          </div>
        </div>
      </GrainSection>
    </>
  );
};
