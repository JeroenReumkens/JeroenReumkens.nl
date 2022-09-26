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
      'relative mb-4 flex justify-between py-3 font-serif text-xl leading-tight last:mb-[0] [&_em]:font-mono [&_em]:text-[3.6rem] [&_em]:not-italic',
      isReverse && 'flex-row-reverse text-right'
    )}
  >
    <div className="w-[60%] space-y-4">{children}</div>
    <div>
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
