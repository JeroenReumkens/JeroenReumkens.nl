import { useEffect, useRef } from 'react';
import { GrainSection } from '~/components/grain-section';
import { animate, scroll } from 'motion';
import { GooglyPicture } from '~/components/googly-picture';

export const Intro = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current || !sectionRef.current) return;
    scroll(
      animate(imageRef.current, {
        opacity: [1, 0],
        y: [0, 100],
        borderBottomLeftRadius: [120, 0],
        borderBottomRightRadius: [120, 0],
      }),
      {
        target: imageRef.current,
        offset: ['start start', -1.45],
      }
    );

    scroll(
      animate(sectionRef.current, {
        borderRadius: [120, 0],
      }),
      {
        target: sectionRef.current,
        offset: ['start start', 'end start'],
      }
    );
  }, []);

  return (
    <>
      <GrainSection
        ref={sectionRef}
        className="overflow-hidden rounded-b-massive pt-5 after:rounded-b-[inherit]"
      >
        <div className="height-full flex flex-col items-center justify-center sm:flex-row">
          <div className="flex h-full flex-col items-center justify-center sm:mr-4 sm:w-1/2 md:w-[60%] md:max-w-[80rem]">
            <h1
              className="mb-2 font-mono text-xl font-medium leading-[0.9] md:mb-5 md:text-2xl lg:text-humongous"
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
              <p className="mb-2 text-small md:mb-5 md:text-body">
                is a passionate frontend engineer with over a decade of
                professional experience building the best experiences on the
                web.
              </p>
              <p className="mb-2 text-small md:mb-5 md:text-body">
                I also mentor teams & individuals, learn more.
              </p>
            </div>
          </div>
          <div className="mb:mt-5 relatie mt-2 md:ml-auto md:mt-[0]">
            <GooglyPicture ref={imageRef} />
          </div>
        </div>
      </GrainSection>
    </>
  );
};
