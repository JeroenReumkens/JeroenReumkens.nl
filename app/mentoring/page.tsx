import { Container } from '~/components/structure';
import {
  CtaButton,
  HighlightText,
  SectionIntro,
  SectionTitle,
} from '~/components/content';
import { Hero, Intro, Title } from '~/components/content';
import { SmileIcon } from '~/components/icons';
import { ForTeamsAndIndividuals } from '~/sections/shared/for-teams-and-individuals';

export default function Mentoring() {
  return (
    <>
      <Hero className='[--bg-title:"Mentoring"]'>
        <Intro>
          <Title>My mentorship</Title>
          <p className="mb-3">
            Frontend is a craft — not a neccessary evil when building a website.
          </p>
          <p className="mb-3">
            Giving frontend proper love is a key ingredient to building products
            that will stand out.
          </p>
          <p>
            Building these experiences, requires engineers who make this their
            sole specialism. I want to help you become one of them.
          </p>
        </Intro>
        <div className="mt-4 sm:mt-auto sm:text-right [&_a]:inline-flex">
          <CtaButton href="/schedule-a-session" className="mb-3">
            Schedule a call
          </CtaButton>
          <CtaButton href="#page-content" className="sm:ml-3">
            Read more 👇
          </CtaButton>
        </div>
      </Hero>

      <Container id="page-content" className="py-3 sm:py-5">
        <HighlightText
          line1="There is so many competition on the world wide web."
          line2="Leaving an impression on peoples faces when they use your product is key — That is what I want to teach you."
          iconLeft={SmileIcon}
          iconRight={SmileIcon}
        />
      </Container>

      <Container className="sm:text-md text-small leading-base md:text-body">
        <SectionTitle>What can I teach you?</SectionTitle>
        <div className="mb-4 md:mb-[0] md:ml-col md:w-2/3 [&_p]:mb-4">
          <p>
            Nowadays frontend is a very extensive field. Every week there seem
            to be popping up a new standards, browsers are adopting new features
            quicker than ever before and you can build pretty much anything with
            frontend tooling. Where do you even start improving yourself? Will
            you ever have to time to learn it all?!
          </p>

          <p>
            Exactly why I am opinionated (I don't do Angular 😉{' '}
            <small>
              — huge fan of React, but always open for new things on the horizon
            </small>
            ). I'm convinced that if you want to grow in frontend, you need to
            focus. Focus on the things that are important right now, don't jump
            on every hype train and <u>focus on the fundamentals</u> of
            frontend. These fundamentals apply to every new framework that comes
            around.
          </p>

          <p>
            My goal is to teach you create online experiences that{' '}
            <u>stand out</u>, by making frontend the most important piece of the
            puzzle. I'll teach you to make the craziest things with CSS — even
            fall in love with CSS. I will show you there's a whole group of
            visually impaired people out there who also try to use the web, or
            people who don't have the same speedy internet as you. I will also
            convince you that TypeScript is not as scary as you might think 🫣.
          </p>

          <p>
            I will show you areas of frontend you never knew existed. That
            includes anything from CSS, accessibility, performance,
            JavaScript/TypeScript, to library specific things like React or
            NextJS, or more technical things like generating types from your
            backend API's to make frontend life easier.
          </p>

          <p>
            I will make you a frontend engineer that will stand out above the
            rest.
          </p>

          <p className="italic">
            Besides all the technical stuff, I've also worked in a lot of
            different teams and with a lot of different clients. Many of them
            also requiring me to grow in my soft skills. I'm sure I'll have some
            great advice in that as well.
          </p>

          <div className="m-2 rounded-lg border bg-white p-4">
            <h3 className="text-lg font-medium">Discover the way I teach</h3>
            <p>
              Still unsure whether we're a match? Have a look at my YouTube
              channel @frontendfyi to get a better feeling of the way I teach
              and explain topics.
            </p>
            <CtaButton href="https://www.youtube.com/@frontendfyi">
              Visit my YouTube Channel
            </CtaButton>
          </div>
        </div>

        <SectionTitle>Example topics</SectionTitle>
        <h3 className="mt-3 text-lg font-medium sm:w-2/3 sm:text-xl md:mt-5">
          Technical things
        </h3>

        <ul className="mt-4 font-mono text-small md:text-body [&_li]:mb-3 [&_li]:rounded-md [&_li]:bg-white [&_li]:p-4 [&_li]:shadow-hard">
          <li>
            My website needs to comply with WCAG standards — where do I start?
          </li>
          <li>
            So many libraries and frameworks out there nowadays, let me help you
            decide what to adopt
          </li>
          <li>
            Review your current platform's architecture and create a plan to
            improve it
          </li>
          <li>How do I solve ... in React?</li>
          <li>*This* is not working in Safari — help!</li>
        </ul>

        <h3 className="mt-5 text-lg font-medium sm:w-2/3 sm:text-xl">
          Helping you as an individual
        </h3>

        <ul className="mt-4 font-mono text-small md:text-body [&_li]:mb-3 [&_li]:rounded-md [&_li]:bg-white [&_li]:p-4 [&_li]:shadow-hard">
          <li>
            I want to grow as a frontend engineer, what should I learn next?
          </li>
          <li>
            I would love to get a code review on this{' '}
            <CtaButton href="/schedule-a-session#code-review" variant="small">
              Schedule it!
            </CtaButton>
          </li>
          <li>How to best prepare for my job interview?</li>
          <li>How can I give better feedback in pull requests?</li>
        </ul>

        <h3 className="mt-5 text-lg font-medium sm:w-2/3 sm:text-xl">
          And even broader topics impacting a whole team or company like:
        </h3>

        <ul className="mt-4 font-mono text-small md:text-body [&_li]:mb-3 [&_li]:rounded-md [&_li]:bg-white [&_li]:p-4 [&_li]:shadow-hard">
          <li>Headless?! SSR, SSG, ISR, what will this bring to my company?</li>
          <li>
            Headless?! SSR, SSG, ISR, why are all my engineers talking about
            this?
          </li>
          <li>
            An agency is going to build this product for us and they say it
            takes them x amount of time, is that reasonable?
          </li>
          <li>Can you build enterprise software with React? (duh ;))</li>
          <li>
            We know we need to give more love to the frontend of our app, but
            could use some guidance on that.
          </li>
        </ul>

        <SectionTitle>For teams and individuals</SectionTitle>
        <SectionIntro>
          It doesn't matter if you're a student, a freelancer, an individual at
          a company or the manager of a team. I think I can add value to all of
          you.
        </SectionIntro>

        <ForTeamsAndIndividuals />

        <div className="mt-5 flex flex-col space-y-4">
          <CtaButton className="mx-auto" href="/schedule-a-session#intro-chat">
            Schedule an intro session now
          </CtaButton>

          <CtaButton className="mx-auto" href="/schedule-a-session">
            See all sessions I offer
          </CtaButton>
        </div>
      </Container>
    </>
  );
}
