import { Container } from '~/components/container';
import { SectionTitle } from '~/components/section-title';
import { GlobeIcon } from '~/components/icons/globe';

export const SharingMyPassion = () => {
  return (
    <Container className="pt-5 font-serif text-body font-regular leading-tight sm:pt-6 sm:text-2xl">
      <SectionTitle className="mb-5">Sharing my passion</SectionTitle>

      <p className="relative z-10 sm:w-[75%]">
        The past years I’ve been focussing more and more on sharing my passion.
      </p>

      <p className="relative mt-3 font-medium sm:mt-5 sm:ml-col sm:w-[60%]">
        <GlobeIcon
          aria-hidden
          className="pointer-events-none absolute -top-[160px] -z-0 h-5 w-5 rotate-12 sm:-left-[150px] sm:-top-[70px]"
        />
        <GlobeIcon
          aria-hidden
          className="pointer-events-none absolute top-full -right-[20px] -z-0 h-5 w-5 -rotate-[38deg] sm:top-auto sm:-bottom-[20px] sm:-right-[100px]"
        />
        I want to teach people the real craft in frontend — bringing the
        products they create to the next level.
      </p>
    </Container>
  );
};
