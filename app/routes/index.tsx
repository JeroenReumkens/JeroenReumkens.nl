import { Container } from '~/components/container';
import { DivingIntoFrontend } from '~/sections/home/diving-into-frontend';
import { AllThePossibilities } from '~/sections/home/all-the-possibilities';
import { Early2000s } from '~/sections/home/early-2000s';
import { Intro } from '~/sections/home/intro';
import { OldSkoolWebsite } from '~/sections/home/old-skool-website';
import { PastDecade } from '~/sections/home/past-decade';
import { SharingMyPassion } from '~/sections/home/sharing-my-passion';
import { ReadOn } from '~/sections/home/read-on';
import { Layout } from '~/components/layout';

export default function Index() {
  return (
    <Layout>
      <Intro />
      <Early2000s />
      <div className="safari-overflow-clip relative overflow-clip">
        <Container className="relative z-10">
          <img
            className="mx-auto -mt-6 mb-6 w-[600px] max-w-full md:ml-col"
            src="/img/gifs/it-looked-a-bit-like-this.gif"
            alt="Animated GIF with flaming text that says 'It looked a bit like this'"
          />
          <span className="sr-only">It looked a bit like this...</span>
        </Container>
        <OldSkoolWebsite />
      </div>
      <AllThePossibilities />
      <PastDecade />
      <DivingIntoFrontend />
      <SharingMyPassion />
      <ReadOn />
    </Layout>
  );
}
