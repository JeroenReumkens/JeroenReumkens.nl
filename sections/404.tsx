'use client';

import { useRef } from 'react';
import { GoogleEyes } from '~/components/google-eyes';
import { GrainSection, CtaButton } from '~/components/content';

export const NotFound = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <GrainSection ref={ref}>
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-center text-2xl">Oh no.</h1>
        <p className="text-center text-xl">
          I couldn't find this page. Something seems to be missing here..
        </p>

        <CtaButton
          href="/"
          className="mt-4"
          subtitle="but I suggest you head back to the homepage"
        >
          I could keep on looking..
        </CtaButton>

        <GoogleEyes wrapperRef={ref} />
      </div>
    </GrainSection>
  );
};
