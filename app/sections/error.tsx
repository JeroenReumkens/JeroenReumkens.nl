import { useRef } from 'react';
import { CtaButton } from '~/components/cta-button';
import { GoogleEyes } from '~/components/google-eyes';
import { GrainSection } from '~/components/grain-section';

export const ErrorPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <GrainSection ref={ref}>
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-center text-2xl">Oh no.</h1>
        <p className="text-center text-xl">
          It seems something broke.. We're unsure what exactly.
        </p>

        <CtaButton
          to="/"
          className="mt-4"
          subtitle="and try again. I'm really sorry!"
        >
          I'd suggest heading back to the homepage
        </CtaButton>

        <GoogleEyes wrapperRef={ref} />
      </div>
    </GrainSection>
  );
};
