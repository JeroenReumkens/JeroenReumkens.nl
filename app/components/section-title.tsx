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
      'flex h-[190px] items-center justify-center rounded-massive font-mono text-2xl lowercase text-gray',
      isTransparent ? 'border' : 'grain bg-gray40',
      className
    )}
  >
    {children}
  </h2>
);
