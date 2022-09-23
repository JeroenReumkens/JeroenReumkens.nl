import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';
import { Container } from './container';

type GrainSectionProps = {
  children?: React.ReactNode;
  color?: 'transparent' | 'black';
  className?: string;
  ref?: ForwardedRef<HTMLDivElement>;
};

export const GrainSection: React.FC<GrainSectionProps> = forwardRef<
  HTMLDivElement,
  GrainSectionProps
>(({ children, color, className }, ref) => {
  return (
    <section
      ref={ref}
      className={[
        'relative flex min-h-screen justify-center py-3 font-mono',
        'after:absolute after:left-[0] after:top-[0] after:z-0 after:block after:h-full after:w-full after:bg-[url(/img/noise.png)] after:bg-[length:300px_300px] after:bg-repeat after:mix-blend-overlay after:content-[\'""\']',
        !color || color === 'transparent' ? 'bg-transparent' : 'bg-gray80',
        className,
      ].join(' ')}
    >
      <Container className="relative z-[1]">{children}</Container>
    </section>
  );
});
