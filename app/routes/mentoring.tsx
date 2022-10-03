import { Container } from '~/components/container';
import { CtaButton } from '~/components/cta-button';
import { Hero, Intro, Title } from '~/components/hero';
import { HighlightText } from '~/components/highlight-text';
import { SmileIcon } from '~/components/icons/smile';
import { Layout } from '~/components/layout';
import { SectionTitle } from '~/components/section-title';
import { ForTeamsAndIndividuals } from '~/sections/shared/for-teams-and-individuals';

export default function Mentoring() {
  return (
    <Layout>
      <Hero className='[--bg-title:"Mentoring"]'>
        <Intro>
          <Title>My mentorship</Title>
          <p className="mb-3">
            Frontend is a craft — not a neccessary evil you need to do when
            building a website.
          </p>
          <p className="mb-3">
            In order to build the best online experiences, you need engineers
            who make this their sole specialism.
          </p>
          <p>I want to help you become one of them.</p>
        </Intro>
        <div className="mt-4 sm:mt-auto sm:text-right [&_a]:inline-flex">
          <CtaButton to="https://superpeer.com/frontendfyi" className="mb-3">
            Schedule a call
          </CtaButton>
          <CtaButton to="#page-content" className="sm:ml-3">
            Read more 👇
          </CtaButton>
        </div>
      </Hero>

      <Container id="page-content" className="py-5 sm:py-6">
        <HighlightText
          line1="There is so many competition on the world wide web."
          line2="Leaving an impression on peoples faces when they use your product is key — That is what I want to teach you."
          iconLeft={SmileIcon}
          iconRight={SmileIcon}
        />
      </Container>

      <Container className="sm:text-md text-body leading-base md:text-lg">
        <SectionTitle className="mt-5 mb-4 md:mb-5 md:mt-6">
          What can I teach you?
        </SectionTitle>
        <div className="flex flex-col md:flex-row">
          <div className="mb-4 space-y-4 pr-4 md:mb-[0] md:w-1/2">
            <p>
              My goal is to teach people creating the best online experiences
              out there. I do this by making frontend the most important piece
              of the puzzle. I'll teach you how to{' '}
              <strong>make the craziest things with CSS</strong> — heck even
              fall in love with CSS. I will show you there's a whole group of{' '}
              <strong>
                visually impaired people out there who also try to use the web
              </strong>
              , or{' '}
              <strong>people who don't have the same speedy internet</strong> as
              you might have in your home office.
            </p>

            <p className="grain rounded-md bg-gray p-3 text-body shadow-hard">
              So in short; I will show you areas of frontend you never knew
              existed. That includes anything from CSS, accessibility,
              performance, JavaScript/TypeScript, to library specific things
              like React or NextJS or more technical things like generating
              types from your backend API's to make frontend life easier.
            </p>
          </div>
          <div className="space-y-4 md:w-1/2">
            <p>
              Transferring my passion for frontend to others. That's actually
              what I try to achieve.
            </p>

            <p>
              However, besides all the technical stuff, I've also worked in a
              lot of different teams and with a lot of different clients. Many
              of them also requiring me to grow in my soft skills. Saying no to
              a client or your boss? That's scary right! I'm sure I'll have some
              great advice in that as well.
            </p>
          </div>
        </div>

        <SectionTitle className="mt-5 mb-4 md:mb-5 md:mt-6">
          Example topics
        </SectionTitle>
        <h3 className="mt-3 text-lg font-medium sm:w-2/3 sm:text-xl md:mt-5">
          Technical things
        </h3>

        <ul className="mt-4 font-mono text-small md:text-body [&_li]:mb-3 [&_li]:rounded-md [&_li]:bg-white [&_li]:px-4 [&_li]:py-4 [&_li]:shadow-hard">
          <li>
            My website needs to comply with WCAG standards — where do I start?
          </li>
          <li>How do I solve ... in React?</li>
          <li>*This* is not working in Safari — help!</li>
        </ul>

        <h3 className="mt-5 text-lg font-medium sm:w-2/3 sm:text-xl">
          Helping you as an individual
        </h3>

        <ul className="mt-4 font-mono text-small md:text-body [&_li]:mb-3 [&_li]:rounded-md [&_li]:bg-white [&_li]:px-4 [&_li]:py-4 [&_li]:shadow-hard">
          <li>
            I want to grow as a frontend engineer, what should I learn next?
          </li>
          <li>
            I would love to get a code review on this{' '}
            <CtaButton
              to="https://superpeer.com/frontendfyi/-/code-review"
              variant="small"
            >
              Schedule it!
            </CtaButton>
          </li>
          <li>How to best prepare for my job interview?</li>
        </ul>

        <h3 className="mt-5 text-lg font-medium sm:w-2/3 sm:text-xl">
          And even broader topics impacting a whole team or company like:
        </h3>

        <ul className="mt-4 font-mono text-small md:text-body [&_li]:mb-3 [&_li]:rounded-md [&_li]:bg-white [&_li]:px-4 [&_li]:py-4 [&_li]:shadow-hard">
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
        </ul>

        <SectionTitle className="mt-5 mb-4 md:mb-5 md:mt-6">
          For teams and individuals
        </SectionTitle>
        <p className="text-center">
          It doesn't matter if you're a student, a freelancer, an individual at
          a company or the manager of a team. I think I can add value to all of
          you.
        </p>
        <ForTeamsAndIndividuals />

        <div className="mt-5 flex">
          <CtaButton className="mx-auto" to="https://superpeer.com/frontendfyi">
            Schedule an intro session now
          </CtaButton>
        </div>
      </Container>
    </Layout>
  );
}
