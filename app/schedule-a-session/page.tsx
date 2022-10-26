import  Link from 'next/link';
import { Card } from '~/components/card';
import { Container } from '~/components/container';
import { CtaButton } from '~/components/cta-button';
import { Hero, Intro, Title } from '~/components/hero';

export default function Mentoring() {
  return (
    <>
      <Hero className='[--bg-title:"Schedule_a_session"]'>
        <Intro>
          <Title>Schedule a mentorship session</Title>
          <p className="mb-3">
            This page is a temporary entrypoint to my scheduling links for
            mentorship sessions. This will soon get replaced by frontend.fyi.
          </p>
        </Intro>
        <div className="mt-4 sm:mt-auto sm:text-right [&_a]:inline-flex">
          <CtaButton to="#the-sessions" className="mb-3">
            See the sessions 👇
          </CtaButton>
          <CtaButton to="/mentoring" className="sm:ml-3">
            What can I help you with?
          </CtaButton>
        </div>
      </Hero>

      <Container id="the-sessions" className="max-w-7xl space-y-4 pt-5 sm:pt-6">
        <Card id="intro-chat" title="Intro chat (25 min)">
          <p>
            This session is great for us to get to know each other, and for me
            to explain what value I could offer you during follow up sessions.
          </p>
          <p>
            You can only book this session once since this intro chat has a
            special discount applied to it.
          </p>

          <div className="flex justify-center">
            <CtaButton
              to="https://cal.com/frontendfyi/na1eb6eis8-introduction"
              subtitle="A payment link will follow after booking"
            >
              Book 25 mins for $49
            </CtaButton>
          </div>
        </Card>
        <Card id="1-on-1" title="1:1 mentoring">
          <p>
            These 1:1 sessions are the regular sessions I offer. We can book
            them in a recurring schedule to make sure you keep on growing.
          </p>
          <p>
            See the{' '}
            <Link className="underline" href="/mentoring">
              mentorship page
            </Link>{' '}
            to learn more about what I can help you with during these sessions.
          </p>

          <div className="flex flex-col items-center space-y-3">
            <CtaButton
              to="https://cal.com/frontendfyi/lskjm0hrgx-1on1-30mins"
              subtitle="A payment link will follow after booking"
            >
              Book 30 mins for $125
            </CtaButton>
            <CtaButton
              to="https://cal.com/frontendfyi/hunm238j9o-1on1-60mins"
              subtitle="A payment link will follow after booking"
            >
              Book 60 mins for $199
            </CtaButton>
          </div>
        </Card>
        <Card id="code-review" title="Code review (60 min)">
          <p>
            Sometimes it's good to have a second pair of eyes. Perhaps you're
            taking over a project from a different agency, you're just unsure if
            the code you've written yourself is actually any good, or want to
            have someone review your job application case before submitting it.
            I'd love to help.
          </p>
          <p>
            Please make sure to give me access to the code before the meeting
            starts (in a git environment like Github, Gitlab, etc), so we're up
            to speed as quickly as possible.
          </p>
          <p>
            Also keep in mind that depending on the size of the codebase, it
            might be very hard to grab my head around it in 60 minutes. In this
            case it might be wise to create a longer meeting. Reach out to me
            for more info :)
          </p>
          <p>
            This meeting consists of max 15 minute discussing the project
            together, and me 45 minutes looking through your code and giving as
            much feedback as possible, preferably in a PR.
          </p>
          <div className="flex justify-center">
            <CtaButton
              to="https://cal.com/frontendfyi/cwm1kphsrr-code-review"
              subtitle="A payment link will follow after booking"
            >
              Book 60 mins for $249
            </CtaButton>
          </div>
        </Card>
      </Container>
    </>
  );
}
