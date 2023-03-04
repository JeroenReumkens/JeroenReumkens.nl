import Link from 'next/link';
import { Card } from '~/components/card';
import { Container } from '~/components/structure';
import { CtaButton } from '~/components/content';
import { Hero, Intro, Title } from '~/components/content';

export default function Mentoring() {
  return (
    <>
      <Hero className='[--bg-title:"Schedule_a_session"]'>
        <Intro>
          <Title>Schedule a mentorship session</Title>
          <p className="mb-3">
            This page is a temporary entrypoint to the scheduling links for my
            mentorship sessions. This will soon get replaced by frontend.fyi.
          </p>
        </Intro>
        <div className="mt-4 sm:mt-auto sm:text-right [&_a]:inline-flex">
          <CtaButton href="#the-sessions" className="mb-3">
            See the sessions 👇
          </CtaButton>
          <CtaButton href="/mentoring" className="sm:ml-3">
            What can I help you with?
          </CtaButton>
        </div>
      </Hero>

      <Container id="the-sessions" className="pt-5 sm:pt-6">
        <div className="mx-auto max-w-[920px] space-y-4 ">
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
                href="https://cal.com/frontendfyi/na1eb6eis8-introduction"
                subtitle="A payment link will follow after booking. Prices excl. VAT."
              >
                Book 25 mins for €49
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
              to learn more about what I can help you with during these
              sessions.
            </p>

            <div className="flex flex-col items-center space-y-3">
              <CtaButton
                href="https://cal.com/frontendfyi/lskjm0hrgx-1on1-30mins"
                subtitle="A payment link will follow after booking. Prices excl. VAT."
              >
                Book 30 mins for €99
              </CtaButton>
              <CtaButton
                href="https://cal.com/frontendfyi/hunm238j9o-1on1-60mins"
                subtitle="A payment link will follow after booking. Prices excl. VAT."
              >
                Book 60 mins for €165
              </CtaButton>
            </div>
          </Card>

          <Card id="packs" title="Mentoring packs">
            <p>
              Committing for more than one session helps us set clear goals
              towards to future and work on that together.
            </p>

            <h3 className="text-lg font-medium">The packs:</h3>

            <ul className="ml-3 list-disc">
              <li>Month pack: €949 / month</li>
              <li>I'm committed pack (3 months): €2699 / 3 months</li>
              <li>I just wanna code pack (12 months): €9899 / year</li>
              <li>
                <small>* All prices are excluding VAT</small>
              </li>
            </ul>

            <h3 className="text-lg font-medium">What's included?</h3>
            <ul className="ml-3 list-disc">
              <li>
                Four 1:1 sessions of one hour every month (plus 10 minute
                preparation and follow-up time)
              </li>
              <li>
                4 hours of support via private chat (Discord). This can be used
                for general questions, pointers, sharing articles, having a
                quick look at a PR you created, etc.
              </li>
              <li>
                A refund of your intro session when choosing any of these packs.
              </li>
              <li>
                Life time access to the frontendfyi Discord community for the 3
                months and up pack. Community will get released soon.
              </li>
            </ul>

            <p>
              See the{' '}
              <Link className="underline" href="/mentoring">
                mentorship page
              </Link>{' '}
              to learn more about what I can help you with during these
              sessions.
            </p>

            <div className="flex flex-col items-center space-y-3">
              <CtaButton
                href="mailto:jeroen@frontend.fyi"
                subtitle="jeroen@frontend.fyi"
              >
                Reach out to me via email
              </CtaButton>
              <CtaButton href="https://cal.com/frontendfyi/na1eb6eis8-introduction">
                Or schedule an intro chat right away
              </CtaButton>
            </div>
          </Card>

          <Card id="code-review" title="Code review (60 min)">
            <p>
              Sometimes it's good to have a second pair of eyes. Perhaps you're
              taking over a project from a different agency, you're just unsure
              if the code you've written yourself is actually any good, or want
              to have someone review your job application case before submitting
              it. I'd love to help.
            </p>
            <p>
              Please make sure to give me access to the code before the meeting
              starts (in a git environment like Github, Gitlab, etc), so we're
              up to speed as quickly as possible.
            </p>
            <p>
              Also keep in mind that depending on the size of the codebase, it
              might be very hard to grab my head around it in 60 minutes. In
              this case it might be wise to stack multiple of these sessions.
              Reach out to me via the button below for more information.
            </p>
            <p>
              This meeting consists of max 15 minute discussing the project
              together, and me 45 minutes looking through your code and giving
              as much feedback as possible, preferably in a PR.
            </p>
            <div className="flex justify-center">
              <CtaButton
                href="https://cal.com/frontendfyi/cwm1kphsrr-code-review"
                subtitle="A payment link will follow after booking. Prices excl. VAT."
              >
                Book 60 mins for €199
              </CtaButton>
              <CtaButton
                href="mailto:jeroen@frontend.fyi"
                subtitle="jeroen@frontend.fyi"
              >
                Reach out to me via email
              </CtaButton>
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
}
