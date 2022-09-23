import { Container } from '~/components/container';
import { DivingIntoFrontend } from '~/components/diving-into-frontend';
import { AllThePossibilities } from '~/sections/all-the-possibilities';
import { Early2000s } from '~/sections/early-2000s';
import { Intro } from '~/sections/intro';
import { OldSkoolWebsite } from '~/sections/old-skool-website';

export default function Index() {
  return (
    <>
      <Intro />
      <Early2000s />
      <Container>
        <img
          className="mx-auto -mt-6 mb-6 w-[600px] max-w-full md:ml-col"
          src="/img/gifs/it-looked-a-bit-like-this.gif"
          alt="Animated GIF with flaming text that says 'It looked a bit like this'"
        />
        <span className="sr-only">It looked a bit like this...</span>
      </Container>
      <OldSkoolWebsite />
      <AllThePossibilities />
      <DivingIntoFrontend />
    </>
  );
}
