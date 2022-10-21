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
      'mt-5 mb-4 flex min-h-[80px] items-center justify-center rounded-massive py-2 px-3 text-center font-mono text-body lowercase leading-tight text-gray md:mb-5 md:mt-6 md:min-h-[190px] md:text-2xl',
      isTransparent ? 'border' : 'grain bg-gray40',
      className
    )}
  >
    {children}
  </h2>
);
