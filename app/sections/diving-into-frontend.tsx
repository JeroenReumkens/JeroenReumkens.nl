import { useRef } from 'react';
import { useMotion } from '~/utils/use-motion';
import { GrainSection } from '~/components/grain-section';
import { animate, scroll } from 'motion';
import { SectionTitle } from '~/components/section-title';
import { Badge } from '~/components/badge';
import { BadgeAndText } from '~/components/badge-and-text';

export const DivingIntoFrontend = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickySectionRef = useRef<HTMLDivElement>(null);
  const stickyListRef = useRef<HTMLUListElement>(null);

  useMotion([sectionRef], ([section]) => {
    scroll(
      animate(section, {
        borderTopLeftRadius: [0, '120px'],
        borderTopRightRadius: [0, '120px'],
      }),
      {
        target: section,
        offset: ['start end', 'start center'],
      }
    );
  });

  useMotion(
    [stickySectionRef, stickyListRef],
    ([stickySection, stickyList]) => {
      scroll(
        animate(stickyList, {
          x: ['25%', '-100%'],
          y: [0, '-25vh'],
        }),
        {
          target: stickySection,
          offset: [-0.2, 1.2],
        }
      );
    }
  );

  return (
    <GrainSection ref={sectionRef} color="black" className="py-5">
      <SectionTitle isTransparent>Diving into frontend</SectionTitle>
      <div className="mx-auto my-5 w-full max-w-6xl space-y-4 text-center font-serif text-xl text-white">
        <p>
          To me frontend is so much more than{' '}
          <em>"that boring and too easy piece of HTML and CSS"</em>.
        </p>

        <p>
          If you get the details right, it are actually the most important tools
          to deliver amazing experiences.
        </p>

        <p>Because of that, I've made frontend my sole focus since 2012.</p>

        <p>This includes but is not limited to:</p>
      </div>

      <div ref={stickySectionRef} className="relative h-[800vh]">
        <div className="sticky top-[50%]">
          <ul
            ref={stickyListRef}
            className="inline-flex flex-row flex-nowrap text-2xl text-white [&_li]:mr-6 [&_li]:min-w-max [&_li]:flex-1"
          >
            <li>Accessibility</li>
            <li>Design systems</li>
            <li>Micro animations</li>
            <li>Performance</li>
            <li>Semantics</li>
            <li>Modern CSS</li>
            <li>Automated testing</li>
            <li>Browser APIs</li>
            <li>Design details</li>
            <li>SEO</li>
          </ul>
        </div>
      </div>

      <div className="flex text-lg leading-tight text-white">
        <BadgeAndText
          isFullImage
          illustrationAlt=""
          illustrationTitle="Well... Not really"
          illustrationUrl="/img/js-all-the-things.jpg"
          illustrationWidth={250}
        >
          <p>
            Needless to say JavaScript is really important as well — or
            TypeScript in my opinion.
          </p>

          <p>
            However, I strongly believe that JS should always enhance the
            experience, not be your default solution to a problem. During my
            career I've seen too many frontenders use JavaScript as their
            primary tool and threat HTML and CSS secondary. Resulting in poor
            frontend quality.
          </p>

          <p>
            Currently my main library of choice is React, often in combination
            with a library like NextJS or Remix. I think React brings the right
            mix between complexity and flexibility, is very scalable and has a
            really powerful and innovative ecosystem. I always keep my eyes open
            for any new solutions that might be around the corner. Although that
            probably won't be Angular any time soon 😅.
          </p>

          <p>
            So yeah, I'm probably a bit opinionated. Something that's neccessary
            with the vast array of options in frontend world.
          </p>
        </BadgeAndText>
      </div>
    </GrainSection>
  );
};
