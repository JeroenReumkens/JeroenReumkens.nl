'use client';

import { Suspense, useRef } from 'react';
import { animate, scroll } from 'motion';
import { useMotion } from '~/utils/use-motion';
import { CtaButton } from '~/components/cta-button';
import { Hero, Title, Intro as IntroText } from '~/components/hero';
import dynamic from 'next/dynamic';
import { WhoDisPicture } from '~/components/who-dis-picture';

const LazyGoogleEyes = dynamic(
  () => import('../../components/googly-picture'),
  {
    suspense: true,
  }
);

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

        <p className="mb-2 max-w-[70%] text-small md:mb-3 md:text-body">
          is a passionate frontend engineer with over a decade of professional
          experience hand crafting the best experiences on the web.
        </p>

        <p className="mt-5 flex flex-col items-start text-small md:block">
          <CtaButton
            variant="small"
            className="mr-3 mb-3 md:mb-[0]"
            href="/mentoring"
            subtitle="for teams and individuals"
          >
            I also do mentoring
          </CtaButton>
          or read on... 👇
        </p>
      </IntroText>
      <div className="mb:mt-5 relative mt-2 max-w-[400px] md:ml-auto md:mt-[0]">
        <Suspense fallback={<WhoDisPicture />}>
          <LazyGoogleEyes ref={imageRef} />
        </Suspense>
      </div>
    </Hero>
  );
};
