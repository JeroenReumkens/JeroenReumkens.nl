import { Container } from '~/components/container';
import { SectionTitle } from '~/components/section-title';
import { GlobeIcon } from '~/components/icons/globe';
import { CtaButton } from '~/components/cta-button';

export const SharingMyPassion = () => {
  return (
    <Container className="pt-5 font-serif text-body font-regular leading-tight sm:pt-6 sm:text-2xl">
      <SectionTitle className="mb-5">Sharing my passion</SectionTitle>

      <p className="relative z-10 sm:w-[75%]">
        The past years I've been focussing more and more on sharing my passion.
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

      <div className="mt-5 flex flex-col justify-between text-body sm:flex-row">
        <div className="sm:mb-0 mb-4 space-y-3 rounded-massive border bg-white px-4 py-5 shadow-hard sm:w-[calc(50%-2rem)]">
          <h3 className="text-2xl">For individuals</h3>
          <p>
            Frontend is huge. You might feel overwhelmed with all the things you
            could learn. Or you might feel "you know it all", but still get
            rejected when you apply for a job. Perhaps you still want to take
            the plunge into frontend and don't know where to start.
          </p>

          <p>I'd love to help.</p>
        </div>
        <div className="space-y-3 rounded-massive border bg-white px-4 py-5 shadow-hard sm:w-[calc(50%-2rem)]">
          <h3 className="text-2xl">For teams</h3>
          <p>
            Over the past years I've successfully build and taught multiple
            teams. I've upped their standards and helped them build great
            products. Build teams that are self-sustainable with this new
            quality.
          </p>

          <p>
            Looking at the current market, where it's really hard to find
            experienced engineers, I'm convinced I can bring very important
            value to existing teams to teach them these new standards and grow
            to the next level — without creating a team that's eventually
            dependend on me.
          </p>
        </div>
      </div>

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
