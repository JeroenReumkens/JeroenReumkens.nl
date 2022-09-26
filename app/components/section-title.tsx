import classNames from 'classnames';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  isTransparent?: boolean;
}

export const SectionTitle = ({
  children,
  className,
  isTransparent,
}: SectionTitleProps) => (
  <h2
    className={classNames(
      'flex min-h-[80px] items-center justify-center rounded-massive py-2 text-center font-mono text-body lowercase leading-tight text-gray sm:min-h-[190px] sm:text-2xl',
      isTransparent ? 'border' : 'grain bg-gray40',
      className
    )}
  >
    {children}
  </h2>
);
