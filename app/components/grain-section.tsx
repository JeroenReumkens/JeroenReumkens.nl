import { Container } from './container';

type GrainSectionProps = {
  children?: React.ReactNode;
  color?: 'transparent' | 'black';
  className?: string;
};

export const GrainSection: React.FC<GrainSectionProps> = ({
  children,
  color,
  className,
}) => {
  return (
    <section
      className={[
        "before:pointer-none flex items-center before:absolute before:left-[0] before:bottom-[0] before:z-0 before:flex before:w-full before:overflow-hidden before:font-mono before:text-[32rem] before:leading-[0.68] before:tracking-[-3rem] before:opacity-[0.07] before:content-['Jeroen_Reumkens']",
        'relative flex min-h-screen justify-center py-3 font-mono',
        'after:left-0 after:top-0 after:absolute after:z-0 after:block after:h-full after:w-full after:bg-[url(/img/noise.png)] after:bg-[length:300px_300px] after:bg-repeat after:mix-blend-overlay after:content-[\'""\']',
        !color || color === 'transparent' ? 'bg-transparent' : 'bg-gray80',
        className,
      ].join(' ')}
    >
      <Container className="relative z-[1]">{children}</Container>
    </section>
  );
};
