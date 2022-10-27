'use client';

import { useRef } from 'react';
import { useMotion } from '~/utils/use-motion';
import { GrainSection } from '~/components/grain-section';
import { animate, scroll, inView } from 'motion';
import { SectionTitle } from '~/components/section-title';
import { BadgeAndText } from '~/components/badge-and-text';
import classNames from 'classnames';
import escape from 'lodash.escape';
import { randomNumberBetween } from '~/utils/random-number';
import Image from 'next/image';
import loadingGif from '~/public/img/loading.webp';
import jsAllTheThings from '~/public/img/js-all-the-things.jpg';
import explorerGif from '~/public/img/gifs/explorer.webp';

const Code = ({
  code,
  className,
  grr,
}: {
  code: string;
  className?: string;
  grr?: boolean;
}) => (
  <pre
    className={classNames(
      'max-w-screen absolute inline',
      grr && 'line-through',
      className
    )}
    dangerouslySetInnerHTML={{ __html: escape(code) }}
  />
);

const Key = ({
  keyCode,
  className,
}: {
  keyCode: string;
  className?: string;
}) => (
  <span className={classNames('absolute text-small', className)}>
    <span className="flex h-3 w-3 items-center justify-center rounded-[0.5rem] border p-4 font-mono shadow-[3px_3px_0_0_#ccc] sm:h-4 sm:w-4">
      {keyCode}
    </span>
    <span className="flex h-3 w-3 translate-x-[1.5rem] translate-y-[-1rem] items-center justify-center rounded-[0.5rem] border p-4 font-mono shadow-[3px_3px_0_0_#ccc] sm:h-4 sm:w-4">
      {keyCode}
    </span>
    <span className="flex h-3 w-3 translate-x-[3rem] translate-y-[-2rem] items-center justify-center rounded-[0.5rem] border p-4 font-mono shadow-[3px_3px_0_0_#ccc] sm:h-4 sm:w-4">
      {keyCode}
    </span>
  </span>
);

