'use client';

import { useRef } from 'react';
import { animate, scroll } from 'motion';
import { GooglyPicture } from '~/app/components/googly-picture';
import { useMotion } from '~/utils/use-motion';
import { CtaButton } from '~/app/components/cta-button';
import { Hero, Title, Intro as IntroText } from '~/app/components/hero';

export const Intro = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useMotion([imageRef], ([image]) => {
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
  });

  return (
    <Hero className='[--bg-title:"Jeroen_Reumkens"]'>
      <IntroText>
        <Title>
          Jeroen
          <span
            className="font-mono text-[2rem] font-regular sm:text-body md:text-xl"
            aria-hidden
          >
            [yuh&lsquo;roon]
          </span>{' '}
          Reumkens
        </Title>

        <div className="md:ml-col">
          <p className="mb-2 text-small md:mb-3 md:text-body">
            is a passionate frontend engineer with over a decade of professional
            experience hand crafting the best experiences on the web.
          </p>
        </div>

        <p className="mt-5 flex flex-col items-start text-small md:block">
          <CtaButton
            variant="small"
            className="mr-3 mb-3 md:mb-[0]"
            to="/mentoring"
            subtitle="for teams and individuals"
          >
            I also do mentoring
          </CtaButton>
          or read on... 👇
        </p>
      </IntroText>
      <div className="mb:mt-5 relative mt-2 md:ml-auto md:mt-[0]">
        <GooglyPicture ref={imageRef} />
      </div>
    </Hero>
  );
};
