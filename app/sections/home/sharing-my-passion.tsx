import { Container } from '~/components/container';
import { SectionTitle } from '~/components/section-title';
import { GlobeIcon } from '~/components/icons/globe';
import { CtaButton } from '~/components/cta-button';
import { HighlightText } from '~/components/highlight-text';
import { ForTeamsAndIndividuals } from '../shared/for-teams-and-individuals';

export const SharingMyPassion = () => {
  return (
    <Container className="pt-5 sm:pt-6">
      <SectionTitle className="mb-5">Sharing my passion</SectionTitle>

      <HighlightText
        line1="The past years I've been focussing more and more on sharing my passion."
        line2="I want to teach people the real craft in frontend — bringing the
        products they create to the next level."
        iconLeft={GlobeIcon}
        iconRight={GlobeIcon}
      />

      <p className="mt-6 text-body sm:w-1/2 sm:text-xl">
        I've already taught lot's of engineers both as a freelancer as well as a
        principal engineer at DEPT®. But I've always felt there was way more
        potential in helping people and too little time to do so.
      </p>
      <p className="mt-4 text-body sm:w-1/2 sm:text-xl">
        That's why I decided to turn things{' '}
        <span className="inline-block rotate-12">around</span>.{' '}
        <strong>I'm going to teach you!</strong>
      </p>

      <ForTeamsAndIndividuals />

      <div className="mt-5 flex justify-center">
        <CtaButton
          to="/mentoring"
          subtitle="see how I can help you or your team"
        >
          More about my mentorship
        </CtaButton>
      </div>
    </Container>
  );
};
