import { Container } from '~/components/container';
import { GrainSection } from '~/components/grain-section';
import { Intro } from '~/sections/intro';

export default function Index() {
  return (
    <>
      <Intro />
      <Container className="my-5">
        <p className="mb-5 font-mono text-2xl leading-tight">
          My passion for web however, started already as a hobby back in the
          early 2000s.
        </p>
        <p className="mb-5 font-mono text-2xl leading-tight">
          Back in the days, when the web looked slightly different...
        </p>
        <p className="mb-5 font-mono text-2xl leading-tight">
          — when iframes, tables and GIFs were for the cool kids!
        </p>
      </Container>
      <GrainSection color="black" className="rounded-t-massive">
        <h1>Jeroen Reumkens</h1>

        <p>
          is a passionate frontend engineer with over a decade 👴 of
          professional experience building the best experiences on the web. I
          also mentor teams & individuals, learn more.
        </p>
      </GrainSection>
    </>
  );
}
