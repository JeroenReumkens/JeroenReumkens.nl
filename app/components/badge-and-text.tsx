import classNames from 'classnames';
import type { BadgeProps } from './badge';
import { Badge } from './badge';

interface BadgeAndTextProps {
  children: React.ReactNode;
}

export const BadgeAndText = ({
  children,
  illustrationTitle,
  illustrationUrl,
  illustrationWidth,
  illustrationAlt,
  isReverse,
  isFullImage,
}: BadgeAndTextProps & BadgeProps) => (
  <section
    className={classNames(
      'relative mb-4 flex flex-col justify-between py-3 font-serif text-body leading-tight last:mb-[0] sm:flex-row sm:text-xl [&_em]:font-mono [&_em]:text-[2.6rem] [&_em]:not-italic [&_em]:sm:text-[3.6rem]',
      isReverse && 'flex-row-reverse sm:text-right'
    )}
  >
    <div className="space-y-4 sm:w-[60%]">{children}</div>
    <div className="mx-auto mt-4 max-w-md">
      <Badge
        illustrationAlt={illustrationAlt}
        illustrationTitle={illustrationTitle}
        illustrationUrl={illustrationUrl}
        illustrationWidth={illustrationWidth}
        isFullImage={isFullImage}
        isReverse={isReverse}
      />
    </div>
  </section>
);
