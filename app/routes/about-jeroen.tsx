import { Container } from '~/components/container';
import { Hero, Intro, Title } from '~/components/hero';
import { HighlightText } from '~/components/highlight-text';
import { Layout } from '~/components/layout';
import { SectionTitle } from '~/components/section-title';
import { MyTimeline } from '~/sections/shared/my-timeline';
import { AwardIcon } from '~/components/icons';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return {
    title: 'About me | Jeroen Reumkens — Frontend mentor',
    description:
      'Jeroen is a frontend engineer with a passion for the web, trying to make people smile when using this products.',
  };
};

export default function AboutJeroen() {
  return (
    <Layout>
      <Hero className='[--bg-title:"Who_dis"]'>
        <Intro>
          <Title>Hi, I'm Jeroen,</Title>
          <p className="mb-3">
            a frontend engineer with a passion for the web, trying to make
            people smile when using my products.
          </p>
          <p>
            I see frontend as a craft and an everlearning journey — a journey on
            which I love to take you, while teaching you a few things along the
            way.
          </p>
        </Intro>
        <div className="mb:mt-5 relative mt-2 md:ml-auto md:mt-[0]">
          <img
            className="rounded-massive border shadow-hard"
            src="/img/who-dis.jpg"
            alt="Me wearing glasses, a white blouse and having a very short beard, sitting in a coffee bar."
          />
        </div>
      </Hero>

      <Container className="space-y-5 pt-6">
        <p className="text-body sm:w-2/3 sm:text-xl">
          While scrolling through my past experience you might notice that I
          pivoted a few times between freelance and working for an agency... —
          Why? I've always been in search of a place where I could both create
          great online experiences, as well share my passion for the craft with
          other people. I never found the place to do that to my full potential.
        </p>

        <HighlightText
          iconLeft={AwardIcon}
          iconRight={AwardIcon}
          line1="With experienced engineers becoming harder and harder to find,"
          line2="it's becoming more relevant than ever to have someone to teach you the craft and help you or your team grow to the next level."
        />

        <p className=" text-body sm:w-2/3 sm:text-xl">
          That's why I've decided to do things a bit different: I'm creating a
          platform where I share all the knowledge I have, and give people the
          possibility to pick my brain!
        </p>

        <p className="text-body sm:w-2/3 sm:text-xl">More on that soon!</p>
      </Container>

      <Container>
        <SectionTitle>Let's travel back in time</SectionTitle>
        <p className="mb-5 text-center text-body sm:text-xl">
          A bit more history on how I arrived here. <br />
          We'll go from recent to past though 😉.
        </p>

        <MyTimeline />
      </Container>
    </Layout>
  );
}
