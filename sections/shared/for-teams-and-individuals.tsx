import { Card, CardGroup } from '~/components/card';

export const ForTeamsAndIndividuals = () => (
  <CardGroup>
    <Card title="For individuals">
      <p>
        Frontend is huge. You might feel overwhelmed with all the things you
        could learn. Or you might feel "you know it all", but still get rejected
        when you apply for a job. Perhaps you still want to take the plunge into
        frontend and don't know where to start.
      </p>

      <p>I'd love to help.</p>

      <p className="italic md:text-small">
        PS: If you're an individual at a company, usually there's education
        budget available. Using that on mentor sessions with me might be a very
        good way to spend that money! <span className="not-italic">😉</span>
      </p>
    </Card>

    <Card title="For teams">
      <p>
        Over the past years I've successfully build and taught multiple teams.
        I've upped their standards and helped them build great products. Build
        teams that are self-sustainable with this new standard.
      </p>

      <p>
        Looking at the current market, where it's really hard to find
        experienced engineers, I'm convinced I can bring very important value to
        existing teams to teach them these new standards and grow to the next
        level — without creating a team that's eventually dependend on me.
      </p>
    </Card>
  </CardGroup>
);
