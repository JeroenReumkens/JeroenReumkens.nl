import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import { Container } from '~/components/structure';

type GrainSectionProps = {
  children?: React.ReactNode;
  color?: 'transparent' | 'black';
  className?: string;
  ref?: ForwardedRef<HTMLDivElement>;
  style?: React.CSSProperties;
};

export const GrainSection: React.FC<GrainSectionProps> = forwardRef<
  HTMLDivElement,
  GrainSectionProps
>(({ children, color, className, style }, ref) => {
  return (
    <section
      ref={ref}
      className={[
        'grain relative flex min-h-screen justify-center py-3 font-mono',
        !color || color === 'transparent' ? 'bg-transparent' : 'bg-gray80',
        className,
      ].join(' ')}
      style={style}
    >
      <Container className="relative z-[1]">{children}</Container>
    </section>
  );
});
