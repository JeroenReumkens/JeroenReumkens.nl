import classNames from 'classnames';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => (
  <h2
    className={classNames(
      'grain flex h-[190px] items-center justify-center rounded-massive bg-gray40 font-mono text-2xl lowercase text-gray',
      className
    )}
  >
    {children}
  </h2>
);
