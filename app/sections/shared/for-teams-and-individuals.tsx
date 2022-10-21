export const ForTeamsAndIndividuals = () => (
  <div className="mt-5 flex flex-col justify-between text-body md:flex-row">
    <div className="mb-4 space-y-3 rounded-massive border bg-white px-3 py-4 shadow-hard sm:px-4 sm:py-5 md:mb-[0] md:w-[calc(50%-2rem)]">
      <h3 className="text-lg md:text-2xl">For individuals</h3>
      <p className="text-small md:text-body">
        Frontend is huge. You might feel overwhelmed with all the things you
        could learn. Or you might feel "you know it all", but still get rejected
        when you apply for a job. Perhaps you still want to take the plunge into
        frontend and don't know where to start.
      </p>

      <p className="text-small md:text-body">I'd love to help.</p>

      <p className="text-small italic md:text-small">
        PS: If you're an individual at a company, usually there's education
        budget available. Using that on mentor sessions with me might be a very
        good way to spend that money! <span className="not-italic">😉</span>
      </p>
    </div>
    <div className="space-y-3 rounded-massive border bg-white px-3 py-4 shadow-hard sm:px-4 sm:py-5 md:w-[calc(50%-2rem)]">
      <h3 className="text-lg md:text-2xl">For teams</h3>
      <p className="text-small md:text-body">
        Over the past years I've successfully build and taught multiple teams.
        I've upped their standards and helped them build great products. Build
        teams that are self-sustainable with this new standard.
      </p>

      <p className="text-small md:text-body">
        Looking at the current market, where it's really hard to find
        experienced engineers, I'm convinced I can bring very important value to
        existing teams to teach them these new standards and grow to the next
        level — without creating a team that's eventually dependend on me.
      </p>
    </div>
  </div>
);
