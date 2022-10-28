import { Container } from '~/components/structure';
import { Hero, Intro, Title } from '~/components/content';
import {
  HighlightText,
  SectionTitle,
  SectionIntro,
} from '~/components/content';
import { MyTimeline } from '~/sections/shared/my-timeline';
import { AwardIcon } from '~/components/icons';
import { WhoDisPicture } from '~/components/who-dis-picture';

export default function AboutJeroen() {
  return (
    <>
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
          <WhoDisPicture />
        </div>
      </Hero>

      <Container className="space-y-3 pt-6 text-body sm:text-xl [&_p]:sm:w-2/3 md:space-y-5">
        <p>
          While scrolling through my past experience you might notice that I
          pivoted a few times between freelance and working for an agency...
        </p>
        <p>
          — Why? I've always been in search of a place where I could both create
          great online experiences, as well share my passion for the craft with
          other people. I never found the place to do that to my full potential.
        </p>

        <HighlightText
          iconLeft={AwardIcon}
          iconRight={AwardIcon}
          line1="With experienced engineers becoming harder and harder to find,"
          line2="it's becoming more relevant than ever to have someone to teach you the craft and help you or your team grow to the next level."
        />

        <p>
          That's why I've decided to do things a bit different: I'm creating a
          platform where I share all the knowledge I have, and give people the
          possibility to pick my brain!
          <br />
          More on that soon.
        </p>
      </Container>

      <Container>
        <SectionTitle>Let's travel back in time</SectionTitle>
        <SectionIntro>
          A bit more history on how I arrived here. <br />
          We'll go from recent to past though 😉.
        </SectionIntro>

        <MyTimeline />
      </Container>
    </>
  );
}