export const DivingIntoFrontend = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickySectionRef = useRef<HTMLDivElement>(null);
  const stickyListRef = useRef<HTMLUListElement>(null);
  const microSectionRef = useRef<HTMLLIElement>(null);
  const microRef = useRef<HTMLDivElement>(null);

  useMotion([sectionRef], ([section]) => {
    scroll(
      animate(section, {
        borderTopLeftRadius: [0, 'var(--responsive-massive-radius)'],
        borderTopRightRadius: [0, 'var(--responsive-massive-radius)'],
      }),
      {
        target: section,
        offset: ['start end', 'start center'],
      }
    );
  });

  useMotion([sectionRef], ([section]) => {
    scroll(
      animate(section, {
        borderBottomLeftRadius: [0, 'var(--responsive-massive-radius)'],
        borderBottomRightRadius: [0, 'var(--responsive-massive-radius)'],
      }),
      {
        target: section,
        offset: ['end start', 'end end'],
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

  useMotion([microRef], ([microEm]) => {
    inView(microEm, (info) => {
      animate(
        info.target,
        {
          scale: [0.1, 1],
          animationFillMode: 'forwards',
        },
        { delay: 0.5, direction: 'normal' }
      );
    });
  });

  useMotion(
    [stickySectionRef, stickyListRef],
    ([stickySection, stickyList]) => {
      const listItems = stickyList.querySelectorAll('li');

      listItems.forEach((listItem) => {
        const animatables = listItem.querySelectorAll(
          ':scope > span, :scope > pre, :scope > img'
        );
        if (!animatables.length) return;

        animatables.forEach((item) => {
          scroll(
            animate(item, {
              y: [0, `${randomNumberBetween(-20, 30)}vh`],
              x: [0, `${randomNumberBetween(-60, -30)}vw`],
            }),
            {
              target: stickySection,
              offset: [0, 1],
            }
          );
        });
      });
    }
  );

  return (
    <GrainSection
      ref={sectionRef}
      color="black"
      className="safari-overflow-clip overflow-clip py-5"
    >
      <SectionTitle isTransparent>Diving into frontend</SectionTitle>
      <div className="mx-auto my-5 w-full max-w-6xl space-y-4 text-center font-serif text-body text-white sm:text-xl">
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
            className={classNames(
              'inline-flex flex-row flex-nowrap text-xl text-white sm:text-humongous',
              '[&_li]:relative [&_li]:mr-7 [&_li]:min-w-max [&_li]:flex-1',
              '[&_pre]:pointer-events-none [&_pre]:z-0 [&_pre]:font-mono [&_pre]:text-small [&_pre]:opacity-30',
              '[&_span]:pointer-events-none [&_span]:z-0 [&_span]:font-mono [&_span]:opacity-30',
              '[&_img]:opacity-30'
            )}
          >
            <li>
              Accessibility
              <Code
                grr
                className="left-[0] top-[-3rem]"
                code="<div onClick={aBrokenExperience()}/>"
              />
              <Code
                grr
                className="left-[10vw] top-[130%]"
                code="<button><FancyIconButNoScreenreaderLabelSadFace/></button>"
              />
              <Code
                grr
                className="right-[15vw] top-[-100%]"
                code="<img alt='picture' />"
              />
              <Key className="left-[-10vw] top-[50%]" keyCode="Tab" />
              <Key className="right-[-10vw] top-[-10vh]" keyCode="H" />
            </li>
            <li>
              Design systems
              <span className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 [&_span]:block [&_span]:h-4 [&_span]:bg-gray40">
                <span className="w-1" />
                <span className="w-2" />
                <span className="w-3" />
                <span className="w-4" />
                <span className="w-5" />
                <span className="w-6" />
                <span className="w-7" />
                <span className="w-8" />
              </span>
            </li>
            <li ref={microSectionRef}>
              <em ref={microRef} className="relative inline-block">
                Micro
              </em>{' '}
              animations
            </li>
            <li className="[&_img]:block [&_img]:h-[5rem] [&_img]:w-[5rem] sm:[&_img]:h-[10rem] sm:[&_img]:w-[10rem]">
              Performance
              <Image
                className="absolute top-[-5rem] left-[-5rem]"
                src={loadingGif}
                alt="Animated gif of an old skool loading spinner"
              />
              <Image
                className="absolute top-[0] left-[-30%]"
                src={loadingGif}
                alt="Animated gif of an old skool loading spinner"
              />
              <Image
                className="absolute top-[-105%] left-[68%]"
                src={loadingGif}
                alt="Animated gif of an old skool loading spinner"
              />
              <Image
                className="absolute top-[-100%] left-[12rem]"
                src={loadingGif}
                alt="Animated gif of an old skool loading spinner"
              />
              <Image
                className="absolute top-[130%] left-[-2.4rem]"
                src={loadingGif}
                alt="Animated gif of an old skool loading spinner"
              />
              <Image
                className="absolute top-[-145%] right-[-3rem]"
                src={loadingGif}
                alt="Animated gif of an old skool loading spinner"
              />
              <Image
                className="absolute top-[195%] left-[50%]"
                src={loadingGif}
                alt="Animated gif of an old skool loading spinner"
              />
              <Image
                className="absolute top-[-50%] left-[33%]"
                src={loadingGif}
                alt="Animated gif of an old skool loading spinner"
              />
              <Image
                className="absolute top-[30%] left-[12%]"
                src={loadingGif}
                alt="Animated gif of an old skool loading spinner"
              />
              <Image
                className="absolute top-[70%] right-[12%]"
                src={loadingGif}
                alt="Animated gif of an old skool loading spinner"
              />
              <Image
                className="absolute top-[-5%] left-[50%]"
                src={loadingGif}
                alt="Animated gif of an old skool loading spinner"
              />
              <Image
                className="absolute top-[100%] left-[30%]"
                src={loadingGif}
                alt="Animated gif of an old skool loading spinner"
              />
              <Image
                className="absolute top-[-70%] right-[-4rem]"
                src={loadingGif}
                alt="Animated gif of an old skool loading spinner"
              />
              <Image
                className="absolute top-[198%] left-[96%]"
                src={loadingGif}
                alt="Animated gif of an old skool loading spinner"
              />
            </li>
            <li>Semantics</li>
            <li>Modern CSS</li>
            <li className="[&_span]:z-0 [&_span]:block [&_span]:text-lg sm:[&_span]:text-2xl">
              Automated testing
              <Code
                className="left-[10vw] top-[130%]"
                code="expect(thisWebsite.toWork()).toBe(true)"
              />
              <span className="absolute top-[-5rem] left-[-5rem]">✅</span>
              <span className="absolute top-[0] left-[-30%]">✅</span>
              <span className="absolute top-[-105%] left-[68%]">✅</span>
              <span className="absolute top-[-100%] left-[12rem]">✅</span>
              <span className="absolute top-[130%] left-[-2.4rem]">✅</span>
              <span className="absolute top-[-145%] right-[-3rem]">✅</span>
              <span className="absolute top-[195%] left-[50%]">✅</span>
              <span className="absolute top-[-50%] left-[33%]">✅</span>
              <span className="absolute top-[30%] left-[12%]">✅</span>
              <span className="absolute top-[70%] right-[12%]">✅</span>
              <span className="absolute top-[-5%] left-[50%]">✅</span>
              <span className="absolute top-[100%] left-[30%]">✅</span>
              <span className="absolute top-[-70%] right-[-4rem]">✅</span>
              <span className="absolute top-[198%] left-[96%]">✅</span>
            </li>
            <li>
              <span className="absolute left-[0] top-[0] block h-full w-full">
                <Image
                  className="pointer-events-none absolute top-[50%] left-[50%] z-0 h-[100vw] w-[100vw] -translate-x-1/2 -translate-y-1/2 opacity-20"
                  src={explorerGif}
                  alt="Animated gif of an old skool loading spinner"
                  placeholder="blur"
                />
              </span>
              Browser APIs
            </li>
            <li>
              Design details
              <Code
                className="w-full max-w-[50rem] whitespace-normal"
                code="I tried my best on this website 🥺 —Imagine what pairing me up with an amazing designer could do... 😉"
              />
            </li>
            <li>SEO</li>
          </ul>
        </div>
      </div>

      <div className="mb-3 flex text-lg leading-tight text-white">
        <BadgeAndText
          isFullImage
          illustrationAlt=""
          illustrationTitle="Well... Not really"
          illustrationUrl={jsAllTheThings}
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
