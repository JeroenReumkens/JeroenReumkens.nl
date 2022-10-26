import { Container } from '~/app/components/container';
import { DivingIntoFrontend } from '~/app/sections/home/diving-into-frontend';
import { AllThePossibilities } from '~/app/sections/home/all-the-possibilities';
import { Early2000s } from '~/app/sections/home/early-2000s';
import { Intro } from '~/app/sections/home/intro';
import { OldSkoolWebsite } from '~/app/sections/home/old-skool-website';
import { PastDecade } from '~/app/sections/home/past-decade';
import { SharingMyPassion } from '~/app/sections/home/sharing-my-passion';
import { ReadOn } from '~/app/sections/home/read-on';

// export const meta: MetaFunction = () => {
//   return {
//     title: 'Jeroen Reumkens — Frontend mentor',
//     description:
//       'Jeroen is a passionate frontend engineer who loves to help others become beter frontenders too.',
//   };
// };

export default function Index() {
  return (
    <>
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
    </>
  );
}
