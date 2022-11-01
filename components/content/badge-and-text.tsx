import classNames from 'classnames';
import type { BadgeProps } from '~/components/badge';
import { Badge } from '~/components/badge';

interface BadgeAndTextProps {
  children: React.ReactNode;
  isReverse?: boolean;
}

export const BadgeAndText = ({
  children,
  isReverse,
  ...badgeProps
}: BadgeAndTextProps & BadgeProps) => (
  <section
    className={classNames(
      'relative mb-4 flex flex-col items-center justify-between py-3 font-serif text-body leading-tight last:mb-[0] sm:flex-row sm:text-lg [&_em]:font-mono [&_em]:text-[2.6rem] [&_em]:not-italic [&_em]:sm:text-[3.6rem]',
      isReverse && 'sm:flex-row-reverse'
    )}
  >
    <div className="w-full space-y-4 sm:w-1/2">{children}</div>
    <div className="mx-auto mt-4 w-full sm:w-1/2">
      <Badge {...badgeProps} />
    </div>
  </section>
);
