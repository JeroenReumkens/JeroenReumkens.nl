import { useRef } from 'react';
import { Container } from '~/components/container';
import { StarIcon } from '~/components/icons';
import { useMotion } from '~/utils/use-motion';
import { animate, scroll } from 'motion';
import { HighlightText } from '~/components/highlight-text';

export const AllThePossibilities = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starLeftRef = useRef<SVGSVGElement>(null);
  const starRightRef = useRef<SVGSVGElement>(null);

  useMotion(
    [containerRef, starLeftRef, starRightRef],
    ([container, starLeft, starRight]) => {
      scroll(
        animate(starLeft, {
          scale: [1, 1.2, 0.9, 1.1, 0.9, 1],
          rotate: [4, 10, 9, 1, 0, 12, 32],
        }),
        {
          target: container,
          offset: ['start end', 'end start'],
        }
      );

      scroll(
        animate(starRight, {
          scale: [0.4, 0.8, 0.3, 0.5, 1.4, 1.1, 0.7, 1],
          rotate: [-12, -29, -7, 3, 12, 3, 8, -4, -21, -15, -12],
        }),
        {
          target: container,
          offset: ['start end', 'end start'],
        }
      );
    }
  );

  return (
    <Container ref={containerRef} className="py-5 sm:py-6">
      <HighlightText
        line1="Imagine me as a teenager, seeing all the possibilities!"
        line2="It sparked something inside me that is still there today..."
        iconLeft={(props) => <StarIcon {...props} ref={starLeftRef} />}
        iconRight={(props) => <StarIcon {...props} ref={starRightRef} />}
      />

      <p className="relative z-10 mt-2 max-w-[80%] text-small sm:ml-col sm:max-w-[60%] sm:text-[4rem]">
        <span className="font-mono text-[1.4rem] sm:text-small">
          &lt;==&lt;
        </span>{' '}
        Little did I know that the web would only become more amazing over time{' '}
        <span className="font-mono text-[1.4rem] sm:text-small">
          &gt;==&gt;
        </span>
      </p>
    </Container>
  );
};
